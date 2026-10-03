(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ou(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Nt={},Ur=[],Mi=()=>{},Rd=()=>!1,tl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),nl=n=>n.startsWith("onUpdate:"),un=Object.assign,Fu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},_g=Object.prototype.hasOwnProperty,wt=(n,e)=>_g.call(n,e),st=Array.isArray,gr=n=>wa(n)==="[object Map]",Zi=n=>wa(n)==="[object Set]",Eh=n=>wa(n)==="[object Date]",ht=n=>typeof n=="function",$t=n=>typeof n=="string",bi=n=>typeof n=="symbol",It=n=>n!==null&&typeof n=="object",Cd=n=>(It(n)||ht(n))&&ht(n.then)&&ht(n.catch),Pd=Object.prototype.toString,wa=n=>Pd.call(n),vg=n=>wa(n).slice(8,-1),Dd=n=>wa(n)==="[object Object]",Bu=n=>$t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Js=Ou(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),il=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},xg=/-\w/g,ni=il(n=>n.replace(xg,e=>e.slice(1).toUpperCase())),Sg=/\B([A-Z])/g,Xr=il(n=>n.replace(Sg,"-$1").toLowerCase()),Ld=il(n=>n.charAt(0).toUpperCase()+n.slice(1)),Pl=il(n=>n?`on${Ld(n)}`:""),gi=(n,e)=>!Object.is(n,e),To=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Id=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},rl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Th;const sl=()=>Th||(Th=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function al(n){if(st(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=$t(i)?Eg(i):al(i);if(r)for(const s in r)e[s]=r[s]}return e}else if($t(n)||It(n))return n}const Mg=/;(?![^(]*\))/g,yg=/:([^]+)/,bg=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Eg(n){const e={};return n.replace(bg,t=>t.startsWith("/*")?"":t).split(Mg).forEach(t=>{if(t){const i=t.split(yg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function an(n){let e="";if($t(n))e=n;else if(st(n))for(let t=0;t<n.length;t++){const i=an(n[t]);i&&(e+=i+" ")}else if(It(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Tg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ag=Ou(Tg);function Ud(n){return!!n||n===""}function wg(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=Ji(n[r],e[r],t);return i}function Ah(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of n){let a=-1;for(let o=0;o<i.length;o++)if(!r[o]&&Ji(s,i[o],t)){a=o;break}if(a<0)return!1;r[a]=1}return!0}function Rg(n,e,t){let i=gr(n),r=gr(e);if(i||r||(i=Zi(n),r=Zi(e),i||r))return i&&r?Ah(n,e,t):!1;const s=Object.keys(n).length,a=Object.keys(e).length;if(s!==a)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Ji(n[o],e[o],t))return!1}return String(n)===String(e)}function wh(n,e,t,i){t||(t=[new Map,new Map]);const[r,s]=t;if(r.has(n)||s.has(e))return r.get(n)===e&&s.get(e)===n;r.set(n,e),s.set(e,n);const a=i(n,e,t);return r.delete(n),s.delete(e),a}function Ji(n,e,t){if(n===e)return!0;let i=Eh(n),r=Eh(e);return i||r?i&&r?n.getTime()===e.getTime():!1:(i=bi(n),r=bi(e),i||r?n===e:(i=st(n),r=st(e),i||r?i&&r?wh(n,e,t,wg):!1:(i=It(n),r=It(e),i||r?!i||!r?!1:wh(n,e,t,Rg):String(n)===String(e))))}function zu(n,e){return n.findIndex(t=>Ji(t,e))}const Nd=n=>!!(n&&n.__v_isRef===!0),ze=n=>$t(n)?n:n==null?"":st(n)||It(n)&&(n.toString===Pd||!ht(n.toString))?Nd(n)?ze(n.value):JSON.stringify(n,Od,2):String(n),Od=(n,e)=>Nd(e)?Od(n,e.value):gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Dl(i,s)+" =>"]=r,t),{})}:Zi(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Dl(t))}:bi(e)?Dl(e):It(e)&&!st(e)&&!Dd(e)?String(e):e,Dl=(n,e="")=>{var t;return bi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class Cg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&on&&(on.active?(this.parent=on,this.index=(on.scopes||(on.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=on;try{return on=this,e()}finally{on=t}}}on(){++this._on===1&&(this.prevScope=on,on=this)}off(){if(this._on>0&&--this._on===0){if(on===this)on=this.prevScope;else{let e=on;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Pg(){return on}let Ot;const Ll=new WeakSet;class Fd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&(on.active?on.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ll.has(this)&&(Ll.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rh(this),kd(this);const e=Ot,t=ii;Ot=this,ii=!0;try{return this.fn()}finally{Vd(this),Ot=e,ii=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Hu(e);this.deps=this.depsTail=void 0,Rh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ll.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cc(this)&&this.run()}get dirty(){return Cc(this)}}let Bd=0,js,Qs;function zd(n,e=!1){if(n.flags|=8,e){n.next=Qs,Qs=n;return}n.next=js,js=n}function ku(){Bd++}function Vu(){if(--Bd>0)return;if(Qs){let e=Qs;for(Qs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;js;){let e=js;for(js=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function kd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Hu(i),Dg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Cc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Hd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Hd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ca)||(n.globalVersion=ca,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Cc(n))))return;n.flags|=2;const e=n.dep,t=Ot,i=ii;Ot=n,ii=!0;try{kd(n);const r=n.fn(n._value);(e.version===0||gi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ot=t,ii=i,Vd(n),n.flags&=-3}}function Hu(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Hu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Dg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ii=!0;const Gd=[];function ji(){Gd.push(ii),ii=!1}function Qi(){const n=Gd.pop();ii=n===void 0?!0:n}function Rh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ot;Ot=void 0;try{e()}finally{Ot=t}}}let ca=0;class Lg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ot||!ii||Ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ot)t=this.activeLink=new Lg(Ot,this),Ot.deps?(t.prevDep=Ot.depsTail,Ot.depsTail.nextDep=t,Ot.depsTail=t):Ot.deps=Ot.depsTail=t,Wd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ot.depsTail,t.nextDep=void 0,Ot.depsTail.nextDep=t,Ot.depsTail=t,Ot.deps===t&&(Ot.deps=i)}return t}trigger(e){this.version++,ca++,this.notify(e)}notify(e){ku();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Vu()}}}function Wd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Wd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Pc=new WeakMap,Br=Symbol(""),Dc=Symbol(""),ua=Symbol("");function pn(n,e,t){if(ii&&Ot){let i=Pc.get(n);i||Pc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Gu),r.map=i,r.key=t),r.track()}}function Vi(n,e,t,i,r,s){const a=Pc.get(n);if(!a){ca++;return}const o=l=>{l&&l.trigger()};if(ku(),e==="clear")a.forEach(o);else{const l=st(n),c=l&&Bu(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===ua||!bi(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(ua)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Br)),gr(n)&&o(a.get(Dc)));break;case"delete":l||(o(a.get(Br)),gr(n)&&o(a.get(Dc)));break;case"set":gr(n)&&o(a.get(Br));break}}Vu()}function $r(n){const e=At(n);return e===n||(pn(e,"iterate",ua),Wn(n))?e:Ei(n)?_r(n)?e.map(t=>vr(Xn(t))):e.map(vr):e.map(Xn)}function ol(n){return pn(n=At(n),"iterate",ua),n}function di(n,e){return Ei(n)?vr(_r(n)?Xn(e):e):Xn(e)}const Ig={__proto__:null,[Symbol.iterator](){return Il(this,Symbol.iterator,n=>di(this,n))},concat(...n){return $r(this).concat(...n.map(e=>st(e)?$r(e):e))},entries(){return Il(this,"entries",n=>(n[1]=di(this,n[1]),n))},every(n,e){return Li(this,"every",n,e,void 0,arguments)},filter(n,e){return Li(this,"filter",n,e,t=>t.map(i=>di(this,i)),arguments)},find(n,e){return Li(this,"find",n,e,t=>di(this,t),arguments)},findIndex(n,e){return Li(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Li(this,"findLast",n,e,t=>di(this,t),arguments)},findLastIndex(n,e){return Li(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Li(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ul(this,"includes",n)},indexOf(...n){return Ul(this,"indexOf",n)},join(n){return $r(this).join(n)},lastIndexOf(...n){return Ul(this,"lastIndexOf",n)},map(n,e){return Li(this,"map",n,e,void 0,arguments)},pop(){return Us(this,"pop")},push(...n){return Us(this,"push",n)},reduce(n,...e){return Ch(this,"reduce",n,e)},reduceRight(n,...e){return Ch(this,"reduceRight",n,e)},shift(){return Us(this,"shift")},some(n,e){return Li(this,"some",n,e,void 0,arguments)},splice(...n){return Us(this,"splice",n)},toReversed(){return $r(this).toReversed()},toSorted(n){return $r(this).toSorted(n)},toSpliced(...n){return $r(this).toSpliced(...n)},unshift(...n){return Us(this,"unshift",n)},values(){return Il(this,"values",n=>di(this,n))}};function Il(n,e,t){const i=ol(n),r=i[e]();return i!==n&&!Wn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Ug=Array.prototype;function Li(n,e,t,i,r,s){const a=ol(n),o=a!==n&&!Wn(n),l=a[e];if(l!==Ug[e]){const f=l.apply(n,s);return o?Xn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,di(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Ch(n,e,t,i){const r=ol(n),s=r!==n&&!Wn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=di(n,c)),t.call(this,c,di(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?di(n,l):l}function Ul(n,e,t){const i=At(n);pn(i,"iterate",ua);const r=i[e](...t);return(r===-1||r===!1)&&$u(t[0])?(t[0]=At(t[0]),i[e](...t)):r}function Us(n,e,t=[]){ji(),ku();const i=At(n)[e].apply(n,t);return Vu(),Qi(),i}const Ng=Ou("__proto__,__v_isRef,__isVue"),Xd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(bi));function Og(n){bi(n)||(n=String(n));const e=At(this);return pn(e,"has",n),e.hasOwnProperty(n)}class $d{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?$g:Zd:s?Kd:Yd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=st(e);if(!r){let l;if(a&&(l=Ig[t]))return l;if(t==="hasOwnProperty")return Og}const o=Reflect.get(e,t,gn(e)?e:i);if((bi(t)?Xd.has(t):Ng(t))||(r||pn(e,"get",t),s))return o;if(gn(o)){const l=a&&Bu(t)?o:o.value;return r&&It(l)?Ic(l):l}return It(o)?r?Ic(o):hs(o):o}}class qd extends $d{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=st(e)&&Bu(t);if(!this._isShallow){const c=Ei(s);if(!Wn(i)&&!Ei(i)&&(s=At(s),i=At(i)),!a&&gn(s)&&!gn(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:wt(e,t),l=Reflect.set(e,t,i,gn(e)?e:r);return e===At(r)&&l&&(o?gi(i,s)&&Vi(e,"set",t,i):Vi(e,"add",t,i)),l}deleteProperty(e,t){const i=wt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Vi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!bi(t)||!Xd.has(t))&&pn(e,"has",t),i}ownKeys(e){return pn(e,"iterate",st(e)?"length":Br),Reflect.ownKeys(e)}}class Fg extends $d{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Bg=new qd,zg=new Fg,kg=new qd(!0);const Lc=n=>n,Va=n=>Reflect.getPrototypeOf(n);function Vg(n,e,t){return function(...i){const r=this.__v_raw,s=At(r),a=gr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Lc:e?vr:Xn;return!e&&pn(s,"iterate",l?Dc:Br),un(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Ha(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Hg(n,e){const t={get(r){const s=this.__v_raw,a=At(s),o=At(r);n||(gi(r,o)&&pn(a,"get",r),pn(a,"get",o));const{has:l}=Va(a),c=e?Lc:n?vr:Xn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&pn(At(r),"iterate",Br),r.size},has(r){const s=this.__v_raw,a=At(s),o=At(r);return n||(gi(r,o)&&pn(a,"has",r),pn(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=At(o),c=e?Lc:n?vr:Xn;return!n&&pn(l,"iterate",Br),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return un(t,n?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(r){const s=At(this),a=Va(s),o=At(r),l=!e&&!Wn(r)&&!Ei(r)?o:r;return a.has.call(s,l)||gi(r,l)&&a.has.call(s,r)||gi(o,l)&&a.has.call(s,o)||(s.add(l),Vi(s,"add",l,l)),this},set(r,s){!e&&!Wn(s)&&!Ei(s)&&(s=At(s));const a=At(this),{has:o,get:l}=Va(a);let c=o.call(a,r);c||(r=At(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?gi(s,u)&&Vi(a,"set",r,s):Vi(a,"add",r,s),this},delete(r){const s=At(this),{has:a,get:o}=Va(s);let l=a.call(s,r);l||(r=At(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Vi(s,"delete",r,void 0),c},clear(){const r=At(this),s=r.size!==0,a=r.clear();return s&&Vi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Vg(r,n,e)}),t}function Wu(n,e){const t=Hg(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(wt(t,r)&&r in i?t:i,r,s)}const Gg={get:Wu(!1,!1)},Wg={get:Wu(!1,!0)},Xg={get:Wu(!0,!1)};const Yd=new WeakMap,Kd=new WeakMap,Zd=new WeakMap,$g=new WeakMap;function qg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hs(n){return Ei(n)?n:Xu(n,!1,Bg,Gg,Yd)}function Yg(n){return Xu(n,!1,kg,Wg,Kd)}function Ic(n){return Xu(n,!0,zg,Xg,Zd)}function Xu(n,e,t,i,r){if(!It(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=qg(vg(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function _r(n){return Ei(n)?_r(n.__v_raw):!!(n&&n.__v_isReactive)}function Ei(n){return!!(n&&n.__v_isReadonly)}function Wn(n){return!!(n&&n.__v_isShallow)}function $u(n){return n?!!n.__v_raw:!1}function At(n){const e=n&&n.__v_raw;return e?At(e):n}function Kg(n){return!wt(n,"__v_skip")&&Object.isExtensible(n)&&Id(n,"__v_skip",!0),n}const Xn=n=>It(n)?hs(n):n,vr=n=>It(n)?Ic(n):n;function gn(n){return n?n.__v_isRef===!0:!1}function Xt(n){return Jd(n,!1)}function Ns(n){return Jd(n,!0)}function Jd(n,e){return gn(n)?n:new Zg(n,e)}class Zg{constructor(e,t){this.dep=new Gu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:At(e),this._value=t?e:Xn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Wn(e)||Ei(e);e=i?e:At(e),gi(e,t)&&(this._rawValue=e,this._value=i?e:Xn(e),this.dep.trigger())}}function zn(n){return gn(n)?n.value:n}const Jg={get:(n,e,t)=>e==="__v_raw"?n:zn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return gn(r)&&!gn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function jd(n){return _r(n)?n:new Proxy(n,Jg)}class jg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Gu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ca-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ot!==this)return zd(this,!0),!0}get value(){const e=this.dep.track();return Hd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qg(n,e,t=!1){let i,r;return ht(n)?i=n:(i=n.get,r=n.set),new jg(i,r,t)}const Ga={},Oo=new WeakMap;let Ir;function e_(n,e=!1,t=Ir){if(t){let i=Oo.get(t);i||Oo.set(t,i=[]),i.push(n)}}function t_(n,e,t=Nt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=M=>r?M:Wn(M)||r===!1||r===0?Hi(M,1):Hi(M);let u,f,h,d,_=!1,y=!1;if(gn(n)?(f=()=>n.value,_=Wn(n)):_r(n)?(f=()=>c(n),_=!0):st(n)?(y=!0,_=n.some(M=>_r(M)||Wn(M)),f=()=>n.map(M=>{if(gn(M))return M.value;if(_r(M))return c(M);if(ht(M))return l?l(M,2):M()})):ht(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ji();try{h()}finally{Qi()}}const M=Ir;Ir=u;try{return l?l(n,3,[d]):n(d)}finally{Ir=M}}:f=Mi,e&&r){const M=f,P=r===!0?1/0:r;f=()=>Hi(M(),P)}const m=Pg(),p=()=>{u.stop(),m&&m.active&&Fu(m.effects,u)};if(s&&e){const M=e;e=(...P)=>{const D=M(...P);return p(),D}}let w=y?new Array(n.length).fill(Ga):Ga;const I=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const P=u.run();if(M||r||_||(y?P.some((D,B)=>gi(D,w[B])):gi(P,w))){h&&h();const D=Ir;Ir=u;try{const B=[P,w===Ga?void 0:y&&w[0]===Ga?[]:w,d];w=P,l?l(e,3,B):e(...B)}finally{Ir=D}}}else u.run()};return o&&o(I),u=new Fd(f),u.scheduler=a?()=>a(I,!1):I,d=M=>e_(M,!1,u),h=u.onStop=()=>{const M=Oo.get(u);if(M){if(l)l(M,4);else for(const P of M)P();Oo.delete(u)}},e?i?I(!0):w=u.run():a?a(I.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Hi(n,e=1/0,t){if(e<=0||!It(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,gn(n))Hi(n.value,e,t);else if(st(n))for(let i=0;i<n.length;i++)Hi(n[i],e,t);else if(Zi(n)||gr(n))n.forEach(i=>{Hi(i,e,t)});else if(Dd(n)){for(const i in n)Hi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Hi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ra(n,e,t,i){try{return i?n(...i):n()}catch(r){ll(r,e,t)}}function si(n,e,t,i){if(ht(n)){const r=Ra(n,e,t,i);return r&&Cd(r)&&r.catch(s=>{ll(s,e,t)}),r}if(st(n)){const r=[];for(let s=0;s<n.length;s++)r.push(si(n[s],e,t,i));return r}}function ll(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Nt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){ji(),Ra(s,null,10,[n,l,c]),Qi();return}}n_(n,t,r,i,a)}function n_(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const yn=[];let fi=-1;const fs=[];let hr=null,as=0;const Qd=Promise.resolve();let Fo=null;function ep(n){const e=Fo||Qd;return n?e.then(this?n.bind(this):n):e}function i_(n){let e=fi+1,t=yn.length;for(;e<t;){const i=e+t>>>1,r=yn[i],s=ha(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function qu(n){if(!(n.flags&1)){const e=ha(n),t=yn[yn.length-1];!t||!(n.flags&2)&&e>=ha(t)?yn.push(n):yn.splice(i_(e),0,n),n.flags|=1,tp()}}function tp(){Fo||(Fo=Qd.then(ip))}function r_(n){if(!st(n))hr&&n.id===-1?hr.splice(as+1,0,n):n.flags&1||(fs.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)fs.push(n[e]);tp()}function Ph(n,e,t=fi+1){for(;t<yn.length;t++){const i=yn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;yn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function np(n){if(fs.length){const e=[...new Set(fs)].sort((t,i)=>ha(t)-ha(i));if(fs.length=0,hr){for(let t=0;t<e.length;t++)hr.push(e[t]);return}for(hr=e,as=0;as<hr.length;as++){const t=hr[as];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}hr=null,as=0}}const ha=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ip(n){try{for(fi=0;fi<yn.length;fi++){const e=yn[fi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ra(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fi<yn.length;fi++){const e=yn[fi];e&&(e.flags&=-2)}fi=-1,yn.length=0,np(),Fo=null,(yn.length||fs.length)&&ip()}}let Gn=null,rp=null;function Bo(n){const e=Gn;return Gn=n,rp=n&&n.type.__scopeId||null,e}function s_(n,e=Gn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Vh(-1);const s=Bo(e),a=zr.length;let o;try{o=n(...r)}finally{for(let l=zr.length;l>a;l--)Cp();Bo(s),i._d&&Vh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Kt(n,e){if(Gn===null)return n;const t=dl(Gn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=Nt]=e[r];s&&(ht(s)&&(s={mounted:s,updated:s}),s.deep&&Hi(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Tr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ji(),si(l,t,8,[n.el,o,n,e]),Qi())}}function a_(n,e){if(bn){let t=bn.provides;const i=bn.parent&&bn.parent.provides;i===t&&(t=bn.provides=Object.create(i)),t[n]=e}}function Ao(n,e,t=!1){const i=iv();if(i||ds){let r=ds?ds._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ht(e)?e.call(i&&i.proxy):e}}const o_=Symbol.for("v-scx"),l_=()=>Ao(o_);function Nr(n,e,t){return sp(n,e,t)}function sp(n,e,t=Nt){const{immediate:i,deep:r,flush:s,once:a}=t,o=un({},t),l=e&&i||!e&&s!=="post";let c;if(pa){if(s==="sync"){const d=l_();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Mi,d.resume=Mi,d.pause=Mi,d}}const u=bn;o.call=(d,_,y)=>si(d,u,_,y);let f=!1;s==="post"?o.scheduler=d=>{Cn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,_)=>{_?d():qu(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=t_(n,e,o);return pa&&(c?c.push(h):l&&h()),h}function c_(n,e,t){const i=this.proxy,r=$t(n)?n.includes(".")?ap(i,n):()=>i[n]:n.bind(i,i);let s;ht(e)?s=e:(s=e.handler,t=e);const a=Ca(this),o=sp(r,s.bind(i),t);return a(),o}function ap(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const u_=Symbol("_vte"),cl=n=>n.__isTeleport,Nl=Symbol("_leaveCb");function h_(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==er){e=t;break}}return e}function op(n){if(!Ku(n))return cl(n.type)&&n.children?h_(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ht(t.default))return t.default()}}function Yu(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Yu(cl(t.type)&&op(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function f_(n,e){return ht(n)?un({name:n.name},e,{setup:n}):n}function lp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Dh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const zo=new WeakMap;function ea(n,e,t,i,r=!1){if(st(n)){n.forEach((y,m)=>ea(y,e&&(st(e)?e[m]:e),t,i,r));return}if(ta(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ea(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?dl(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Nt?o.refs={}:o.refs,f=o.setupState,h=At(f),d=f===Nt?Rd:y=>Dh(u,y)?!1:wt(h,y),_=(y,m)=>!(m&&Dh(u,m));if(c!=null&&c!==l){if(Lh(e),$t(c))u[c]=null,d(c)&&(f[c]=null);else if(gn(c)){const y=e;_(c,y.k)&&(c.value=null),y.k&&(u[y.k]=null)}}if(ht(l))Ra(l,o,12,[a,u]);else{const y=$t(l),m=gn(l);if(y||m){const p=()=>{if(n.f){const w=y?d(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(r)st(w)&&Fu(w,s);else if(st(w))w.includes(s)||w.push(s);else if(y)u[l]=[s],d(l)&&(f[l]=u[l]);else{const I=[s];_(l,n.k)&&(l.value=I),n.k&&(u[n.k]=I)}}else y?(u[l]=a,d(l)&&(f[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const w=()=>{p(),zo.delete(n)};w.id=-1,zo.set(n,w),Cn(w,t)}else Lh(n),p()}}}function Lh(n){const e=zo.get(n);e&&(e.flags|=8,zo.delete(n))}sl().requestIdleCallback;sl().cancelIdleCallback;const ta=n=>!!n.type.__asyncLoader,Ku=n=>n.type.__isKeepAlive;function d_(n,e){cp(n,"a",e)}function p_(n,e){cp(n,"da",e)}function cp(n,e,t=bn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ul(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ku(r.parent.vnode)&&m_(i,e,t,r),r=r.parent}}function m_(n,e,t,i){const r=ul(e,n,i,!0);hp(()=>{Fu(i[e],r)},t)}function ul(n,e,t=bn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{ji();const o=Ca(t),l=si(e,t,n,a);return o(),Qi(),l});return i?r.unshift(s):r.push(s),s}}const nr=n=>(e,t=bn)=>{(!pa||n==="sp")&&ul(n,(...i)=>e(...i),t)},g_=nr("bm"),Uc=nr("m"),__=nr("bu"),v_=nr("u"),up=nr("bum"),hp=nr("um"),x_=nr("sp"),S_=nr("rtg"),M_=nr("rtc");function y_(n,e=bn){ul("ec",n,e)}const b_=Symbol.for("v-ndc");function Kn(n,e,t,i){let r;const s=t,a=st(n);if(a||$t(n)){const o=a&&_r(n);let l=!1,c=!1;o&&(l=!Wn(n),c=Ei(n),n=ol(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?vr(Xn(n[u])):Xn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(It(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Nc=n=>n?Ip(n)?dl(n):Nc(n.parent):null,na=un(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Nc(n.parent),$root:n=>Nc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>dp(n),$forceUpdate:n=>n.f||(n.f=()=>{qu(n.update)}),$nextTick:n=>n.n||(n.n=ep.bind(n.proxy)),$watch:n=>c_.bind(n)}),Ol=(n,e)=>n!==Nt&&!n.__isScriptSetup&&wt(n,e),E_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ol(i,e))return a[e]=1,i[e];if(r!==Nt&&wt(r,e))return a[e]=2,r[e];if(wt(s,e))return a[e]=3,s[e];if(t!==Nt&&wt(t,e))return a[e]=4,t[e];Oc&&(a[e]=0)}}const c=na[e];let u,f;if(c)return e==="$attrs"&&pn(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Nt&&wt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,wt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ol(r,e)?(r[e]=t,!0):i!==Nt&&wt(i,e)?(i[e]=t,!0):wt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==Nt&&o[0]!=="$"&&wt(n,o)||Ol(e,o)||wt(s,o)||wt(i,o)||wt(na,o)||wt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:wt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ih(n){return st(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Oc=!0;function T_(n){const e=dp(n),t=n.proxy,i=n.ctx;Oc=!1,e.beforeCreate&&Uh(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:y,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:I,unmounted:M,render:P,renderTracked:D,renderTriggered:B,errorCaptured:S,serverPrefetch:N,expose:k,inheritAttrs:q,components:ae,directives:ie,filters:V}=e;if(c&&A_(c,i,null),a)for(const Q in a){const pe=a[Q];ht(pe)&&(i[Q]=pe.bind(t))}if(r){const Q=r.call(t,t);It(Q)&&(n.data=hs(Q))}if(Oc=!0,s)for(const Q in s){const pe=s[Q],ue=ht(pe)?pe.bind(t,t):ht(pe.get)?pe.get.bind(t,t):Mi,ve=!ht(pe)&&ht(pe.set)?pe.set.bind(t):Mi,he=Qn({get:ue,set:ve});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>he.value,set:De=>he.value=De})}if(o)for(const Q in o)fp(o[Q],i,t,Q);if(l){const Q=ht(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(pe=>{a_(pe,Q[pe])})}u&&Uh(u,n,"c");function re(Q,pe){st(pe)?pe.forEach(ue=>Q(ue.bind(t))):pe&&Q(pe.bind(t))}if(re(g_,f),re(Uc,h),re(__,d),re(v_,_),re(d_,y),re(p_,m),re(y_,S),re(M_,D),re(S_,B),re(up,w),re(hp,M),re(x_,N),st(k))if(k.length){const Q=n.exposed||(n.exposed={});k.forEach(pe=>{Object.defineProperty(Q,pe,{get:()=>t[pe],set:ue=>t[pe]=ue,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===Mi&&(n.render=P),q!=null&&(n.inheritAttrs=q),ae&&(n.components=ae),ie&&(n.directives=ie),N&&lp(n)}function A_(n,e,t=Mi){st(n)&&(n=Fc(n));for(const i in n){const r=n[i];let s;It(r)?"default"in r?s=Ao(r.from||i,r.default,!0):s=Ao(r.from||i):s=Ao(r),gn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Uh(n,e,t){si(st(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function fp(n,e,t,i){let r=i.includes(".")?ap(t,i):()=>t[i];if($t(n)){const s=e[n];ht(s)&&Nr(r,s)}else if(ht(n))Nr(r,n.bind(t));else if(It(n))if(st(n))n.forEach(s=>fp(s,e,t,i));else{const s=ht(n.handler)?n.handler.bind(t):e[n.handler];ht(s)&&Nr(r,s,n)}}function dp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ko(l,c,a,!0)),ko(l,e,a)),It(e)&&s.set(e,l),l}function ko(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ko(n,s,t,!0),r&&r.forEach(a=>ko(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=w_[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const w_={data:Nh,props:Oh,emits:Oh,methods:Xs,computed:Xs,beforeCreate:Sn,created:Sn,beforeMount:Sn,mounted:Sn,beforeUpdate:Sn,updated:Sn,beforeDestroy:Sn,beforeUnmount:Sn,destroyed:Sn,unmounted:Sn,activated:Sn,deactivated:Sn,errorCaptured:Sn,serverPrefetch:Sn,components:Xs,directives:Xs,watch:C_,provide:Nh,inject:R_};function Nh(n,e){return e?n?function(){return un(ht(n)?n.call(this,this):n,ht(e)?e.call(this,this):e)}:e:n}function R_(n,e){return Xs(Fc(n),Fc(e))}function Fc(n){if(st(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Sn(n,e){return n?[...new Set([].concat(n,e))]:e}function Xs(n,e){return n?un(Object.create(null),n,e):e}function Oh(n,e){return n?st(n)&&st(e)?[...new Set([...n,...e])]:un(Object.create(null),Ih(n),Ih(e??{})):e}function C_(n,e){if(!n)return e;if(!e)return n;const t=un(Object.create(null),n);for(const i in e)t[i]=Sn(n[i],e[i]);return t}function pp(){return{app:null,config:{isNativeTag:Rd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let P_=0;function D_(n,e){return function(i,r=null){ht(i)||(i=un({},i)),r!=null&&!It(r)&&(r=null);const s=pp(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:P_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:cv,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ht(u.install)?(a.add(u),u.install(c,...f)):ht(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Xi(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,dl(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(si(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ds;ds=c;try{return u()}finally{ds=f}}};return c}}let ds=null;const L_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ni(e)}Modifiers`]||n[`${Xr(e)}Modifiers`];function I_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Nt;let r=t;const s=e.startsWith("update:"),a=s&&L_(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>$t(u)?u.trim():u)),a.number&&(r=r.map(rl)));let o,l=i[o=Pl(e)]||i[o=Pl(ni(e))];!l&&s&&(l=i[o=Pl(Xr(e))]),l&&si(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,si(c,n,6,r)}}const U_=new WeakMap;function mp(n,e,t=!1){const i=t?U_:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ht(n)){const l=c=>{const u=mp(c,e,!0);u&&(o=!0,un(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(It(n)&&i.set(n,null),null):(st(s)?s.forEach(l=>a[l]=null):un(a,s),It(n)&&i.set(n,a),a)}function hl(n,e){return!n||!tl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),wt(n,e[0].toLowerCase()+e.slice(1))||wt(n,Xr(e))||wt(n,e))}function Fh(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:y}=n,m=Bo(n);let p,w;try{if(t.shapeFlag&4){const M=r||i,P=M;p=pi(c.call(P,M,u,f,d,h,_)),w=o}else{const M=e;p=pi(M.length>1?M(f,{attrs:o,slots:a,emit:l}):M(f,null)),w=e.props?o:N_(o)}}catch(M){zr.length=0,ll(M,n,1),p=Xi(er)}let I=p;if(w&&y!==!1){const M=Object.keys(w),{shapeFlag:P}=I;M.length&&P&7&&(s&&M.some(nl)&&(w=O_(w,s)),I=gs(I,w,!1,!0))}if(t.dirs&&(I=gs(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(t.dirs):t.dirs),t.transition){const M=cl(I.type)&&op(I)||I;Yu(M,t.transition)}return p=I,Bo(m),p}const N_=n=>{let e;for(const t in n)(t==="class"||t==="style"||tl(t))&&((e||(e={}))[t]=n[t]);return e},O_=(n,e)=>{const t={};for(const i in n)(!nl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function F_(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Bh(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(gp(a,i,h)&&!hl(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Bh(i,a,c):!0:!!a;return!1}function Bh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(gp(e,n,s)&&!hl(t,s))return!0}return!1}function gp(n,e,t){const i=n[t],r=e[t];return t==="style"&&It(i)&&It(r)?!Ji(i,r):i!==r}function B_({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const _p={},vp=()=>Object.create(_p),xp=n=>Object.getPrototypeOf(n)===_p;function z_(n,e,t,i=!1){const r={},s=vp();n.propsDefaults=Object.create(null),Sp(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Yg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function k_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=At(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(hl(n.emitsOptions,h))continue;const d=e[h];if(l)if(wt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=ni(h);r[_]=Bc(l,o,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Sp(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!wt(e,f)&&((u=Xr(f))===f||!wt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Bc(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!wt(e,f))&&(delete s[f],c=!0)}c&&Vi(n.attrs,"set","")}function Sp(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Js(l))continue;const c=e[l];let u;r&&wt(r,u=ni(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:hl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=At(t),c=o||Nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Bc(r,l,f,c[f],n,!wt(c,f))}}return a}function Bc(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=wt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ht(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ca(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Xr(t))&&(i=!0))}return i}const V_=new WeakMap;function Mp(n,e,t=!1){const i=t?V_:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ht(n)){const u=f=>{l=!0;const[h,d]=Mp(f,e,!0);un(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return It(n)&&i.set(n,Ur),Ur;if(st(s))for(let u=0;u<s.length;u++){const f=ni(s[u]);zh(f)&&(a[f]=Nt)}else if(s)for(const u in s){const f=ni(u);if(zh(f)){const h=s[u],d=a[f]=st(h)||ht(h)?{type:h}:un({},h),_=d.type;let y=!1,m=!0;if(st(_))for(let p=0;p<_.length;++p){const w=_[p],I=ht(w)&&w.name;if(I==="Boolean"){y=!0;break}else I==="String"&&(m=!1)}else y=ht(_)&&_.name==="Boolean";d[0]=y,d[1]=m,(y||wt(d,"default"))&&o.push(f)}}const c=[a,o];return It(n)&&i.set(n,c),c}function zh(n){return n[0]!=="$"&&!Js(n)}const Zu=n=>n==="_"||n==="_ctx"||n==="$stable",Ju=n=>st(n)?n.map(pi):[pi(n)],H_=(n,e,t)=>{if(e._n)return e;const i=s_((...r)=>Ju(e(...r)),t);return i._c=!1,i},yp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Zu(r))continue;const s=n[r];if(ht(s))e[r]=H_(r,s,i);else if(s!=null){const a=Ju(s);e[r]=()=>a}}},bp=(n,e)=>{const t=Ju(e);n.slots.default=()=>t},Ep=(n,e,t)=>{for(const i in e)(t||!Zu(i))&&(n[i]=e[i])},G_=(n,e,t)=>{const i=n.slots=vp();if(n.vnode.shapeFlag&32){const r=e._;r?(Ep(i,e,t),t&&Id(i,"_",r,!0)):yp(e,i)}else e&&bp(n,e)},W_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Nt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Ep(r,e,t):(s=!e.$stable,yp(e,r)),a=e}else e&&(bp(n,e),a={default:1});if(s)for(const o in r)!Zu(o)&&a[o]==null&&delete r[o]},Cn=K_;function X_(n){return $_(n)}function $_(n,e){const t=sl();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Mi,insertStaticContent:_}=n,y=(L,z,O,W=null,X=null,G=null,te=void 0,ge=null,fe=!!z.dynamicChildren)=>{if(L===z)return;L&&!Os(L,z)&&(W=me(L),De(L,X,G,!0),L=null),z.patchFlag===-2&&(fe=!1,z.dynamicChildren=null),z.dynamicChildren&&L&&L.dynamicChildren&&L.dynamicChildren.hasOnce&&(z.dynamicChildren===Ur&&(z.dynamicChildren=[]),z.dynamicChildren.hasOnce=!0);const{type:ne,ref:Te,shapeFlag:R}=z;switch(ne){case fl:m(L,z,O,W);break;case er:p(L,z,O,W);break;case Bl:L==null&&w(z,O,W,te);break;case kt:ae(L,z,O,W,X,G,te,ge,fe);break;default:R&1?P(L,z,O,W,X,G,te,ge,fe):R&6?ie(L,z,O,W,X,G,te,ge,fe):(R&64||R&128)&&ne.process(L,z,O,W,X,G,te,ge,fe,Xe)}Te!=null&&X?ea(Te,L&&L.ref,G,z||L,!z):Te==null&&L&&L.ref!=null&&ea(L.ref,null,G,L,!0)},m=(L,z,O,W)=>{if(L==null)i(z.el=o(z.children),O,W);else{const X=z.el=L.el;z.children!==L.children&&c(X,z.children)}},p=(L,z,O,W)=>{L==null?i(z.el=l(z.children||""),O,W):z.el=L.el},w=(L,z,O,W)=>{[L.el,L.anchor]=_(L.children,z,O,W,L.el,L.anchor)},I=({el:L,anchor:z},O,W)=>{let X;for(;L&&L!==z;)X=h(L),i(L,O,W),L=X;i(z,O,W)},M=({el:L,anchor:z})=>{let O;for(;L&&L!==z;)O=h(L),r(L),L=O;r(z)},P=(L,z,O,W,X,G,te,ge,fe)=>{if(z.type==="svg"?te="svg":z.type==="math"&&(te="mathml"),L==null)D(z,O,W,X,G,te,ge,fe);else{const ne=L.el&&L.el._isVueCE?L.el:null;try{ne&&ne._beginPatch(),N(L,z,X,G,te,ge,fe)}finally{ne&&ne._endPatch()}}},D=(L,z,O,W,X,G,te,ge)=>{let fe,ne;const{props:Te,shapeFlag:R,transition:Re,dirs:Le}=L;if(fe=L.el=a(L.type,G,Te&&Te.is,Te),R&8?u(fe,L.children):R&16&&S(L.children,fe,null,W,X,Fl(L,G),te,ge),Le&&Tr(L,null,W,"created"),B(fe,L,L.scopeId,te,W),Te){for(const g in Te)g!=="value"&&!Js(g)&&s(fe,g,null,Te[g],G,W);"value"in Te&&s(fe,"value",null,Te.value,G),(ne=Te.onVnodeBeforeMount)&&li(ne,W,L)}Le&&Tr(L,null,W,"beforeMount");const T=q_(X,Re);T&&Re.beforeEnter(fe),i(fe,z,O),((ne=Te&&Te.onVnodeMounted)||T||Le)&&Cn(()=>{try{ne&&li(ne,W,L),T&&Re.enter(fe),Le&&Tr(L,null,W,"mounted")}finally{}},X)},B=(L,z,O,W,X)=>{if(O&&d(L,O),W)for(let G=0;G<W.length;G++)d(L,W[G]);if(X){let G=X.subTree;if(z===G||Rp(G.type)&&(G.ssContent===z||G.ssFallback===z)){const te=X.vnode;B(L,te,te.scopeId,te.slotScopeIds,X.parent)}}},S=(L,z,O,W,X,G,te,ge,fe=0)=>{for(let ne=fe;ne<L.length;ne++){const Te=L[ne]=ge?zi(L[ne]):pi(L[ne]);y(null,Te,z,O,W,X,G,te,ge)}},N=(L,z,O,W,X,G,te)=>{const ge=z.el=L.el;let{patchFlag:fe,dynamicChildren:ne,dirs:Te}=z;fe|=L.patchFlag&16;const R=L.props||Nt,Re=z.props||Nt;let Le;if(O&&Ar(O,!1),(Le=Re.onVnodeBeforeUpdate)&&li(Le,O,z,L),Te&&Tr(z,L,O,"beforeUpdate"),O&&Ar(O,!0),ne&&(!L.dynamicChildren||L.dynamicChildren.length!==ne.length)&&(fe=0,te=!1,ne=null),(R.innerHTML&&Re.innerHTML==null||R.textContent&&Re.textContent==null)&&u(ge,""),ne?k(L.dynamicChildren,ne,ge,O,W,Fl(z,X),G):te||pe(L,z,ge,null,O,W,Fl(z,X),G,!1),fe>0){if(fe&16)q(ge,R,Re,O,X);else if(fe&2&&R.class!==Re.class&&s(ge,"class",null,Re.class,X),fe&4&&s(ge,"style",R.style,Re.style,X),fe&8){const T=z.dynamicProps;for(let g=0;g<T.length;g++){const F=T[g],J=R[F],se=Re[F];(se!==J||F==="value")&&s(ge,F,J,se,X,O)}}fe&1&&L.children!==z.children&&u(ge,z.children)}else!te&&ne==null&&q(ge,R,Re,O,X);((Le=Re.onVnodeUpdated)||Te)&&Cn(()=>{Le&&li(Le,O,z,L),Te&&Tr(z,L,O,"updated")},W)},k=(L,z,O,W,X,G,te)=>{for(let ge=0;ge<z.length;ge++){const fe=L[ge],ne=z[ge],Te=fe.el&&(fe.type===kt||!Os(fe,ne)||fe.shapeFlag&198)?f(fe.el):O;y(fe,ne,Te,null,W,X,G,te,!0)}},q=(L,z,O,W,X)=>{if(z!==O){if(z!==Nt)for(const G in z)!Js(G)&&!(G in O)&&s(L,G,z[G],null,X,W);for(const G in O){if(Js(G))continue;const te=O[G],ge=z[G];te!==ge&&G!=="value"&&s(L,G,ge,te,X,W)}"value"in O&&s(L,"value",z.value,O.value,X)}},ae=(L,z,O,W,X,G,te,ge,fe)=>{const ne=z.el=L?L.el:o(""),Te=z.anchor=L?L.anchor:o("");let{patchFlag:R,dynamicChildren:Re,slotScopeIds:Le}=z;Le&&(ge=ge?ge.concat(Le):Le),L==null?(i(ne,O,W),i(Te,O,W),S(z.children||[],O,Te,X,G,te,ge,fe)):R>0&&R&64&&Re&&L.dynamicChildren&&L.dynamicChildren.length===Re.length?(k(L.dynamicChildren,Re,O,X,G,te,ge),(z.key!=null||X&&z===X.subTree)&&Tp(L,z,!0)):pe(L,z,O,Te,X,G,te,ge,fe)},ie=(L,z,O,W,X,G,te,ge,fe)=>{z.slotScopeIds=ge,L==null?z.shapeFlag&512?X.ctx.activate(z,O,W,te,fe):V(z,O,W,X,G,te,fe):Z(L,z,fe)},V=(L,z,O,W,X,G,te)=>{const ge=L.component=nv(L,W,X);if(Ku(L)&&(ge.ctx.renderer=Xe),rv(ge,!1,te),ge.asyncDep){if(X&&X.registerDep(ge,re,te),!L.el){const fe=ge.subTree=Xi(er);p(null,fe,z,O),L.placeholder=fe.el}}else re(ge,L,z,O,X,G,te)},Z=(L,z,O)=>{const W=z.component=L.component;if(F_(L,z,O))if(W.asyncDep&&!W.asyncResolved){z.el=L.el,Q(W,z,O);return}else W.next=z,W.update();else z.el=L.el,W.vnode=z},re=(L,z,O,W,X,G,te)=>{const ge=()=>{if(L.isMounted){let{next:R,bu:Re,u:Le,parent:T,vnode:g}=L;{const Ce=Ap(L);if(Ce){R&&(R.el=g.el,Q(L,R,te)),Ce.asyncDep.then(()=>{Cn(()=>{L.isUnmounted||ne()},X)});return}}let F=R,J;Ar(L,!1),R?(R.el=g.el,Q(L,R,te)):R=g,Re&&To(Re),(J=R.props&&R.props.onVnodeBeforeUpdate)&&li(J,T,R,g),Ar(L,!0);const se=Fh(L),Ae=L.subTree;L.subTree=se,y(Ae,se,f(Ae.el),me(Ae),L,X,G),R.el=se.el,F===null&&B_(L,se.el),Le&&Cn(Le,X),(J=R.props&&R.props.onVnodeUpdated)&&Cn(()=>li(J,T,R,g),X)}else{let R;const{el:Re,props:Le}=z,{bm:T,m:g,parent:F,root:J,type:se}=L,Ae=ta(z);Ar(L,!1),T&&To(T),!Ae&&(R=Le&&Le.onVnodeBeforeMount)&&li(R,F,z),Ar(L,!0);{J.ce&&J.ce._hasShadowRoot()&&J.ce._injectChildStyle(se,L.parent?L.parent.type:void 0);const Ce=L.subTree=Fh(L);y(null,Ce,O,W,L,X,G),z.el=Ce.el}if(g&&Cn(g,X),!Ae&&(R=Le&&Le.onVnodeMounted)){const Ce=z;Cn(()=>li(R,F,Ce),X)}(z.shapeFlag&256||F&&ta(F.vnode)&&F.vnode.shapeFlag&256)&&L.a&&Cn(L.a,X),L.isMounted=!0,z=O=W=null}};L.scope.on();const fe=L.effect=new Fd(ge);L.scope.off();const ne=L.update=fe.run.bind(fe),Te=L.job=fe.runIfDirty.bind(fe);Te.i=L,Te.id=L.uid,fe.scheduler=()=>qu(Te),Ar(L,!0),ne()},Q=(L,z,O)=>{z.component=L;const W=L.vnode.props;L.vnode=z,L.next=null,k_(L,z.props,W,O),W_(L,z.children,O),ji(),Ph(L),Qi()},pe=(L,z,O,W,X,G,te,ge,fe=!1)=>{const ne=L&&L.children,Te=L?L.shapeFlag:0,R=z.children,{patchFlag:Re,shapeFlag:Le}=z;if(Re>0){if(Re&128){ve(ne,R,O,W,X,G,te,ge,fe);return}else if(Re&256){ue(ne,R,O,W,X,G,te,ge,fe);return}}Le&8?(Te&16&&et(ne,X,G),R!==ne&&u(O,R)):Te&16?Le&16?ve(ne,R,O,W,X,G,te,ge,fe):et(ne,X,G,!0):(Te&8&&u(O,""),Le&16&&S(R,O,W,X,G,te,ge,fe))},ue=(L,z,O,W,X,G,te,ge,fe)=>{L=L||Ur,z=z||Ur;const ne=L.length,Te=z.length,R=Math.min(ne,Te);let Re;for(Re=0;Re<R;Re++){const Le=z[Re]=fe?zi(z[Re]):pi(z[Re]);y(L[Re],Le,O,null,X,G,te,ge,fe)}ne>Te?et(L,X,G,!0,!1,R):S(z,O,W,X,G,te,ge,fe,R)},ve=(L,z,O,W,X,G,te,ge,fe)=>{let ne=0;const Te=z.length;let R=L.length-1,Re=Te-1;for(;ne<=R&&ne<=Re;){const Le=L[ne],T=z[ne]=fe?zi(z[ne]):pi(z[ne]);if(Os(Le,T))y(Le,T,O,null,X,G,te,ge,fe);else break;ne++}for(;ne<=R&&ne<=Re;){const Le=L[R],T=z[Re]=fe?zi(z[Re]):pi(z[Re]);if(Os(Le,T))y(Le,T,O,null,X,G,te,ge,fe);else break;R--,Re--}if(ne>R){if(ne<=Re){const Le=Re+1,T=Le<Te?z[Le].el:W;for(;ne<=Re;)y(null,z[ne]=fe?zi(z[ne]):pi(z[ne]),O,T,X,G,te,ge,fe),ne++}}else if(ne>Re)for(;ne<=R;)De(L[ne],X,G,!0),ne++;else{const Le=ne,T=ne,g=new Map;for(ne=T;ne<=Re;ne++){const ye=z[ne]=fe?zi(z[ne]):pi(z[ne]);ye.key!=null&&g.set(ye.key,ne)}let F,J=0;const se=Re-T+1;let Ae=!1,Ce=0;const ee=new Array(se);for(ne=0;ne<se;ne++)ee[ne]=0;for(ne=Le;ne<=R;ne++){const ye=L[ne];if(J>=se){De(ye,X,G,!0);continue}let Ve;if(ye.key!=null)Ve=g.get(ye.key);else for(F=T;F<=Re;F++)if(ee[F-T]===0&&Os(ye,z[F])){Ve=F;break}Ve===void 0?De(ye,X,G,!0):(ee[Ve-T]=ne+1,Ve>=Ce?Ce=Ve:Ae=!0,y(ye,z[Ve],O,null,X,G,te,ge,fe),J++)}const Me=Ae?Y_(ee):Ur;for(F=Me.length-1,ne=se-1;ne>=0;ne--){const ye=T+ne,Ve=z[ye],Oe=z[ye+1],Fe=ye+1<Te?Oe.el||wp(Oe):W;ee[ne]===0?y(null,Ve,O,Fe,X,G,te,ge,fe):Ae&&(F<0||ne!==Me[F]?he(Ve,O,Fe,2):F--)}}},he=(L,z,O,W,X=null)=>{const{el:G,type:te,transition:ge,children:fe,shapeFlag:ne}=L;if(ne&6){he(L.component.subTree,z,O,W);return}if(ne&128){L.suspense.move(z,O,W);return}if(ne&64){te.move(L,z,O,Xe);return}if(te===kt){i(G,z,O);for(let R=0;R<fe.length;R++)he(fe[R],z,O,W);i(L.anchor,z,O);return}if(te===Bl){I(L,z,O);return}if(W!==2&&ne&1&&ge)if(W===0)ge.persisted&&!G[Nl]?i(G,z,O):(ge.beforeEnter(G),i(G,z,O),Cn(()=>ge.enter(G),X));else{const{leave:R,delayLeave:Re,afterLeave:Le}=ge,T=()=>{L.ctx.isUnmounted?r(G):i(G,z,O)},g=()=>{const F=G._isLeaving||!!G[Nl];G._isLeaving&&G[Nl](!0),ge.persisted&&!F?T():R(G,()=>{T(),Le&&Le()})};Re?Re(G,T,g):g()}else i(G,z,O)},De=(L,z,O,W=!1,X=!1)=>{const{type:G,props:te,ref:ge,children:fe,dynamicChildren:ne,shapeFlag:Te,patchFlag:R,dirs:Re,cacheIndex:Le,memo:T}=L;if((R===-2||ne&&ne.hasOnce)&&(X=!1),ge!=null&&(ji(),ea(ge,null,O,L,!0),Qi()),Le!=null&&(!L.ctx||L.ctx===z)&&(z.renderCache[Le]=void 0),Te&256){z.ctx.deactivate(L);return}const g=Te&1&&Re,F=!ta(L);let J;if(F&&(J=te&&te.onVnodeBeforeUnmount)&&li(J,z,L),Te&6)it(L.component,O,W);else{if(Te&128){L.suspense.unmount(O,W);return}g&&Tr(L,null,z,"beforeUnmount"),Te&64?L.type.remove(L,z,O,Xe,W):ne&&!ne.hasOnce&&(G!==kt||R>0&&R&64)?et(ne,z,O,!1,!0):(G===kt&&R&384||!X&&Te&16)&&et(fe,z,O),W&&ke(L)}const se=T!=null&&Le==null;(F&&(J=te&&te.onVnodeUnmounted)||g||se)&&Cn(()=>{J&&li(J,z,L),g&&Tr(L,null,z,"unmounted"),se&&(L.el=null)},O)},ke=L=>{const{type:z,el:O,anchor:W,transition:X}=L;if(z===kt){rt(O,W);return}if(z===Bl){M(L),X&&!X.persisted&&X.afterLeave&&X.afterLeave();return}const G=()=>{r(O),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(L.shapeFlag&1&&X&&!X.persisted){const{leave:te,delayLeave:ge}=X,fe=()=>te(O,G);ge?ge(L.el,G,fe):fe()}else G()},rt=(L,z)=>{let O;for(;L!==z;)O=h(L),r(L),L=O;r(z)},it=(L,z,O)=>{const{bum:W,scope:X,job:G,subTree:te,um:ge,m:fe,a:ne}=L;kh(fe),kh(ne),W&&To(W),X.stop(),G?(G.flags|=8,De(te,L,z,O)):L.vnode.el&&te&&(te.transition=L.vnode.transition,De(te,L,z,O)),ge&&Cn(ge,z),Cn(()=>{L.isUnmounted=!0},z)},et=(L,z,O,W=!1,X=!1,G=0)=>{for(let te=G;te<L.length;te++)De(L[te],z,O,W,X)},me=L=>{if(L.shapeFlag&6)return me(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const z=h(L.anchor||L.el),O=z&&z[u_];return O?h(O):z};let ce=!1;const we=(L,z,O)=>{let W;L==null?z._vnode&&(De(z._vnode,null,null,!0),W=z._vnode.component):y(z._vnode||null,L,z,null,null,null,O),z._vnode=L,ce||(ce=!0,Ph(W),np(),ce=!1)},Xe={p:y,um:De,m:he,r:ke,mt:V,mc:S,pc:pe,pbc:k,n:me,o:n};return{render:we,hydrate:void 0,createApp:D_(we)}}function Fl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ar({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function q_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Tp(n,e,t=!1){const i=n.children,r=e.children;if(st(i)&&st(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=zi(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Tp(a,o)),o.type===fl&&(o.patchFlag===-1&&(o=r[s]=zi(o)),o.el=a.el),o.type===er&&!o.el&&(o.el=a.el)}}function Y_(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Ap(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ap(e)}function kh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function wp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?wp(e.subTree):null}const Rp=n=>n.__isSuspense;function K_(n,e){e&&e.pendingBranch?st(n)?e.effects.push(...n):e.effects.push(n):r_(n)}const kt=Symbol.for("v-fgt"),fl=Symbol.for("v-txt"),er=Symbol.for("v-cmt"),Bl=Symbol.for("v-stc"),zr=[];let Un=null;function lt(n=!1){zr.push(Un=n?null:[])}function Cp(){zr.pop(),Un=zr[zr.length-1]||null}let fa=1;function Vh(n,e=!1){fa+=n,n<0&&Un&&e&&(Un.hasOnce=!0)}function Pp(n){return n.dynamicChildren=fa>0?Un||Ur:null,Cp(),fa>0&&Un&&Un.push(n),n}function ct(n,e,t,i,r,s){return Pp(K(n,e,t,i,r,s,!0))}function Z_(n,e,t,i,r){return Pp(Xi(n,e,t,i,r,!0))}function Dp(n){return n?n.__v_isVNode===!0:!1}function Os(n,e){return n.type===e.type&&n.key===e.key}const Lp=({key:n})=>n??null,wo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?$t(n)||gn(n)||ht(n)?{i:Gn,r:n,k:e,f:!!t}:n:null);function K(n,e=null,t=null,i=0,r=null,s=n===kt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Lp(e),ref:e&&wo(e),scopeId:rp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Gn};return o?(Vo(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=$t(t)?8:16),fa>0&&!a&&Un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Un.push(l),l}const Xi=J_;function J_(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===b_)&&(n=er),Dp(n)){const o=gs(n,e,!0);return t&&Vo(o,t),fa>0&&!s&&Un&&(o.shapeFlag&6?Un[Un.indexOf(n)]=o:Un.push(o)),o.patchFlag=-2,o}if(lv(n)&&(n=n.__vccOpts),e){e=j_(e);let{class:o,style:l}=e;o&&!$t(o)&&(e.class=an(o)),It(l)&&($u(l)&&!st(l)&&(l=un({},l)),e.style=al(l))}const a=$t(n)?1:Rp(n)?128:cl(n)?64:It(n)?4:ht(n)?2:0;return K(n,e,t,i,r,a,s,!0)}function j_(n){return n?$u(n)||xp(n)?un({},n):n:null}function gs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Q_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Lp(c),ref:e&&e.ref?t&&s?st(s)?s.concat(wo(e)):[s,wo(e)]:wo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==kt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&gs(n.ssContent),ssFallback:n.ssFallback&&gs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Yu(u,l.clone(u)),u}function dt(n=" ",e=0){return Xi(fl,null,n,e)}function Zt(n="",e=!1){return e?(lt(),Z_(er,null,n)):Xi(er,null,n)}function pi(n){return n==null||typeof n=="boolean"?Xi(er):st(n)?Xi(kt,null,n.slice()):Dp(n)?zi(n):Xi(fl,null,String(n))}function zi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:gs(n)}function Vo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(st(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Vo(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!xp(e)?e._ctx=Gn:r===3&&Gn&&(Gn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ht(e)){if(i&65){Vo(n,{default:e});return}e={default:e,_ctx:Gn},t=32}else e=String(e),i&64?(t=16,e=[dt(e)]):t=8;n.children=e,n.shapeFlag|=t}function Q_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=an([e.class,i.class]));else if(r==="style")e.style=al([e.style,i.style]);else if(tl(r)){const s=e[r],a=i[r];a&&s!==a&&!(st(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!nl(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function li(n,e,t,i=null){si(n,e,7,[t,i])}const ev=pp();let tv=0;function nv(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||ev,s={uid:tv++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mp(i,r),emitsOptions:mp(i,r),emit:null,emitted:null,propsDefaults:Nt,inheritAttrs:i.inheritAttrs,ctx:Nt,data:Nt,props:Nt,attrs:Nt,slots:Nt,refs:Nt,setupState:Nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=I_.bind(null,s),n.ce&&n.ce(s),s}let bn=null;const iv=()=>bn||Gn;let Ho,da;{const n=sl(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Ho=e("__VUE_INSTANCE_SETTERS__",t=>bn=t),da=e("__VUE_SSR_SETTERS__",t=>pa=t)}const Ca=n=>{const e=bn;return Ho(n),n.scope.on(),()=>{n.scope.off(),Ho(e)}},Hh=()=>{bn&&bn.scope.off(),Ho(null)};function Ip(n){return n.vnode.shapeFlag&4}let pa=!1;function rv(n,e=!1,t=!1){e&&da(e);const{props:i,children:r}=n.vnode,s=Ip(n);z_(n,i,s,e),G_(n,r,t||e);const a=s?sv(n,e):void 0;return e&&da(!1),a}function sv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,E_);const{setup:i}=t;if(i){ji();const r=n.setupContext=i.length>1?ov(n):null,s=Ca(n),a=Ra(i,n,0,[n.props,r]),o=Cd(a);if(Qi(),s(),(o||n.sp)&&!ta(n)&&lp(n),o){if(a.then(Hh,Hh),e)return a.then(l=>{da(!0);try{Gh(n,l,e)}finally{da(!1)}}).catch(l=>{ll(l,n,0)});n.asyncDep=a}else Gh(n,a)}else Up(n)}function Gh(n,e,t){ht(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:It(e)&&(n.setupState=jd(e)),Up(n)}function Up(n,e,t){const i=n.type;n.render||(n.render=i.render||Mi);{const r=Ca(n);ji();try{T_(n)}finally{Qi(),r()}}}const av={get(n,e){return pn(n,"get",""),n[e]}};function ov(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,av),slots:n.slots,emit:n.emit,expose:e}}function dl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(jd(Kg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in na)return na[t](n)},has(e,t){return t in e||t in na}})):n.proxy}function lv(n){return ht(n)&&"__vccOpts"in n}const Qn=(n,e)=>Qg(n,e,pa),cv="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zc;const Wh=typeof window<"u"&&window.trustedTypes;if(Wh)try{zc=Wh.createPolicy("vue",{createHTML:n=>n})}catch{}const Np=zc?n=>zc.createHTML(n):n=>n,uv="http://www.w3.org/2000/svg",hv="http://www.w3.org/1998/Math/MathML",Bi=typeof document<"u"?document:null,Xh=Bi&&Bi.createElement("template"),fv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Bi.createElementNS(uv,n):e==="mathml"?Bi.createElementNS(hv,n):t?Bi.createElement(n,{is:t}):Bi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Bi.createTextNode(n),createComment:n=>Bi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Bi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Xh.innerHTML=Np(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Xh.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},dv=Symbol("_vtc");function pv(n,e,t){const i=n[dv];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const $h=Symbol("_vod"),mv=Symbol("_vsh"),gv=Symbol(""),_v=/(?:^|;)\s*display\s*:/;function vv(n,e,t){const i=n.style,r=$t(t);let s=!1;if(t&&!r){if(e)if($t(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&$s(i,o,"")}else for(const a in e)t[a]==null&&$s(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?Sv(n,a,!$t(e)&&e?e[a]:void 0,o)||$s(i,a,o):$s(i,a,"")}}else if(r){if(e!==t){const a=i[gv];a&&(t+=";"+a),i.cssText=t,s=_v.test(t)}}else e&&n.removeAttribute("style");$h in n&&(n[$h]=s?i.display:"",n[mv]&&(i.display="none"))}const Wa=/\s*!important$/;function $s(n,e,t){if(st(t))t.forEach(i=>$s(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Wa.test(t)?n.setProperty(e,t.replace(Wa,""),"important"):n.setProperty(e,t);else{const i=xv(n,e);Wa.test(t)?n.setProperty(Xr(i),t.replace(Wa,""),"important"):n[i]=t}}const qh=["Webkit","Moz","ms"],zl={};function xv(n,e){const t=zl[e];if(t)return t;let i=ni(e);if(i!=="filter"&&i in n)return zl[e]=i;i=Ld(i);for(let r=0;r<qh.length;r++){const s=qh[r]+i;if(s in n)return zl[e]=s}return e}function Sv(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&$t(i)&&t===i}const Yh="http://www.w3.org/1999/xlink";function Kh(n,e,t,i,r,s=Ag(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Yh,e.slice(6,e.length)):n.setAttributeNS(Yh,e,t):t==null||s&&!Ud(t)?n.removeAttribute(e):n.setAttribute(e,s?"":bi(t)?String(t):t)}function Zh(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Np(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Ud(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function fr(n,e,t,i){n.addEventListener(e,t,i)}function Mv(n,e,t,i){n.removeEventListener(e,t,i)}const Jh=Symbol("_vei");function yv(n,e,t,i,r=null){const s=n[Jh]||(n[Jh]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Tv(e);if(i){const c=s[e]=Rv(i,r);fr(n,o,c,l)}else a&&(Mv(n,o,a,l),s[e]=void 0)}}const bv=/(Once|Passive|Capture)$/,Ev=/^on:?(?:Once|Passive|Capture)$/;function Tv(n){let e,t;for(;(t=n.match(bv))&&!Ev.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Xr(n.slice(2)),e]}let kl=0;const Av=Promise.resolve(),wv=()=>kl||(Av.then(()=>kl=0),kl=Date.now());function Rv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(st(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&si(c,e,5,o)}}else si(r,e,5,[i])};return t.value=n,t.attached=wv(),t}const jh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Cv=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?pv(n,i,a):e==="style"?vv(n,t,i):tl(e)?nl(e)||yv(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pv(n,e,i,a))?(Zh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kh(n,e,i,a,s,e!=="value")):n._isVueCE&&(Dv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!$t(i)))?Zh(n,ni(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Kh(n,e,i,a))};function Pv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&jh(e)&&ht(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return jh(e)&&$t(t)?!1:e in n}function Dv(n,e){const t=n._def.props;if(!t)return!1;const i=ni(e);return Array.isArray(t)?t.some(r=>ni(r)===i):Object.keys(t).some(r=>ni(r)===i)}const _s=n=>{const e=n.props["onUpdate:modelValue"]||!1;return st(e)?t=>To(e,t):e};function Lv(n){n.target.composing=!0}function Qh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vi=Symbol("_assign"),Xa=Symbol("_initialValue");function Vl(n,e,t){return e&&(n=n.trim()),t&&(n=rl(n)),n}const ci={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[Xa]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Xa]=n.defaultValue.replace(/\r\n?/g,`
`))),n[vi]=_s(r);const s=i||r.props&&r.props.type==="number";fr(n,e?"change":"input",a=>{a.target.composing||n[vi](Vl(n.value,t,s))}),(t||s)&&fr(n,"change",()=>{n.value=Vl(n.value,t,s)}),e||(fr(n,"compositionstart",Lv),fr(n,"compositionend",Qh),fr(n,"change",Qh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[Xa];delete n[Xa],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[vi](Vl(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[vi]=_s(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?rl(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},wr={deep:!0,created(n,e,t){n[vi]=_s(t),fr(n,"change",()=>{const i=n._modelValue,r=ma(n),s=n.checked,a=n[vi];if(st(i)){const o=zu(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const c=[...i];c.splice(o,1),a(c)}}else if(Zi(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(Op(n,s))})},mounted:ef,beforeUpdate(n,e,t){n[vi]=_s(t),ef(n,e,t)}};function ef(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(st(e))r=zu(e,i.props.value)>-1;else if(Zi(e))r=e.has(i.props.value);else{if(e===t)return;r=Ji(e,Op(n,!0))}n.checked!==r&&(n.checked=r)}const tf={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,fr(n,"change",()=>{const r=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>t?rl(ma(l)):ma(l)),s=n.multiple,a=s?Zi(n._modelValue)?new Set(r):r:r[0],o=n._pendingValue=[s,s?st(a)?r.slice():r:a];try{n[vi](a)}finally{ep(()=>{n._pendingValue===o&&(n._pendingValue=void 0)})}}),n[vi]=_s(i)},mounted(n,{value:e}){nf(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[vi]=_s(t)},updated(n,{value:e}){const t=n._pendingValue;n._pendingValue=void 0,(!t||t[0]!==n.multiple||!Iv(e,t[1],t[0]))&&nf(n,e)}};function Iv(n,e,t){if(!t||st(n))return Ji(n,e);if(Zi(n)){if(n.size!==e.length)return!1;for(const i of e)if(!n.has(i))return!1;return!0}return!1}function nf(n,e){const t=n.multiple,i=st(e);if(!(t&&!i&&!Zi(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=ma(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=zu(e,o)>-1}else a.selected=e.has(o);else if(Ji(ma(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ma(n){return"_value"in n?n._value:n.value}function Op(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Uv=["ctrl","shift","alt","meta"],Nv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Uv.some(t=>n[`${t}Key`]&&!e.includes(t))},Ov=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let a=0;a<e.length;a++){const o=Nv[e[a]];if(o&&o(r,e))return}return n(r,...s)}))},Fv=un({patchProp:Cv},fv);let rf;function Bv(){return rf||(rf=X_(Fv))}const zv=((...n)=>{const e=Bv().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Vv(i);if(!r)return;const s=e._component;!ht(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,kv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function kv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Vv(n){return $t(n)?document.querySelector(n):n}const dr=Math.PI/180,$a={haStar:1,cStar:.25,rhoFStar:.38};function Hv(n,e){return{x:n*(Math.sin(e)-e*Math.cos(e)),y:n*(Math.cos(e)+e*Math.sin(e))}}function Gv(n){return Math.tan(n)-n}function sf(n,e){const t=n/e;return Math.sqrt(Math.max(0,t*t-1))}function af(n,e){const t=Math.cos(e),i=Math.sin(e);return{x:n.x*t-n.y*i,y:n.x*i+n.y*t}}function qs(n,e){return{x:n*Math.cos(e),y:n*Math.sin(e)}}function Wv(n,e,t,i){const r=[];for(let s=0;s<=i;s++){const a=e+(t-e)*s/i;r.push(qs(n,a))}return r}function Go(n,e=16){const{z:t,module:i,alpha:r}=n,s=i*t/2,a=s*Math.cos(r),o=s+$a.haStar*i,l=s-($a.haStar+$a.cStar)*i,c=Math.PI*i,u=c*Math.cos(r),f=Math.PI*i/2,h=2*Math.PI/t,d=a>l,_=Gv(r),y=Math.PI/(2*t)+_,m=sf(o,a),p=Math.atan(m),w=m-Math.atan(m),I=Math.PI/(2*t)+_-w,M=2*o*I,P=I<=0,D=2/(Math.sin(r)*Math.sin(r)),B=t<D,S=ce=>({x:-ce.x,y:ce.y}),N=d?0:sf(l,a),k=(ce,we,Xe,Ne)=>{const L=[];for(let z=0;z<=Ne;z++){const O=we+(Xe-we)*z/Ne,W=af(Hv(a,O),y);L.push(ce===1?S(W):W)}return L},q=6,ae=ce=>{const we=-ce,Xe=Math.PI/2+we*y,Ne=k(ce,N,N,1);if(!d)return{j:Ne[0],jAngle:Math.atan2(Ne[0].y,Ne[0].x),fillet:[],flankLo:null};const L=Math.PI/2+we*(h/2),z=(a*a-l*l)/(2*l),O=Math.abs(Xe-L),W=Math.sin(O),X=W<1?l*W/(1-W):1/0,G=Math.max(0,Math.min($a.rhoFStar*i,z*.999,X*.999)),te=l+G,ge=Math.asin(Math.min(1,G/te)),fe=ce===1?Xe-ge:Xe+ge,ne=qs(te,fe),Te=qs(l,fe),R=Math.sqrt(Math.max(0,te*te-G*G)),Re=qs(R,Xe),Le=Math.atan2(Te.y-ne.y,Te.x-ne.x);let g=Math.atan2(Re.y-ne.y,Re.x-ne.x)-Le;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;g=Math.abs(g)*-ce;const F=[];for(let J=0;J<=q;J++){const se=Le+g*J/q;F.push({x:ne.x+G*Math.cos(se),y:ne.y+G*Math.sin(se)})}return{j:Te,jAngle:fe,fillet:F,flankLo:Ne[0]}},ie=ae(1),V=ae(-1),Z=k(1,N,m,e),re=k(-1,N,m,e),Q=Z[e],pe=re[e],ue=Math.atan2(Q.y,Q.x),ve=Math.atan2(pe.y,pe.x),he=[];he.push(...ie.fillet),ie.flankLo&&he.push(ie.flankLo),he.push(...Z.slice(1));let De=ve-ue;for(;De>Math.PI;)De-=2*Math.PI;for(;De<-Math.PI;)De+=2*Math.PI;const ke=Math.max(4,Math.ceil(Math.abs(De)/h*24));he.push(...Wv(o,ue,ue+De,ke).slice(1));for(let ce=e-1;ce>=0;ce--)he.push(re[ce]);V.flankLo&&(he.push(V.flankLo),he.push(V.fillet[V.fillet.length-1])),he.push(...V.fillet.slice(0,-1).reverse());const rt=[],it=6,et=ce=>{const we=rt[rt.length-1];(!we||Math.hypot(ce.x-we.x,ce.y-we.y)>1e-10)&&rt.push(ce)};for(let ce=0;ce<t;ce++){const we=ce*h,Xe=he.map(z=>af(z,we)),Ne=V.jAngle+we,L=ie.jAngle+(ce+1)*h;for(const z of Xe.slice(0,-1))et(z);for(let z=1;z<=it;z++){const O=Ne+(L-Ne)*z/it;et(qs(l,O))}}if(rt.length>1){const ce=rt[0],we=rt[rt.length-1];Math.hypot(ce.x-we.x,ce.y-we.y)<1e-10&&rt.pop()}const me=Array.from({length:t},(ce,we)=>Math.PI/2+we*h);return{input:n,pitchR:s,baseR:a,addendumR:o,dedendumR:l,baseAboveRoot:d,circularPitch:c,basePitch:u,toothThickness:f,beta:y,taTip:m,zMinValue:D,undercut:B,alphaTip:p,tipThickness:M,pointed:P,toothProfile:he,outline:rt,toothCenterAngles:me,jAngleRight:ie.jAngle,jAngleLeft:V.jAngle}}function Wo(n,e,t,i){const r=Math.cos(i),s=Math.sin(i);return n.map(a=>({x:e+a.x*r-a.y*s,y:t+a.x*s+a.y*r}))}function of(n){const e=[];return(!Number.isFinite(n.z)||n.z<4||Math.abs(n.z-Math.round(n.z))>1e-9)&&e.push("齿数必须为 ≥4 的整数"),(!(n.module>0)||!Number.isFinite(n.module))&&e.push("模数必须 > 0"),(!(n.alpha>0)||n.alpha>=Math.PI/2)&&e.push("压力角必须在 (0°, 90°) 内"),n.faceWidth>0||e.push("齿宽必须 > 0"),e}function Fp(n){const{g1:e,g2:t,centerDistance:i}=n,r=e.pitchR+t.pitchR,s=e.input.alpha,a=Math.min(1,Math.max(-1,r*Math.cos(s)/i)),o=Math.acos(a),l=e.baseR/Math.cos(o),c=t.baseR/Math.cos(o),u=i-r,f=De=>Math.tan(De)-De,h=2*i*(f(o)-f(s)),d=h*Math.cos(o),_=i-e.addendumR-t.dedendumR,y=i-t.addendumR-e.dedendumR,m=Math.abs(e.basePitch-t.basePitch),p=m<1e-6,w=[],I=i<e.addendumR+t.addendumR;I&&w.push("中心距小于两齿顶圆半径之和，齿顶圆交叉，必然实体干涉"),(_<0||y<0)&&w.push("存在齿顶与对方齿根圆交叉（顶隙为负）"),Math.abs(u)>1e-9&&(u>0?w.push(`非标准中心距（+${u.toFixed(3)} mm）：有侧隙安装，啮合角增大，不再是无侧隙啮合`):w.push("中心距小于标准值：无侧隙空间，齿面相互挤压（仅教学演示干涉）")),p||w.push(`两轮基节不等（差 ${m.toFixed(4)} mm），不能正确啮合`);const M={x:l,y:0},P=Math.sin(o),D=Math.cos(o),B=-l*P,S={x:M.x+B*P,y:M.y+B*D},N=c*P,k={x:M.x+N*P,y:M.y+N*D},q=(De,ke)=>{const rt=M.x-De,it=M.y,et=2*(rt*P+it*D),me=rt*rt+it*it-ke*ke,ce=et*et-4*me;if(ce<0)return[];const we=Math.sqrt(ce);return[(-et-we)/2,(-et+we)/2]},ae=q(0,e.addendumR),V=q(i,t.addendumR).filter(De=>De<=1e-9),Z=ae.filter(De=>De>=-1e-9),re=V.length?Math.max(...V):B,Q=Z.length?Math.min(...Z):N,pe={x:M.x+re*P,y:M.y+re*D},ue={x:M.x+Q*P,y:M.y+Q*D},ve=Math.max(0,Q-re),he=ve/e.basePitch;return{a0:r,a:i,alphaPrime:o,pitchR1:l,pitchR2:c,deltaA:u,backlashTangential:Math.max(0,h),backlashNormal:Math.max(0,d),clearance12:_,clearance21:y,basePitchMatch:p,basePitchDiff:m,addendumOverlap:I,actionLine:{p0:pe,p1:ue},tangentLine:{p0:S,p1:k},pitchPoint:M,pathOfContact:ve,contactRatio:he,ok:p&&!I,warnings:w}}function lf(n,e,t,i){const r=n.alphaPrime,s=Math.sin(r),a=Math.cos(r),o=Math.tan(r)+i/e.baseR,l=Math.tan(r)-i/t.baseR,c=o-Math.atan(o),u=l-Math.atan(l),f=Math.PI/2+e.beta-c,h=Math.PI/2+t.beta-u,d=Math.atan2(i*a,n.pitchR1+i*s),_=Math.atan2(i*a,-n.pitchR2+i*s),y=d-f,m=_-h;return{phi1:y,phi2:m,t1:o,t2:l}}function kc(n,e,t,i){const r=t.alphaPrime,s=Math.sin(r),a=Math.cos(r);let o=0;for(let h=0;h<30;h++){const d=Math.tan(r)+o/n.baseR,_=d-Math.atan(d),y=Math.PI/2+n.beta-_,p=Math.atan2(o*a,t.pitchR1+o*s)-y-i;if(o-=p/(1/n.baseR),Math.abs(p)<1e-12)break}const l=Math.tan(r)-o/e.baseR,c=l-Math.atan(l),u=Math.PI/2+e.beta-c;return Math.atan2(o*a,-t.pitchR2+o*s)-u}const Xv="modulepreload",$v=function(n,e){return new URL(n,e).href},cf={},qv=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let a=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=a(t.map(u=>{if(u=$v(u,i),u in cf)return;cf[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!i)for(let y=o.length-1;y>=0;y--){const m=o[y];if(m.href===u&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":Xv,f||(_.as="script"),_.crossOrigin="",_.href=u,c&&_.setAttribute("nonce",c),document.head.appendChild(_),f)return new Promise((y,m)=>{_.addEventListener("load",y),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};async function Yv(n={}){var e,t=n,i=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,s=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(s){const{createRequire:x}=await qv(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var a=x(import.meta.url)}var o=import.meta.url,l="";function c(x){return t.locateFile?t.locateFile(x,l):l+x}var u,f;if(s){var h=a("fs");o.startsWith("file:")&&(l=a("path").dirname(a("url").fileURLToPath(o))+"/"),f=x=>{x=m(x)?new URL(x):x;var v=h.readFileSync(x);return v},u=async(x,v=!0)=>{x=m(x)?new URL(x):x;var U=h.readFileSync(x,v?void 0:"utf8");return U},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else if(i||r){try{l=new URL(".",o).href}catch{}r&&(f=x=>{var v=new XMLHttpRequest;return v.open("GET",x,!1),v.responseType="arraybuffer",v.send(null),new Uint8Array(v.response)}),u=async x=>{if(m(x))return new Promise((U,H)=>{var j=new XMLHttpRequest;j.open("GET",x,!0),j.responseType="arraybuffer",j.onload=()=>{if(j.status==200||j.status==0&&j.response){U(j.response);return}H(j.status)},j.onerror=H,j.send(null)});var v=await fetch(x,{credentials:"same-origin"});if(v.ok)return v.arrayBuffer();throw new Error(v.status+" : "+v.url)}}console.log.bind(console);var d=console.error.bind(console),_,y=!1,m=x=>x.startsWith("file://"),p,w,I,M,P,D,B,S,N,k,q,ae,ie=!1;function V(){var x=za.buffer;I=new Int8Array(x),P=new Int16Array(x),t.HEAPU8=M=new Uint8Array(x),D=new Uint16Array(x),B=new Int32Array(x),S=new Uint32Array(x),N=new Float32Array(x),k=new Float64Array(x),q=new BigInt64Array(x),ae=new BigUint64Array(x)}function Z(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Ne(t.preRun.shift());me(Xe)}function re(){ie=!0,Is.E()}function Q(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)we(t.postRun.shift());me(ce)}function pe(x){t.onAbort?.(x),x="Aborted("+x+")",d(x),y=!0,x+=". Build with -sASSERTIONS for more info.";var v=new WebAssembly.RuntimeError(x);throw w?.(v),v}var ue;function ve(){return t.locateFile?c("clipper2z.wasm"):new URL(""+new URL("clipper2z-Cj78y2Ub.wasm",import.meta.url).href,import.meta.url).href}function he(x){if(x==ue&&_)return new Uint8Array(_);if(f)return f(x);throw"both async and sync fetching of the wasm failed"}async function De(x){if(!_)try{var v=await u(x);return new Uint8Array(v)}catch{}return he(x)}async function ke(x,v){try{var U=await De(x),H=await WebAssembly.instantiate(U,v);return H}catch(j){d(`failed to asynchronously prepare wasm: ${j}`),pe(j)}}async function rt(x,v,U){if(!x&&!m(v)&&!s)try{var H=fetch(v,{credentials:"same-origin"}),j=await WebAssembly.instantiateStreaming(H,U);return j}catch(Se){d(`wasm streaming compile failed: ${Se}`),d("falling back to ArrayBuffer instantiation")}return ke(v,U)}function it(){var x={a:cg};return x}async function et(){function x(Se,be){return Is=Se.exports,lg(Is),V(),Is}function v(Se){return x(Se.instance)}var U=it();if(t.instantiateWasm)return new Promise((Se,be)=>{t.instantiateWasm(U,(Ee,Ie)=>{Se(x(Ee))})});ue??=ve();var H=await rt(_,ue,U),j=v(H);return j}var me=x=>{for(;x.length>0;)x.shift()(t)},ce=[],we=x=>ce.push(x),Xe=[],Ne=x=>Xe.push(x);class L{constructor(v){this.excPtr=v,this.ptr=v-24}set_type(v){S[this.ptr+4>>2]=v}get_type(){return S[this.ptr+4>>2]}set_destructor(v){S[this.ptr+8>>2]=v}get_destructor(){return S[this.ptr+8>>2]}set_caught(v){v=v?1:0,I[this.ptr+12]=v}get_caught(){return I[this.ptr+12]!=0}set_rethrown(v){v=v?1:0,I[this.ptr+13]=v}get_rethrown(){return I[this.ptr+13]!=0}init(v,U){this.set_adjusted_ptr(0),this.set_type(v),this.set_destructor(U)}set_adjusted_ptr(v){S[this.ptr+16>>2]=v}get_adjusted_ptr(){return S[this.ptr+16>>2]}}var z=0,O=(x,v,U)=>{var H=new L(x);throw H.init(v,U),z=x,z},W=()=>pe(""),X={},G=x=>{for(;x.length;){var v=x.pop(),U=x.pop();U(v)}};function te(x){return this.fromWireType(S[x>>2])}var ge={},fe={},ne={},Te=class extends Error{constructor(v){super(v),this.name="InternalError"}},R=x=>{throw new Te(x)},Re=(x,v,U)=>{x.forEach(Ee=>ne[Ee]=v);function H(Ee){var Ie=U(Ee);Ie.length!==x.length&&R("Mismatched type converter count");for(var nt=0;nt<x.length;++nt)se(x[nt],Ie[nt])}var j=new Array(v.length),Se=[],be=0;v.forEach((Ee,Ie)=>{fe.hasOwnProperty(Ee)?j[Ie]=fe[Ee]:(Se.push(Ee),ge.hasOwnProperty(Ee)||(ge[Ee]=[]),ge[Ee].push(()=>{j[Ie]=fe[Ee],++be,be===Se.length&&H(j)}))}),Se.length===0&&H(j)},Le=x=>{var v=X[x];delete X[x];var U=v.rawConstructor,H=v.rawDestructor,j=v.fields,Se=j.map(be=>be.getterReturnType).concat(j.map(be=>be.setterArgumentType));Re([x],Se,be=>{var Ee={};return j.forEach((Ie,nt)=>{var tt=Ie.fieldName,Tt=be[nt],Gt=be[nt].optional,yt=Ie.getter,Wt=Ie.getterContext,sn=be[nt+j.length],Yn=Ie.setter,An=Ie.setterContext;Ee[tt]={read:Di=>Tt.fromWireType(yt(Wt,Di)),write:(Di,xn)=>{var ka=[];Yn(An,Di,sn.toWireType(ka,xn)),G(ka)},optional:Gt}}),[{name:v.name,fromWireType:Ie=>{var nt={};for(var tt in Ee)nt[tt]=Ee[tt].read(Ie);return H(Ie),nt},toWireType:(Ie,nt)=>{for(var tt in Ee)if(!(tt in nt)&&!Ee[tt].optional)throw new TypeError(`Missing field: "${tt}"`);var Tt=U();for(tt in Ee)Ee[tt].write(Tt,nt[tt]);return Ie!==null&&Ie.push(H,Tt),Tt},readValueFromPointer:te,destructorFunction:H}]})},T=x=>{for(var v="";;){var U=M[x++];if(!U)return v;v+=String.fromCharCode(U)}},g=class extends Error{constructor(v){super(v),this.name="BindingError"}},F=x=>{throw new g(x)};function J(x,v,U={}){var H=v.name;if(x||F(`type "${H}" must have a positive integer typeid pointer`),fe.hasOwnProperty(x)){if(U.ignoreDuplicateRegistrations)return;F(`Cannot register type '${H}' twice`)}if(fe[x]=v,delete ne[x],ge.hasOwnProperty(x)){var j=ge[x];delete ge[x],j.forEach(Se=>Se())}}function se(x,v,U={}){return J(x,v,U)}var Ae=(x,v,U)=>{switch(v){case 1:return U?H=>I[H]:H=>M[H];case 2:return U?H=>P[H>>1]:H=>D[H>>1];case 4:return U?H=>B[H>>2]:H=>S[H>>2];case 8:return U?H=>q[H>>3]:H=>ae[H>>3];default:throw new TypeError(`invalid integer width (${v}): ${x}`)}},Ce=(x,v,U,H,j)=>{v=T(v);const Se=H===0n;let be=Ee=>Ee;if(Se){const Ee=U*8;be=Ie=>BigInt.asUintN(Ee,Ie),j=be(j)}se(x,{name:v,fromWireType:be,toWireType:(Ee,Ie)=>(typeof Ie=="number"&&(Ie=BigInt(Ie)),Ie),readValueFromPointer:Ae(v,U,!Se),destructorFunction:null})},ee=(x,v,U,H)=>{v=T(v),se(x,{name:v,fromWireType:function(j){return!!j},toWireType:function(j,Se){return Se?U:H},readValueFromPointer:function(j){return this.fromWireType(M[j])},destructorFunction:null})},Me=x=>({count:x.count,deleteScheduled:x.deleteScheduled,preservePointerOnDelete:x.preservePointerOnDelete,ptr:x.ptr,ptrType:x.ptrType,smartPtr:x.smartPtr,smartPtrType:x.smartPtrType}),ye=x=>{function v(U){return U.$$.ptrType.registeredClass.name}F(v(x)+" instance already deleted")},Ve=!1,Oe=x=>{},Fe=x=>{x.smartPtr?x.smartPtrType.rawDestructor(x.smartPtr):x.ptrType.registeredClass.rawDestructor(x.ptr)},Je=x=>{x.count.value-=1;var v=x.count.value===0;v&&Fe(x)},je=x=>globalThis.FinalizationRegistry?(Ve=new FinalizationRegistry(v=>{Je(v.$$)}),je=v=>{var U=v.$$,H=!!U.smartPtr;if(H){var j={$$:U};Ve.register(v,j,v)}return v},Oe=v=>Ve.unregister(v),je(x)):(je=v=>v,x),at=()=>{let x=E.prototype;Object.assign(x,{isAliasOf(U){if(!(this instanceof E)||!(U instanceof E))return!1;var H=this.$$.ptrType.registeredClass,j=this.$$.ptr;U.$$=U.$$;for(var Se=U.$$.ptrType.registeredClass,be=U.$$.ptr;H.baseClass;)j=H.upcast(j),H=H.baseClass;for(;Se.baseClass;)be=Se.upcast(be),Se=Se.baseClass;return H===Se&&j===be},clone(){if(this.$$.ptr||ye(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var U=je(Object.create(Object.getPrototypeOf(this),{$$:{value:Me(this.$$)}}));return U.$$.count.value+=1,U.$$.deleteScheduled=!1,U},delete(){this.$$.ptr||ye(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&F("Object already scheduled for deletion"),Oe(this),Je(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||ye(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&F("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const v=Symbol.dispose;v&&(x[v]=x.delete)};function E(){}var A=(x,v)=>Object.defineProperty(v,"name",{value:x}),C={},_e=(x,v,U)=>{if(x[v].overloadTable===void 0){var H=x[v];x[v]=function(...j){return x[v].overloadTable.hasOwnProperty(j.length)||F(`Function '${U}' called with an invalid number of arguments (${j.length}) - expects one of (${x[v].overloadTable})!`),x[v].overloadTable[j.length].apply(this,j)},x[v].overloadTable=[],x[v].overloadTable[H.argCount]=H}},Pe=(x,v,U)=>{t.hasOwnProperty(x)?((U===void 0||t[x].overloadTable!==void 0&&t[x].overloadTable[U]!==void 0)&&F(`Cannot register public name '${x}' twice`),_e(t,x,x),t[x].overloadTable.hasOwnProperty(U)&&F(`Cannot register multiple overloads of a function with the same number of arguments (${U})!`),t[x].overloadTable[U]=v):(t[x]=v,t[x].argCount=U)},xe=48,Ye=57,Qe=x=>{x=x.replace(/[^a-zA-Z0-9_]/g,"$");var v=x.charCodeAt(0);return v>=xe&&v<=Ye?`_${x}`:x};function Dt(x,v,U,H,j,Se,be,Ee){this.name=x,this.constructor=v,this.instancePrototype=U,this.rawDestructor=H,this.baseClass=j,this.getActualType=Se,this.upcast=be,this.downcast=Ee,this.pureVirtualFunctions=[]}var _t=(x,v,U)=>{for(;v!==U;)v.upcast||F(`Expected null or instance of ${U.name}, got an instance of ${v.name}`),x=v.upcast(x),v=v.baseClass;return x},vn=x=>{if(x===null)return"null";var v=typeof x;return v==="object"||v==="array"||v==="function"?x.toString():""+x};function On(x,v){if(v===null)return this.isReference&&F(`null is not a valid ${this.name}`),0;v.$$||F(`Cannot pass "${vn(v)}" as a ${this.name}`),v.$$.ptr||F(`Cannot pass deleted object as a pointer of type ${this.name}`);var U=v.$$.ptrType.registeredClass,H=_t(v.$$.ptr,U,this.registeredClass);return H}function bl(x,v){var U;if(v===null)return this.isReference&&F(`null is not a valid ${this.name}`),this.isSmartPointer?(U=this.rawConstructor(),x!==null&&x.push(this.rawDestructor,U),U):0;(!v||!v.$$)&&F(`Cannot pass "${vn(v)}" as a ${this.name}`),v.$$.ptr||F(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&v.$$.ptrType.isConst&&F(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);var H=v.$$.ptrType.registeredClass;if(U=_t(v.$$.ptr,H,this.registeredClass),this.isSmartPointer)switch(v.$$.smartPtr===void 0&&F("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:v.$$.smartPtrType===this?U=v.$$.smartPtr:F(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:U=v.$$.smartPtr;break;case 2:if(v.$$.smartPtrType===this)U=v.$$.smartPtr;else{var j=v.clone();U=this.rawShare(U,We.toHandle(()=>j.delete())),x!==null&&x.push(this.rawDestructor,U)}break;default:F("Unsupporting sharing policy")}return U}function El(x,v){if(v===null)return this.isReference&&F(`null is not a valid ${this.name}`),0;v.$$||F(`Cannot pass "${vn(v)}" as a ${this.name}`),v.$$.ptr||F(`Cannot pass deleted object as a pointer of type ${this.name}`),v.$$.ptrType.isConst&&F(`Cannot convert argument of type ${v.$$.ptrType.name} to parameter type ${this.name}`);var U=v.$$.ptrType.registeredClass,H=_t(v.$$.ptr,U,this.registeredClass);return H}var ws=(x,v,U)=>{if(v===U)return x;if(U.baseClass===void 0)return null;var H=ws(x,v,U.baseClass);return H===null?null:U.downcast(H)},Rs={},Tl=(x,v)=>{for(v===void 0&&F("ptr should not be undefined");x.baseClass;)v=x.upcast(v),x=x.baseClass;return v},Ia=(x,v)=>(v=Tl(x,v),Rs[v]),yr=(x,v)=>{(!v.ptrType||!v.ptr)&&R("makeClassHandle requires ptr and ptrType");var U=!!v.smartPtrType,H=!!v.smartPtr;return U!==H&&R("Both smartPtrType and smartPtr must be specified"),v.count={value:1},je(Object.create(x,{$$:{value:v,writable:!0}}))};function Ci(x){var v=this.getPointee(x);if(!v)return this.destructor(x),null;var U=Ia(this.registeredClass,v);if(U!==void 0){if(U.$$.count.value===0)return U.$$.ptr=v,U.$$.smartPtr=x,U.clone();var H=U.clone();return this.destructor(x),H}function j(){return this.isSmartPointer?yr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:v,smartPtrType:this,smartPtr:x}):yr(this.registeredClass.instancePrototype,{ptrType:this,ptr:x})}var Se=this.registeredClass.getActualType(v),be=C[Se];if(!be)return j.call(this);var Ee;this.isConst?Ee=be.constPointerType:Ee=be.pointerType;var Ie=ws(v,this.registeredClass,Ee.registeredClass);return Ie===null?j.call(this):this.isSmartPointer?yr(Ee.registeredClass.instancePrototype,{ptrType:Ee,ptr:Ie,smartPtrType:this,smartPtr:x}):yr(Ee.registeredClass.instancePrototype,{ptrType:Ee,ptr:Ie})}var Cs=()=>{Object.assign(br.prototype,{getPointee(x){return this.rawGetPointee&&(x=this.rawGetPointee(x)),x},destructor(x){this.rawDestructor?.(x)},readValueFromPointer:te,fromWireType:Ci})};function br(x,v,U,H,j,Se,be,Ee,Ie,nt,tt){this.name=x,this.registeredClass=v,this.isReference=U,this.isConst=H,this.isSmartPointer=j,this.pointeeType=Se,this.sharingPolicy=be,this.rawGetPointee=Ee,this.rawConstructor=Ie,this.rawShare=nt,this.rawDestructor=tt,!j&&v.baseClass===void 0?H?(this.toWireType=On,this.destructorFunction=null):(this.toWireType=El,this.destructorFunction=null):this.toWireType=bl}var Ps=(x,v,U)=>{t.hasOwnProperty(x)||R("Replacing nonexistent public symbol"),t[x].overloadTable!==void 0&&U!==void 0?t[x].overloadTable[U]=v:(t[x]=v,t[x].argCount=U)},Er=[],Ua=x=>{var v=Er[x];return v||(Er[x]=v=vh.get(x)),v},en=(x,v,U=!1)=>{x=T(x);function H(){var Se=Ua(v);return Se}var j=H();return typeof j!="function"&&F(`unknown function pointer with signature ${x}: ${v}`),j};class Na extends Error{}var Ds=x=>{var v=_h(x),U=T(v);return sr(v),U},ir=(x,v)=>{var U=[],H={};function j(Se){if(!H[Se]&&!fe[Se]){if(ne[Se]){ne[Se].forEach(j);return}U.push(Se),H[Se]=!0}}throw v.forEach(j),new Na(`${x}: `+U.map(Ds).join([", "]))},Al=(x,v,U,H,j,Se,be,Ee,Ie,nt,tt,Tt,Gt)=>{tt=T(tt),Se=en(j,Se),Ee&&=en(be,Ee),nt&&=en(Ie,nt),Gt=en(Tt,Gt);var yt=Qe(tt);Pe(yt,function(){ir(`Cannot construct ${tt} due to unbound types`,[H])}),Re([x,v,U],H?[H]:[],Wt=>{Wt=Wt[0];var sn,Yn;H?(sn=Wt.registeredClass,Yn=sn.instancePrototype):Yn=E.prototype;var An=A(tt,function(...Cl){if(Object.getPrototypeOf(this)!==Di)throw new g(`Use 'new' to construct ${tt}`);if(xn.constructor_body===void 0)throw new g(`${tt} has no accessible constructor`);var bh=xn.constructor_body[Cl.length];if(bh===void 0)throw new g(`Tried to invoke ctor of ${tt} with invalid number of parameters (${Cl.length}) - expected (${Object.keys(xn.constructor_body).toString()}) parameters instead!`);return bh.apply(this,Cl)}),Di=Object.create(Yn,{constructor:{value:An}});An.prototype=Di;var xn=new Dt(tt,An,Di,Gt,sn,Se,Ee,nt);xn.baseClass&&(xn.baseClass.__derivedClasses??=[],xn.baseClass.__derivedClasses.push(xn));var ka=new br(tt,xn,!0,!1,!1),Mh=new br(tt+"*",xn,!1,!1,!1),yh=new br(tt+" const*",xn,!1,!0,!1);return C[x]={pointerType:Mh,constPointerType:yh},Ps(yt,An),[ka,Mh,yh]})},Ls=(x,v)=>{for(var U=[],H=0;H<x;H++)U.push(S[v+H*4>>2]);return U};function Oa(x){for(var v=1;v<x.length;++v)if(x[v]!==null&&x[v].destructorFunction===void 0)return!0;return!1}function Fa(x,v,U,H){var j=Oa(x),Se=x.length-2,be=[],Ee=["fn"];v&&Ee.push("thisWired");for(var Ie=0;Ie<Se;++Ie)be.push(`arg${Ie}`),Ee.push(`arg${Ie}Wired`);be=be.join(","),Ee=Ee.join(",");var nt=`return function (${be}) {
`;j&&(nt+=`var destructors = [];
`);var tt=j?"destructors":"null",Tt=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];v&&(nt+=`var thisWired = toClassParamWire(${tt}, this);
`);for(var Ie=0;Ie<Se;++Ie){var Gt=`toArg${Ie}Wire`;nt+=`var arg${Ie}Wired = ${Gt}(${tt}, arg${Ie});
`,Tt.push(Gt)}if(nt+=(U||H?"var rv = ":"")+`invoker(${Ee});
`,j)nt+=`runDestructors(destructors);
`;else for(var Ie=v?1:2;Ie<x.length;++Ie){var yt=Ie===1?"thisWired":"arg"+(Ie-2)+"Wired";x[Ie].destructorFunction!==null&&(nt+=`${yt}_dtor(${yt});
`,Tt.push(`${yt}_dtor`))}return U&&(nt+=`var ret = fromRetWire(rv);
return ret;
`),nt+=`}
`,new Function(Tt,nt)}function b(x,v,U,H,j,Se){var be=v.length;be<2&&F("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Ee=v[1]!==null&&U!==null,Ie=Oa(v),nt=!v[0].isVoid,tt=v[0],Tt=v[1],Gt=[x,F,H,j,G,tt.fromWireType.bind(tt),Tt?.toWireType.bind(Tt)],yt=2;yt<be;++yt){var Wt=v[yt];Gt.push(Wt.toWireType.bind(Wt))}if(!Ie)for(var yt=Ee?1:2;yt<v.length;++yt)v[yt].destructorFunction!==null&&Gt.push(v[yt].destructorFunction);var Yn=Fa(v,Ee,nt,Se)(...Gt);return A(x,Yn)}var $=(x,v,U,H,j,Se)=>{var be=Ls(v,U);j=en(H,j),Re([],[x],Ee=>{Ee=Ee[0];var Ie=`constructor ${Ee.name}`;if(Ee.registeredClass.constructor_body===void 0&&(Ee.registeredClass.constructor_body=[]),Ee.registeredClass.constructor_body[v-1]!==void 0)throw new g(`Cannot register multiple constructors with identical number of parameters (${v-1}) for class '${Ee.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Ee.registeredClass.constructor_body[v-1]=()=>{ir(`Cannot construct ${Ee.name} due to unbound types`,be)},Re([],be,nt=>(nt.splice(1,0,null),Ee.registeredClass.constructor_body[v-1]=b(Ie,nt,null,j,Se),[])),[]})},de=x=>{x=x.trim();const v=x.indexOf("(");return v===-1?x:x.slice(0,v)},le=(x,v,U,H,j,Se,be,Ee,Ie,nt)=>{var tt=Ls(U,H);v=T(v),v=de(v),Se=en(j,Se,Ie),Re([],[x],Tt=>{Tt=Tt[0];var Gt=`${Tt.name}.${v}`;v.startsWith("@@")&&(v=Symbol[v.substring(2)]),Ee&&Tt.registeredClass.pureVirtualFunctions.push(v);function yt(){ir(`Cannot call ${Gt} due to unbound types`,tt)}var Wt=Tt.registeredClass.instancePrototype,sn=Wt[v];return sn===void 0||sn.overloadTable===void 0&&sn.className!==Tt.name&&sn.argCount===U-2?(yt.argCount=U-2,yt.className=Tt.name,Wt[v]=yt):(_e(Wt,v,Gt),Wt[v].overloadTable[U-2]=yt),Re([],tt,Yn=>{var An=b(Gt,Yn,Tt,Se,be,Ie);return Wt[v].overloadTable===void 0?(An.argCount=U-2,Wt[v]=An):Wt[v].overloadTable[U-2]=An,[]}),[]})},oe=(x,v,U)=>(x instanceof Object||F(`${U} with invalid "this": ${x}`),x instanceof v.registeredClass.constructor||F(`${U} incompatible with "this" of type ${x.constructor.name}`),x.$$.ptr||F(`cannot call emscripten binding method ${U} on deleted object`),_t(x.$$.ptr,x.$$.ptrType.registeredClass,v.registeredClass)),He=(x,v,U,H,j,Se,be,Ee,Ie,nt)=>{v=T(v),j=en(H,j),Re([],[x],tt=>{tt=tt[0];var Tt=`${tt.name}.${v}`,Gt={get(){ir(`Cannot access ${Tt} due to unbound types`,[U,be])},enumerable:!0,configurable:!0};return Ie?Gt.set=()=>ir(`Cannot access ${Tt} due to unbound types`,[U,be]):Gt.set=yt=>F(Tt+" is a read-only property"),Object.defineProperty(tt.registeredClass.instancePrototype,v,Gt),Re([],Ie?[U,be]:[U],yt=>{var Wt=yt[0],sn={get(){var An=oe(this,tt,Tt+" getter");return Wt.fromWireType(j(Se,An))},enumerable:!0};if(Ie){Ie=en(Ee,Ie);var Yn=yt[1];sn.set=function(An){var Di=oe(this,tt,Tt+" setter"),xn=[];Ie(nt,Di,Yn.toWireType(xn,An)),G(xn)}}return Object.defineProperty(tt.registeredClass.instancePrototype,v,sn),[]}),[]})},$e=[],Be=[0,1,,1,null,1,!0,1,!1,1],Ke=x=>{x>9&&--Be[x+1]===0&&(Be[x]=void 0,$e.push(x))},We={toValue:x=>(x||F(`Cannot use deleted val. handle = ${x}`),Be[x]),toHandle:x=>{switch(x){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const v=$e.pop()||Be.length;return Be[v]=x,Be[v+1]=1,v}}}},ft={name:"emscripten::val",fromWireType:x=>{var v=We.toValue(x);return Ke(x),v},toWireType:(x,v)=>We.toHandle(v),readValueFromPointer:te,destructorFunction:null},mt=x=>se(x,ft),Ze=(x,v,U)=>{switch(v){case 1:return U?function(H){return this.fromWireType(I[H])}:function(H){return this.fromWireType(M[H])};case 2:return U?function(H){return this.fromWireType(P[H>>1])}:function(H){return this.fromWireType(D[H>>1])};case 4:return U?function(H){return this.fromWireType(B[H>>2])}:function(H){return this.fromWireType(S[H>>2])};default:throw new TypeError(`invalid integer width (${v}): ${x}`)}},bt=(x,v,U,H)=>{v=T(v);function j(){}j.values={},se(x,{name:v,constructor:j,fromWireType:function(Se){return this.constructor.values[Se]},toWireType:(Se,be)=>be.value,readValueFromPointer:Ze(v,U,H),destructorFunction:null}),Pe(v,j)},Bt=(x,v)=>{var U=fe[x];return U===void 0&&F(`${v} has unknown type ${Ds(x)}`),U},Ut=(x,v,U)=>{var H=Bt(x,"enum");v=T(v);var j=H.constructor,Se=Object.create(H.constructor.prototype,{value:{value:U},constructor:{value:A(`${H.name}_${v}`,function(){})}});j.values[U]=Se,j[v]=Se},Rt=(x,v)=>{switch(v){case 4:return function(U){return this.fromWireType(N[U>>2])};case 8:return function(U){return this.fromWireType(k[U>>3])};default:throw new TypeError(`invalid float width (${v}): ${x}`)}},tn=(x,v,U)=>{v=T(v),se(x,{name:v,fromWireType:H=>H,toWireType:(H,j)=>j,readValueFromPointer:Rt(v,U),destructorFunction:null})},qe=(x,v,U,H,j,Se,be,Ee)=>{var Ie=Ls(v,U);x=T(x),x=de(x),j=en(H,j,be),Pe(x,function(){ir(`Cannot call ${x} due to unbound types`,Ie)},v-1),Re([],Ie,nt=>{var tt=[nt[0],null].concat(nt.slice(1));return Ps(x,b(x,tt,null,j,Se,be),v-1),[]})},rn=(x,v,U,H,j)=>{v=T(v);const Se=H===0;let be=Ie=>Ie;if(Se){var Ee=32-8*U;be=Ie=>Ie<<Ee>>>Ee,j=be(j)}se(x,{name:v,fromWireType:be,toWireType:(Ie,nt)=>nt,readValueFromPointer:Ae(v,U,H!==0),destructorFunction:null})},vt=(x,v,U)=>{var H=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],j=H[v];function Se(be){var Ee=S[be>>2],Ie=S[be+4>>2];return new j(I.buffer,Ie,Ee)}U=T(U),se(x,{name:U,fromWireType:Se,readValueFromPointer:Se},{ignoreDuplicateRegistrations:!0})},Tn=(x,v,U,H)=>{if(!(H>0))return 0;for(var j=U,Se=U+H-1,be=0;be<x.length;++be){var Ee=x.codePointAt(be);if(Ee<=127){if(U>=Se)break;v[U++]=Ee}else if(Ee<=2047){if(U+1>=Se)break;v[U++]=192|Ee>>6,v[U++]=128|Ee&63}else if(Ee<=65535){if(U+2>=Se)break;v[U++]=224|Ee>>12,v[U++]=128|Ee>>6&63,v[U++]=128|Ee&63}else{if(U+3>=Se)break;v[U++]=240|Ee>>18,v[U++]=128|Ee>>12&63,v[U++]=128|Ee>>6&63,v[U++]=128|Ee&63,be++}}return v[U]=0,U-j},Fn=(x,v,U)=>Tn(x,M,v,U),ai=x=>{for(var v=0,U=0;U<x.length;++U){var H=x.charCodeAt(U);H<=127?v++:H<=2047?v+=2:H>=55296&&H<=57343?(v+=4,++U):v+=3}return v},Pi=globalThis.TextDecoder&&new TextDecoder,Et=(x,v,U,H)=>{var j=v+U;if(H)return j;for(;x[v]&&!(v>=j);)++v;return v},zt=(x,v=0,U,H)=>{var j=Et(x,v,U,H);if(j-v>16&&x.buffer&&Pi)return Pi.decode(x.subarray(v,j));for(var Se="";v<j;){var be=x[v++];if(!(be&128)){Se+=String.fromCharCode(be);continue}var Ee=x[v++]&63;if((be&224)==192){Se+=String.fromCharCode((be&31)<<6|Ee);continue}var Ie=x[v++]&63;if((be&240)==224?be=(be&15)<<12|Ee<<6|Ie:be=(be&7)<<18|Ee<<12|Ie<<6|x[v++]&63,be<65536)Se+=String.fromCharCode(be);else{var nt=be-65536;Se+=String.fromCharCode(55296|nt>>10,56320|nt&1023)}}return Se},oi=(x,v,U)=>x?zt(M,x,v,U):"",Lt=(x,v)=>{v=T(v),se(x,{name:v,fromWireType(U){var H=S[U>>2],j=U+4,Se;return Se=oi(j,H,!0),sr(U),Se},toWireType(U,H){H instanceof ArrayBuffer&&(H=new Uint8Array(H));var j,Se=typeof H=="string";Se||ArrayBuffer.isView(H)&&H.BYTES_PER_ELEMENT==1||F("Cannot pass non-string to std::string"),Se?j=ai(H):j=H.length;var be=Rl(4+j+1),Ee=be+4;return S[be>>2]=j,Se?Fn(H,Ee,j+1):M.set(H,Ee),U!==null&&U.push(sr,be),be},readValueFromPointer:te,destructorFunction(U){sr(U)}})},qn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,rr=(x,v,U)=>{var H=x>>1,j=Et(D,H,v/2,U);if(j-H>16&&qn)return qn.decode(D.subarray(H,j));for(var Se="",be=H;be<j;++be){var Ee=D[be];Se+=String.fromCharCode(Ee)}return Se},Ba=(x,v,U)=>{if(U??=2147483647,U<2)return 0;U-=2;for(var H=v,j=U<x.length*2?U/2:x.length,Se=0;Se<j;++Se){var be=x.charCodeAt(Se);P[v>>1]=be,v+=2}return P[v>>1]=0,v-H},km=x=>x.length*2,Vm=(x,v,U)=>{for(var H="",j=x>>2,Se=0;!(Se>=v/4);Se++){var be=S[j+Se];if(!be&&!U)break;H+=String.fromCodePoint(be)}return H},Hm=(x,v,U)=>{if(U??=2147483647,U<4)return 0;for(var H=v,j=H+U-4,Se=0;Se<x.length;++Se){var be=x.codePointAt(Se);if(be>65535&&Se++,B[v>>2]=be,v+=4,v+4>j)break}return B[v>>2]=0,v-H},Gm=x=>{for(var v=0,U=0;U<x.length;++U){var H=x.codePointAt(U);H>65535&&U++,v+=4}return v},Wm=(x,v,U)=>{U=T(U);var H,j,Se;v===2?(H=rr,j=Ba,Se=km):(H=Vm,j=Hm,Se=Gm),se(x,{name:U,fromWireType:be=>{var Ee=S[be>>2],Ie=H(be+4,Ee*v,!0);return sr(be),Ie},toWireType:(be,Ee)=>{typeof Ee!="string"&&F(`Cannot pass non-string to C++ string type ${U}`);var Ie=Se(Ee),nt=Rl(4+Ie+v);return S[nt>>2]=Ie/v,j(Ee,nt+4,Ie+v),be!==null&&be.push(sr,nt),nt},readValueFromPointer:te,destructorFunction(be){sr(be)}})},Xm=(x,v,U,H,j,Se)=>{X[x]={name:T(v),rawConstructor:en(U,H),rawDestructor:en(j,Se),fields:[]}},$m=(x,v,U,H,j,Se,be,Ee,Ie,nt)=>{X[x].fields.push({fieldName:T(v),getterReturnType:U,getter:en(H,j),getterContext:Se,setterArgumentType:be,setter:en(Ee,Ie),setterContext:nt})},qm=(x,v)=>{v=T(v),se(x,{isVoid:!0,name:v,fromWireType:()=>{},toWireType:(U,H)=>{}})},wl=[],Ym=x=>{var v=wl.length;return wl.push(x),v},Km=(x,v)=>{for(var U=new Array(x),H=0;H<x;++H)U[H]=Bt(S[v+H*4>>2],`parameter ${H}`);return U},Zm=(x,v,U)=>{var H=[],j=x(H,U);return H.length&&(S[v>>2]=We.toHandle(H)),j},Jm={},gh=x=>{var v=Jm[x];return v===void 0?T(x):v},jm=(x,v,U)=>{var H=8,[j,...Se]=Km(x,v),be=j.toWireType.bind(j),Ee=Se.map(yt=>yt.readValueFromPointer.bind(yt));x--;var Ie={toValue:We.toValue},nt=Ee.map((yt,Wt)=>{var sn=`argFromPtr${Wt}`;return Ie[sn]=yt,`${sn}(args${Wt?"+"+Wt*H:""})`}),tt;switch(U){case 0:tt="toValue(handle)";break;case 2:tt="new (toValue(handle))";break;case 3:tt="";break;case 1:Ie.getStringOrSymbol=gh,tt="toValue(handle)[getStringOrSymbol(methodName)]";break}tt+=`(${nt})`,j.isVoid||(Ie.toReturnWire=be,Ie.emval_returnValue=Zm,tt=`return emval_returnValue(toReturnWire, destructorsRef, ${tt})`),tt=`return function (handle, methodName, destructorsRef, args) {
  ${tt}
  }`;var Tt=new Function(Object.keys(Ie),tt)(...Object.values(Ie)),Gt=`methodCaller<(${Se.map(yt=>yt.name)}) => ${j.name}>`;return Ym(A(Gt,Tt))},Qm=(x,v)=>(x=We.toValue(x),v=We.toValue(v),We.toHandle(x[v])),eg=x=>{x>9&&(Be[x+1]+=1)},tg=(x,v,U,H,j)=>wl[x](v,U,H,j),ng=x=>We.toHandle(gh(x)),ig=x=>{var v=We.toValue(x);G(v),Ke(x)},rg=()=>2147483648,sg=(x,v)=>Math.ceil(x/v)*v,ag=x=>{var v=za.buffer.byteLength,U=(x-v+65535)/65536|0;try{return za.grow(U),V(),1}catch{}},og=x=>{var v=M.length;x>>>=0;var U=rg();if(x>U)return!1;for(var H=1;H<=4;H*=2){var j=v*(1+.2/H);j=Math.min(j,x+100663296);var Se=Math.min(U,sg(Math.max(x,j),65536)),be=ag(Se);if(be)return!0}return!1};if(at(),Cs(),t.noExitRuntime&&t.noExitRuntime,t.print&&t.print,t.printErr&&(d=t.printErr),t.wasmBinary&&(_=t.wasmBinary),t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();var _h,Rl,sr,za,vh;function lg(x){_h=x.F,Rl=x.H,sr=x.I,za=x.D,vh=x.G}var cg={h:O,x:W,v:Le,u:Ce,B:ee,e:Al,g:$,a:le,f:He,z:mt,n:bt,c:Ut,t:tn,b:qe,i:rn,d:vt,A:Lt,q:Wm,w:Xm,p:$m,C:qm,l:jm,m:Ke,r:Qm,o:eg,k:tg,s:ng,j:ig,y:og};function ug(){Z();function x(){t.calledRun=!0,!y&&(re(),p?.(t),t.onRuntimeInitialized?.(),Q())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),x()},1)):x()}var Is;Is=await et(),ug();function hg(x){if(x.length%2!=0)throw"MakePath64: intArray.length must be even";const v=x.length/2,U=new BigInt64Array(v*3);for(let j=0,Se=0;j<x.length;j+=2,Se+=3){const be=x[j],Ee=x[j+1];U[Se]=typeof be=="bigint"?be:BigInt(be),U[Se+1]=typeof Ee=="bigint"?Ee:BigInt(Ee)}let H=new t.Path64;return H.assign(U),H}t.MakePath64=hg;function fg(x){if(x.length%3!=0)throw"MakePathZ64: intArray.length must be multiple of 3";const v=new BigInt64Array(x.length);for(let H=0;H<x.length;H++){const j=x[H];v[H]=typeof j=="bigint"?j:BigInt(j)}let U=new t.Path64;return U.assign(v),U}t.MakePathZ64=fg;function dg(x){if(x.length%2!=0)throw"MakePathD: intArray.length must be even";const v=x.length/2,U=new Float64Array(v*3);for(let j=0,Se=0;j<x.length;j+=2,Se+=3)U[Se]=x[j],U[Se+1]=x[j+1];let H=new t.PathD;return H.assign(U),H}t.MakePathD=dg;function pg(x){if(x.length%3!=0)throw"MakePathZD: intArray.length must be multiple of 3";const v=x instanceof Float64Array?x:Float64Array.from(x);let U=new t.PathD;return U.assign(v),U}t.MakePathZD=pg;function xh(x){const v=x.view(),U=new BigInt64Array(v.length);for(let j=0;j<v.length;j++)U[j]=BigInt(Math.round(v[j]));let H=new t.Path64;return H.assign(U),H}t.PathDToPath64=xh;function Sh(x){const v=x.view(),U=new Float64Array(v.length);for(let j=0;j<v.length;j++)U[j]=Number(v[j]);let H=new t.PathD;return H.assign(U),H}t.Path64ToPathD=Sh;function mg(x){let v=new t.PathsD;for(let U=0;U<x.size();U++){const H=x.get(U);let j=Sh(H);v.push_back(j),j.delete(),H.delete()}return v}t.Paths64ToPathsD=mg;function gg(x){let v=new t.Paths64;for(let U=0;U<x.size();U++){const H=x.get(U);let j=xh(H);v.push_back(j),j.delete(),H.delete()}return v}return t.PathsDToPaths64=gg,ie?e=t:e=new Promise((x,v)=>{p=x,w=v}),e}let Hl=null;function Kv(){return Hl||(Hl=Yv()),Hl}function Zv(n,e){const t=[];for(const i of e)t.push(i.x,i.y);return n.MakePathD(t)}function uf(n,e){const t=n.PathsD,i=new t;for(const r of e)r.length>=3&&i.push_back(Zv(n,r));return i}function Jv(n){const e=n.size(),t=[];for(let i=0;i<e;i++){const r=n.get(i);t.push({x:r.x,y:r.y})}return t}function jv(n){const e=[],t=n.size();for(let i=0;i<t;i++)e.push(Jv(n.get(i)));return e}async function Bp(n,e){const t=await Kv(),i=uf(t,n),r=uf(t,e),a=t.IntersectD(i,r,t.FillRule.NonZero,6),o=Math.abs(t.AreaPathsD(a));return{regions:jv(a),area:o,intersects:o>1e-8}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ju="186",$i={ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qv=0,hf=1,e0=2,Ro=1,t0=2,Ys=3,Vr=0,Pn=1,_i=2,qi=0,ia=1,ff=2,df=3,pf=4,n0=5,os=100,i0=101,r0=102,s0=103,a0=104,o0=200,l0=201,c0=202,u0=203,zp=204,kp=205,h0=206,f0=207,d0=208,p0=209,m0=210,g0=211,_0=212,v0=213,x0=214,Vc=0,Hc=1,Gc=2,ga=3,Wc=4,Xc=5,$c=6,qc=7,Vp=0,S0=1,M0=2,yi=0,Hp=1,Gp=2,Wp=3,Xp=4,$p=5,qp=6,Yp=7,Kp=300,Hr=301,vs=302,Gl=303,Wl=304,pl=306,Yc=1e3,Gi=1001,Kc=1002,ln=1003,y0=1004,qa=1005,mn=1006,Xl=1007,Or=1008,In=1009,Zp=1010,Jp=1011,_a=1012,Qu=1013,Ti=1014,xi=1015,Ai=1016,eh=1017,th=1018,va=1020,jp=35902,Qp=35899,em=1021,tm=1022,ti=1023,tr=1026,Fr=1027,nm=1028,nh=1029,Gr=1030,ih=1031,rh=1033,Co=33776,Po=33777,Do=33778,Lo=33779,Zc=35840,Jc=35841,jc=35842,Qc=35843,eu=36196,tu=37492,nu=37496,iu=37488,ru=37489,Xo=37490,su=37491,au=37808,ou=37809,lu=37810,cu=37811,uu=37812,hu=37813,fu=37814,du=37815,pu=37816,mu=37817,gu=37818,_u=37819,vu=37820,xu=37821,Su=36492,Mu=36494,yu=36495,bu=36283,Eu=36284,$o=36285,Tu=36286,b0=3200,Au=0,E0=1,pr="",Vn="srgb",qo="srgb-linear",Yo="linear",Ct="srgb",$l=7680,T0=519,A0=512,w0=513,R0=514,sh=515,C0=516,P0=517,ah=518,D0=519,L0=35044,mf="300 es",Si=2e3,xa=2001;function I0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function U0(){const n=Ko("canvas");return n.style.display="block",n}const gf={};function _f(...n){const e="THREE."+n.shift();console.log(e,...n)}function im(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ot(...n){n=im(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Mt(...n){n=im(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ps(...n){const e=n.join(" ");e in gf||(gf[e]=!0,ot(...n))}function N0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const O0={[Vc]:Hc,[Gc]:$c,[Wc]:qc,[ga]:Xc,[Hc]:Vc,[$c]:Gc,[qc]:Wc,[Xc]:ga};class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ra=Math.PI/180,wu=180/Math.PI;function ys(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function F0(n,e){return(n%e+e)%e}function ql(n,e,t){return(1-t)*n+t*e}function Fs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const B0={DEG2RAD:ra};class Ue{static{Ue.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],d=s[a+1],_=s[a+2],y=s[a+3];if(f!==y||l!==h||c!==d||u!==_){let m=l*h+c*d+u*_+f*y;m<0&&(h=-h,d=-d,_=-_,y=-y,m=-m);let p=1-o;if(m<.9995){const w=Math.acos(m),I=Math.sin(w);p=Math.sin(p*w)/I,o=Math.sin(o*w)/I,l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+y*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+y*o;const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{static{Y.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yl.copy(this).projectOnVector(e),this.sub(Yl)}reflect(e){return this.sub(Yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yl=new Y,vf=new xr;class ut{static{ut.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],y=r[0],m=r[3],p=r[6],w=r[1],I=r[4],M=r[7],P=r[2],D=r[5],B=r[8];return s[0]=a*y+o*w+l*P,s[3]=a*m+o*I+l*D,s[6]=a*p+o*M+l*B,s[1]=c*y+u*w+f*P,s[4]=c*m+u*I+f*D,s[7]=c*p+u*M+f*B,s[2]=h*y+d*w+_*P,s[5]=h*m+d*I+_*D,s[8]=h*p+d*M+_*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,_=t*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=d*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(e,t)),this}rotate(e){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-e)),this}translate(e,t){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kl=new ut,xf=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sf=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z0(){const n={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ct&&(r.r=Yi(r.r),r.g=Yi(r.g),r.b=Yi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ct&&(r.r=ms(r.r),r.g=ms(r.g),r.b=ms(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?Yo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qo]:{primaries:e,whitePoint:i,transfer:Yo,toXYZ:xf,fromXYZ:Sf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:i,transfer:Ct,toXYZ:xf,fromXYZ:Sf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),n}const xt=z0();function Yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qr;class k0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qr===void 0&&(qr=Ko("canvas")),qr.width=e.width,qr.height=e.height;const r=qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ko("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yi(t[i]/255)*255):t[i]=Yi(t[i]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let V0=0;class oh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Zl(r[a].image)):s.push(Zl(r[a]))}else s=Zl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Zl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?k0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let H0=0;const Jl=new Y;class En extends Mr{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,i=Gi,r=Gi,s=mn,a=Or,o=ti,l=In,c=En.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ys(),this.name="",this.source=new oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yc:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yc:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Kp;En.DEFAULT_ANISOTROPY=1;class Vt{static{Vt.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(c+1)/2,M=(d+1)/2,P=(p+1)/2,D=(u+h)/4,B=(f+y)/4,S=(_+m)/4;return I>M&&I>P?I<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(I),r=D/i,s=B/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=D/r,s=S/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=B/s,r=S/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-y)/w,this.z=(h-u)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G0 extends Mr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new En(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new oh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends G0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rm extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class W0 extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ft{static{Ft.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,_,y,m)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,_,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),a=1/Yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,y=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,y=c*f;t[0]=h+y*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,y=c*f;t[0]=h-y*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,y=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+y,t[1]=l*f,t[5]=y*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=y-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-y*f}else if(e.order==="XZY"){const h=a*l,d=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+y,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X0,e,$0)}lookAt(e,t,i){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),ar.crossVectors(i,Dn),ar.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),ar.crossVectors(i,Dn)),ar.normalize(),Ya.crossVectors(Dn,ar),r[0]=ar.x,r[4]=Ya.x,r[8]=Dn.x,r[1]=ar.y,r[5]=Ya.y,r[9]=Dn.y,r[2]=ar.z,r[6]=Ya.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],y=i[6],m=i[10],p=i[14],w=i[3],I=i[7],M=i[11],P=i[15],D=r[0],B=r[4],S=r[8],N=r[12],k=r[1],q=r[5],ae=r[9],ie=r[13],V=r[2],Z=r[6],re=r[10],Q=r[14],pe=r[3],ue=r[7],ve=r[11],he=r[15];return s[0]=a*D+o*k+l*V+c*pe,s[4]=a*B+o*q+l*Z+c*ue,s[8]=a*S+o*ae+l*re+c*ve,s[12]=a*N+o*ie+l*Q+c*he,s[1]=u*D+f*k+h*V+d*pe,s[5]=u*B+f*q+h*Z+d*ue,s[9]=u*S+f*ae+h*re+d*ve,s[13]=u*N+f*ie+h*Q+d*he,s[2]=_*D+y*k+m*V+p*pe,s[6]=_*B+y*q+m*Z+p*ue,s[10]=_*S+y*ae+m*re+p*ve,s[14]=_*N+y*ie+m*Q+p*he,s[3]=w*D+I*k+M*V+P*pe,s[7]=w*B+I*q+M*Z+P*ue,s[11]=w*S+I*ae+M*re+P*ve,s[15]=w*N+I*ie+M*Q+P*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],y=e[7],m=e[11],p=e[15],w=l*d-c*h,I=o*d-c*f,M=o*h-l*f,P=a*d-c*u,D=a*h-l*u,B=a*f-o*u;return t*(y*w-m*I+p*M)-i*(_*w-m*P+p*D)+r*(_*I-y*P+p*B)-s*(_*M-y*D+m*B)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],y=e[13],m=e[14],p=e[15],w=t*o-i*a,I=t*l-r*a,M=t*c-s*a,P=i*l-r*o,D=i*c-s*o,B=r*c-s*l,S=u*y-f*_,N=u*m-h*_,k=u*p-d*_,q=f*m-h*y,ae=f*p-d*y,ie=h*p-d*m,V=w*ie-I*ae+M*q+P*k-D*N+B*S;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/V;return e[0]=(o*ie-l*ae+c*q)*Z,e[1]=(r*ae-i*ie-s*q)*Z,e[2]=(y*B-m*D+p*P)*Z,e[3]=(h*D-f*B-d*P)*Z,e[4]=(l*k-a*ie-c*N)*Z,e[5]=(t*ie-r*k+s*N)*Z,e[6]=(m*M-_*B-p*I)*Z,e[7]=(u*B-h*M+d*I)*Z,e[8]=(a*ae-o*k+c*S)*Z,e[9]=(i*k-t*ae-s*S)*Z,e[10]=(_*D-y*M+p*w)*Z,e[11]=(f*M-u*D-d*w)*Z,e[12]=(o*N-a*q-l*S)*Z,e[13]=(t*q-i*N+r*S)*Z,e[14]=(y*I-_*P-m*w)*Z,e[15]=(u*P-f*I+h*w)*Z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,_=s*f,y=a*u,m=a*f,p=o*f,w=l*c,I=l*u,M=l*f,P=i.x,D=i.y,B=i.z;return r[0]=(1-(y+p))*P,r[1]=(d+M)*P,r[2]=(_-I)*P,r[3]=0,r[4]=(d-M)*D,r[5]=(1-(h+p))*D,r[6]=(m+w)*D,r[7]=0,r[8]=(_+I)*B,r[9]=(m-w)*B,r[10]=(1-(h+y))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Yr.set(r[0],r[1],r[2]).length();const o=Yr.set(r[4],r[5],r[6]).length(),l=Yr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Zn.copy(this);const c=1/a,u=1/o,f=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,t.setFromRotationMatrix(Zn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Si,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let _,y;if(l)_=s/(a-s),y=a*s/(a-s);else if(o===Si)_=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===xa)_=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Si,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let _,y;if(l)_=1/(a-s),y=a/(a-s);else if(o===Si)_=-2/(a-s),y=-(a+s)/(a-s);else if(o===xa)_=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yr=new Y,Zn=new Ft,X0=new Y(0,0,0),$0=new Y(1,1,1),ar=new Y,Ya=new Y,Dn=new Y,Mf=new Ft,yf=new xr;class Sr{constructor(e=0,t=0,i=0,r=Sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yf.setFromEuler(this),this.setFromQuaternion(yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sr.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q0=0;const bf=new Y,Kr=new xr,Ii=new Ft,Ka=new Y,Bs=new Y,Y0=new Y,K0=new xr,Ef=new Y(1,0,0),Tf=new Y(0,1,0),Af=new Y(0,0,1),wf={type:"added"},Z0={type:"removed"},Zr={type:"childadded",child:null},jl={type:"childremoved",child:null};class cn extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new Y,t=new Sr,i=new xr,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ut}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Ef,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(Af,e)}translateOnAxis(e,t){return bf.copy(e).applyQuaternion(this.quaternion),this.position.add(bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ef,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(Af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ka.copy(e):Ka.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Bs,Ka,this.up):Ii.lookAt(Ka,Bs,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(Ii),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wf),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Z0),jl.child=e,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wf),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,K0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}cn.DEFAULT_UP=new Y(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cs extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J0={type:"move"};class Ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(J0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new cs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Za={h:0,s:0,l:0};function ec(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class St{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=F0(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ec(a,s,e+1/3),this.g=ec(a,s,e),this.b=ec(a,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vn){const i=sm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return xt.workingToColorSpace(fn.copy(this),e),Math.round(gt(fn.r*255,0,255))*65536+Math.round(gt(fn.g*255,0,255))*256+Math.round(gt(fn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(fn.copy(this),t);const i=fn.r,r=fn.g,s=fn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Vn){xt.workingToColorSpace(fn.copy(this),e);const t=fn.r,i=fn.g,r=fn.b;return e!==Vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(Za);const i=ql(or.h,Za.h,t),r=ql(or.s,Za.s,t),s=ql(or.l,Za.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new St;St.NAMES=sm;class j0 extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Jn=new Y,Ui=new Y,tc=new Y,Ni=new Y,Jr=new Y,jr=new Y,Rf=new Y,nc=new Y,ic=new Y,rc=new Y,sc=new Vt,ac=new Vt,oc=new Vt;class Hn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jn.subVectors(e,t),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jn.subVectors(r,t),Ui.subVectors(i,t),tc.subVectors(e,t);const a=Jn.dot(Jn),o=Jn.dot(Ui),l=Jn.dot(tc),c=Ui.dot(Ui),u=Ui.dot(tc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return sc.setScalar(0),ac.setScalar(0),oc.setScalar(0),sc.fromBufferAttribute(e,t),ac.fromBufferAttribute(e,i),oc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(sc,s.x),a.addScaledVector(ac,s.y),a.addScaledVector(oc,s.z),a}static isFrontFacing(e,t,i,r){return Jn.subVectors(i,t),Ui.subVectors(e,t),Jn.cross(Ui).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Jn.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Jr.subVectors(r,i),jr.subVectors(s,i),nc.subVectors(e,i);const l=Jr.dot(nc),c=jr.dot(nc);if(l<=0&&c<=0)return t.copy(i);ic.subVectors(e,r);const u=Jr.dot(ic),f=jr.dot(ic);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Jr,a);rc.subVectors(e,s);const d=Jr.dot(rc),_=jr.dot(rc);if(_>=0&&d<=_)return t.copy(s);const y=d*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(jr,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Rf.subVectors(s,r),o=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(Rf,o);const p=1/(m+y+h);return a=y*p,o=h*p,t.copy(i).addScaledVector(Jr,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pa{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(s,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),ja.subVectors(this.max,zs),Qr.subVectors(e.a,zs),es.subVectors(e.b,zs),ts.subVectors(e.c,zs),lr.subVectors(es,Qr),cr.subVectors(ts,es),Rr.subVectors(Qr,ts);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Rr.z,Rr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Rr.z,0,-Rr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Rr.y,Rr.x,0];return!lc(t,Qr,es,ts,ja)||(t=[1,0,0,0,1,0,0,0,1],!lc(t,Qr,es,ts,ja))?!1:(Qa.crossVectors(lr,cr),t=[Qa.x,Qa.y,Qa.z],lc(t,Qr,es,ts,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],jn=new Y,Ja=new Pa,Qr=new Y,es=new Y,ts=new Y,lr=new Y,cr=new Y,Rr=new Y,zs=new Y,ja=new Y,Qa=new Y,Cr=new Y;function lc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Cr.fromArray(n,s);const o=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=e.dot(Cr),c=t.dot(Cr),u=i.dot(Cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qt=new Y,eo=new Ue;let Q0=0;class Ki extends Mr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=L0,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),r=wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),r=wn(r,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class am extends Ki{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class om extends Ki{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yt extends Ki{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ex=new Pa,ks=new Y,cc=new Y;class ml{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ex.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(cc)),this.expandByPoint(ks.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tx=0;const Bn=new Ft,uc=new cn,ns=new Y,Ln=new Pa,Vs=new Pa,nn=new Y;class _n extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I0(e)?om:am)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Ln.min,Vs.min),Ln.expandByPoint(nn),nn.addVectors(Ln.max,Vs.max),Ln.expandByPoint(nn)):(Ln.expandByPoint(Vs.min),Ln.expandByPoint(Vs.max))}Ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(nn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)nn.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(e,c),nn.add(ns)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ki(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new Y,l[S]=new Y;const c=new Y,u=new Y,f=new Y,h=new Ue,d=new Ue,_=new Ue,y=new Y,m=new Y;function p(S,N,k){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,N),f.fromBufferAttribute(i,k),h.fromBufferAttribute(s,S),d.fromBufferAttribute(s,N),_.fromBufferAttribute(s,k),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const q=1/(d.x*_.y-_.x*d.y);isFinite(q)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(q),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(q),o[S].add(y),o[N].add(y),o[k].add(y),l[S].add(m),l[N].add(m),l[k].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let S=0,N=w.length;S<N;++S){const k=w[S],q=k.start,ae=k.count;for(let ie=q,V=q+ae;ie<V;ie+=3)p(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const I=new Y,M=new Y,P=new Y,D=new Y;function B(S){P.fromBufferAttribute(r,S),D.copy(P);const N=o[S];I.copy(N),I.sub(P.multiplyScalar(P.dot(N))).normalize(),M.crossVectors(D,N);const q=M.dot(l[S])<0?-1:1;a.setXYZW(S,I.x,I.y,I.z,q)}for(let S=0,N=w.length;S<N;++S){const k=w[S],q=k.start,ae=k.count;for(let ie=q,V=q+ae;ie<V;ie+=3)B(e.getX(ie+0)),B(e.getX(ie+1)),B(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ki(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new Ki(h,u,f)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new Y,nx=new Y,ix=new ut;class ki{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=hc.subVectors(i,t).cross(nx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(hc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ix.getNormalMatrix(e),r=this.coplanarPoint(hc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let rx=0;class bs extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=ia,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zp,this.blendDst=kp,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$l,this.stencilZFail=$l,this.stencilZPass=$l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ki().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fi=new Y,fc=new Y,to=new Y,no=new Y;class gl{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fc.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),no.copy(this.origin).sub(fc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(to),o=no.dot(this.direction),l=-no.dot(to),c=no.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const y=1/u;f*=y,h*=y,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(fc).addScaledVector(to,h),d}intersectSphere(e,t){if(e.radius<0)return null;Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,_=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=i.x-a.x,w=i.y-a.y,I=i.z-a.z,M=Math.abs(l),P=Math.abs(c),D=Math.abs(u);let B,S,N,k,q,ae,ie,V,Z,re,Q,pe;if(M>=P&&M>=D?(N=l,ae=f,Z=_,pe=p,l>=0?(B=c,S=u,k=h,q=d,ie=y,V=m,re=w,Q=I):(B=u,S=c,k=d,q=h,ie=m,V=y,re=I,Q=w)):P>=D?(N=c,ae=h,Z=y,pe=w,c>=0?(B=u,S=l,k=d,q=f,ie=m,V=_,re=I,Q=p):(B=l,S=u,k=f,q=d,ie=_,V=m,re=p,Q=I)):(N=u,ae=d,Z=m,pe=I,u>=0?(B=l,S=c,k=f,q=h,ie=_,V=y,re=p,Q=w):(B=c,S=l,k=h,q=f,ie=y,V=_,re=w,Q=p)),N===0)return null;const ue=B/N,ve=S/N,he=1/N,De=k-ue*ae,ke=q-ve*ae,rt=ie-ue*Z,it=V-ve*Z,et=re-ue*pe,me=Q-ve*pe,ce=et*it-me*rt,we=De*me-ke*et,Xe=rt*ke-it*De;if(r){if(ce<0||we<0||Xe<0)return null}else if((ce<0||we<0||Xe<0)&&(ce>0||we>0||Xe>0))return null;const Ne=ce+we+Xe;if(Ne===0)return null;const L=he*(ce*ae+we*Z+Xe*pe);return(Ne>0?L<0:L>0)?null:this.at(L/Ne,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sa extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=Vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cf=new Ft,Pr=new gl,io=new ml,Pf=new Y,ro=new Y,so=new Y,ao=new Y,dc=new Y,oo=new Y,Df=new Y,lo=new Y;class Nn extends cn{constructor(e=new _n,t=new sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){oo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(dc.fromBufferAttribute(f,e),a?oo.addScaledVector(dc,u):oo.addScaledVector(dc.sub(t),u))}t.add(oo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(io.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(io,Pf)===null||Pr.origin.distanceToSquared(Pf)>(e.far-e.near)**2))&&(Cf.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(Cf),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],p=a[m.materialIndex],w=Math.max(m.start,d.start),I=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,P=I;M<P;M+=3){const D=o.getX(M),B=o.getX(M+1),S=o.getX(M+2);r=co(this,p,e,i,c,u,f,D,B,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const w=o.getX(m),I=o.getX(m+1),M=o.getX(m+2);r=co(this,a,e,i,c,u,f,w,I,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],p=a[m.materialIndex],w=Math.max(m.start,d.start),I=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,P=I;M<P;M+=3){const D=M,B=M+1,S=M+2;r=co(this,p,e,i,c,u,f,D,B,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const w=m,I=m+1,M=m+2;r=co(this,a,e,i,c,u,f,w,I,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function sx(n,e,t,i,r,s,a,o){let l;if(e.side===Pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Vr,o),l===null)return null;lo.copy(o),lo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:n}}function co(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ro),n.getVertexPosition(l,so),n.getVertexPosition(c,ao);const u=sx(n,e,t,i,ro,so,ao,Df);if(u){const f=new Y;Hn.getBarycoord(Df,ro,so,ao,f),r&&(u.uv=Hn.getInterpolatedAttribute(r,o,l,c,f,new Ue)),s&&(u.uv1=Hn.getInterpolatedAttribute(s,o,l,c,f,new Ue)),a&&(u.normal=Hn.getInterpolatedAttribute(a,o,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Y,materialIndex:0};Hn.getNormal(ro,so,ao,h.normal),u.face=h,u.barycoord=f}return u}class ax extends En{constructor(e=null,t=1,i=1,r,s,a,o,l,c=ln,u=ln,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dr=new ml,ox=new Ue(.5,.5),uo=new Y;class ch{constructor(e=new ki,t=new ki,i=new ki,r=new ki,s=new ki,a=new ki){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],_=s[8],y=s[9],m=s[10],p=s[11],w=s[12],I=s[13],M=s[14],P=s[15];if(r[0].setComponents(c-a,d-u,p-_,P-w).normalize(),r[1].setComponents(c+a,d+u,p+_,P+w).normalize(),r[2].setComponents(c+o,d+f,p+y,P+I).normalize(),r[3].setComponents(c-o,d-f,p-y,P-I).normalize(),i)r[4].setComponents(l,h,m,M).normalize(),r[5].setComponents(c-l,d-h,p-m,P-M).normalize();else if(r[4].setComponents(c-l,d-h,p-m,P-M).normalize(),t===Si)r[5].setComponents(c+l,d+h,p+m,P+M).normalize();else if(t===xa)r[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const t=ox.distanceTo(e.center);return Dr.radius=.7071067811865476+t,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(uo.x=r.normal.x>0?e.max.x:e.min.x,uo.y=r.normal.y>0?e.max.y:e.min.y,uo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Io extends bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zo=new Y,Jo=new Y,Lf=new Ft,Hs=new gl,ho=new ml,pc=new Y,If=new Y;class uh extends cn{constructor(e=new _n,t=new Io){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Zo.fromBufferAttribute(t,r-1),Jo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Zo.distanceTo(Jo);e.setAttribute("lineDistance",new Yt(i,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(r),ho.radius+=s,e.ray.intersectsSphere(ho)===!1)return;Lf.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(Lf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=d,m=_-1;y<m;y+=c){const p=u.getX(y),w=u.getX(y+1),I=fo(this,e,Hs,l,p,w,y);I&&t.push(I)}if(this.isLineLoop){const y=u.getX(_-1),m=u.getX(d),p=fo(this,e,Hs,l,y,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=d,m=_-1;y<m;y+=c){const p=fo(this,e,Hs,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=fo(this,e,Hs,l,_-1,d,_-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fo(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Zo.fromBufferAttribute(o,r),Jo.fromBufferAttribute(o,s),t.distanceSqToSegment(Zo,Jo,pc,If)>i)return;pc.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(pc);if(!(c<e.near||c>e.far))return{distance:c,point:If.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Uf=new Y,Nf=new Y;class lx extends uh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Uf.fromBufferAttribute(t,r),Nf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Uf.distanceTo(Nf);e.setAttribute("lineDistance",new Yt(i,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cx extends uh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lm extends En{constructor(e=[],t=Hr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sa extends En{constructor(e,t,i=Ti,r,s,a,o=ln,l=ln,c,u=tr,f=1){if(u!==tr&&u!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ux extends Sa{constructor(e,t=Ti,i=Hr,r,s,a=ln,o=ln,l,c=tr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cm extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Da extends _n{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function _(y,m,p,w,I,M,P,D,B,S,N){const k=M/B,q=P/S,ae=M/2,ie=P/2,V=D/2,Z=B+1,re=S+1;let Q=0,pe=0;const ue=new Y;for(let ve=0;ve<re;ve++){const he=ve*q-ie;for(let De=0;De<Z;De++){const ke=De*k-ae;ue[y]=ke*w,ue[m]=he*I,ue[p]=V,c.push(ue.x,ue.y,ue.z),ue[y]=0,ue[m]=0,ue[p]=D>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(De/B),f.push(1-ve/S),Q+=1}}for(let ve=0;ve<S;ve++)for(let he=0;he<B;he++){const De=h+he+Z*ve,ke=h+he+Z*(ve+1),rt=h+(he+1)+Z*(ve+1),it=h+(he+1)+Z*ve;l.push(De,ke,it),l.push(ke,rt,it),pe+=6}o.addGroup(d,pe,N),d+=pe,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const po=new Y,mo=new Y,mc=new Y,go=new Hn;class hx extends _n{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(ra*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:m,c:p}=go;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),go.getNormal(mc),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let w=0;w<3;w++){const I=(w+1)%3,M=f[w],P=f[I],D=go[u[w]],B=go[u[I]],S=`${M}_${P}`,N=`${P}_${M}`;N in h&&h[N]?(mc.dot(h[N].normal)<=s&&(d.push(D.x,D.y,D.z),d.push(B.x,B.y,B.z)),h[N]=null):S in h||(h[S]={index0:c[w],index1:c[I],normal:mc.clone()})}}for(const _ in h)if(h[_]){const{index0:y,index1:m}=h[_];po.fromBufferAttribute(o,y),mo.fromBufferAttribute(o,m),d.push(po.x,po.y,po.z),d.push(mo.x,mo.y,mo.z)}this.setAttribute("position",new Yt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ot("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Ue:new Y);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new Y,r=[],s=[],a=[],o=new Y,l=new Ft;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new Y)}s[0]=new Y,a[0]=new Y;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(gt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(gt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hh extends Ri{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ue){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fx extends hh{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function fh(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,r(a,o,h,d)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const Of=new Y,Ff=new Y,gc=new fh,_c=new fh,vc=new fh;class dx extends Ri{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new Y){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Ff.subVectors(r[0],r[1]).add(r[0]),c=Ff);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Of.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Of),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),gc.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,y,m),_c.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,y,m),vc.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,y,m)}else this.curveType==="catmullrom"&&(gc.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),_c.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),vc.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(gc.calc(l),_c.calc(l),vc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Y().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bf(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function px(n,e){const t=1-n;return t*t*e}function mx(n,e){return 2*(1-n)*n*e}function gx(n,e){return n*n*e}function aa(n,e,t,i){return px(n,e)+mx(n,t)+gx(n,i)}function _x(n,e){const t=1-n;return t*t*t*e}function vx(n,e){const t=1-n;return 3*t*t*n*e}function xx(n,e){return 3*(1-n)*n*n*e}function Sx(n,e){return n*n*n*e}function oa(n,e,t,i,r){return _x(n,e)+vx(n,t)+xx(n,i)+Sx(n,r)}class um extends Ri{constructor(e=new Ue,t=new Ue,i=new Ue,r=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ue){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(oa(e,r.x,s.x,a.x,o.x),oa(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mx extends Ri{constructor(e=new Y,t=new Y,i=new Y,r=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Y){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(oa(e,r.x,s.x,a.x,o.x),oa(e,r.y,s.y,a.y,o.y),oa(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hm extends Ri{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yx extends Ri{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fm extends Ri{constructor(e=new Ue,t=new Ue,i=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ue){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(aa(e,r.x,s.x,a.x),aa(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bx extends Ri{constructor(e=new Y,t=new Y,i=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Y){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(aa(e,r.x,s.x,a.x),aa(e,r.y,s.y,a.y),aa(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dm extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(Bf(o,l.x,c.x,u.x,f.x),Bf(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ue().fromArray(r))}return this}}var Ru=Object.freeze({__proto__:null,ArcCurve:fx,CatmullRomCurve3:dx,CubicBezierCurve:um,CubicBezierCurve3:Mx,EllipseCurve:hh,LineCurve:hm,LineCurve3:yx,QuadraticBezierCurve:fm,QuadraticBezierCurve3:bx,SplineCurve:dm});class Ex extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ru[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Ru[r.type]().fromJSON(r))}return this}}class zf extends Ex{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new hm(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new fm(this.currentPoint.clone(),new Ue(e,t),new Ue(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new um(this.currentPoint.clone(),new Ue(e,t),new Ue(i,r),new Ue(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new dm(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new hh(e,t,i,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class jo extends zf{constructor(e){super(e),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new zf().fromJSON(r))}return this}}function Tx(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=pm(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=Px(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let u=o,f=l;for(let h=t;h<r;h+=t){const d=n[h],_=n[h+1];d<o&&(o=d),_<l&&(l=_),d>u&&(u=d),_>f&&(f=_)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Ma(s,a,t,o,l,c,0),a}function pm(n,e,t,i,r){let s;if(r===Vx(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=kf(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=kf(a/i|0,n[a],n[a+1],s);return s&&xs(s,s.next)&&(ba(s),s=s.next),s}function Wr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(xs(t,t.next)||Ht(t.prev,t,t.next)===0)){if(ba(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ma(n,e,t,i,r,s,a){if(!n)return;!a&&s&&Nx(n,i,r,s);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?wx(n,i,r,s):Ax(n)){e.push(l.i,n.i,c.i),ba(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Rx(Wr(n),e),Ma(n,e,t,i,r,s,2)):a===2&&Cx(n,e,t,i,r,s):Ma(Wr(n),e,t,i,r,s,1);break}}}function Ax(n){const e=n.prev,t=n,i=n.next;if(Ht(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(r,s,a),f=Math.min(o,l,c),h=Math.max(r,s,a),d=Math.max(o,l,c);let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&Ks(r,o,s,l,a,c,_.x,_.y)&&Ht(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function wx(n,e,t,i){const r=n.prev,s=n,a=n.next;if(Ht(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,f=s.y,h=a.y,d=Math.min(o,l,c),_=Math.min(u,f,h),y=Math.max(o,l,c),m=Math.max(u,f,h),p=Cu(d,_,e,t,i),w=Cu(y,m,e,t,i);let I=n.prevZ,M=n.nextZ;for(;I&&I.z>=p&&M&&M.z<=w;){if(I.x>=d&&I.x<=y&&I.y>=_&&I.y<=m&&I!==r&&I!==a&&Ks(o,u,l,f,c,h,I.x,I.y)&&Ht(I.prev,I,I.next)>=0||(I=I.prevZ,M.x>=d&&M.x<=y&&M.y>=_&&M.y<=m&&M!==r&&M!==a&&Ks(o,u,l,f,c,h,M.x,M.y)&&Ht(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;I&&I.z>=p;){if(I.x>=d&&I.x<=y&&I.y>=_&&I.y<=m&&I!==r&&I!==a&&Ks(o,u,l,f,c,h,I.x,I.y)&&Ht(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;M&&M.z<=w;){if(M.x>=d&&M.x<=y&&M.y>=_&&M.y<=m&&M!==r&&M!==a&&Ks(o,u,l,f,c,h,M.x,M.y)&&Ht(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Rx(n,e){let t=n;do{const i=t.prev,r=t.next.next;!xs(i,r)&&gm(i,t,t.next,r)&&ya(i,r)&&ya(r,i)&&(e.push(i.i,t.i,r.i),ba(t),ba(t.next),t=n=r),t=t.next}while(t!==n);return Wr(t)}function Cx(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bx(a,o)){let l=_m(a,o);a=Wr(a,a.next),l=Wr(l,l.next),Ma(a,e,t,i,r,s,0),Ma(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function Px(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=pm(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Fx(c))}r.sort(Dx);for(let s=0;s<r.length;s++)t=Lx(r[s],t);return t}function Dx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Lx(n,e){const t=Ix(n,e);if(!t)return e;const i=_m(t,n);return Wr(i,i.next),Wr(t,t.next)}function Ix(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(xs(n,t))return t;do{if(xs(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&mm(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);ya(t,n)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&Ux(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function Ux(n,e){return Ht(n.prev,n,e.prev)<0&&Ht(e.next,n,n.next)<0}function Nx(n,e,t,i){let r=n;do r.z===0&&(r.z=Cu(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Ox(r)}function Ox(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function Cu(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Fx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function mm(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Ks(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&mm(n,e,t,i,r,s,a,o)}function Bx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!zx(n,e)&&(ya(n,e)&&ya(e,n)&&kx(n,e)&&(Ht(n.prev,n,e.prev)||Ht(n,e.prev,e))||xs(n,e)&&Ht(n.prev,n,n.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function xs(n,e){return n.x===e.x&&n.y===e.y}function gm(n,e,t,i){const r=vo(Ht(n,e,t)),s=vo(Ht(n,e,i)),a=vo(Ht(t,i,n)),o=vo(Ht(t,i,e));return!!(r!==s&&a!==o||r===0&&_o(n,t,e)||s===0&&_o(n,i,e)||a===0&&_o(t,n,i)||o===0&&_o(t,e,i))}function _o(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function vo(n){return n>0?1:n<0?-1:0}function zx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&gm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ya(n,e){return Ht(n.prev,n,n.next)<0?Ht(n,e,n.next)>=0&&Ht(n,n.prev,e)>=0:Ht(n,e,n.prev)<0||Ht(n,n.next,e)<0}function kx(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function _m(n,e){const t=Pu(n.i,n.x,n.y),i=Pu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function kf(n,e,t,i){const r=Pu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ba(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Pu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vx(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Hx{static triangulate(e,t,i=2){return Tx(e,t,i)}}class Wi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Wi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Vf(e),Hf(i,e);let a=e.length;t.forEach(Vf);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Hf(i,t[l]);const o=Hx.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Vf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Hf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class dh extends _n{constructor(e=new jo([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Yt(r,3)),this.setAttribute("uv",new Yt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Gx;let I,M=!1,P,D,B,S;if(p){I=p.getSpacedPoints(u),M=!0,h=!1;const O=p.isCatmullRomCurve3?p.closed:!1;P=p.computeFrenetFrames(u,O),D=new Y,B=new Y,S=new Y}h||(m=0,d=0,_=0,y=0);const N=o.extractPoints(c);let k=N.shape;const q=N.holes;if(!Wi.isClockWise(k)){k=k.reverse();for(let O=0,W=q.length;O<W;O++){const X=q[O];Wi.isClockWise(X)&&(q[O]=X.reverse())}}function ie(O){const X=10000000000000001e-36;let G=O[0];for(let te=1;te<=O.length;te++){const ge=te%O.length,fe=O[ge],ne=fe.x-G.x,Te=fe.y-G.y,R=ne*ne+Te*Te,Re=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(G.x),Math.abs(G.y)),Le=X*Re*Re;if(R<=Le){O.splice(ge,1),te--;continue}G=fe}}ie(k),q.forEach(ie);const V=q.length,Z=k;for(let O=0;O<V;O++){const W=q[O];k=k.concat(W)}function re(O,W,X){return W||Mt("ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(W,X)}const Q=k.length;function pe(O,W,X){let G,te,ge;const fe=O.x-W.x,ne=O.y-W.y,Te=X.x-O.x,R=X.y-O.y,Re=fe*fe+ne*ne,Le=fe*R-ne*Te;if(Math.abs(Le)>Number.EPSILON){const T=Math.sqrt(Re),g=Math.sqrt(Te*Te+R*R),F=W.x-ne/T,J=W.y+fe/T,se=X.x-R/g,Ae=X.y+Te/g,Ce=((se-F)*R-(Ae-J)*Te)/(fe*R-ne*Te);G=F+fe*Ce-O.x,te=J+ne*Ce-O.y;const ee=G*G+te*te;if(ee<=2)return new Ue(G,te);ge=Math.sqrt(ee/2)}else{let T=!1;fe>Number.EPSILON?Te>Number.EPSILON&&(T=!0):fe<-Number.EPSILON?Te<-Number.EPSILON&&(T=!0):Math.sign(ne)===Math.sign(R)&&(T=!0),T?(G=-ne,te=fe,ge=Math.sqrt(Re)):(G=fe,te=ne,ge=Math.sqrt(Re/2))}return new Ue(G/ge,te/ge)}const ue=[];for(let O=0,W=Z.length,X=W-1,G=O+1;O<W;O++,X++,G++)X===W&&(X=0),G===W&&(G=0),ue[O]=pe(Z[O],Z[X],Z[G]);const ve=[];let he,De=ue.concat();for(let O=0,W=V;O<W;O++){const X=q[O];he=[];for(let G=0,te=X.length,ge=te-1,fe=G+1;G<te;G++,ge++,fe++)ge===te&&(ge=0),fe===te&&(fe=0),he[G]=pe(X[G],X[ge],X[fe]);ve.push(he),De=De.concat(he)}let ke;if(m===0)ke=Wi.triangulateShape(Z,q);else{const O=[],W=[];for(let X=0;X<m;X++){const G=X/m,te=d*Math.cos(G*Math.PI/2),ge=_*Math.sin(G*Math.PI/2)+y;for(let fe=0,ne=Z.length;fe<ne;fe++){const Te=re(Z[fe],ue[fe],ge);we(Te.x,Te.y,-te),G===0&&O.push(Te)}for(let fe=0,ne=V;fe<ne;fe++){const Te=q[fe];he=ve[fe];const R=[];for(let Re=0,Le=Te.length;Re<Le;Re++){const T=re(Te[Re],he[Re],ge);we(T.x,T.y,-te),G===0&&R.push(T)}G===0&&W.push(R)}}ke=Wi.triangulateShape(O,W)}const rt=ke.length,it=_+y;for(let O=0;O<Q;O++){const W=h?re(k[O],De[O],it):k[O];M?(B.copy(P.normals[0]).multiplyScalar(W.x),D.copy(P.binormals[0]).multiplyScalar(W.y),S.copy(I[0]).add(B).add(D),we(S.x,S.y,S.z)):we(W.x,W.y,0)}for(let O=1;O<=u;O++)for(let W=0;W<Q;W++){const X=h?re(k[W],De[W],it):k[W];M?(B.copy(P.normals[O]).multiplyScalar(X.x),D.copy(P.binormals[O]).multiplyScalar(X.y),S.copy(I[O]).add(B).add(D),we(S.x,S.y,S.z)):we(X.x,X.y,f/u*O)}for(let O=m-1;O>=0;O--){const W=O/m,X=d*Math.cos(W*Math.PI/2),G=_*Math.sin(W*Math.PI/2)+y;for(let te=0,ge=Z.length;te<ge;te++){const fe=re(Z[te],ue[te],G);we(fe.x,fe.y,f+X)}for(let te=0,ge=q.length;te<ge;te++){const fe=q[te];he=ve[te];for(let ne=0,Te=fe.length;ne<Te;ne++){const R=re(fe[ne],he[ne],G);M?we(R.x,R.y+I[u-1].y,I[u-1].x+X):we(R.x,R.y,f+X)}}}et(),me();function et(){const O=r.length/3;if(h){let W=0,X=Q*W;for(let G=0;G<rt;G++){const te=ke[G];Xe(te[2]+X,te[1]+X,te[0]+X)}W=u+m*2,X=Q*W;for(let G=0;G<rt;G++){const te=ke[G];Xe(te[0]+X,te[1]+X,te[2]+X)}}else{for(let W=0;W<rt;W++){const X=ke[W];Xe(X[2],X[1],X[0])}for(let W=0;W<rt;W++){const X=ke[W];Xe(X[0]+Q*u,X[1]+Q*u,X[2]+Q*u)}}i.addGroup(O,r.length/3-O,0)}function me(){const O=r.length/3;let W=0;ce(Z,W),W+=Z.length;for(let X=0,G=q.length;X<G;X++){const te=q[X];ce(te,W),W+=te.length}i.addGroup(O,r.length/3-O,1)}function ce(O,W){let X=O.length;for(;--X>=0;){const G=X;let te=X-1;te<0&&(te=O.length-1);for(let ge=0,fe=u+m*2;ge<fe;ge++){const ne=Q*ge,Te=Q*(ge+1),R=W+G+ne,Re=W+te+ne,Le=W+te+Te,T=W+G+Te;Ne(R,Re,Le,T)}}}function we(O,W,X){l.push(O),l.push(W),l.push(X)}function Xe(O,W,X){L(O),L(W),L(X);const G=r.length/3,te=w.generateTopUV(i,r,G-3,G-2,G-1);z(te[0]),z(te[1]),z(te[2])}function Ne(O,W,X,G){L(O),L(W),L(G),L(W),L(X),L(G);const te=r.length/3,ge=w.generateSideWallUV(i,r,te-6,te-3,te-2,te-1);z(ge[0]),z(ge[1]),z(ge[3]),z(ge[1]),z(ge[2]),z(ge[3])}function L(O){r.push(l[O*3+0]),r.push(l[O*3+1]),r.push(l[O*3+2])}function z(O){s.push(O.x),s.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Wx(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ru[r.type]().fromJSON(r)),new dh(i,e.options)}}const Gx={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Ue(s,a),new Ue(o,l),new Ue(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],_=e[r*3+2],y=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Ue(a,1-l),new Ue(c,1-f),new Ue(h,1-_),new Ue(y,1-p)]:[new Ue(o,1-l),new Ue(u,1-f),new Ue(d,1-_),new Ue(m,1-p)]}};function Wx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class _l extends _n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],y=[],m=[];for(let p=0;p<u;p++){const w=p*h-a;for(let I=0;I<c;I++){const M=I*f-s;_.push(M,-w,0),y.push(0,0,1),m.push(I/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const I=w+c*p,M=w+c*(p+1),P=w+1+c*(p+1),D=w+1+c*p;d.push(I,M,D),d.push(M,P,D)}this.setIndex(d),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.widthSegments,e.heightSegments)}}class ph extends _n{constructor(e=new jo([new Ue(0,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(s,3)),this.setAttribute("uv",new Yt(a,2));function c(u){const f=r.length/3,h=u.extractPoints(t);let d=h.shape;const _=h.holes;Wi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=_.length;m<p;m++){const w=_[m];Wi.isClockWise(w)===!0&&(_[m]=w.reverse())}const y=Wi.triangulateShape(d,_);for(let m=0,p=_.length;m<p;m++){const w=_[m];d=d.concat(w)}for(let m=0,p=d.length;m<p;m++){const w=d[m];r.push(w.x,w.y,0),s.push(0,0,1),a.push(w.x,w.y)}for(let m=0,p=y.length;m<p;m++){const w=y[m],I=w[0]+f,M=w[1]+f,P=w[2]+f;i.push(I,M,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Xx(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new ph(i,e.curveSegments)}}function Xx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Qo extends _n{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new Y,h=new Y,d=[],_=[],y=[],m=[];for(let p=0;p<=i;p++){const w=[],I=p/i,M=a+I*o,P=e*Math.cos(M),D=Math.sqrt(e*e-P*P);let B=0;p===0&&a===0?B=.5/t:p===i&&l===Math.PI&&(B=-.5/t);for(let S=0;S<=t;S++){const N=S/t,k=r+N*s;f.x=-D*Math.cos(k),f.y=P,f.z=D*Math.sin(k),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(N+B,1-I),w.push(c++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const I=u[p][w+1],M=u[p][w],P=u[p+1][w],D=u[p+1][w+1];(p!==0||a>0)&&d.push(I,M,D),(p!==i-1||l<Math.PI)&&d.push(M,P,D)}this.setIndex(d),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ss(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Gf(r))r.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Gf(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Mn(n){const e={};for(let t=0;t<n.length;t++){const i=Ss(n[t]);for(const r in i)e[r]=i[r]}return e}function Gf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $x(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const qx={clone:Ss,merge:Mn};var Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yx,this.fragmentShader=Kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=$x(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new St().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ft().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Zx extends wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jx extends bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jx extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qx extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xm extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const xc=new Ft,Wf=new Y,Xf=new Y;class eS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ch,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wf),Xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(xc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===xa||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xo=new Y,So=new xr,ui=new Y;class Sm extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xo,So,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,So,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(xo,So,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,So,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new Y,$f=new Ue,qf=new Ue;class ei extends Sm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wu*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,t){return this.getViewBounds(e,$f,qf),t.subVectors(qf,$f)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ra*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class vl extends Sm{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tS extends eS{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nS extends xm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new tS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class iS extends xm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const is=-90,rs=1;class rS extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ei(is,rs,e,t);r.layers=this.layers,this.add(r);const s=new ei(is,rs,e,t);s.layers=this.layers,this.add(s);const a=new ei(is,rs,e,t);a.layers=this.layers,this.add(a);const o=new ei(is,rs,e,t);o.layers=this.layers,this.add(o);const l=new ei(is,rs,e,t);l.layers=this.layers,this.add(l);const c=new ei(is,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class sS extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yf=new Ft;class aS{constructor(e,t,i=0,r=1/0){this.ray=new gl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yf),this}intersectObject(e,t=!0,i=[]){return Du(e,this,i,t),i.sort(Kf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Du(e[r],this,i,t);return i.sort(Kf),i}}function Kf(n,e){return n.distance-e.distance}function Du(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Du(s[a],e,t,!0)}}class Zf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mm{static{Mm.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}}class oS extends Mr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jf(n,e,t,i){const r=lS(i);switch(t){case em:return n*e;case nm:return n*e/r.components*r.byteLength;case nh:return n*e/r.components*r.byteLength;case Gr:return n*e*2/r.components*r.byteLength;case ih:return n*e*2/r.components*r.byteLength;case tm:return n*e*3/r.components*r.byteLength;case ti:return n*e*4/r.components*r.byteLength;case rh:return n*e*4/r.components*r.byteLength;case Co:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jc:case Qc:return Math.max(n,16)*Math.max(e,8)/4;case Zc:case jc:return Math.max(n,8)*Math.max(e,8)/2;case eu:case tu:case iu:case ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nu:case Xo:case su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ou:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case uu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case du:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case mu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _u:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Su:case Mu:case yu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bu:case Eu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $o:case Tu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lS(n){switch(n){case In:case Zp:return{byteLength:1,components:1};case _a:case Jp:case Ai:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case Ti:case Qu:case xi:return{byteLength:4,components:1};case jp:case Qp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ju}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ju);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ym(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function cS(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],y=f[d];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const y=f[d];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var uS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hS=`#ifdef USE_ALPHAHASH
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
#endif`,fS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gS=`#ifdef USE_AOMAP
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
#endif`,_S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vS=`#ifdef USE_BATCHING
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
#endif`,xS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bS=`#ifdef USE_IRIDESCENCE
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
#endif`,ES=`#ifdef USE_BUMPMAP
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
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,PS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,DS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,LS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,IS=`#define PI 3.141592653589793
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
} // validated`,US=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NS=`vec3 transformedNormal = objectNormal;
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
#endif`,OS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kS="gl_FragColor = linearToOutputTexel( gl_FragColor );",VS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HS=`#ifdef USE_ENVMAP
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
#endif`,GS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
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
#endif`,XS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$S=`#ifdef USE_ENVMAP
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
#endif`,qS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JS=`#ifdef USE_GRADIENTMAP
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
}`,jS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oM=`PhysicalMaterial material;
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
#endif`,lM=`uniform sampler2D dfgLUT;
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
}`,cM=`
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
#endif`,uM=`#if defined( RE_IndirectDiffuse )
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
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,dM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SM=`#if defined( USE_POINTS_UV )
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
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`#ifdef USE_MORPHTARGETS
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
#endif`,wM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,IM=`#ifdef USE_NORMALMAP
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
#endif`,UM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KM=`float getShadowMask() {
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
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JM=`#ifdef USE_SKINNING
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
#endif`,jM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QM=`#ifdef USE_SKINNING
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
#endif`,ey=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ty=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ry=`#ifdef USE_TRANSMISSION
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
#endif`,sy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hy=`uniform sampler2D t2D;
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`#include <common>
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
}`,_y=`#if DEPTH_PACKING == 3200
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
}`,vy=`#define DISTANCE
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
}`,xy=`#define DISTANCE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,My=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`uniform float scale;
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
}`,by=`uniform vec3 diffuse;
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
}`,Ey=`#include <common>
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
}`,Ty=`uniform vec3 diffuse;
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
}`,Ay=`#define LAMBERT
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
}`,wy=`#define LAMBERT
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
}`,Ry=`#define MATCAP
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
}`,Cy=`#define MATCAP
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
}`,Py=`#define NORMAL
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
}`,Dy=`#define NORMAL
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
}`,Ly=`#define PHONG
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
}`,Iy=`#define PHONG
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
}`,Uy=`#define STANDARD
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
}`,Ny=`#define STANDARD
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
}`,Oy=`#define TOON
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
}`,Fy=`#define TOON
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
}`,By=`uniform float size;
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
}`,zy=`uniform vec3 diffuse;
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
}`,ky=`#include <common>
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
}`,Vy=`uniform vec3 color;
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
}`,Hy=`uniform float rotation;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:uS,alphahash_pars_fragment:hS,alphamap_fragment:fS,alphamap_pars_fragment:dS,alphatest_fragment:pS,alphatest_pars_fragment:mS,aomap_fragment:gS,aomap_pars_fragment:_S,batching_pars_vertex:vS,batching_vertex:xS,begin_vertex:SS,beginnormal_vertex:MS,bsdfs:yS,iridescence_fragment:bS,bumpmap_pars_fragment:ES,clipping_planes_fragment:TS,clipping_planes_pars_fragment:AS,clipping_planes_pars_vertex:wS,clipping_planes_vertex:RS,color_fragment:CS,color_pars_fragment:PS,color_pars_vertex:DS,color_vertex:LS,common:IS,cube_uv_reflection_fragment:US,defaultnormal_vertex:NS,displacementmap_pars_vertex:OS,displacementmap_vertex:FS,emissivemap_fragment:BS,emissivemap_pars_fragment:zS,colorspace_fragment:kS,colorspace_pars_fragment:VS,envmap_fragment:HS,envmap_common_pars_fragment:GS,envmap_pars_fragment:WS,envmap_pars_vertex:XS,envmap_physical_pars_fragment:nM,envmap_vertex:$S,fog_vertex:qS,fog_pars_vertex:YS,fog_fragment:KS,fog_pars_fragment:ZS,gradientmap_pars_fragment:JS,lightmap_pars_fragment:jS,lights_lambert_fragment:QS,lights_lambert_pars_fragment:eM,lights_pars_begin:tM,lights_toon_fragment:iM,lights_toon_pars_fragment:rM,lights_phong_fragment:sM,lights_phong_pars_fragment:aM,lights_physical_fragment:oM,lights_physical_pars_fragment:lM,lights_fragment_begin:cM,lights_fragment_maps:uM,lights_fragment_end:hM,lightprobes_pars_fragment:fM,logdepthbuf_fragment:dM,logdepthbuf_pars_fragment:pM,logdepthbuf_pars_vertex:mM,logdepthbuf_vertex:gM,map_fragment:_M,map_pars_fragment:vM,map_particle_fragment:xM,map_particle_pars_fragment:SM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:yM,morphinstance_vertex:bM,morphcolor_vertex:EM,morphnormal_vertex:TM,morphtarget_pars_vertex:AM,morphtarget_vertex:wM,normal_fragment_begin:RM,normal_fragment_maps:CM,normal_pars_fragment:PM,normal_pars_vertex:DM,normal_vertex:LM,normalmap_pars_fragment:IM,clearcoat_normal_fragment_begin:UM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:OM,iridescence_pars_fragment:FM,opaque_fragment:BM,packing:zM,premultiplied_alpha_fragment:kM,project_vertex:VM,dithering_fragment:HM,dithering_pars_fragment:GM,roughnessmap_fragment:WM,roughnessmap_pars_fragment:XM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:qM,shadowmap_vertex:YM,shadowmask_pars_fragment:KM,skinbase_vertex:ZM,skinning_pars_vertex:JM,skinning_vertex:jM,skinnormal_vertex:QM,specularmap_fragment:ey,specularmap_pars_fragment:ty,tonemapping_fragment:ny,tonemapping_pars_fragment:iy,transmission_fragment:ry,transmission_pars_fragment:sy,uv_pars_fragment:ay,uv_pars_vertex:oy,uv_vertex:ly,worldpos_vertex:cy,background_vert:uy,background_frag:hy,backgroundCube_vert:fy,backgroundCube_frag:dy,cube_vert:py,cube_frag:my,depth_vert:gy,depth_frag:_y,distance_vert:vy,distance_frag:xy,equirect_vert:Sy,equirect_frag:My,linedashed_vert:yy,linedashed_frag:by,meshbasic_vert:Ey,meshbasic_frag:Ty,meshlambert_vert:Ay,meshlambert_frag:wy,meshmatcap_vert:Ry,meshmatcap_frag:Cy,meshnormal_vert:Py,meshnormal_frag:Dy,meshphong_vert:Ly,meshphong_frag:Iy,meshphysical_vert:Uy,meshphysical_frag:Ny,meshtoon_vert:Oy,meshtoon_frag:Fy,points_vert:By,points_frag:zy,shadow_vert:ky,shadow_frag:Vy,sprite_vert:Hy,sprite_frag:Gy},Ge={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},mi={basic:{uniforms:Mn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Mn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Mn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Mn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Mn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Mn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Mn([Ge.points,Ge.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Mn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Mn([Ge.common,Ge.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Mn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Mn([Ge.sprite,Ge.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Mn([Ge.common,Ge.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Mn([Ge.lights,Ge.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};mi.physical={uniforms:Mn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Mo={r:0,b:0,g:0},Wy=new Ft,bm=new ut;bm.set(-1,0,0,0,1,0,0,0,1);function Xy(n,e,t,i,r,s){const a=new St(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function d(w){let I=w.isScene===!0?w.background:null;if(I&&I.isTexture){const M=w.backgroundBlurriness>0;I=e.get(I,M)}return I}function _(w){let I=!1;const M=d(w);M===null?m(a,o):M&&M.isColor&&(m(M,1),I=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(w,I){const M=d(I);M&&(M.isCubeTexture||M.mapping===pl)?(c===void 0&&(c=new Nn(new Da(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Ss(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,D,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(I.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bm),c.material.toneMapped=xt.getTransfer(M.colorSpace)!==Ct,(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Nn(new _l(2,2),new wi({name:"BackgroundMaterial",uniforms:Ss(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=xt.getTransfer(M.colorSpace)!==Ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,I){w.getRGB(Mo,vm(n)),t.buffers.color.setClear(Mo.r,Mo.g,Mo.b,I,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,I=1){a.set(w),o=I,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:_,addToRenderList:y,dispose:p}}function $y(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(q,ae,ie,V,Z){let re=!1;const Q=f(q,V,ie,ae);s!==Q&&(s=Q,c(s.object)),re=d(q,V,ie,Z),re&&_(q,V,ie,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,M(q,ae,ie,V),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(q){return n.bindVertexArray(q)}function u(q){return n.deleteVertexArray(q)}function f(q,ae,ie,V){const Z=V.wireframe===!0;let re=i[ae.id];re===void 0&&(re={},i[ae.id]=re);const Q=q.isInstancedMesh===!0?q.id:0;let pe=re[Q];pe===void 0&&(pe={},re[Q]=pe);let ue=pe[ie.id];ue===void 0&&(ue={},pe[ie.id]=ue);let ve=ue[Z];return ve===void 0&&(ve=h(l()),ue[Z]=ve),ve}function h(q){const ae=[],ie=[],V=[];for(let Z=0;Z<t;Z++)ae[Z]=0,ie[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ae,enabledAttributes:ie,attributeDivisors:V,object:q,attributes:{},index:null}}function d(q,ae,ie,V){const Z=s.attributes,re=ae.attributes;let Q=0;const pe=ie.getAttributes();for(const ue in pe)if(pe[ue].location>=0){const he=Z[ue];let De=re[ue];if(De===void 0&&(ue==="instanceMatrix"&&q.instanceMatrix&&(De=q.instanceMatrix),ue==="instanceColor"&&q.instanceColor&&(De=q.instanceColor)),he===void 0||he.attribute!==De||De&&he.data!==De.data)return!0;Q++}return s.attributesNum!==Q||s.index!==V}function _(q,ae,ie,V){const Z={},re=ae.attributes;let Q=0;const pe=ie.getAttributes();for(const ue in pe)if(pe[ue].location>=0){let he=re[ue];he===void 0&&(ue==="instanceMatrix"&&q.instanceMatrix&&(he=q.instanceMatrix),ue==="instanceColor"&&q.instanceColor&&(he=q.instanceColor));const De={};De.attribute=he,he&&he.data&&(De.data=he.data),Z[ue]=De,Q++}s.attributes=Z,s.attributesNum=Q,s.index=V}function y(){const q=s.newAttributes;for(let ae=0,ie=q.length;ae<ie;ae++)q[ae]=0}function m(q){p(q,0)}function p(q,ae){const ie=s.newAttributes,V=s.enabledAttributes,Z=s.attributeDivisors;ie[q]=1,V[q]===0&&(n.enableVertexAttribArray(q),V[q]=1),Z[q]!==ae&&(n.vertexAttribDivisor(q,ae),Z[q]=ae)}function w(){const q=s.newAttributes,ae=s.enabledAttributes;for(let ie=0,V=ae.length;ie<V;ie++)ae[ie]!==q[ie]&&(n.disableVertexAttribArray(ie),ae[ie]=0)}function I(q,ae,ie,V,Z,re,Q){Q===!0?n.vertexAttribIPointer(q,ae,ie,Z,re):n.vertexAttribPointer(q,ae,ie,V,Z,re)}function M(q,ae,ie,V){y();const Z=V.attributes,re=ie.getAttributes(),Q=ae.defaultAttributeValues;for(const pe in re){const ue=re[pe];if(ue.location>=0){let ve=Z[pe];if(ve===void 0&&(pe==="instanceMatrix"&&q.instanceMatrix&&(ve=q.instanceMatrix),pe==="instanceColor"&&q.instanceColor&&(ve=q.instanceColor)),ve!==void 0){const he=ve.normalized,De=ve.itemSize,ke=e.get(ve);if(ke===void 0)continue;const rt=ke.buffer,it=ke.type,et=ke.bytesPerElement,me=it===n.INT||it===n.UNSIGNED_INT||ve.gpuType===Qu;if(ve.isInterleavedBufferAttribute){const ce=ve.data,we=ce.stride,Xe=ve.offset;if(ce.isInstancedInterleavedBuffer){for(let Ne=0;Ne<ue.locationSize;Ne++)p(ue.location+Ne,ce.meshPerAttribute);q.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<ue.locationSize;Ne++)m(ue.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let Ne=0;Ne<ue.locationSize;Ne++)I(ue.location+Ne,De/ue.locationSize,it,he,we*et,(Xe+De/ue.locationSize*Ne)*et,me)}else{if(ve.isInstancedBufferAttribute){for(let ce=0;ce<ue.locationSize;ce++)p(ue.location+ce,ve.meshPerAttribute);q.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ce=0;ce<ue.locationSize;ce++)m(ue.location+ce);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let ce=0;ce<ue.locationSize;ce++)I(ue.location+ce,De/ue.locationSize,it,he,De*et,De/ue.locationSize*ce*et,me)}}else if(Q!==void 0){const he=Q[pe];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(ue.location,he);break;case 3:n.vertexAttrib3fv(ue.location,he);break;case 4:n.vertexAttrib4fv(ue.location,he);break;default:n.vertexAttrib1fv(ue.location,he)}}}}w()}function P(){N();for(const q in i){const ae=i[q];for(const ie in ae){const V=ae[ie];for(const Z in V){const re=V[Z];for(const Q in re)u(re[Q].object),delete re[Q];delete V[Z]}}delete i[q]}}function D(q){if(i[q.id]===void 0)return;const ae=i[q.id];for(const ie in ae){const V=ae[ie];for(const Z in V){const re=V[Z];for(const Q in re)u(re[Q].object),delete re[Q];delete V[Z]}}delete i[q.id]}function B(q){for(const ae in i){const ie=i[ae];for(const V in ie){const Z=ie[V];if(Z[q.id]===void 0)continue;const re=Z[q.id];for(const Q in re)u(re[Q].object),delete re[Q];delete Z[q.id]}}}function S(q){for(const ae in i){const ie=i[ae],V=q.isInstancedMesh===!0?q.id:0,Z=ie[V];if(Z!==void 0){for(const re in Z){const Q=Z[re];for(const pe in Q)u(Q[pe].object),delete Q[pe];delete Z[re]}delete ie[V],Object.keys(ie).length===0&&delete i[ae]}}}function N(){k(),a=!0,s!==r&&(s=r,c(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:k,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:S,releaseStatesOfProgram:B,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function qy(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Yy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(B){return!(B!==ti&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(B){const S=B===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==In&&B!==xi&&!S&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ot("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:I,maxFragmentUniforms:M,maxSamples:P,samples:D}}function Ky(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ki,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,I=w*4;let M=p.clippingState||null;l.value=M,M=u(_,h,I,d);for(let P=0;P!==I;++P)M[P]=t[P];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const p=d+y*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let I=0,M=d;I!==y;++I,M+=4)a.copy(f[I]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const us=4,Zy=6,Jy=20,jy=256,Gs=new vl,jf=new St;let Sc=null,Mc=0,yc=0,bc=!1;const Qy=new Y,Lr=new Y;class Qf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Qy}=s;Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Mc,yc),this._renderer.xr.enabled=bc,e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hr||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Ai,format:ti,colorSpace:qo,depthBuffer:!1},r=ed(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=eb(s)),this._blurMaterial=nb(s,e,t),this._ggxMaterial=tb(s,e,t)}return r}_compileMaterial(e){const t=new Nn(new _n,e);this._renderer.compile(t,Gs)}_sceneToCubeUV(e,t,i,r,s){const l=new ei(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(jf),f.toneMapping=yi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nn(new Da,new sa({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(jf),p=!0);for(let I=0;I<6;I++){const M=I%3;M===0?(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[I],s.y,s.z)):M===1?(l.up.set(0,0,c[I]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[I],s.z)):(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[I]));const P=this._cubeSize;ss(r,M*P,I>2?P:0,P,P),f.setRenderTarget(r),p&&f.render(y,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Hr||e.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Gs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:_}=this,y=this._sizeLods[i],m=3*y*(i>_-us?i-_+us:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,ss(s,m,p,3*y,2*y),r.setRenderTarget(s),r.render(o,Gs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,ss(e,m,p,3*y,2*y),r.setRenderTarget(e),r.render(o,Gs)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-us?r-this._lodMax+us:0),h=4*(this._cubeSize-u);ss(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Gs)}}function eb(n){const e=[],t=[];let i=n;const r=n-us+1+Zy;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,_=new Float32Array(d*h*f),y=new Float32Array(d*h*f);for(let p=0;p<f;p++){const w=p%3*2/3-1,I=p>2?0:-1,M=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];_.set(M,d*h*p);for(let P=0;P<h;P++){const D=u[P*2]*2-1,B=u[P*2+1]*2-1;p===0?Lr.set(1,B,D):p===1?Lr.set(-D,1,-B):p===2?Lr.set(-D,B,1):p===3?Lr.set(-1,B,-D):p===4?Lr.set(-D,-1,B):Lr.set(D,B,-1),Lr.toArray(y,(p*h+P)*d)}}const m=new _n;m.setAttribute("position",new Ki(_,d)),m.setAttribute("outputDirection",new Ki(y,d)),t.push(new Nn(m,null)),i>us&&i--}return{lodMeshes:t,sizeLods:e}}function ed(n,e,t){const i=new ri(n,e,t);return i.texture.mapping=pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function tb(n,e,t){return new wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function nb(n,e,t){return new wi({name:"SphericalGaussianBlur",defines:{SAMPLES:Jy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function td(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function nd(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Em extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Da(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:qi});s.uniforms.tEquirect.value=t;const a=new Nn(r,s),o=t.minFilter;return t.minFilter===Or&&(t.minFilter=mn),new rS(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function ib(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Gl||d===Wl)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const y=new Em(_.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,_=d===Gl||d===Wl,y=d===Hr||d===vs;if(_||y){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Qf(n)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const w=h.image;return _&&w&&w.height>0||y&&w&&l(w)?(i===null&&(i=new Qf(n)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Gl?h.mapping=Hr:d===Wl&&(h.mapping=vs),h}function l(h){let d=0;const _=6;for(let y=0;y<_;y++)h[y]!==void 0&&d++;return d===_}function c(h){const d=h.target;d.removeEventListener("dispose",c);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function rb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ps("WebGLRenderer: "+i+" extension not supported."),r}}}function sb(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let y=0;if(_===void 0)return;if(d!==null){const w=d.array;y=d.version;for(let I=0,M=w.length;I<M;I+=3){const P=w[I+0],D=w[I+1],B=w[I+2];h.push(P,D,D,B,B,P)}}else{const w=_.array;y=_.version;for(let I=0,M=w.length/3-1;I<M;I+=3){const P=I+0,D=I+1,B=I+2;h.push(P,D,D,B,B,P)}}const m=new(_.count>=65535?om:am)(h,1);m.version=y;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ab(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*a),t.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,s,f*a,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,d);let y=0;for(let m=0;m<d;m++)y+=h[m];t.update(y,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ob(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Mt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lb(n,e,t){const i=new WeakMap,r=new Vt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let N=function(){B.dispose(),i.delete(o),o.removeEventListener("dispose",N)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let I=0;d===!0&&(I=1),_===!0&&(I=2),y===!0&&(I=3);let M=o.attributes.position.count*I,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const D=new Float32Array(M*P*4*f),B=new rm(D,M,P,f);B.type=xi,B.needsUpdate=!0;const S=I*4;for(let k=0;k<f;k++){const q=m[k],ae=p[k],ie=w[k],V=M*P*4*k;for(let Z=0;Z<q.count;Z++){const re=Z*S;d===!0&&(r.fromBufferAttribute(q,Z),D[V+re+0]=r.x,D[V+re+1]=r.y,D[V+re+2]=r.z,D[V+re+3]=0),_===!0&&(r.fromBufferAttribute(ae,Z),D[V+re+4]=r.x,D[V+re+5]=r.y,D[V+re+6]=r.z,D[V+re+7]=0),y===!0&&(r.fromBufferAttribute(ie,Z),D[V+re+8]=r.x,D[V+re+9]=r.y,D[V+re+10]=r.z,D[V+re+11]=ie.itemSize===4?r.w:1)}}h={count:f,texture:B,size:new Ue(M,P)},i.set(o,h),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function cb(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const ub={[Hp]:"LINEAR_TONE_MAPPING",[Gp]:"REINHARD_TONE_MAPPING",[Wp]:"CINEON_TONE_MAPPING",[Xp]:"ACES_FILMIC_TONE_MAPPING",[qp]:"AGX_TONE_MAPPING",[Yp]:"NEUTRAL_TONE_MAPPING",[$p]:"CUSTOM_TONE_MAPPING"};function hb(n,e,t,i,r,s){const a=new ri(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new _n;c.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const u=new Zx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Nn(c,u),h=new vl(-1,1,1,-1,0,1);let d=null,_=null,y=!1,m,p=null,w=[],I=!1;this.setSize=function(M,P){a.setSize(M,P),o!==null&&o.setSize(M,P),l!==null&&l.setSize(M,P);for(let D=0;D<w.length;D++){const B=w[D];B.setSize&&B.setSize(M,P)}},this.setEffects=function(M){w=M,I=w.length>0&&w[0].isRenderPass===!0;const P=a.width,D=a.height;w.length>0&&o===null&&(o=new ri(P,D,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),l=new ri(P,D,{type:Ai,depthBuffer:!1,stencilBuffer:!1}));for(let B=0;B<w.length;B++){const S=w[B];S.setSize&&S.setSize(P,D)}},this.begin=function(M,P){if(y||M.toneMapping===yi&&w.length===0)return!1;if(p=P,P!==null){const D=P.width,B=P.height;(a.width!==D||a.height!==B)&&this.setSize(D,B)}return I===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=yi,!0},this.hasRenderPass=function(){return I},this.end=function(M,P){M.toneMapping=m,y=!0;let D=a,B=o;for(let S=0;S<w.length;S++){const N=w[S];N.enabled!==!1&&(N.render(M,B,D,P),N.needsSwap!==!1&&(D=B,B=B===o?l:o))}if(d!==M.outputColorSpace||_!==M.toneMapping){d=M.outputColorSpace,_=M.toneMapping,u.defines={},xt.getTransfer(d)===Ct&&(u.defines.SRGB_TRANSFER="");const S=ub[_];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=D.texture,M.setRenderTarget(p),M.render(f,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Tm=new En,Lu=new Sa(1,1),Am=new rm,wm=new W0,Rm=new lm,id=[],rd=[],sd=new Float32Array(16),ad=new Float32Array(9),od=new Float32Array(4);function Es(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=id[r];if(s===void 0&&(s=new Float32Array(r),id[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sl(n,e){let t=rd[e];t===void 0&&(t=new Int32Array(e),rd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Qt(t,e)}}function pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Qt(t,e)}}function mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Qt(t,e)}}function gb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;od.set(i),n.uniformMatrix2fv(this.addr,!1,od),Qt(t,i)}}function _b(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;ad.set(i),n.uniformMatrix3fv(this.addr,!1,ad),Qt(t,i)}}function vb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;sd.set(i),n.uniformMatrix4fv(this.addr,!1,sd),Qt(t,i)}}function xb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Qt(t,e)}}function Mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Qt(t,e)}}function yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Qt(t,e)}}function bb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Qt(t,e)}}function Tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Qt(t,e)}}function Ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Qt(t,e)}}function wb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Lu.compareFunction=t.isReversedDepthBuffer()?ah:sh,s=Lu):s=Tm,t.setTexture2D(e||s,r)}function Rb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wm,r)}function Cb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rm,r)}function Pb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Am,r)}function Db(n){switch(n){case 5126:return fb;case 35664:return db;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return _b;case 35676:return vb;case 5124:case 35670:return xb;case 35667:case 35671:return Sb;case 35668:case 35672:return Mb;case 35669:case 35673:return yb;case 5125:return bb;case 36294:return Eb;case 36295:return Tb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Pb}}function Lb(n,e){n.uniform1fv(this.addr,e)}function Ib(n,e){const t=Es(e,this.size,2);n.uniform2fv(this.addr,t)}function Ub(n,e){const t=Es(e,this.size,3);n.uniform3fv(this.addr,t)}function Nb(n,e){const t=Es(e,this.size,4);n.uniform4fv(this.addr,t)}function Ob(n,e){const t=Es(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fb(n,e){const t=Es(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bb(n,e){const t=Es(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zb(n,e){n.uniform1iv(this.addr,e)}function kb(n,e){n.uniform2iv(this.addr,e)}function Vb(n,e){n.uniform3iv(this.addr,e)}function Hb(n,e){n.uniform4iv(this.addr,e)}function Gb(n,e){n.uniform1uiv(this.addr,e)}function Wb(n,e){n.uniform2uiv(this.addr,e)}function Xb(n,e){n.uniform3uiv(this.addr,e)}function $b(n,e){n.uniform4uiv(this.addr,e)}function qb(n,e,t){const i=this.cache,r=e.length,s=Sl(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Lu:a=Tm;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Yb(n,e,t){const i=this.cache,r=e.length,s=Sl(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wm,s[a])}function Kb(n,e,t){const i=this.cache,r=e.length,s=Sl(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Rm,s[a])}function Zb(n,e,t){const i=this.cache,r=e.length,s=Sl(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Am,s[a])}function Jb(n){switch(n){case 5126:return Lb;case 35664:return Ib;case 35665:return Ub;case 35666:return Nb;case 35674:return Ob;case 35675:return Fb;case 35676:return Bb;case 5124:case 35670:return zb;case 35667:case 35671:return kb;case 35668:case 35672:return Vb;case 35669:case 35673:return Hb;case 5125:return Gb;case 36294:return Wb;case 36295:return Xb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return Kb;case 36289:case 36303:case 36311:case 36292:return Zb}}class jb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Db(t.type)}}class Qb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jb(t.type)}}class eE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function ld(n,e){n.seq.push(e),n.map[e.id]=e}function tE(n,e,t){const i=n.name,r=i.length;for(Ec.lastIndex=0;;){const s=Ec.exec(i),a=Ec.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ld(t,c===void 0?new jb(o,n,e):new Qb(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new eE(o),ld(t,f)),t=f}}}class Uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);tE(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function cd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const nE=37297;let iE=0;function rE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ud=new ut;function sE(n){xt._getMatrix(ud,xt.workingColorSpace,n);const e=`mat3( ${ud.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case Yo:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+rE(n.getShaderSource(e),o)}else return s}function aE(n,e){const t=sE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const oE={[Hp]:"Linear",[Gp]:"Reinhard",[Wp]:"Cineon",[Xp]:"ACESFilmic",[qp]:"AgX",[Yp]:"Neutral",[$p]:"Custom"};function lE(n,e){const t=oE[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yo=new Y;function cE(){xt.getLuminanceCoefficients(yo);const n=yo.x.toFixed(4),e=yo.y.toFixed(4),t=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function hE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Zs(n){return n!==""}function fd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(n){return n.replace(dE,mE)}const pE=new Map;function mE(n,e){let t=pt[e];if(t===void 0){const i=pE.get(e);if(i!==void 0)t=pt[i],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Iu(t)}const gE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(n){return n.replace(gE,_E)}function _E(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function md(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const vE={[Ro]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function xE(n){return vE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SE={[Hr]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[pl]:"ENVMAP_TYPE_CUBE_UV"};function ME(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":SE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const yE={[vs]:"ENVMAP_MODE_REFRACTION"};function bE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EE={[Vp]:"ENVMAP_BLENDING_MULTIPLY",[S0]:"ENVMAP_BLENDING_MIX",[M0]:"ENVMAP_BLENDING_ADD"};function TE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":EE[n.combine]||"ENVMAP_BLENDING_NONE"}function AE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function wE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xE(t),c=ME(t),u=bE(t),f=TE(t),h=AE(t),d=uE(t),_=hE(s),y=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(m=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?pt.tonemapping_pars_fragment:"",t.toneMapping!==yi?lE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,aE("linearToOutputTexel",t.outputColorSpace),cE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),a=Iu(a),a=fd(a,t),a=dd(a,t),o=Iu(o),o=fd(o,t),o=dd(o,t),a=pd(a),o=pd(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const I=w+m+a,M=w+p+o,P=cd(r,r.VERTEX_SHADER,I),D=cd(r,r.FRAGMENT_SHADER,M);r.attachShader(y,P),r.attachShader(y,D),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function B(q){if(n.debug.checkShaderErrors){const ae=r.getProgramInfoLog(y)||"",ie=r.getShaderInfoLog(P)||"",V=r.getShaderInfoLog(D)||"",Z=ae.trim(),re=ie.trim(),Q=V.trim();let pe=!0,ue=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(pe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,P,D);else{const ve=hd(r,P,"vertex"),he=hd(r,D,"fragment");Mt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+Z+`
`+ve+`
`+he)}else Z!==""?ot("WebGLProgram: Program Info Log:",Z):(re===""||Q==="")&&(ue=!1);ue&&(q.diagnostics={runnable:pe,programLog:Z,vertexShader:{log:re,prefix:m},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(P),r.deleteShader(D),S=new Uo(r,y),N=fE(r,y)}let S;this.getUniforms=function(){return S===void 0&&B(this),S};let N;this.getAttributes=function(){return N===void 0&&B(this),N};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(y,nE)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=D,this}let RE=0;class CE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PE(e),t.set(e,i)),i}}class PE{constructor(e){this.id=RE++,this.code=e,this.usedTimes=0}}function DE(n){return n===Gr||n===Xo||n===$o}function LE(n,e,t,i,r,s){const a=new lh,o=new CE,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function y(S,N,k,q,ae,ie){const V=q.fog,Z=ae.geometry,re=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?q.environment:null,Q=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,pe=e.get(S.envMap||re,Q),ue=pe&&pe.mapping===pl?pe.image.height:null,ve=d[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&ot("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const he=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,De=he!==void 0?he.length:0;let ke=0;Z.morphAttributes.position!==void 0&&(ke=1),Z.morphAttributes.normal!==void 0&&(ke=2),Z.morphAttributes.color!==void 0&&(ke=3);let rt,it,et,me;if(ve){const Dt=mi[ve];rt=Dt.vertexShader,it=Dt.fragmentShader}else{rt=S.vertexShader,it=S.fragmentShader;const Dt=o.getVertexShaderStage(S),_t=o.getFragmentShaderStage(S);o.update(S,Dt,_t),et=Dt.id,me=_t.id}const ce=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Xe=ae.isInstancedMesh===!0,Ne=ae.isBatchedMesh===!0,L=!!S.map,z=!!S.matcap,O=!!pe,W=!!S.aoMap,X=!!S.lightMap,G=!!S.bumpMap&&S.wireframe===!1,te=!!S.normalMap,ge=!!S.displacementMap,fe=!!S.emissiveMap,ne=!!S.metalnessMap,Te=!!S.roughnessMap,R=S.anisotropy>0,Re=S.clearcoat>0,Le=S.dispersion>0,T=S.retroreflectivity>0,g=S.iridescence>0,F=S.sheen>0,J=S.transmission>0,se=R&&!!S.anisotropyMap,Ae=Re&&!!S.clearcoatMap,Ce=Re&&!!S.clearcoatNormalMap,ee=Re&&!!S.clearcoatRoughnessMap,Me=g&&!!S.iridescenceMap,ye=g&&!!S.iridescenceThicknessMap,Ve=F&&!!S.sheenColorMap,Oe=F&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,Je=!!S.specularColorMap,je=!!S.specularIntensityMap,at=J&&!!S.transmissionMap,E=J&&!!S.thicknessMap,A=!!S.gradientMap,C=!!S.alphaMap,_e=S.alphaTest>0,Pe=!!S.alphaHash,xe=!!S.extensions;let Ye=yi;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ye=n.toneMapping);const Qe={shaderID:ve,shaderType:S.type,shaderName:S.name,vertexShader:rt,fragmentShader:it,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Ne,batchingColor:Ne&&ae._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&ae.instanceColor!==null,instancingMorph:Xe&&ae.morphTexture!==null,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:L,matcap:z,envMap:O,envMapMode:O&&pe.mapping,envMapCubeUVHeight:ue,aoMap:W,lightMap:X,bumpMap:G,normalMap:te,displacementMap:ge,emissiveMap:fe,normalMapObjectSpace:te&&S.normalMapType===E0,normalMapTangentSpace:te&&S.normalMapType===Au,packedNormalMap:te&&S.normalMapType===Au&&DE(S.normalMap.format),metalnessMap:ne,roughnessMap:Te,anisotropy:R,anisotropyMap:se,clearcoat:Re,clearcoatMap:Ae,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ee,dispersion:Le,retroreflection:T,iridescence:g,iridescenceMap:Me,iridescenceThicknessMap:ye,sheen:F,sheenColorMap:Ve,sheenRoughnessMap:Oe,specularMap:Fe,specularColorMap:Je,specularIntensityMap:je,transmission:J,transmissionMap:at,thicknessMap:E,gradientMap:A,opaque:S.transparent===!1&&S.blending===ia&&S.alphaToCoverage===!1,alphaMap:C,alphaTest:_e,alphaHash:Pe,combine:S.combine,mapUv:L&&_(S.map.channel),aoMapUv:W&&_(S.aoMap.channel),lightMapUv:X&&_(S.lightMap.channel),bumpMapUv:G&&_(S.bumpMap.channel),normalMapUv:te&&_(S.normalMap.channel),displacementMapUv:ge&&_(S.displacementMap.channel),emissiveMapUv:fe&&_(S.emissiveMap.channel),metalnessMapUv:ne&&_(S.metalnessMap.channel),roughnessMapUv:Te&&_(S.roughnessMap.channel),anisotropyMapUv:se&&_(S.anisotropyMap.channel),clearcoatMapUv:Ae&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(S.sheenRoughnessMap.channel),specularMapUv:Fe&&_(S.specularMap.channel),specularColorMapUv:Je&&_(S.specularColorMap.channel),specularIntensityMapUv:je&&_(S.specularIntensityMap.channel),transmissionMapUv:at&&_(S.transmissionMap.channel),thicknessMapUv:E&&_(S.thicknessMap.channel),alphaMapUv:C&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(te||R),vertexNormals:!!Z.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!Z.attributes.uv&&(L||C),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||Z.attributes.normal===void 0&&te===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:we,skinning:ae.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:ke,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:L&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Ct,decodeVideoTextureEmissive:fe&&S.emissiveMap.isVideoTexture===!0&&xt.getTransfer(S.emissiveMap.colorSpace)===Ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_i,flipSided:S.side===Pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xe&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&S.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function m(S){const N=[];if(S.shaderID?N.push(S.shaderID):(N.push(S.customVertexShaderID),N.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)N.push(k),N.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(p(N,S),w(N,S),N.push(n.outputColorSpace)),N.push(S.customProgramCacheKey),N.join()}function p(S,N){S.push(N.precision),S.push(N.outputColorSpace),S.push(N.envMapMode),S.push(N.envMapCubeUVHeight),S.push(N.mapUv),S.push(N.alphaMapUv),S.push(N.lightMapUv),S.push(N.aoMapUv),S.push(N.bumpMapUv),S.push(N.normalMapUv),S.push(N.displacementMapUv),S.push(N.emissiveMapUv),S.push(N.metalnessMapUv),S.push(N.roughnessMapUv),S.push(N.anisotropyMapUv),S.push(N.clearcoatMapUv),S.push(N.clearcoatNormalMapUv),S.push(N.clearcoatRoughnessMapUv),S.push(N.iridescenceMapUv),S.push(N.iridescenceThicknessMapUv),S.push(N.sheenColorMapUv),S.push(N.sheenRoughnessMapUv),S.push(N.specularMapUv),S.push(N.specularColorMapUv),S.push(N.specularIntensityMapUv),S.push(N.transmissionMapUv),S.push(N.thicknessMapUv),S.push(N.combine),S.push(N.fogExp2),S.push(N.sizeAttenuation),S.push(N.morphTargetsCount),S.push(N.morphAttributeCount),S.push(N.numSunLights),S.push(N.numDirLights),S.push(N.numPointLights),S.push(N.numSpotLights),S.push(N.numSpotLightMaps),S.push(N.numHemiLights),S.push(N.numRectAreaLights),S.push(N.numSunLightShadows),S.push(N.numDirLightShadows),S.push(N.numPointLightShadows),S.push(N.numSpotLightShadows),S.push(N.numSpotLightShadowsWithMaps),S.push(N.numLightProbes),S.push(N.shadowMapType),S.push(N.toneMapping),S.push(N.numClippingPlanes),S.push(N.numClipIntersection),S.push(N.depthPacking)}function w(S,N){a.disableAll(),N.instancing&&a.enable(0),N.instancingColor&&a.enable(1),N.instancingMorph&&a.enable(2),N.matcap&&a.enable(3),N.envMap&&a.enable(4),N.normalMapObjectSpace&&a.enable(5),N.normalMapTangentSpace&&a.enable(6),N.clearcoat&&a.enable(7),N.iridescence&&a.enable(8),N.alphaTest&&a.enable(9),N.vertexColors&&a.enable(10),N.vertexAlphas&&a.enable(11),N.vertexUv1s&&a.enable(12),N.vertexUv2s&&a.enable(13),N.vertexUv3s&&a.enable(14),N.vertexTangents&&a.enable(15),N.anisotropy&&a.enable(16),N.alphaHash&&a.enable(17),N.batching&&a.enable(18),N.dispersion&&a.enable(19),N.retroreflection&&a.enable(24),N.batchingColor&&a.enable(20),N.gradientMap&&a.enable(21),N.packedNormalMap&&a.enable(22),N.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.reversedDepthBuffer&&a.enable(4),N.skinning&&a.enable(5),N.morphTargets&&a.enable(6),N.morphNormals&&a.enable(7),N.morphColors&&a.enable(8),N.premultipliedAlpha&&a.enable(9),N.shadowMapEnabled&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),N.decodeVideoTextureEmissive&&a.enable(20),N.alphaToCoverage&&a.enable(21),N.numLightProbeGrids>0&&a.enable(22),N.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function I(S){const N=d[S.type];let k;if(N){const q=mi[N];k=qx.clone(q.uniforms)}else k=S.uniforms;return k}function M(S,N){let k=u.get(N);return k!==void 0?++k.usedTimes:(k=new wE(n,N,S,r),c.push(k),u.set(N,k)),k}function P(S){if(--S.usedTimes===0){const N=c.indexOf(S);c[N]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function D(S){o.remove(S)}function B(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:I,acquireProgram:M,releaseProgram:P,releaseShaderCache:D,programs:c,dispose:B}}function IE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function UE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function gd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _d(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,y,m,p){let w=n[e];return w===void 0?(w={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},n[e]=w):(w.id=h.id,w.object=h,w.geometry=d,w.material=_,w.materialVariant=a(h),w.groupOrder=y,w.renderOrder=h.renderOrder,w.z=m,w.group=p),e++,w}function l(h,d,_,y,m,p,w){w.reversedDepth===!0&&(m=-m);const I=o(h,d,_,y,m,p);_.transmission>0?i.push(I):_.transparent===!0?r.push(I):t.push(I)}function c(h,d,_,y,m,p){const w=o(h,d,_,y,m,p);_.transmission>0?i.unshift(w):_.transparent===!0?r.unshift(w):t.unshift(w)}function u(h,d){t.length>1&&t.sort(h||UE),i.length>1&&i.sort(d||gd),r.length>1&&r.sort(d||gd)}function f(){for(let h=e,d=n.length;h<d;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function NE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new _d,n.set(i,[a])):r>=s.length?(a=new _d,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function OE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new St};break;case"SpotLight":t={position:new Y,direction:new Y,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function FE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let BE=0;function zE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kE(n){const e=new OE,t=FE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new Ft,a=new Ft;function o(c){let u=0,f=0,h=0;for(let ae=0;ae<9;ae++)i.probe[ae].set(0,0,0);let d=0,_=0,y=0,m=0,p=0,w=0,I=0,M=0,P=0,D=0,B=0,S=0,N=0,k=0;c.sort(zE);for(let ae=0,ie=c.length;ae<ie;ae++){const V=c[ae],Z=V.color,re=V.intensity,Q=V.distance;let pe=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Gr?pe=V.shadow.map.texture:pe=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=Z.r*re,f+=Z.g*re,h+=Z.b*re;else if(V.isLightProbe){for(let ue=0;ue<9;ue++)i.probe[ue].addScaledVector(V.sh.coefficients[ue],re);k++}else if(V.isSunLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ve=V.shadow,he=t.get(V);he.shadowIntensity=ve.intensity,he.shadowBias=ve.bias,he.shadowNormalBias=ve.normalBias,he.shadowRadius=ve.radius,he.shadowMapSize.copy(ve.mapSize).multiply(ve.getFrameExtents()),i.sunShadow[_]=he,i.sunShadowMap[_]=pe;const De=ve.getViewportCount();for(let ke=0;ke<De;ke++)i.sunShadowMatrix[y+ke]=ve.getMatrix(ke),i.sunShadowCascade[y+ke]=ve._cascadeData[ke];y+=De,_++}i.sun[d]=ue,d++}else if(V.isDirectionalLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ve=V.shadow,he=t.get(V);he.shadowIntensity=ve.intensity,he.shadowBias=ve.bias,he.shadowNormalBias=ve.normalBias,he.shadowRadius=ve.radius,he.shadowMapSize=ve.mapSize,i.directionalShadow[m]=he,i.directionalShadowMap[m]=pe,i.directionalShadowMatrix[m]=V.shadow.matrix,P++}i.directional[m]=ue,m++}else if(V.isSpotLight){const ue=e.get(V);ue.position.setFromMatrixPosition(V.matrixWorld),ue.color.copy(Z).multiplyScalar(re),ue.distance=Q,ue.coneCos=Math.cos(V.angle),ue.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ue.decay=V.decay,i.spot[w]=ue;const ve=V.shadow;if(V.map&&(i.spotLightMap[S]=V.map,S++,ve.updateMatrices(V),V.castShadow&&N++),i.spotLightMatrix[w]=ve.matrix,V.castShadow){const he=t.get(V);he.shadowIntensity=ve.intensity,he.shadowBias=ve.bias,he.shadowNormalBias=ve.normalBias,he.shadowRadius=ve.radius,he.shadowMapSize=ve.mapSize,i.spotShadow[w]=he,i.spotShadowMap[w]=pe,B++}w++}else if(V.isRectAreaLight){const ue=e.get(V);ue.color.copy(Z).multiplyScalar(re),ue.halfWidth.set(V.width*.5,0,0),ue.halfHeight.set(0,V.height*.5,0),i.rectArea[I]=ue,I++}else if(V.isPointLight){const ue=e.get(V);if(ue.color.copy(V.color).multiplyScalar(V.intensity),ue.distance=V.distance,ue.decay=V.decay,V.castShadow){const ve=V.shadow,he=t.get(V);he.shadowIntensity=ve.intensity,he.shadowBias=ve.bias,he.shadowNormalBias=ve.normalBias,he.shadowRadius=ve.radius,he.shadowMapSize=ve.mapSize,he.shadowCameraNear=ve.camera.near,he.shadowCameraFar=ve.camera.far,i.pointShadow[p]=he,i.pointShadowMap[p]=pe,i.pointShadowMatrix[p]=V.shadow.matrix,D++}i.point[p]=ue,p++}else if(V.isHemisphereLight){const ue=e.get(V);ue.skyColor.copy(V.color).multiplyScalar(re),ue.groundColor.copy(V.groundColor).multiplyScalar(re),i.hemi[M]=ue,M++}}I>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ge.LTC_FLOAT_1,i.rectAreaLTC2=Ge.LTC_FLOAT_2):(i.rectAreaLTC1=Ge.LTC_HALF_1,i.rectAreaLTC2=Ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const q=i.hash;(q.sunLength!==d||q.directionalLength!==m||q.pointLength!==p||q.spotLength!==w||q.rectAreaLength!==I||q.hemiLength!==M||q.numSunShadows!==_||q.numDirectionalShadows!==P||q.numPointShadows!==D||q.numSpotShadows!==B||q.numSpotMaps!==S||q.numLightProbes!==k)&&(i.sun.length=d,i.directional.length=m,i.spot.length=w,i.rectArea.length=I,i.point.length=p,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.directionalShadowMatrix.length=P,i.pointShadow.length=D,i.pointShadowMap.length=D,i.pointShadowMatrix.length=D,i.spotShadow.length=B,i.spotShadowMap.length=B,i.spotLightMatrix.length=B+S-N,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=k,q.sunLength=d,q.directionalLength=m,q.pointLength=p,q.spotLength=w,q.rectAreaLength=I,q.hemiLength=M,q.numSunShadows=_,q.numDirectionalShadows=P,q.numPointShadows=D,q.numSpotShadows=B,q.numSpotMaps=S,q.numLightProbes=k,i.version=BE++)}function l(c,u){let f=0,h=0,d=0,_=0,y=0,m=0;const p=u.matrixWorldInverse;for(let w=0,I=c.length;w<I;w++){const M=c[w];if(M.isSunLight){const P=i.sun[f];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(p),f++}else if(M.isDirectionalLight){const P=i.directional[h];P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),h++}else if(M.isSpotLight){const P=i.spot[_];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const P=i.rectArea[y];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const P=i.point[d];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const P=i.hemi[m];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function vd(n){const e=new kE(n),t=[],i=[],r=[];function s(h){f.camera=h,t.length=0,i.length=0,r.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function VE(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vd(n),e.set(r,[o])):s>=a.length?(o=new vd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const HE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GE=`uniform sampler2D shadow_pass;
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
}`,WE=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],XE=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],xd=new Ft,Ws=new Y,Tc=new Y;function $E(n,e,t){let i=new ch;const r=new Ue,s=new Ue,a=new Vt,o=new jx,l=new Qx,c={},u=t.maxTextureSize,f={[Vr]:Pn,[Pn]:Vr,[_i]:_i},h=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:HE,fragmentShader:GE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Nn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let p=this.type;this.render=function(D,B,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;this.type===t0&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ro);const N=n.getRenderTarget(),k=n.getActiveCubeFace(),q=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(qi),ae.buffers.depth.getReversed()===!0?ae.buffers.color.setClear(0,0,0,0):ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ie=p!==this.type;ie&&B.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(Z=>Z.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,Z=D.length;V<Z;V++){const re=D[V],Q=re.shadow;if(Q===void 0){ot("WebGLShadowMap:",re,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const pe=Q.getFrameExtents();r.multiply(pe),s.copy(Q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,Q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,Q.mapSize.y=s.y));const ue=n.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=ue,Q.map===null||ie===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Ys){if(re.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new ri(r.x,r.y,{format:Gr,type:Ai,minFilter:mn,magFilter:mn,generateMipmaps:!1}),Q.map.texture.name=re.name+".shadowMap",Q.map.depthTexture=new Sa(r.x,r.y,xi),Q.map.depthTexture.name=re.name+".shadowMapDepth",Q.map.depthTexture.format=tr,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=ln,Q.map.depthTexture.magFilter=ln}else re.isPointLight?(Q.map=new Em(r.x),Q.map.depthTexture=new ux(r.x,Ti)):(Q.map=new ri(r.x,r.y),Q.map.depthTexture=new Sa(r.x,r.y,Ti)),Q.map.depthTexture.name=re.name+".shadowMap",Q.map.depthTexture.format=tr,this.type===Ro?(Q.map.depthTexture.compareFunction=ue?ah:sh,Q.map.depthTexture.minFilter=mn,Q.map.depthTexture.magFilter=mn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=ln,Q.map.depthTexture.magFilter=ln);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==r.x||Q.map.height!==r.y)&&Q.map.setSize(r.x,r.y);const ve=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();re.isPointLight!==!0&&Q.updateMatrices(re,S);for(let he=0;he<ve;he++){const De=Q.getCamera(he);if(re.isPointLight){const ke=Q.camera,rt=Q.matrix,it=re.distance||ke.far;it!==ke.far&&(ke.far=it,ke.updateProjectionMatrix()),Ws.setFromMatrixPosition(re.matrixWorld),ke.position.copy(Ws),Tc.copy(ke.position),Tc.add(WE[he]),ke.up.copy(XE[he]),ke.lookAt(Tc),ke.updateMatrixWorld(),rt.makeTranslation(-Ws.x,-Ws.y,-Ws.z),xd.multiplyMatrices(ke.projectionMatrix,ke.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(xd,ke.coordinateSystem,ke.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)n.setRenderTarget(Q.map,he),n.clear();else{he===0&&(n.setRenderTarget(Q.map),n.clear());const ke=Q.getViewport(he);a.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),ae.viewport(a)}i=Q.getFrustum(he),M(B,S,De,re,this.type)}Q.isPointLightShadow!==!0&&this.type===Ys&&w(Q,S),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(N,k,q)};function w(D,B){const S=e.update(y);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null?D.mapPass=new ri(r.x,r.y,{format:Gr,type:Ai}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),h.uniforms.shadow_pass.value=D.map.depthTexture,h.uniforms.resolution.value.set(D.map.width,D.map.height),h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(B,null,S,h,y,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value.set(D.map.width,D.map.height),d.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(B,null,S,d,y,null)}function I(D,B,S,N){let k=null;const q=S.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(q!==void 0)k=q;else if(k=S.isPointLight===!0?l:o,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const ae=k.uuid,ie=B.uuid;let V=c[ae];V===void 0&&(V={},c[ae]=V);let Z=V[ie];Z===void 0&&(Z=k.clone(),V[ie]=Z,B.addEventListener("dispose",P)),k=Z}if(k.visible=B.visible,k.wireframe=B.wireframe,N===Ys?k.side=B.shadowSide!==null?B.shadowSide:B.side:k.side=B.shadowSide!==null?B.shadowSide:f[B.side],k.alphaMap=B.alphaMap,k.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,k.map=B.map,k.clipShadows=B.clipShadows,k.clippingPlanes=B.clippingPlanes,k.clipIntersection=B.clipIntersection,k.displacementMap=B.displacementMap,k.displacementScale=B.displacementScale,k.displacementBias=B.displacementBias,k.wireframeLinewidth=B.wireframeLinewidth,k.linewidth=B.linewidth,S.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const ae=n.properties.get(k);ae.light=S}return k}function M(D,B,S,N,k){if(D.visible===!1)return;if(D.layers.test(B.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&k===Ys)&&(!D.frustumCulled||D.intersectsFrustum(i))){D.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,D.matrixWorld);const ie=e.update(D),V=D.material;if(Array.isArray(V)){const Z=ie.groups;for(let re=0,Q=Z.length;re<Q;re++){const pe=Z[re],ue=V[pe.materialIndex];if(ue&&ue.visible){const ve=I(D,ue,N,k);D.onBeforeShadow(n,D,B,S,ie,ve,pe),n.renderBufferDirect(S,null,ie,ve,D,pe),D.onAfterShadow(n,D,B,S,ie,ve,pe)}}}else if(V.visible){const Z=I(D,V,N,k);D.onBeforeShadow(n,D,B,S,ie,Z,null),n.renderBufferDirect(S,null,ie,Z,D,null),D.onAfterShadow(n,D,B,S,ie,Z,null)}}const ae=D.children;for(let ie=0,V=ae.length;ie<V;ie++)M(ae[ie],B,S,N,k)}function P(D){D.target.removeEventListener("dispose",P);for(const S in c){const N=c[S],k=D.target.uuid;k in N&&(N[k].dispose(),delete N[k])}}}function qE(n,e){function t(){let E=!1;const A=new Vt;let C=null;const _e=new Vt(0,0,0,0);return{setMask:function(Pe){C!==Pe&&!E&&(n.colorMask(Pe,Pe,Pe,Pe),C=Pe)},setLocked:function(Pe){E=Pe},setClear:function(Pe,xe,Ye,Qe,Dt){Dt===!0&&(Pe*=Qe,xe*=Qe,Ye*=Qe),A.set(Pe,xe,Ye,Qe),_e.equals(A)===!1&&(n.clearColor(Pe,xe,Ye,Qe),_e.copy(A))},reset:function(){E=!1,C=null,_e.set(-1,0,0,0)}}}function i(){let E=!1,A=!1,C=null,_e=null,Pe=null;return{setReversed:function(xe){if(A!==xe){const Ye=e.get("EXT_clip_control");xe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),A=xe;const Qe=Pe;Pe=null,this.setClear(Qe)}},getReversed:function(){return A},setTest:function(xe){xe?ce(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(xe){C!==xe&&!E&&(n.depthMask(xe),C=xe)},setFunc:function(xe){if(A&&(xe=O0[xe]),_e!==xe){switch(xe){case Vc:n.depthFunc(n.NEVER);break;case Hc:n.depthFunc(n.ALWAYS);break;case Gc:n.depthFunc(n.LESS);break;case ga:n.depthFunc(n.LEQUAL);break;case Wc:n.depthFunc(n.EQUAL);break;case Xc:n.depthFunc(n.GEQUAL);break;case $c:n.depthFunc(n.GREATER);break;case qc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=xe}},setLocked:function(xe){E=xe},setClear:function(xe){Pe!==xe&&(Pe=xe,A&&(xe=1-xe),n.clearDepth(xe))},reset:function(){E=!1,C=null,_e=null,Pe=null,A=!1}}}function r(){let E=!1,A=null,C=null,_e=null,Pe=null,xe=null,Ye=null,Qe=null,Dt=null;return{setTest:function(_t){E||(_t?ce(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(_t){A!==_t&&!E&&(n.stencilMask(_t),A=_t)},setFunc:function(_t,vn,On){(C!==_t||_e!==vn||Pe!==On)&&(n.stencilFunc(_t,vn,On),C=_t,_e=vn,Pe=On)},setOp:function(_t,vn,On){(xe!==_t||Ye!==vn||Qe!==On)&&(n.stencilOp(_t,vn,On),xe=_t,Ye=vn,Qe=On)},setLocked:function(_t){E=_t},setClear:function(_t){Dt!==_t&&(n.clearStencil(_t),Dt=_t)},reset:function(){E=!1,A=null,C=null,_e=null,Pe=null,xe=null,Ye=null,Qe=null,Dt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,_=[],y=null,m=!1,p=null,w=null,I=null,M=null,P=null,D=null,B=null,S=new St(0,0,0),N=0,k=!1,q=null,ae=null,ie=null,V=null,Z=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,pe=0;const ue=n.getParameter(n.VERSION);ue.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(ue)[1]),Q=pe>=1):ue.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),Q=pe>=2);let ve=null,he={};const De=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),rt=new Vt().fromArray(De),it=new Vt().fromArray(ke);function et(E,A,C,_e){const Pe=new Uint8Array(4),xe=n.createTexture();n.bindTexture(E,xe),n.texParameteri(E,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(E,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<C;Ye++)E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY?n.texImage3D(A,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(A+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return xe}const me={};me[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),a.setFunc(ga),G(!1),te(hf),ce(n.CULL_FACE),W(qi);function ce(E){u[E]!==!0&&(n.enable(E),u[E]=!0)}function we(E){u[E]!==!1&&(n.disable(E),u[E]=!1)}function Xe(E,A){return h[E]!==A?(n.bindFramebuffer(E,A),h[E]=A,E===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=A),E===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=A),!0):!1}function Ne(E,A){let C=_,_e=!1;if(E){C=d.get(A),C===void 0&&(C=[],d.set(A,C));const Pe=E.textures;if(C.length!==Pe.length||C[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,Ye=Pe.length;xe<Ye;xe++)C[xe]=n.COLOR_ATTACHMENT0+xe;C.length=Pe.length,_e=!0}}else C[0]!==n.BACK&&(C[0]=n.BACK,_e=!0);_e&&n.drawBuffers(C)}function L(E){return y!==E?(n.useProgram(E),y=E,!0):!1}const z={[os]:n.FUNC_ADD,[i0]:n.FUNC_SUBTRACT,[r0]:n.FUNC_REVERSE_SUBTRACT};z[s0]=n.MIN,z[a0]=n.MAX;const O={[o0]:n.ZERO,[l0]:n.ONE,[c0]:n.SRC_COLOR,[zp]:n.SRC_ALPHA,[m0]:n.SRC_ALPHA_SATURATE,[d0]:n.DST_COLOR,[h0]:n.DST_ALPHA,[u0]:n.ONE_MINUS_SRC_COLOR,[kp]:n.ONE_MINUS_SRC_ALPHA,[p0]:n.ONE_MINUS_DST_COLOR,[f0]:n.ONE_MINUS_DST_ALPHA,[g0]:n.CONSTANT_COLOR,[_0]:n.ONE_MINUS_CONSTANT_COLOR,[v0]:n.CONSTANT_ALPHA,[x0]:n.ONE_MINUS_CONSTANT_ALPHA};function W(E,A,C,_e,Pe,xe,Ye,Qe,Dt,_t){if(E===qi){m===!0&&(we(n.BLEND),m=!1);return}if(m===!1&&(ce(n.BLEND),m=!0),E!==n0){if(E!==p||_t!==k){if((w!==os||P!==os)&&(n.blendEquation(n.FUNC_ADD),w=os,P=os),_t)switch(E){case ia:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ff:n.blendFunc(n.ONE,n.ONE);break;case df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Mt("WebGLState: Invalid blending: ",E);break}else switch(E){case ia:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ff:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case df:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pf:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",E);break}I=null,M=null,D=null,B=null,S.set(0,0,0),N=0,p=E,k=_t}return}Pe=Pe||A,xe=xe||C,Ye=Ye||_e,(A!==w||Pe!==P)&&(n.blendEquationSeparate(z[A],z[Pe]),w=A,P=Pe),(C!==I||_e!==M||xe!==D||Ye!==B)&&(n.blendFuncSeparate(O[C],O[_e],O[xe],O[Ye]),I=C,M=_e,D=xe,B=Ye),(Qe.equals(S)===!1||Dt!==N)&&(n.blendColor(Qe.r,Qe.g,Qe.b,Dt),S.copy(Qe),N=Dt),p=E,k=!1}function X(E,A){E.side===_i?we(n.CULL_FACE):ce(n.CULL_FACE);let C=E.side===Pn;A&&(C=!C),G(C),E.blending===ia&&E.transparent===!1?W(qi):W(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),a.setFunc(E.depthFunc),a.setTest(E.depthTest),a.setMask(E.depthWrite),s.setMask(E.colorWrite);const _e=E.stencilWrite;o.setTest(_e),_e&&(o.setMask(E.stencilWriteMask),o.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),o.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),fe(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(E){q!==E&&(E?n.frontFace(n.CW):n.frontFace(n.CCW),q=E)}function te(E){E!==Qv?(ce(n.CULL_FACE),E!==ae&&(E===hf?n.cullFace(n.BACK):E===e0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),ae=E}function ge(E){E!==ie&&(Q&&n.lineWidth(E),ie=E)}function fe(E,A,C){E?(ce(n.POLYGON_OFFSET_FILL),(V!==A||Z!==C)&&(V=A,Z=C,a.getReversed()&&(A=-A),n.polygonOffset(A,C))):we(n.POLYGON_OFFSET_FILL)}function ne(E){E?ce(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Te(E){E===void 0&&(E=n.TEXTURE0+re-1),ve!==E&&(n.activeTexture(E),ve=E)}function R(E,A,C){C===void 0&&(ve===null?C=n.TEXTURE0+re-1:C=ve);let _e=he[C];_e===void 0&&(_e={type:void 0,texture:void 0},he[C]=_e),(_e.type!==E||_e.texture!==A)&&(ve!==C&&(n.activeTexture(C),ve=C),n.bindTexture(E,A||me[E]),_e.type=E,_e.texture=A)}function Re(){const E=he[ve];E!==void 0&&E.type!==void 0&&(n.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function Le(){try{n.compressedTexImage2D(...arguments)}catch(E){Mt("WebGLState:",E)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(E){Mt("WebGLState:",E)}}function g(){try{n.texSubImage2D(...arguments)}catch(E){Mt("WebGLState:",E)}}function F(){try{n.texSubImage3D(...arguments)}catch(E){Mt("WebGLState:",E)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(E){Mt("WebGLState:",E)}}function se(){try{n.compressedTexSubImage3D(...arguments)}catch(E){Mt("WebGLState:",E)}}function Ae(){try{n.texStorage2D(...arguments)}catch(E){Mt("WebGLState:",E)}}function Ce(){try{n.texStorage3D(...arguments)}catch(E){Mt("WebGLState:",E)}}function ee(){try{n.texImage2D(...arguments)}catch(E){Mt("WebGLState:",E)}}function Me(){try{n.texImage3D(...arguments)}catch(E){Mt("WebGLState:",E)}}function ye(E){return f[E]!==void 0?f[E]:n.getParameter(E)}function Ve(E,A){f[E]!==A&&(n.pixelStorei(E,A),f[E]=A)}function Oe(E){rt.equals(E)===!1&&(n.scissor(E.x,E.y,E.z,E.w),rt.copy(E))}function Fe(E){it.equals(E)===!1&&(n.viewport(E.x,E.y,E.z,E.w),it.copy(E))}function Je(E,A){let C=c.get(A);C===void 0&&(C=new WeakMap,c.set(A,C));let _e=C.get(E);_e===void 0&&(_e=n.getUniformBlockIndex(A,E.name),C.set(E,_e))}function je(E,A){const _e=c.get(A).get(E);l.get(A)!==_e&&(n.uniformBlockBinding(A,_e,E.__bindingPointIndex),l.set(A,_e))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},ve=null,he={},h={},d=new WeakMap,_=[],y=null,m=!1,p=null,w=null,I=null,M=null,P=null,D=null,B=null,S=new St(0,0,0),N=0,k=!1,q=null,ae=null,ie=null,V=null,Z=null,rt.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ce,disable:we,bindFramebuffer:Xe,drawBuffers:Ne,useProgram:L,setBlending:W,setMaterial:X,setFlipSided:G,setCullFace:te,setLineWidth:ge,setPolygonOffset:fe,setScissorTest:ne,activeTexture:Te,bindTexture:R,unbindTexture:Re,compressedTexImage2D:Le,compressedTexImage3D:T,texImage2D:ee,texImage3D:Me,pixelStorei:Ve,getParameter:ye,updateUBOMapping:Je,uniformBlockBinding:je,texStorage2D:Ae,texStorage3D:Ce,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:J,compressedTexSubImage3D:se,scissor:Oe,viewport:Fe,reset:at}}function YE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,g){return _?new OffscreenCanvas(T,g):Ko("canvas")}function m(T,g,F){let J=1;const se=Le(T);if((se.width>F||se.height>F)&&(J=F/Math.max(se.width,se.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Ae=Math.floor(J*se.width),Ce=Math.floor(J*se.height);h===void 0&&(h=y(Ae,Ce));const ee=g?y(Ae,Ce):h;return ee.width=Ae,ee.height=Ce,ee.getContext("2d").drawImage(T,0,0,Ae,Ce),ot("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Ae+"x"+Ce+")."),ee}else return"data"in T&&ot("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),T;return T}function p(T){return T.generateMipmaps}function w(T){n.generateMipmap(T)}function I(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,g,F,J,se,Ae=!1){if(T!==null){if(n[T]!==void 0)return n[T];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Ce;J&&(Ce=e.get("EXT_texture_norm16"),Ce||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=g;if(g===n.RED&&(F===n.FLOAT&&(ee=n.R32F),F===n.HALF_FLOAT&&(ee=n.R16F),F===n.UNSIGNED_BYTE&&(ee=n.R8),F===n.UNSIGNED_SHORT&&Ce&&(ee=Ce.R16_EXT),F===n.SHORT&&Ce&&(ee=Ce.R16_SNORM_EXT)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.R8UI),F===n.UNSIGNED_SHORT&&(ee=n.R16UI),F===n.UNSIGNED_INT&&(ee=n.R32UI),F===n.BYTE&&(ee=n.R8I),F===n.SHORT&&(ee=n.R16I),F===n.INT&&(ee=n.R32I)),g===n.RG&&(F===n.FLOAT&&(ee=n.RG32F),F===n.HALF_FLOAT&&(ee=n.RG16F),F===n.UNSIGNED_BYTE&&(ee=n.RG8),F===n.UNSIGNED_SHORT&&Ce&&(ee=Ce.RG16_EXT),F===n.SHORT&&Ce&&(ee=Ce.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.RG8UI),F===n.UNSIGNED_SHORT&&(ee=n.RG16UI),F===n.UNSIGNED_INT&&(ee=n.RG32UI),F===n.BYTE&&(ee=n.RG8I),F===n.SHORT&&(ee=n.RG16I),F===n.INT&&(ee=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),F===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),F===n.UNSIGNED_INT&&(ee=n.RGB32UI),F===n.BYTE&&(ee=n.RGB8I),F===n.SHORT&&(ee=n.RGB16I),F===n.INT&&(ee=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),F===n.UNSIGNED_INT&&(ee=n.RGBA32UI),F===n.BYTE&&(ee=n.RGBA8I),F===n.SHORT&&(ee=n.RGBA16I),F===n.INT&&(ee=n.RGBA32I)),g===n.RGB&&(F===n.UNSIGNED_SHORT&&Ce&&(ee=Ce.RGB16_EXT),F===n.SHORT&&Ce&&(ee=Ce.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),g===n.RGBA){const Me=Ae?Yo:xt.getTransfer(se);F===n.FLOAT&&(ee=n.RGBA32F),F===n.HALF_FLOAT&&(ee=n.RGBA16F),F===n.UNSIGNED_BYTE&&(ee=Me===Ct?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&Ce&&(ee=Ce.RGBA16_EXT),F===n.SHORT&&Ce&&(ee=Ce.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function P(T,g){let F;return T?g===null||g===Ti||g===va?F=n.DEPTH24_STENCIL8:g===xi?F=n.DEPTH32F_STENCIL8:g===_a&&(F=n.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ti||g===va?F=n.DEPTH_COMPONENT24:g===xi?F=n.DEPTH_COMPONENT32F:g===_a&&(F=n.DEPTH_COMPONENT16),F}function D(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==ln&&T.minFilter!==mn?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function B(T){const g=T.target;g.removeEventListener("dispose",B),N(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function S(T){const g=T.target;g.removeEventListener("dispose",S),q(g)}function N(T){const g=i.get(T);if(g.__webglInit===void 0)return;const F=T.source,J=d.get(F);if(J){const se=J[g.__cacheKey];se.usedTimes--,se.usedTimes===0&&k(T),Object.keys(J).length===0&&d.delete(F)}i.remove(T)}function k(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const F=T.source,J=d.get(F);delete J[g.__cacheKey],a.memory.textures--}function q(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let se=0;se<g.__webglFramebuffer[J].length;se++)n.deleteFramebuffer(g.__webglFramebuffer[J][se]);else n.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)n.deleteFramebuffer(g.__webglFramebuffer[J]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=T.textures;for(let J=0,se=F.length;J<se;J++){const Ae=i.get(F[J]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),a.memory.textures--),i.remove(F[J])}i.remove(T)}let ae=0;function ie(){ae=0}function V(){return ae}function Z(T){ae=T}function re(){const T=ae;return T>=r.maxTextures&&ot("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),ae+=1,T}function Q(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function pe(T,g){const F=i.get(T);if(T.isVideoTexture&&R(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const J=T.image;if(J===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{we(F,T,g);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function ue(T,g){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){we(F,T,g);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function ve(T,g){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){we(F,T,g);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function he(T,g){const F=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){Xe(F,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}const De={[Yc]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[Kc]:n.MIRRORED_REPEAT},ke={[ln]:n.NEAREST,[y0]:n.NEAREST_MIPMAP_NEAREST,[qa]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[Xl]:n.LINEAR_MIPMAP_NEAREST,[Or]:n.LINEAR_MIPMAP_LINEAR},rt={[A0]:n.NEVER,[D0]:n.ALWAYS,[w0]:n.LESS,[sh]:n.LEQUAL,[R0]:n.EQUAL,[ah]:n.GEQUAL,[C0]:n.GREATER,[P0]:n.NOTEQUAL};function it(T,g){if(g.type===xi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===mn||g.magFilter===Xl||g.magFilter===qa||g.magFilter===Or||g.minFilter===mn||g.minFilter===Xl||g.minFilter===qa||g.minFilter===Or)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,De[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,De[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,De[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ke[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ke[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,rt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===ln||g.minFilter!==qa&&g.minFilter!==Or||g.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function et(T,g){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",B));const J=g.source;let se=d.get(J);se===void 0&&(se={},d.set(J,se));const Ae=Q(g);if(Ae!==T.__cacheKey){se[Ae]===void 0&&(se[Ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),se[Ae].usedTimes++;const Ce=se[T.__cacheKey];Ce!==void 0&&(se[T.__cacheKey].usedTimes--,Ce.usedTimes===0&&k(g)),T.__cacheKey=Ae,T.__webglTexture=se[Ae].texture}return F}function me(T,g,F){return Math.floor(Math.floor(T/F)/g)}function ce(T,g,F,J){const Ae=T.updateRanges;if(Ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,F,J,g.data);else{Ae.sort((Ve,Oe)=>Ve.start-Oe.start);let Ce=0;for(let Ve=1;Ve<Ae.length;Ve++){const Oe=Ae[Ce],Fe=Ae[Ve],Je=Oe.start+Oe.count,je=me(Fe.start,g.width,4),at=me(Oe.start,g.width,4);Fe.start<=Je+1&&je===at&&me(Fe.start+Fe.count-1,g.width,4)===je?Oe.count=Math.max(Oe.count,Fe.start+Fe.count-Oe.start):(++Ce,Ae[Ce]=Fe)}Ae.length=Ce+1;const ee=t.getParameter(n.UNPACK_ROW_LENGTH),Me=t.getParameter(n.UNPACK_SKIP_PIXELS),ye=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Ve=0,Oe=Ae.length;Ve<Oe;Ve++){const Fe=Ae[Ve],Je=Math.floor(Fe.start/4),je=Math.ceil(Fe.count/4),at=Je%g.width,E=Math.floor(Je/g.width),A=je,C=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,at),t.pixelStorei(n.UNPACK_SKIP_ROWS,E),t.texSubImage2D(n.TEXTURE_2D,0,at,E,A,C,F,J,g.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function we(T,g,F){let J=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=n.TEXTURE_3D);const se=et(T,g),Ae=g.source;t.bindTexture(J,T.__webglTexture,n.TEXTURE0+F);const Ce=i.get(Ae);if(Ae.version!==Ce.__version||se===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const C=xt.getPrimaries(xt.workingColorSpace),_e=g.colorSpace===pr?null:xt.getPrimaries(g.colorSpace),Pe=g.colorSpace===pr||C===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let Me=m(g.image,!1,r.maxTextureSize);Me=Re(g,Me);const ye=s.convert(g.format,g.colorSpace),Ve=s.convert(g.type);let Oe=M(g.internalFormat,ye,Ve,g.normalized,g.colorSpace,g.isVideoTexture);it(J,g);let Fe;const Je=g.mipmaps,je=g.isVideoTexture!==!0,at=Ce.__version===void 0||se===!0,E=Ae.dataReady,A=D(g,Me);if(g.isDepthTexture)Oe=P(g.format===Fr,g.type),at&&(je?t.texStorage2D(n.TEXTURE_2D,1,Oe,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,Oe,Me.width,Me.height,0,ye,Ve,null));else if(g.isDataTexture)if(Je.length>0){je&&at&&t.texStorage2D(n.TEXTURE_2D,A,Oe,Je[0].width,Je[0].height);for(let C=0,_e=Je.length;C<_e;C++)Fe=Je[C],je?E&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,Fe.width,Fe.height,ye,Ve,Fe.data):t.texImage2D(n.TEXTURE_2D,C,Oe,Fe.width,Fe.height,0,ye,Ve,Fe.data);g.generateMipmaps=!1}else je?(at&&t.texStorage2D(n.TEXTURE_2D,A,Oe,Me.width,Me.height),E&&ce(g,Me,ye,Ve)):t.texImage2D(n.TEXTURE_2D,0,Oe,Me.width,Me.height,0,ye,Ve,Me.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){je&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,A,Oe,Je[0].width,Je[0].height,Me.depth);for(let C=0,_e=Je.length;C<_e;C++)if(Fe=Je[C],g.format!==ti)if(ye!==null)if(je){if(E)if(g.layerUpdates.size>0){const Pe=Jf(Fe.width,Fe.height,g.format,g.type);for(const xe of g.layerUpdates){const Ye=Fe.data.subarray(xe*Pe/Fe.data.BYTES_PER_ELEMENT,(xe+1)*Pe/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,xe,Fe.width,Fe.height,1,ye,Ye)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,0,Fe.width,Fe.height,Me.depth,ye,Fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,C,Oe,Fe.width,Fe.height,Me.depth,0,Fe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?E&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,0,Fe.width,Fe.height,Me.depth,ye,Ve,Fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,C,Oe,Fe.width,Fe.height,Me.depth,0,ye,Ve,Fe.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{je&&at&&t.texStorage2D(n.TEXTURE_2D,A,Oe,Je[0].width,Je[0].height);for(let C=0,_e=Je.length;C<_e;C++)Fe=Je[C],g.format!==ti?ye!==null?je?E&&t.compressedTexSubImage2D(n.TEXTURE_2D,C,0,0,Fe.width,Fe.height,ye,Fe.data):t.compressedTexImage2D(n.TEXTURE_2D,C,Oe,Fe.width,Fe.height,0,Fe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?E&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,Fe.width,Fe.height,ye,Ve,Fe.data):t.texImage2D(n.TEXTURE_2D,C,Oe,Fe.width,Fe.height,0,ye,Ve,Fe.data)}else if(g.isDataArrayTexture)if(je){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,A,Oe,Me.width,Me.height,Me.depth),E)if(g.layerUpdates.size>0){const C=Jf(Me.width,Me.height,g.format,g.type);for(const _e of g.layerUpdates){const Pe=Me.data.subarray(_e*C/Me.data.BYTES_PER_ELEMENT,(_e+1)*C/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,Me.width,Me.height,1,ye,Ve,Pe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ye,Ve,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,Me.width,Me.height,Me.depth,0,ye,Ve,Me.data);else if(g.isData3DTexture)je?(at&&t.texStorage3D(n.TEXTURE_3D,A,Oe,Me.width,Me.height,Me.depth),E&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ye,Ve,Me.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,Me.width,Me.height,Me.depth,0,ye,Ve,Me.data);else if(g.isFramebufferTexture){if(at)if(je)t.texStorage2D(n.TEXTURE_2D,A,Oe,Me.width,Me.height);else{let C=Me.width,_e=Me.height;for(let Pe=0;Pe<A;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Oe,C,_e,0,ye,Ve,null),C>>=1,_e>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const C=n.canvas;if(C.hasAttribute("layoutsubtree")||C.setAttribute("layoutsubtree","true"),Me.parentNode!==C){C.appendChild(Me),f.add(g),C.onpaint=_e=>{const Pe=_e.changedElements;for(const xe of f)Pe.includes(xe.image)&&(xe.needsUpdate=!0)},C.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Me);else{const Pe=n.RGBA,xe=n.RGBA,Ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Pe,xe,Ye,Me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Je.length>0){if(je&&at){const C=Le(Je[0]);t.texStorage2D(n.TEXTURE_2D,A,Oe,C.width,C.height)}for(let C=0,_e=Je.length;C<_e;C++)Fe=Je[C],je?E&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,ye,Ve,Fe):t.texImage2D(n.TEXTURE_2D,C,Oe,ye,Ve,Fe);g.generateMipmaps=!1}else if(je){if(at){const C=Le(Me);t.texStorage2D(n.TEXTURE_2D,A,Oe,C.width,C.height)}E&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ve,Me)}else t.texImage2D(n.TEXTURE_2D,0,Oe,ye,Ve,Me);p(g)&&w(J),Ce.__version=Ae.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Xe(T,g,F){if(g.image.length!==6)return;const J=et(T,g),se=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const Ae=i.get(se);if(se.version!==Ae.__version||J===!0){t.activeTexture(n.TEXTURE0+F);const Ce=xt.getPrimaries(xt.workingColorSpace),ee=g.colorSpace===pr?null:xt.getPrimaries(g.colorSpace),Me=g.colorSpace===pr||Ce===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const ye=g.isCompressedTexture||g.image[0].isCompressedTexture,Ve=g.image[0]&&g.image[0].isDataTexture,Oe=[];for(let xe=0;xe<6;xe++)!ye&&!Ve?Oe[xe]=m(g.image[xe],!0,r.maxCubemapSize):Oe[xe]=Ve?g.image[xe].image:g.image[xe],Oe[xe]=Re(g,Oe[xe]);const Fe=Oe[0],Je=s.convert(g.format,g.colorSpace),je=s.convert(g.type),at=M(g.internalFormat,Je,je,g.normalized,g.colorSpace),E=g.isVideoTexture!==!0,A=Ae.__version===void 0||J===!0,C=se.dataReady;let _e=D(g,Fe);it(n.TEXTURE_CUBE_MAP,g);let Pe;if(ye){E&&A&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,at,Fe.width,Fe.height);for(let xe=0;xe<6;xe++){Pe=Oe[xe].mipmaps;for(let Ye=0;Ye<Pe.length;Ye++){const Qe=Pe[Ye];g.format!==ti?Je!==null?E?C&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,0,0,Qe.width,Qe.height,Je,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,at,Qe.width,Qe.height,0,Qe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):E?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,0,0,Qe.width,Qe.height,Je,je,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,at,Qe.width,Qe.height,0,Je,je,Qe.data)}}}else{if(Pe=g.mipmaps,E&&A){Pe.length>0&&_e++;const xe=Le(Oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,at,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ve){E?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Oe[xe].width,Oe[xe].height,Je,je,Oe[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,Oe[xe].width,Oe[xe].height,0,Je,je,Oe[xe].data);for(let Ye=0;Ye<Pe.length;Ye++){const Dt=Pe[Ye].image[xe].image;E?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,0,0,Dt.width,Dt.height,Je,je,Dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,at,Dt.width,Dt.height,0,Je,je,Dt.data)}}else{E?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Je,je,Oe[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,Je,je,Oe[xe]);for(let Ye=0;Ye<Pe.length;Ye++){const Qe=Pe[Ye];E?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,0,0,Je,je,Qe.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,at,Je,je,Qe.image[xe])}}}p(g)&&w(n.TEXTURE_CUBE_MAP),Ae.__version=se.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ne(T,g,F,J,se,Ae){const Ce=s.convert(F.format,F.colorSpace),ee=s.convert(F.type),Me=M(F.internalFormat,Ce,ee,F.normalized,F.colorSpace),ye=i.get(g),Ve=i.get(F);if(Ve.__renderTarget=g,!ye.__hasExternalTextures){const Oe=Math.max(1,g.width>>Ae),Fe=Math.max(1,g.height>>Ae);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,Ae,Me,Oe,Fe,g.depth,0,Ce,ee,null):t.texImage2D(se,Ae,Me,Oe,Fe,0,Ce,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Te(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,se,Ve.__webglTexture,0,ne(g)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,se,Ve.__webglTexture,Ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(T,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const J=g.depthTexture,se=J&&J.isDepthTexture?J.type:null,Ae=P(g.stencilBuffer,se),Ce=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Te(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne(g),Ae,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne(g),Ae,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,T)}else{const J=g.textures;for(let se=0;se<J.length;se++){const Ae=J[se],Ce=s.convert(Ae.format,Ae.colorSpace),ee=s.convert(Ae.type),Me=M(Ae.internalFormat,Ce,ee,Ae.normalized,Ae.colorSpace);Te(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne(g),Me,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne(g),Me,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Me,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function z(T,g,F){const J=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const se=i.get(g.depthTexture);if(se.__renderTarget=g,(!se.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J){if(se.__webglInit===void 0&&(se.__webglInit=!0,g.depthTexture.addEventListener("dispose",B)),se.__webglTexture===void 0){se.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),it(n.TEXTURE_CUBE_MAP,g.depthTexture);const ye=s.convert(g.depthTexture.format),Ve=s.convert(g.depthTexture.type);let Oe;g.depthTexture.format===tr?Oe=n.DEPTH_COMPONENT24:g.depthTexture.format===Fr&&(Oe=n.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Oe,g.width,g.height,0,ye,Ve,null)}}else pe(g.depthTexture,0);const Ae=se.__webglTexture,Ce=ne(g),ee=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Me=g.depthTexture.format===Fr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===tr)Te(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,ee,Ae,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,Me,ee,Ae,0);else if(g.depthTexture.format===Fr)Te(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,ee,Ae,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,Me,ee,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function O(T){const g=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const se=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",se)};J.addEventListener("dispose",se),g.__depthDisposeCallback=se}g.__boundDepthTexture=J}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let J=0;J<6;J++)z(g.__webglFramebuffer[J],T,J);else{const J=T.texture.mipmaps;J&&J.length>0?z(g.__webglFramebuffer[0],T,0):z(g.__webglFramebuffer,T,0)}else if(F){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=n.createRenderbuffer(),L(g.__webglDepthbuffer[J],T,!1);else{const se=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=g.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,Ae)}}else{const J=T.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),L(g.__webglDepthbuffer,T,!1);else{const se=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,Ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(T,g,F){const J=i.get(T);g!==void 0&&Ne(J.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&O(T)}function X(T){const g=T.texture,F=i.get(T),J=i.get(g);T.addEventListener("dispose",S);const se=T.textures,Ae=T.isWebGLCubeRenderTarget===!0,Ce=se.length>1;if(Ce||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=g.version,a.memory.textures++),Ae){F.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[ee]=[];for(let Me=0;Me<g.mipmaps.length;Me++)F.__webglFramebuffer[ee][Me]=n.createFramebuffer()}else F.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let ee=0;ee<g.mipmaps.length;ee++)F.__webglFramebuffer[ee]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ee=0,Me=se.length;ee<Me;ee++){const ye=i.get(se[ee]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Te(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ee=0;ee<se.length;ee++){const Me=se[ee];F.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ee]);const ye=s.convert(Me.format,Me.colorSpace),Ve=s.convert(Me.type),Oe=M(Me.internalFormat,ye,Ve,Me.normalized,Me.colorSpace,T.isXRRenderTarget===!0),Fe=ne(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Oe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,F.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),L(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),it(n.TEXTURE_CUBE_MAP,g);for(let ee=0;ee<6;ee++)if(g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)Ne(F.__webglFramebuffer[ee][Me],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me);else Ne(F.__webglFramebuffer[ee],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(g)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ee=0,Me=se.length;ee<Me;ee++){const ye=se[ee],Ve=i.get(ye);let Oe=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Oe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Oe,Ve.__webglTexture),it(Oe,ye),Ne(F.__webglFramebuffer,T,ye,n.COLOR_ATTACHMENT0+ee,Oe,0),p(ye)&&w(Oe)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,J.__webglTexture),it(ee,g),g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)Ne(F.__webglFramebuffer[Me],T,g,n.COLOR_ATTACHMENT0,ee,Me);else Ne(F.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,ee,0);p(g)&&w(ee),t.unbindTexture()}T.depthBuffer&&O(T)}function G(T){const g=T.textures;for(let F=0,J=g.length;F<J;F++){const se=g[F];if(p(se)){const Ae=I(T),Ce=i.get(se).__webglTexture;t.bindTexture(Ae,Ce),w(Ae),t.unbindTexture()}}}const te=[],ge=[];function fe(T){if(T.samples>0){if(Te(T)===!1){const g=T.textures,F=T.width,J=T.height;let se=n.COLOR_BUFFER_BIT;const Ae=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(T),ee=g.length>1;if(ee)for(let ye=0;ye<g.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Me=T.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ye=0;ye<g.length;ye++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const Ve=i.get(g[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,F,J,0,0,F,J,se,n.NEAREST),l===!0&&(te.length=0,ge.length=0,te.push(n.COLOR_ATTACHMENT0+ye),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(te.push(Ae),ge.push(Ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let ye=0;ye<g.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const Ve=i.get(g[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function ne(T){return Math.min(r.maxSamples,T.samples)}function Te(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function R(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Re(T,g){const F=T.colorSpace,J=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==qo&&F!==pr&&(xt.getTransfer(F)===Ct?(J!==ti||se!==In)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",F)),g}function Le(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=re,this.resetTextureUnits=ie,this.getTextureUnits=V,this.setTextureUnits=Z,this.setTexture2D=pe,this.setTexture2DArray=ue,this.setTexture3D=ve,this.setTextureCube=he,this.rebindTextures=W,this.setupRenderTarget=X,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function KE(n,e){function t(i,r=pr){let s;const a=xt.getTransfer(r);if(i===In)return n.UNSIGNED_BYTE;if(i===eh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===th)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zp)return n.BYTE;if(i===Jp)return n.SHORT;if(i===_a)return n.UNSIGNED_SHORT;if(i===Qu)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===xi)return n.FLOAT;if(i===Ai)return n.HALF_FLOAT;if(i===em)return n.ALPHA;if(i===tm)return n.RGB;if(i===ti)return n.RGBA;if(i===tr)return n.DEPTH_COMPONENT;if(i===Fr)return n.DEPTH_STENCIL;if(i===nm)return n.RED;if(i===nh)return n.RED_INTEGER;if(i===Gr)return n.RG;if(i===ih)return n.RG_INTEGER;if(i===rh)return n.RGBA_INTEGER;if(i===Co||i===Po||i===Do||i===Lo)if(a===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zc||i===Jc||i===jc||i===Qc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eu||i===tu||i===nu||i===iu||i===ru||i===Xo||i===su)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===eu||i===tu)return a===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===iu)return s.COMPRESSED_R11_EAC;if(i===ru)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Xo)return s.COMPRESSED_RG11_EAC;if(i===su)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===au||i===ou||i===lu||i===cu||i===uu||i===hu||i===fu||i===du||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===au)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ou)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===du)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_u)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Su||i===Mu||i===yu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Su)return a===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bu||i===Eu||i===$o||i===Tu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Eu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$o)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===va?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ZE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JE=`
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

}`;class jE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new cm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wi({vertexShader:ZE,fragmentShader:JE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new _l(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QE extends Mr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const y=typeof XRWebGLBinding<"u",m=new jE,p={},w=t.getContextAttributes();let I=null,M=null;const P=[],D=[],B=new Ue;let S=null,N=null;const k=new ei;k.viewport=new Vt;const q=new ei;q.viewport=new Vt;const ae=[k,q],ie=new sS;let V=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let ce=P[me];return ce===void 0&&(ce=new Ql,P[me]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(me){let ce=P[me];return ce===void 0&&(ce=new Ql,P[me]=ce),ce.getGripSpace()},this.getHand=function(me){let ce=P[me];return ce===void 0&&(ce=new Ql,P[me]=ce),ce.getHandSpace()};function re(me){const ce=D.indexOf(me.inputSource);if(ce===-1)return;const we=P[ce];we!==void 0&&(we.update(me.inputSource,me.frame,c||a),we.dispatchEvent({type:me.type,data:me.inputSource}))}function Q(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",pe);for(let me=0;me<P.length;me++){const ce=D[me];ce!==null&&(D[me]=null,P[me].disconnect(ce))}V=null,Z=null,m.reset();for(const me in p)delete p[me];if(e.setRenderTarget(I),d=null,h=null,f=null,r=null,M=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(B.width,B.height,!1),N!==null){const me=N.camera;me.fov=N.fov,me.zoom=N.zoom,me.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){s=me,i.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){o=me,i.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(me){c=me},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(me){if(r=me,r!==null){if(I=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",pe),w.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(B),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Xe=null,Ne=null;w.depth&&(Ne=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=w.stencil?Fr:tr,Xe=w.stencil?va:Ti);const L={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(L),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new ri(h.textureWidth,h.textureHeight,{format:ti,type:In,depthTexture:new Sa(h.textureWidth,h.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const we={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ri(d.framebufferWidth,d.framebufferHeight,{format:ti,type:In,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function pe(me){for(let ce=0;ce<me.removed.length;ce++){const we=me.removed[ce],Xe=D.indexOf(we);Xe>=0&&(D[Xe]=null,P[Xe].disconnect(we))}for(let ce=0;ce<me.added.length;ce++){const we=me.added[ce];let Xe=D.indexOf(we);if(Xe===-1){for(let L=0;L<P.length;L++)if(L>=D.length){D.push(we),Xe=L;break}else if(D[L]===null){D[L]=we,Xe=L;break}if(Xe===-1)break}const Ne=P[Xe];Ne&&Ne.connect(we)}}const ue=new Y,ve=new Y;function he(me,ce,we){ue.setFromMatrixPosition(ce.matrixWorld),ve.setFromMatrixPosition(we.matrixWorld);const Xe=ue.distanceTo(ve),Ne=ce.projectionMatrix.elements,L=we.projectionMatrix.elements,z=Ne[14]/(Ne[10]-1),O=Ne[14]/(Ne[10]+1),W=(Ne[9]+1)/Ne[5],X=(Ne[9]-1)/Ne[5],G=(Ne[8]-1)/Ne[0],te=(L[8]+1)/L[0],ge=z*G,fe=z*te,ne=Xe/(-G+te),Te=ne*-G;if(ce.matrixWorld.decompose(me.position,me.quaternion,me.scale),me.translateX(Te),me.translateZ(ne),me.matrixWorld.compose(me.position,me.quaternion,me.scale),me.matrixWorldInverse.copy(me.matrixWorld).invert(),Ne[10]===-1)me.projectionMatrix.copy(ce.projectionMatrix),me.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const R=z+ne,Re=O+ne,Le=ge-Te,T=fe+(Xe-Te),g=W*O/Re*R,F=X*O/Re*R;me.projectionMatrix.makePerspective(Le,T,g,F,R,Re),me.projectionMatrixInverse.copy(me.projectionMatrix).invert()}}function De(me,ce){ce===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(ce.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(r===null)return;let ce=me.near,we=me.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(we=m.depthFar)),ie.near=q.near=k.near=ce,ie.far=q.far=k.far=we,(V!==ie.near||Z!==ie.far)&&(r.updateRenderState({depthNear:ie.near,depthFar:ie.far}),V=ie.near,Z=ie.far),ie.layers.mask=me.layers.mask|6,k.layers.mask=ie.layers.mask&-5,q.layers.mask=ie.layers.mask&-3;const Xe=me.parent,Ne=ie.cameras;De(ie,Xe);for(let L=0;L<Ne.length;L++)De(Ne[L],Xe);Ne.length===2?he(ie,k,q):ie.projectionMatrix.copy(k.projectionMatrix),N===null&&me.isPerspectiveCamera&&(N={camera:me,fov:me.fov,zoom:me.zoom}),ke(me,ie,Xe)};function ke(me,ce,we){we===null?me.matrix.copy(ce.matrixWorld):(me.matrix.copy(we.matrixWorld),me.matrix.invert(),me.matrix.multiply(ce.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(ce.projectionMatrix),me.projectionMatrixInverse.copy(ce.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=wu*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(me){l=me,h!==null&&(h.fixedFoveation=me),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=me)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(ie)},this.getCameraTexture=function(me){return p[me]};let rt=null;function it(me,ce){if(u=ce.getViewerPose(c||a),_=ce,u!==null){const we=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Xe=!1;we.length!==ie.cameras.length&&(ie.cameras.length=0,Xe=!0);for(let O=0;O<we.length;O++){const W=we[O];let X=null;if(d!==null)X=d.getViewport(W);else{const te=f.getViewSubImage(h,W);X=te.viewport,O===0&&(e.setRenderTargetTextures(M,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(M))}let G=ae[O];G===void 0&&(G=new ei,G.layers.enable(O),G.viewport=new Vt,ae[O]=G),G.matrix.fromArray(W.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(W.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(X.x,X.y,X.width,X.height),O===0&&(ie.matrix.copy(G.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),Xe===!0&&ie.cameras.push(G)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const O=f.getDepthInformation(we[0]);O&&O.isValid&&O.texture&&m.init(O,r.renderState)}if(Ne&&Ne.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let O=0;O<we.length;O++){const W=we[O].camera;if(W){let X=p[W];X||(X=new cm,p[W]=X);const G=f.getCameraImage(W);X.sourceTexture=G}}}}for(let we=0;we<P.length;we++){const Xe=D[we],Ne=P[we];Xe!==null&&Ne!==void 0&&Ne.update(Xe,ce,c||a)}rt&&rt(me,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const et=new ym;et.setAnimationLoop(it),this.setAnimationLoop=function(me){rt=me},this.dispose=function(){}}}const eT=new Ft,Cm=new ut;Cm.set(-1,0,0,0,1,0,0,0,1);function tT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,I,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,I):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),I=w.envMap,M=w.envMapRotation;I&&(m.envMap.value=I,m.envMapRotation.value.setFromMatrix4(eT.makeRotationFromEuler(M)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,I){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=I*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nT(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,P){const D=P.program;i.uniformBlockBinding(M,D)}function c(M,P){let D=r[M.id];D===void 0&&(m(M),D=u(M),r[M.id]=D,M.addEventListener("dispose",w));const B=P.program;i.updateUBOMapping(M,B);const S=e.render.frame;s[M.id]!==S&&(h(M),s[M.id]=S)}function u(M){const P=f();M.__bindingPointIndex=P;const D=n.createBuffer(),B=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,B,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,D),D}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const P=r[M.id],D=M.uniforms,B=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let S=0,N=D.length;S<N;S++){const k=D[S];if(Array.isArray(k))for(let q=0,ae=k.length;q<ae;q++)d(k[q],S,q,B);else d(k,S,0,B)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,P,D,B){if(y(M,P,D,B)===!0){const S=M.__offset,N=M.value;if(Array.isArray(N)){let k=0;for(let q=0;q<N.length;q++){const ae=N[q],ie=p(ae);_(ae,M.__data,k),typeof ae!="number"&&typeof ae!="boolean"&&!ae.isMatrix3&&!ArrayBuffer.isView(ae)&&(k+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(N,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,M.__data)}}function _(M,P,D){typeof M=="number"||typeof M=="boolean"?P[0]=M:M.isMatrix3?(P[0]=M.elements[0],P[1]=M.elements[1],P[2]=M.elements[2],P[3]=0,P[4]=M.elements[3],P[5]=M.elements[4],P[6]=M.elements[5],P[7]=0,P[8]=M.elements[6],P[9]=M.elements[7],P[10]=M.elements[8],P[11]=0):ArrayBuffer.isView(M)?P.set(new M.constructor(M.buffer,M.byteOffset,P.length)):M.toArray(P,D)}function y(M,P,D,B){const S=M.value,N=P+"_"+D;if(B[N]===void 0)return typeof S=="number"||typeof S=="boolean"?B[N]=S:ArrayBuffer.isView(S)?B[N]=S.slice():B[N]=S.clone(),!0;{const k=B[N];if(typeof S=="number"||typeof S=="boolean"){if(k!==S)return B[N]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(k.equals(S)===!1)return k.copy(S),!0}}return!1}function m(M){const P=M.uniforms;let D=0;const B=16;for(let N=0,k=P.length;N<k;N++){const q=Array.isArray(P[N])?P[N]:[P[N]];for(let ae=0,ie=q.length;ae<ie;ae++){const V=q[ae],Z=Array.isArray(V.value)?V.value:[V.value];for(let re=0,Q=Z.length;re<Q;re++){const pe=Z[re],ue=p(pe),ve=D%B,he=ve%ue.boundary,De=ve+he;D+=he,De!==0&&B-De<ue.storage&&(D+=B-De),V.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=D,D+=ue.storage}}}const S=D%B;return S>0&&(D+=B-S),M.__size=D,M.__cache={},this}function p(M){const P={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(P.boundary=4,P.storage=4):M.isVector2?(P.boundary=8,P.storage=8):M.isVector3||M.isColor?(P.boundary=16,P.storage=12):M.isVector4?(P.boundary=16,P.storage=16):M.isMatrix3?(P.boundary=48,P.storage=48):M.isMatrix4?(P.boundary=64,P.storage=64):M.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(P.boundary=16,P.storage=M.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",M),P}function w(M){const P=M.target;P.removeEventListener("dispose",w);const D=a.indexOf(P.__bindingPointIndex);a.splice(D,1),n.deleteBuffer(r[P.id]),delete r[P.id],delete s[P.id]}function I(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:I}}const iT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function rT(){return hi===null&&(hi=new ax(iT,16,16,Gr,Ai),hi.name="DFG_LUT",hi.minFilter=mn,hi.magFilter=mn,hi.wrapS=Gi,hi.wrapT=Gi,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class sT{constructor(e={}){const{canvas:t=U0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=In}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=d,m=new Set([rh,ih,nh]),p=new Set([In,Ti,_a,va,eh,th]),w=new Uint32Array(4),I=new Int32Array(4),M=new Y;let P=null,D=null;const B=[],S=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let q=!1,ae=null,ie=null,V=null,Z=null;this._outputColorSpace=Vn;let re=0,Q=0,pe=null,ue=-1,ve=null;const he=new Vt,De=new Vt;let ke=null;const rt=new St(0);let it=0,et=t.width,me=t.height,ce=1,we=null,Xe=null;const Ne=new Vt(0,0,et,me),L=new Vt(0,0,et,me);let z=!1;const O=new ch;let W=!1,X=!1;const G=new Ft,te=new Y,ge=new Vt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Te(){return pe===null?ce:1}let R=i;function Re(b,$){return t.getContext(b,$)}let Le,T,g,F,J,se,Ae,Ce,ee,Me,ye,Ve,Oe,Fe,Je,je,at,E,A,C,_e,Pe,xe;try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ju}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",vn,!1),R===null){const $="webgl2";if(R=Re($,b),R===null)throw Re($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(b){throw t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),Mt("WebGLRenderer: "+b.message),b}function Ye(){Le=new rb(R),Le.init(),_e=new KE(R,Le),T=new Yy(R,Le,e,_e),g=new qE(R,Le),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),ie=R.createFramebuffer(),V=R.createFramebuffer(),Z=R.createFramebuffer(),F=new ob(R),J=new IE,se=new YE(R,Le,g,J,T,_e,F),Ae=new ib(k),Ce=new cS(R),Pe=new $y(R,Ce),ee=new sb(R,Ce,F,Pe),Me=new cb(R,ee,Ce,Pe,F),E=new lb(R,T,se),Je=new Ky(J),ye=new LE(k,Ae,Le,T,Pe,Je),Ve=new tT(k,J),Oe=new NE,Fe=new VE(Le),at=new Xy(k,Ae,g,Me,_,l),je=new $E(k,Me,T),xe=new nT(R,F,T,g),A=new qy(R,Le,F),C=new ab(R,Le,F),F.programs=ye.programs,k.capabilities=T,k.extensions=Le,k.properties=J,k.renderLists=Oe,k.shadowMap=je,k.state=g,k.info=F}y!==In&&(N=new hb(y,t.width,t.height,o,r,s));const Qe=new QE(k,R);this.xr=Qe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=Le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(b){b!==void 0&&(ce=b,this.setSize(et,me,!1))},this.getSize=function(b){return b.set(et,me)},this.setSize=function(b,$,de=!0){if(Qe.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}et=b,me=$,t.width=Math.floor(b*ce),t.height=Math.floor($*ce),de===!0&&(t.style.width=b+"px",t.style.height=$+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,b,$)},this.getDrawingBufferSize=function(b){return b.set(et*ce,me*ce).floor()},this.setDrawingBufferSize=function(b,$,de){et=b,me=$,ce=de,t.width=Math.floor(b*de),t.height=Math.floor($*de),this.setViewport(0,0,b,$)},this.setEffects=function(b){if(y===In){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let $=0;$<b.length;$++)if(b[$].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(he)},this.getViewport=function(b){return b.copy(Ne)},this.setViewport=function(b,$,de,le){b.isVector4?Ne.set(b.x,b.y,b.z,b.w):Ne.set(b,$,de,le),g.viewport(he.copy(Ne).multiplyScalar(ce).round())},this.getScissor=function(b){return b.copy(L)},this.setScissor=function(b,$,de,le){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,$,de,le),g.scissor(De.copy(L).multiplyScalar(ce).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(b){g.setScissorTest(z=b)},this.setOpaqueSort=function(b){we=b},this.setTransparentSort=function(b){Xe=b},this.getClearColor=function(b){return b.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(b=!0,$=!0,de=!0){let le=0;if(b){let oe=!1;if(pe!==null){const He=pe.texture.format;oe=m.has(He)}if(oe){const He=pe.texture.type,$e=p.has(He),Be=at.getClearColor(),Ke=at.getClearAlpha(),We=Be.r,ft=Be.g,mt=Be.b;$e?(w[0]=We,w[1]=ft,w[2]=mt,w[3]=Ke,R.clearBufferuiv(R.COLOR,0,w)):(I[0]=We,I[1]=ft,I[2]=mt,I[3]=Ke,R.clearBufferiv(R.COLOR,0,I))}else le|=R.COLOR_BUFFER_BIT}$&&(le|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(le|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&R.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),ae=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),at.dispose(),Oe.dispose(),Fe.dispose(),J.dispose(),Ae.dispose(),Me.dispose(),Pe.dispose(),xe.dispose(),ye.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",Ia),Qe.removeEventListener("sessionend",yr),Ci.stop()};function Dt(b){b.preventDefault(),_f("WebGLRenderer: Context Lost."),q=!0}function _t(){_f("WebGLRenderer: Context Restored."),q=!1;const b=F.autoReset,$=je.enabled,de=je.autoUpdate,le=je.needsUpdate,oe=je.type;Ye(),F.autoReset=b,je.enabled=$,je.autoUpdate=de,je.needsUpdate=le,je.type=oe}function vn(b){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function On(b){const $=b.target;$.removeEventListener("dispose",On),bl($)}function bl(b){El(b),J.remove(b)}function El(b){const $=J.get(b).programs;$!==void 0&&($.forEach(function(de){ye.releaseProgram(de)}),b.isShaderMaterial&&ye.releaseShaderCache(b))}this.renderBufferDirect=function(b,$,de,le,oe,He){$===null&&($=fe);const $e=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Be=Al(b,$,de,le,oe);g.setMaterial(le,$e);let Ke=de.index,We=1;if(le.wireframe===!0){if(Ke=ee.getWireframeAttribute(de),Ke===void 0)return;We=2}const ft=de.drawRange,mt=de.attributes.position;let Ze=ft.start*We,bt=(ft.start+ft.count)*We;He!==null&&(Ze=Math.max(Ze,He.start*We),bt=Math.min(bt,(He.start+He.count)*We)),Ke!==null?(Ze=Math.max(Ze,0),bt=Math.min(bt,Ke.count)):mt!=null&&(Ze=Math.max(Ze,0),bt=Math.min(bt,mt.count));const Bt=bt-Ze;if(Bt<0||Bt===1/0)return;Pe.setup(oe,le,Be,de,Ke);let Ut,Rt=A;if(Ke!==null&&(Ut=Ce.get(Ke),Rt=C,Rt.setIndex(Ut)),oe.isMesh)le.wireframe===!0?(g.setLineWidth(le.wireframeLinewidth*Te()),Rt.setMode(R.LINES)):Rt.setMode(R.TRIANGLES);else if(oe.isLine){let tn=le.linewidth;tn===void 0&&(tn=1),g.setLineWidth(tn*Te()),oe.isLineSegments?Rt.setMode(R.LINES):oe.isLineLoop?Rt.setMode(R.LINE_LOOP):Rt.setMode(R.LINE_STRIP)}else oe.isPoints?Rt.setMode(R.POINTS):oe.isSprite&&Rt.setMode(R.TRIANGLES);if(oe.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))Rt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const tn=oe._multiDrawStarts,qe=oe._multiDrawCounts,rn=oe._multiDrawCount,vt=Ke?Ce.get(Ke).bytesPerElement:1,Tn=J.get(le).currentProgram.getUniforms();for(let Fn=0;Fn<rn;Fn++)Tn.setValue(R,"_gl_DrawID",Fn),Rt.render(tn[Fn]/vt,qe[Fn])}else if(oe.isInstancedMesh)Rt.renderInstances(Ze,Bt,oe.count);else if(de.isInstancedBufferGeometry){const tn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,qe=Math.min(de.instanceCount,tn);Rt.renderInstances(Ze,Bt,qe)}else Rt.render(Ze,Bt)};function ws(b,$,de,le){ae!==null&&b.isNodeMaterial&&ae.setObject(le,b),W===!0&&Je.setState(b,de,!1),b.transparent===!0&&b.side===_i&&b.forceSinglePass===!1?(b.side=Pn,b.needsUpdate=!0,en(b,$,le),b.side=Vr,b.needsUpdate=!0,en(b,$,le),b.side=_i):en(b,$,le)}this.compile=function(b,$,de=null){de===null&&(de=b),ae!==null&&ae.renderStart(b,$,de),D=Fe.get(de),D.init($),S.push(D),de.traverseVisible(function(oe){oe.isLight&&oe.layers.test($.layers)&&(D.pushLight(oe),oe.castShadow&&D.pushShadow(oe))}),b!==de&&b.traverseVisible(function(oe){oe.isLight&&oe.layers.test($.layers)&&(D.pushLight(oe),oe.castShadow&&D.pushShadow(oe))}),D.setupLights(),ae!==null&&ae.updateLights(D.state.lightsArray),X=this.localClippingEnabled,W=Je.init(this.clippingPlanes,X),W===!0&&Je.setGlobalState(this.clippingPlanes,$),ae!==null&&je.render(D.state.shadowsArray,de,$);const le=new Set;return b.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const He=oe.material;if(He)if(Array.isArray(He))for(let $e=0;$e<He.length;$e++){const Be=He[$e];ws(Be,de,$,oe),le.add(Be)}else ws(He,de,$,oe),le.add(He)}),D=S.pop(),ae!==null&&ae.renderEnd(),le},this.compileAsync=function(b,$,de=null){const le=this.compile(b,$,de);return new Promise(oe=>{function He(){if(le.forEach(function($e){const Ke=J.get($e).currentProgram;(Ke===void 0||Ke.isReady())&&le.delete($e)}),le.size===0){oe(b);return}setTimeout(He,10)}Le.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Rs=null;function Tl(b){Rs&&Rs(b)}function Ia(){Ci.stop()}function yr(){Ci.start()}const Ci=new ym;Ci.setAnimationLoop(Tl),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(b){Rs=b,Qe.setAnimationLoop(b),b===null?Ci.stop():Ci.start()},Qe.addEventListener("sessionstart",Ia),Qe.addEventListener("sessionend",yr),this.render=function(b,$){if($!==void 0&&$.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;ae!==null&&ae.renderStart(b,$);const de=Qe.enabled===!0&&Qe.isPresenting===!0,le=N!==null&&(pe===null||de)&&N.begin(k,pe);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera($),$=Qe.getCamera()),b.isScene===!0&&b.onBeforeRender(k,b,$,pe),D=Fe.get(b,S.length),D.init($),D.state.textureUnits=se.getTextureUnits(),S.push(D),G.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),O.setFromProjectionMatrix(G,Si,$.reversedDepth),X=this.localClippingEnabled,W=Je.init(this.clippingPlanes,X),P=Oe.get(b,B.length),P.init(),B.push(P),Qe.enabled===!0&&Qe.isPresenting===!0){const $e=k.xr.getDepthSensingMesh();$e!==null&&Cs($e,$,-1/0,k.sortObjects)}Cs(b,$,0,k.sortObjects),P.finish(),ae!==null&&ae.updateLights(D.state.lightsArray),k.sortObjects===!0&&P.sort(we,Xe),ne=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,ne&&at.addToRenderList(P,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),W===!0&&Je.beginShadows();const oe=D.state.shadowsArray;if(je.render(oe,b,$),W===!0&&Je.endShadows(),(le&&N.hasRenderPass())===!1){const $e=P.opaque,Be=P.transmissive;if(D.setupLights(),$.isArrayCamera){const Ke=$.cameras;if(Be.length>0)for(let We=0,ft=Ke.length;We<ft;We++){const mt=Ke[We];Ps($e,Be,b,mt)}ne&&at.render(b);for(let We=0,ft=Ke.length;We<ft;We++){const mt=Ke[We];br(P,b,mt,mt.viewport)}}else Be.length>0&&Ps($e,Be,b,$),ne&&at.render(b),br(P,b,$)}pe!==null&&Q===0&&(se.updateMultisampleRenderTarget(pe),se.updateRenderTargetMipmap(pe)),le&&N.end(k),b.isScene===!0&&b.onAfterRender(k,b,$),Pe.resetDefaultState(),ue=-1,ve=null,S.pop(),S.length>0?(D=S[S.length-1],se.setTextureUnits(D.state.textureUnits),W===!0&&Je.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,B.pop(),B.length>0?P=B[B.length-1]:P=null,ae!==null&&ae.renderEnd()};function Cs(b,$,de,le){if(b.visible===!1)return;if(b.layers.test($.layers)){if(b.isGroup)de=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update($);else if(b.isLightProbeGrid)D.pushLightProbeGrid(b);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(O)){le&&ge.setFromMatrixPosition(b.matrixWorld).applyMatrix4(G);const $e=Me.update(b),Be=b.material;Be.visible&&P.push(b,$e,Be,de,ge.z,null,$)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(O))){const $e=Me.update(b),Be=b.material;if(le&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ge.copy(b.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),ge.copy($e.boundingSphere.center)),ge.applyMatrix4(b.matrixWorld).applyMatrix4(G)),Array.isArray(Be)){const Ke=$e.groups;for(let We=0,ft=Ke.length;We<ft;We++){const mt=Ke[We],Ze=Be[mt.materialIndex];Ze&&Ze.visible&&P.push(b,$e,Ze,de,ge.z,mt,$)}}else Be.visible&&P.push(b,$e,Be,de,ge.z,null,$)}}const He=b.children;for(let $e=0,Be=He.length;$e<Be;$e++)Cs(He[$e],$,de,le)}function br(b,$,de,le){const{opaque:oe,transmissive:He,transparent:$e}=b;D.setupLightsView(de),W===!0&&Je.setGlobalState(k.clippingPlanes,de),le&&g.viewport(he.copy(le)),oe.length>0&&Er(oe,$,de),He.length>0&&Er(He,$,de),$e.length>0&&Er($e,$,de),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Ps(b,$,de,le){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[le.id]===void 0){const Ze=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[le.id]=new ri(1,1,{generateMipmaps:!0,type:Ze?Ai:In,minFilter:Or,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const He=D.state.transmissionRenderTarget[le.id],$e=le.viewport||he;He.setSize($e.z*k.transmissionResolutionScale,$e.w*k.transmissionResolutionScale);const Be=k.getRenderTarget(),Ke=k.getActiveCubeFace(),We=k.getActiveMipmapLevel();k.setRenderTarget(He),k.getClearColor(rt),it=k.getClearAlpha(),it<1&&k.setClearColor(16777215,.5),k.clear(),ne&&at.render(de);const ft=k.toneMapping;k.toneMapping=yi;const mt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),D.setupLightsView(le),W===!0&&Je.setGlobalState(k.clippingPlanes,le),Er(b,de,le),se.updateMultisampleRenderTarget(He),se.updateRenderTargetMipmap(He),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let bt=0,Bt=$.length;bt<Bt;bt++){const Ut=$[bt],{object:Rt,geometry:tn,material:qe,group:rn}=Ut;if(qe.side===_i&&Rt.layers.test(le.layers)){const vt=qe.side;qe.side=Pn,qe.needsUpdate=!0,Ua(Rt,de,le,tn,qe,rn),qe.side=vt,qe.needsUpdate=!0,Ze=!0}}Ze===!0&&(se.updateMultisampleRenderTarget(He),se.updateRenderTargetMipmap(He))}k.setRenderTarget(Be,Ke,We),k.setClearColor(rt,it),mt!==void 0&&(le.viewport=mt),k.toneMapping=ft}function Er(b,$,de){const le=$.isScene===!0?$.overrideMaterial:null;for(let oe=0,He=b.length;oe<He;oe++){const $e=b[oe],{object:Be,geometry:Ke,group:We}=$e;let ft=$e.material;ft.allowOverride===!0&&le!==null&&(ft=le),Be.layers.test(de.layers)&&Ua(Be,$,de,Ke,ft,We)}}function Ua(b,$,de,le,oe,He){ae!==null&&oe.isNodeMaterial&&ae.setObject(b,oe),b.onBeforeRender(k,$,de,le,oe,He),b.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),oe.onBeforeRender(k,$,de,le,b,He),oe.transparent===!0&&oe.side===_i&&oe.forceSinglePass===!1?(oe.side=Pn,oe.needsUpdate=!0,k.renderBufferDirect(de,$,le,oe,b,He),oe.side=Vr,oe.needsUpdate=!0,k.renderBufferDirect(de,$,le,oe,b,He),oe.side=_i):k.renderBufferDirect(de,$,le,oe,b,He),b.onAfterRender(k,$,de,le,oe,He)}function en(b,$,de){$.isScene!==!0&&($=fe);const le=J.get(b),oe=D.state.lights,He=D.state.shadowsArray,$e=oe.state.version,Be=ye.getParameters(b,oe.state,He,$,de,D.state.lightProbeGridArray),Ke=ye.getProgramCacheKey(Be);let We=le.programs;le.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?$.environment:null,le.fog=$.fog;const ft=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;le.envMap=Ae.get(b.envMap||le.environment,ft),le.envMapRotation=le.environment!==null&&b.envMap===null?$.environmentRotation:b.envMapRotation,We===void 0&&(b.addEventListener("dispose",On),We=new Map,le.programs=We);let mt=We.get(Ke);if(mt!==void 0){if(le.currentProgram===mt&&le.lightsStateVersion===$e)return Ds(b,Be),mt}else Be.uniforms=ye.getUniforms(b),ae!==null&&b.isNodeMaterial&&ae.build(b,de,Be),b.onBeforeCompile(Be,k),mt=ye.acquireProgram(Be,Ke),We.set(Ke,mt),le.uniforms=Be.uniforms;const Ze=le.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ze.clippingPlanes=Je.uniform),Ds(b,Be),le.needsLights=Oa(b),le.lightsStateVersion=$e,le.needsLights&&(Ze.ambientLightColor.value=oe.state.ambient,Ze.lightProbe.value=oe.state.probe,Ze.sunLights.value=oe.state.sun,Ze.sunLightShadows.value=oe.state.sunShadow,Ze.directionalLights.value=oe.state.directional,Ze.directionalLightShadows.value=oe.state.directionalShadow,Ze.spotLights.value=oe.state.spot,Ze.spotLightShadows.value=oe.state.spotShadow,Ze.rectAreaLights.value=oe.state.rectArea,Ze.ltc_1.value=oe.state.rectAreaLTC1,Ze.ltc_2.value=oe.state.rectAreaLTC2,Ze.pointLights.value=oe.state.point,Ze.pointLightShadows.value=oe.state.pointShadow,Ze.hemisphereLights.value=oe.state.hemi,Ze.sunShadowMatrix.value=oe.state.sunShadowMatrix,Ze.sunShadowCascade.value=oe.state.sunShadowCascade,Ze.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ze.spotLightMatrix.value=oe.state.spotLightMatrix,Ze.spotLightMap.value=oe.state.spotLightMap,Ze.pointShadowMatrix.value=oe.state.pointShadowMatrix),le.lightProbeGrid=D.state.lightProbeGridArray.length>0,le.currentProgram=mt,le.uniformsList=null,mt}function Na(b){if(b.uniformsList===null){const $=b.currentProgram.getUniforms();b.uniformsList=Uo.seqWithValue($.seq,b.uniforms)}return b.uniformsList}function Ds(b,$){const de=J.get(b);de.outputColorSpace=$.outputColorSpace,de.batching=$.batching,de.batchingColor=$.batchingColor,de.instancing=$.instancing,de.instancingColor=$.instancingColor,de.instancingMorph=$.instancingMorph,de.skinning=$.skinning,de.morphTargets=$.morphTargets,de.morphNormals=$.morphNormals,de.morphColors=$.morphColors,de.morphTargetsCount=$.morphTargetsCount,de.numClippingPlanes=$.numClippingPlanes,de.numIntersection=$.numClipIntersection,de.vertexAlphas=$.vertexAlphas,de.vertexTangents=$.vertexTangents,de.toneMapping=$.toneMapping}function ir(b,$){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition($.matrixWorld);for(let de=0,le=b.length;de<le;de++){const oe=b[de];if(oe.texture!==null&&oe.boundingBox.containsPoint(M))return oe}return null}function Al(b,$,de,le,oe){$.isScene!==!0&&($=fe),se.resetTextureUnits();const He=$.fog,$e=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?$.environment:null,Be=pe===null?k.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:xt.workingColorSpace,Ke=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,We=Ae.get(le.envMap||$e,Ke),ft=le.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,mt=!!de.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ze=!!de.morphAttributes.position,bt=!!de.morphAttributes.normal,Bt=!!de.morphAttributes.color;let Ut=yi;le.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ut=k.toneMapping);const Rt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,tn=Rt!==void 0?Rt.length:0,qe=J.get(le),rn=D.state.lights;if(W===!0&&(X===!0||b!==ve)){const Lt=b===ve&&le.id===ue;Je.setState(le,b,Lt)}let vt=!1;le.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==rn.state.version||qe.outputColorSpace!==Be||oe.isBatchedMesh&&qe.batching===!1||!oe.isBatchedMesh&&qe.batching===!0||oe.isBatchedMesh&&qe.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&qe.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&qe.instancing===!1||!oe.isInstancedMesh&&qe.instancing===!0||oe.isSkinnedMesh&&qe.skinning===!1||!oe.isSkinnedMesh&&qe.skinning===!0||oe.isInstancedMesh&&qe.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&qe.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&qe.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&qe.instancingMorph===!1&&oe.morphTexture!==null||qe.envMap!==We||le.fog===!0&&qe.fog!==He||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Je.numPlanes||qe.numIntersection!==Je.numIntersection)||qe.vertexAlphas!==ft||qe.vertexTangents!==mt||qe.morphTargets!==Ze||qe.morphNormals!==bt||qe.morphColors!==Bt||qe.toneMapping!==Ut||qe.morphTargetsCount!==tn||!!qe.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,qe.__version=le.version);let Tn=qe.currentProgram;vt===!0&&(Tn=en(le,$,oe),ae&&le.isNodeMaterial&&ae.onUpdateProgram(le,Tn,qe));let Fn=!1,ai=!1,Pi=!1;const Et=Tn.getUniforms(),zt=qe.uniforms;if(g.useProgram(Tn.program)&&(Fn=!0,ai=!0,Pi=!0),le.id!==ue&&(ue=le.id,ai=!0),qe.needsLights){const Lt=ir(D.state.lightProbeGridArray,oe);qe.lightProbeGrid!==Lt&&(qe.lightProbeGrid=Lt,ai=!0)}if(Fn||ve!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Et.setValue(R,"projectionMatrix",b.projectionMatrix),Et.setValue(R,"viewMatrix",b.matrixWorldInverse);const qn=Et.map.cameraPosition;qn!==void 0&&qn.setValue(R,te.setFromMatrixPosition(b.matrixWorld)),T.logarithmicDepthBuffer&&Et.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Et.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),ve!==b&&(ve=b,ai=!0,Pi=!0)}if(qe.needsLights&&(rn.state.sunShadowMap.length>0&&Et.setValue(R,"sunShadowMap",rn.state.sunShadowMap,se),rn.state.directionalShadowMap.length>0&&Et.setValue(R,"directionalShadowMap",rn.state.directionalShadowMap,se),rn.state.spotShadowMap.length>0&&Et.setValue(R,"spotShadowMap",rn.state.spotShadowMap,se),rn.state.pointShadowMap.length>0&&Et.setValue(R,"pointShadowMap",rn.state.pointShadowMap,se)),oe.isSkinnedMesh){Et.setOptional(R,oe,"bindMatrix"),Et.setOptional(R,oe,"bindMatrixInverse");const Lt=oe.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Et.setValue(R,"boneTexture",Lt.boneTexture,se))}oe.isBatchedMesh&&(Et.setOptional(R,oe,"batchingTexture"),Et.setValue(R,"batchingTexture",oe._matricesTexture,se),Et.setOptional(R,oe,"batchingIdTexture"),Et.setValue(R,"batchingIdTexture",oe._indirectTexture,se),Et.setOptional(R,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Et.setValue(R,"batchingColorTexture",oe._colorsTexture,se));const oi=de.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&E.update(oe,de,Tn),(ai||qe.receiveShadow!==oe.receiveShadow)&&(qe.receiveShadow=oe.receiveShadow,Et.setValue(R,"receiveShadow",oe.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&$.environment!==null&&(zt.envMapIntensity.value=$.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=rT()),ai){if(Et.setValue(R,"toneMappingExposure",k.toneMappingExposure),qe.needsLights&&Ls(zt,Pi),He&&le.fog===!0&&Ve.refreshFogUniforms(zt,He),Ve.refreshMaterialUniforms(zt,le,ce,me,D.state.transmissionRenderTarget[b.id]),qe.needsLights&&qe.lightProbeGrid){const Lt=qe.lightProbeGrid;zt.probesSH.value=Lt.texture,zt.probesMin.value.copy(Lt.boundingBox.min),zt.probesMax.value.copy(Lt.boundingBox.max),zt.probesResolution.value.copy(Lt.resolution)}Uo.upload(R,Na(qe),zt,se)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Uo.upload(R,Na(qe),zt,se),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Et.setValue(R,"center",oe.center),Et.setValue(R,"modelViewMatrix",oe.modelViewMatrix),Et.setValue(R,"normalMatrix",oe.normalMatrix),Et.setValue(R,"modelMatrix",oe.matrixWorld),le.uniformsGroups!==void 0){const Lt=le.uniformsGroups;for(let qn=0,rr=Lt.length;qn<rr;qn++){const Ba=Lt[qn];xe.update(Ba,Tn),xe.bind(Ba,Tn)}}return Tn}function Ls(b,$){b.ambientLightColor.needsUpdate=$,b.lightProbe.needsUpdate=$,b.sunLights.needsUpdate=$,b.sunLightShadows.needsUpdate=$,b.directionalLights.needsUpdate=$,b.directionalLightShadows.needsUpdate=$,b.pointLights.needsUpdate=$,b.pointLightShadows.needsUpdate=$,b.spotLights.needsUpdate=$,b.spotLightShadows.needsUpdate=$,b.rectAreaLights.needsUpdate=$,b.hemisphereLights.needsUpdate=$}function Oa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return pe},this.setRenderTargetTextures=function(b,$,de){const le=J.get(b);le.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),J.get(b.texture).__webglTexture=$,J.get(b.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:de,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,$){const de=J.get(b);de.__webglFramebuffer=$,de.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(b,$=0,de=0){pe=b,re=$,Q=de;let le=null,oe=!1,He=!1;if(b){const Be=J.get(b);if(Be.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(R.FRAMEBUFFER,Be.__webglFramebuffer),he.copy(b.viewport),De.copy(b.scissor),ke=b.scissorTest,g.viewport(he),g.scissor(De),g.setScissorTest(ke),ue=-1;return}else if(Be.__webglFramebuffer===void 0)se.setupRenderTarget(b);else if(Be.__hasExternalTextures)se.rebindTextures(b,J.get(b.texture).__webglTexture,J.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ft=b.depthTexture;if(Be.__boundDepthTexture!==ft){if(ft!==null&&J.has(ft)&&(b.width!==ft.image.width||b.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(b)}}const Ke=b.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(He=!0);const We=J.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(We[$])?le=We[$][de]:le=We[$],oe=!0):b.samples>0&&se.useMultisampledRTT(b)===!1?le=J.get(b).__webglMultisampledFramebuffer:Array.isArray(We)?le=We[de]:le=We,he.copy(b.viewport),De.copy(b.scissor),ke=b.scissorTest}else he.copy(Ne).multiplyScalar(ce).floor(),De.copy(L).multiplyScalar(ce).floor(),ke=z;if(de!==0&&(le=ie),g.bindFramebuffer(R.FRAMEBUFFER,le)&&g.drawBuffers(b,le),g.viewport(he),g.scissor(De),g.setScissorTest(ke),oe){const Be=J.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be.__webglTexture,de)}else if(He){const Be=$;for(let Ke=0;Ke<b.textures.length;Ke++){const We=J.get(b.textures[Ke]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ke,We.__webglTexture,de,Be)}}else if(b!==null&&de!==0){const Be=J.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Be.__webglTexture,de)}ue=-1};function Fa(b){const $=J.get(b);return($.__readFormat!==b.format||$.__readType!==b.type)&&($.__readFormat=b.format,$.__readType=b.type,$.__formatReadable=T.textureFormatReadable(b.format),$.__typeReadable=T.textureTypeReadable(b.type)),$}this.readRenderTargetPixels=function(b,$,de,le,oe,He,$e,Be=0){if(!(b&&b.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&$e!==void 0&&(Ke=Ke[$e]),Ke){g.bindFramebuffer(R.FRAMEBUFFER,Ke);try{const We=b.textures[Be],ft=We.format,mt=We.type;b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Be);const Ze=Fa(We);if(Ze.__formatReadable===!1){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=b.width-le&&de>=0&&de<=b.height-oe&&R.readPixels($,de,le,oe,_e.convert(ft),_e.convert(mt),He)}finally{const We=pe!==null?J.get(pe).__webglFramebuffer:null;g.bindFramebuffer(R.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(b,$,de,le,oe,He,$e,Be=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&$e!==void 0&&(Ke=Ke[$e]),Ke)if($>=0&&$<=b.width-le&&de>=0&&de<=b.height-oe){g.bindFramebuffer(R.FRAMEBUFFER,Ke);const We=b.textures[Be],ft=We.format,mt=We.type;b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Be);const Ze=Fa(We);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,bt),R.bufferData(R.PIXEL_PACK_BUFFER,He.byteLength,R.STREAM_READ),R.readPixels($,de,le,oe,_e.convert(ft),_e.convert(mt),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);const Bt=pe!==null?J.get(pe).__webglFramebuffer:null;g.bindFramebuffer(R.FRAMEBUFFER,Bt);const Ut=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await N0(R,Ut,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,bt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,He),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(bt),R.deleteSync(Ut),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,$=null,de=0){const le=Math.pow(2,-de),oe=Math.floor(b.image.width*le),He=Math.floor(b.image.height*le),$e=$!==null?$.x:0,Be=$!==null?$.y:0;se.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,de,0,0,$e,Be,oe,He),g.unbindTexture()},this.copyTextureToTexture=function(b,$,de=null,le=null,oe=0,He=0){let $e,Be,Ke,We,ft,mt,Ze,bt,Bt;const Ut=b.isCompressedTexture?b.mipmaps[He]:b.image;if(de!==null)$e=de.max.x-de.min.x,Be=de.max.y-de.min.y,Ke=de.isBox3?de.max.z-de.min.z:1,We=de.min.x,ft=de.min.y,mt=de.isBox3?de.min.z:0;else{const zt=Math.pow(2,-oe);$e=Math.floor(Ut.width*zt),Be=Math.floor(Ut.height*zt),b.isDataArrayTexture?Ke=Ut.depth:b.isData3DTexture?Ke=Math.floor(Ut.depth*zt):Ke=1,We=0,ft=0,mt=0}le!==null?(Ze=le.x,bt=le.y,Bt=le.z):(Ze=0,bt=0,Bt=0);const Rt=_e.convert($.format),tn=_e.convert($.type);let qe;$.isData3DTexture?(se.setTexture3D($,0),qe=R.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(se.setTexture2DArray($,0),qe=R.TEXTURE_2D_ARRAY):(se.setTexture2D($,0),qe=R.TEXTURE_2D),g.activeTexture(R.TEXTURE0),g.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,$.flipY),g.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),g.pixelStorei(R.UNPACK_ALIGNMENT,$.unpackAlignment);const rn=g.getParameter(R.UNPACK_ROW_LENGTH),vt=g.getParameter(R.UNPACK_IMAGE_HEIGHT),Tn=g.getParameter(R.UNPACK_SKIP_PIXELS),Fn=g.getParameter(R.UNPACK_SKIP_ROWS),ai=g.getParameter(R.UNPACK_SKIP_IMAGES);g.pixelStorei(R.UNPACK_ROW_LENGTH,Ut.width),g.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ut.height),g.pixelStorei(R.UNPACK_SKIP_PIXELS,We),g.pixelStorei(R.UNPACK_SKIP_ROWS,ft),g.pixelStorei(R.UNPACK_SKIP_IMAGES,mt);const Pi=b.isDataArrayTexture||b.isData3DTexture,Et=$.isDataArrayTexture||$.isData3DTexture;if(b.isDepthTexture){const zt=J.get(b),oi=J.get($),Lt=J.get(zt.__renderTarget),qn=J.get(oi.__renderTarget);g.bindFramebuffer(R.READ_FRAMEBUFFER,Lt.__webglFramebuffer),g.bindFramebuffer(R.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let rr=0;rr<Ke;rr++)Pi&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,J.get(b).__webglTexture,oe,mt+rr),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,J.get($).__webglTexture,He,Bt+rr)),R.blitFramebuffer(We,ft,$e,Be,Ze,bt,$e,Be,R.DEPTH_BUFFER_BIT,R.NEAREST);g.bindFramebuffer(R.READ_FRAMEBUFFER,null),g.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(oe!==0||b.isRenderTargetTexture||J.has(b)){const zt=J.get(b),oi=J.get($);g.bindFramebuffer(R.READ_FRAMEBUFFER,V),g.bindFramebuffer(R.DRAW_FRAMEBUFFER,Z);for(let Lt=0;Lt<Ke;Lt++)Pi?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zt.__webglTexture,oe,mt+Lt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,zt.__webglTexture,oe),Et?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,oi.__webglTexture,He,Bt+Lt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,oi.__webglTexture,He),oe!==0?R.blitFramebuffer(We,ft,$e,Be,Ze,bt,$e,Be,R.COLOR_BUFFER_BIT,R.NEAREST):Et?R.copyTexSubImage3D(qe,He,Ze,bt,Bt+Lt,We,ft,$e,Be):R.copyTexSubImage2D(qe,He,Ze,bt,We,ft,$e,Be);g.bindFramebuffer(R.READ_FRAMEBUFFER,null),g.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Et?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(qe,He,Ze,bt,Bt,$e,Be,Ke,Rt,tn,Ut.data):$.isCompressedArrayTexture?R.compressedTexSubImage3D(qe,He,Ze,bt,Bt,$e,Be,Ke,Rt,Ut.data):R.texSubImage3D(qe,He,Ze,bt,Bt,$e,Be,Ke,Rt,tn,Ut):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,He,Ze,bt,$e,Be,Rt,tn,Ut.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,He,Ze,bt,Ut.width,Ut.height,Rt,Ut.data):R.texSubImage2D(R.TEXTURE_2D,He,Ze,bt,$e,Be,Rt,tn,Ut);g.pixelStorei(R.UNPACK_ROW_LENGTH,rn),g.pixelStorei(R.UNPACK_IMAGE_HEIGHT,vt),g.pixelStorei(R.UNPACK_SKIP_PIXELS,Tn),g.pixelStorei(R.UNPACK_SKIP_ROWS,Fn),g.pixelStorei(R.UNPACK_SKIP_IMAGES,ai),He===0&&$.generateMipmaps&&R.generateMipmap(qe),g.unbindTexture()},this.initRenderTarget=function(b){J.get(b).__webglFramebuffer===void 0&&se.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?se.setTextureCube(b,0):b.isData3DTexture?se.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?se.setTexture2DArray(b,0):se.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){re=0,Q=0,pe=null,g.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const Sd={type:"change"},mh={type:"start"},Pm={type:"end"},bo=new gl,Md=new ki,aT=Math.cos(70*B0.DEG2RAD),Jt=new Y,Rn=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ac=1e-6;class oT extends oS{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new xr,this._lastTargetPosition=new Y,this._quat=new xr().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zf,this._sphericalDelta=new Zf,this._scale=1,this._panOffset=new Y,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new Y,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cT.bind(this),this._onPointerDown=lT.bind(this),this._onPointerUp=uT.bind(this),this._onContextMenu=_T.bind(this),this._onMouseWheel=dT.bind(this),this._onKeyDown=pT.bind(this),this._onTouchStart=mT.bind(this),this._onTouchMove=gT.bind(this),this._onMouseDown=hT.bind(this),this._onMouseMove=fT.bind(this),this._interceptControlDown=vT.bind(this),this._interceptControlUp=xT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Pt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sd),this.update(),this.state=Pt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Rn:i>Math.PI&&(i-=Rn),r<-Math.PI?r+=Rn:r>Math.PI&&(r-=Rn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Jt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new Y(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(bo.origin.copy(this.object.position),bo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bo.direction))<aT?this.object.lookAt(this.target):(Md.setFromNormalAndCoplanarPoint(this.object.up,this.target),bo.intersectPlane(Md,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ac||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ac||this._lastTargetPosition.distanceToSquared(this.target)>Ac?(this.dispatchEvent(Sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rn/60*this.autoRotateSpeed*e:Rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Jt.copy(r).sub(this.target);let s=Jt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function lT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function cT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function uT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pm),this.state=Pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function hT(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Pt.DOLLY;break;case $i.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pt.ROTATE}break;case $i.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(mh)}function fT(n){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function dT(n){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(n.preventDefault(),this.dispatchEvent(mh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Pm))}function pT(n){this.enabled!==!1&&this._handleKeyDown(n)}function mT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Pt.TOUCH_ROTATE;break;case ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Pt.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(mh)}function gT(n){switch(this._trackPointer(n),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Pt.NONE}}function _T(n){this.enabled!==!1&&n.preventDefault()}function vT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ST{renderer;scene;camera;controls;gear1=null;gear2=null;actionLine=null;tangentLine=null;pitchPoint=null;contactMarker=null;interferenceGroup;raycaster=new aS;container;resizeObs;constructor(e){this.container=e;const t=e.clientWidth||800,i=e.clientHeight||600;this.renderer=new sT({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,i),e.appendChild(this.renderer.domElement),this.scene=new j0,this.scene.background=new St(1053464);const r=t/i,s=80;this.camera=new vl(-s*r/2,s*r/2,s/2,-s/2,.1,2e3),this.camera.position.set(0,0,120),this.camera.lookAt(0,0,0),this.controls=new oT(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN};const a=new iS(16777215,.65),o=new nS(16777215,.9);o.position.set(40,60,100),this.scene.add(a,o),this.interferenceGroup=new cs,this.scene.add(this.interferenceGroup),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.animate()}makeCircleLine(e,t,i=.02,r=160){const s=[];for(let l=0;l<=r;l++){const c=l/r*Math.PI*2;s.push(new Y(e*Math.cos(c),e*Math.sin(c),i))}const a=new _n().setFromPoints(s),o=new Io({color:t,transparent:!0,opacity:.8});return new cx(a,o)}buildGearMesh(e,t){const i=new cs,r=new jo,s=e.outline;r.moveTo(s[0].x,s[0].y);for(let h=1;h<s.length;h++)r.lineTo(s[h].x,s[h].y);r.closePath();const a=e.input.faceWidth,o=new dh(r,{depth:a,bevelEnabled:!1,curveSegments:1});o.translate(0,0,-a/2),o.computeVertexNormals();const l=new Jx({color:t,metalness:.35,roughness:.55}),c=new Nn(o,l);i.add(c);const u=new lx(new hx(o,12),new Io({color:2239027,transparent:!0,opacity:.5}));i.add(u);const f={pitch:this.makeCircleLine(e.pitchR,4891647,a/2+.02),base:this.makeCircleLine(e.baseR,2605194,a/2+.02),addendum:this.makeCircleLine(e.addendumR,16765286,a/2+.02),dedendum:this.makeCircleLine(e.dedendumR,16748451,a/2+.02)};return Object.values(f).forEach(h=>i.add(h)),{group:i,body:c,refs:f}}setGears(e,t,i){this.gear1&&this.scene.remove(this.gear1.group),this.gear2&&this.scene.remove(this.gear2.group),this.gear1=this.buildGearMesh(e,7252222),this.gear2=this.buildGearMesh(t,16758894),this.scene.add(this.gear1.group,this.gear2.group),this.gear2.group.position.x=i,this.targetCenter(i/2,Math.max(e.addendumR,t.addendumR))}targetCenter(e,t){const i=(this.container.clientWidth||800)/(this.container.clientHeight||600),r=(t*2+40)/2,s=Math.max(r*2,80);this.camera.left=-s*i/2,this.camera.right=s*i/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix(),this.controls.target.set(e,0,0),this.camera.position.set(e,0,140)}setAngles(e,t){this.gear1&&(this.gear1.group.rotation.z=e),this.gear2&&(this.gear2.group.rotation.z=t)}setMeshOverlay(e,t){if(this.clearOverlay(),!e||!this.gear1||!this.gear2)return;const i=o=>t[o],r=o=>{o.geometry.computeBoundingBox();const l=o.geometry.boundingBox;return l?l.max.z-l.min.z:0},s=r(this.gear1.body),a=r(this.gear2.body);if(this.gear1.refs.pitch.visible=!!i("showPitchCircle"),this.gear2.refs.pitch.visible=!!i("showPitchCircle"),this.gear1.refs.base.visible=!!i("showBaseCircle"),this.gear2.refs.base.visible=!!i("showBaseCircle"),this.gear1.refs.addendum.visible=!!i("showAddendumCircle"),this.gear2.refs.addendum.visible=!!i("showAddendumCircle"),this.gear1.refs.dedendum.visible=!!i("showDedendumCircle"),this.gear2.refs.dedendum.visible=!!i("showDedendumCircle"),i("showActionLine")){const o=Math.max(s,a)/2+1,l=(u,f,h)=>{const d=new _n().setFromPoints([new Y(u.x,u.y,o),new Y(f.x,f.y,o)]);return new uh(d,new Io({color:h,transparent:!0,opacity:.9,depthTest:!1}))};this.tangentLine=l(e.tangentLine.p0,e.tangentLine.p1,8950691),this.tangentLine.renderOrder=50,this.actionLine=l(e.actionLine.p0,e.actionLine.p1,3794539),this.actionLine.renderOrder=51,this.scene.add(this.tangentLine,this.actionLine);const c=new Qo(.7,16,16);this.pitchPoint=new Nn(c,new sa({color:16777215,depthTest:!1})),this.pitchPoint.position.set(e.pitchPoint.x,e.pitchPoint.y,o),this.pitchPoint.renderOrder=52,this.scene.add(this.pitchPoint)}if(i("showContact")){const o=e.alphaPrime,l=Math.sin(o),c=Math.cos(o),u={x:e.pitchPoint.x+t.contactS*l,y:e.pitchPoint.y+t.contactS*c},f=Math.max(s,a)/2+1.5,h=new Qo(1,20,20);this.contactMarker=new Nn(h,new sa({color:16726891,depthTest:!1})),this.contactMarker.position.set(u.x,u.y,f),this.contactMarker.renderOrder=60,this.scene.add(this.contactMarker)}if(t.contactRegions)for(const o of t.contactRegions)for(const l of o){if(l.length<3)continue;const c=new jo;c.moveTo(l[0].x,l[0].y);for(let d=1;d<l.length;d++)c.lineTo(l[d].x,l[d].y);c.closePath();const u=new ph(c),f=new sa({color:16723285,transparent:!0,opacity:.5,side:_i,depthTest:!1}),h=new Nn(u,f);h.position.z=Math.max(s,a)/2+2,h.renderOrder=999,this.interferenceGroup.add(h)}}clearOverlay(){for(this.actionLine&&(this.scene.remove(this.actionLine),this.actionLine.geometry.dispose(),this.actionLine=null),this.tangentLine&&(this.scene.remove(this.tangentLine),this.tangentLine.geometry.dispose(),this.tangentLine=null),this.pitchPoint&&(this.scene.remove(this.pitchPoint),this.pitchPoint=null),this.contactMarker&&(this.scene.remove(this.contactMarker),this.contactMarker=null);this.interferenceGroup.children.length;)this.interferenceGroup.children.pop().geometry?.dispose()}pick(e,t){return this.raycaster,null}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t);const i=e/t,s=(this.camera.top-this.camera.bottom)/1/2;this.camera.left=-s*i,this.camera.right=s*i,this.camera.updateProjectionMatrix()}animate=()=>{requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)};dispose(){this.resizeObs.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const kn={mm:{id:"mm",label:"mm",factor:1,step:.1,decimals:3},cm:{id:"cm",label:"cm",factor:.1,step:.01,decimals:4},m:{id:"m",label:"m",factor:.001,step:.001,decimals:5},in:{id:"in",label:"in",factor:1/25.4,step:.01,decimals:4}};function No(n,e){return n*kn[e].factor}function wc(n,e){return n/kn[e].factor}function MT(n,e){return`${No(n,e).toFixed(kn[e].decimals)} ${kn[e].label}`}function Uu(n){return Nu(n)}function Nu(n){if(n===null)return"null";const e=typeof n;if(e==="number"){const t=n;if(!Number.isFinite(t))throw new Error("指纹输入含非有限数值（NaN/Infinity）");return JSON.stringify(t)}if(e==="boolean"||e==="string")return JSON.stringify(n);if(Array.isArray(n))return"["+n.map(t=>t===void 0?"null":Nu(t)).join(",")+"]";if(e==="object"){const t=n;return"{"+Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>JSON.stringify(r)+":"+Nu(t[r])).join(",")+"}"}throw new Error(`指纹输入含不支持的类型：${e}`)}function Dm(n){let e=3735928559,t=1103547991,i=2588365347,r=3268647565;for(let s=0;s<n.length;s++){const a=n.charCodeAt(s);e=t^Math.imul(e^a,597399067),t=i^Math.imul(t^a,2869860233),i=r^Math.imul(i^a,951274213),r=e^Math.imul(r^a,2716044179)}return e=Math.imul(i^e>>>18,597399067),t=Math.imul(r^t>>>22,2869860233),i=Math.imul(e^i>>>17,951274213),r=Math.imul(t^r>>>19,2716044179),e^=t^i^r,t^=e,i^=e,r^=e,[e>>>0,t>>>0,i>>>0,r>>>0]}function mr(n){return n.toString(16).padStart(8,"0")}function Ms(n){const[e,t,i,r]=Dm(Uu(n));return`cyrb128:${mr(e)}${mr(t)}${mr(i)}${mr(r)}`}function yT(n){const[e,t,i,r]=Dm(n);return`cyrb128:${mr(e)}${mr(t)}${mr(i)}${mr(r)}`}const Lm=2,yd=16;function bd(n){return{z:Math.round(n.z),module:n.module,alpha:n.alphaDeg*dr,faceWidth:n.faceWidth}}function Ml(n){const e=Go(bd(n.gear1),yd),t=Go(bd(n.gear2),yd),i=n.centerDistance==null?e.pitchR+t.pitchR:n.centerDistance,r=Fp({g1:e,g2:t,centerDistance:i});return{g1:e,g2:t,mesh:r,centerDistance:i}}function La(n){const{g1:e,g2:t}=Ml(n);return{gear1:e.outline,gear2:t.outline}}function el(n){return{algo:"cyrb128",gear1:Ms(n.gear1),gear2:Ms(n.gear2)}}function bT(n,e,t,i){const r=s=>({z:s.input.z,module:s.input.module,alphaDeg:s.input.alpha/dr,pitchD:s.pitchR*2,baseD:s.baseR*2,addendumD:s.addendumR*2,dedendumD:s.dedendumR*2,undercut:s.undercut});return{dims:[r(n),r(e)],a0:t.a0,a:t.a,alphaPrimeDeg:t.alphaPrime/dr,pitchR1:t.pitchR1,pitchR2:t.pitchR2,contactRatio:t.contactRatio,basePitchMatch:t.basePitchMatch,basePitchDiff:t.basePitchDiff,backlashTangential:t.backlashTangential,backlashNormal:t.backlashNormal,clearance12:t.clearance12,clearance21:t.clearance21,addendumOverlap:t.addendumOverlap,warnings:[...t.warnings],interference:i}}async function Rc(n,e,t){const{g1:i,g2:r,mesh:s}=Ml(n),a=kc(i,r,s,e),o=t??{gear1:i.outline,gear2:r.outline},l=await Bp([Wo(o.gear1,0,0,e)],[Wo(o.gear2,s.a,0,a)]);return{phi1:e,areaMm2:l.area,intersects:l.intersects}}function ET(n){return{v:2,kind:"revision",revId:n.revId,parentDigest:n.parentDigest,projectId:n.projectId,params:n.params,hasOutlines:n.hasOutlines,outlineHashes:n.outlineHashes,checks:n.checks,note:n.note}}function Im(n){return Ms(ET(n))}function Um(n){return Ms({parentDigest:n.parentDigest,projectId:n.projectId,params:n.params,hasOutlines:n.hasOutlines,outlineHashes:n.outlineHashes,checks:n.checks,note:n.note})}function TT(){return`rev-${typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().replace(/-/g,""):`${Date.now().toString(36)}${Math.random().toString(36).slice(2,10)}`}`}function AT(){try{const n="sgl.creator",e=sessionStorage.getItem(n);if(e)return e;const t=`tab-${Math.random().toString(36).slice(2,10)}`;return sessionStorage.setItem(n,t),t}catch{return`tab-${Math.random().toString(36).slice(2,10)}`}}function Nm(n){const{g1:e,g2:t,mesh:i}=Ml(n.params),r=La(n.params),s=bT(e,t,i,n.interference??null),a={schemaVersion:Lm,revId:n.revId??TT(),parentDigest:n.parentDigest,projectId:n.projectId,params:n.params,hasOutlines:n.includeOutlines,outlineHashes:el(r),checks:s,note:n.note??""},o=n.createdAt??Date.now(),l={...a,digest:Im(a),contentKey:"",createdAt:o,creator:n.creator};return l.contentKey=Um(l),{revision:l,outlines:n.includeOutlines?r:null}}function Om(n,e,t=!1){const i=[];(!n||n.schemaVersion!==2||typeof n.revId!="string")&&i.push("schema"),e&&(Ms(e.gear1)!==n.outlineHashes.gear1&&i.push("outline-hash-mismatch"),Ms(e.gear2)!==n.outlineHashes.gear2&&i.push("outline-hash-mismatch")),t&&n.hasOutlines&&!e&&i.push("missing-outlines");try{const{g1:c,g2:u}=Ml(n.params);(!(c.outline.length>3)||!(u.outline.length>3))&&i.push("bad-params");const f=el(La(n.params));(f.gear1!==n.outlineHashes.gear1||f.gear2!==n.outlineHashes.gear2)&&i.push("outline-hash-mismatch")}catch{i.push("bad-params")}const{digest:r,contentKey:s,createdAt:a,creator:o,...l}=n;return Im(l)!==n.digest&&i.push("digest-mismatch"),{ok:i.length===0,problems:i}}function dn(n,e,t,i,r="mm",s){const a=i-t;n.push({label:e,a:t,b:i,delta:a,unit:r,worse:s?s(a,i):void 0})}function wT(n,e){const t=[];for(const i of[0,1]){const r=`轮${i+1}`,s=n.checks.dims[i],a=e.checks.dims[i];dn(t,`${r} 齿数 z`,s.z,a.z,"",o=>o!==0),dn(t,`${r} 模数 m`,s.module,a.module),dn(t,`${r} 压力角 α`,s.alphaDeg,a.alphaDeg,"°",o=>o!==0),dn(t,`${r} 分度圆 d`,s.pitchD,a.pitchD),dn(t,`${r} 基圆 d_b`,s.baseD,a.baseD),dn(t,`${r} 齿顶圆 d_a`,s.addendumD,a.addendumD),dn(t,`${r} 齿根圆 d_f`,s.dedendumD,a.dedendumD)}return dn(t,"标准中心距 a₀",n.checks.a0,e.checks.a0),dn(t,"实际中心距 a",n.checks.a,e.checks.a,"mm",i=>Math.abs(i)>1e-9),dn(t,"啮合角 α′",n.checks.alphaPrimeDeg,e.checks.alphaPrimeDeg,"°"),dn(t,"节圆 r₁′",n.checks.pitchR1,e.checks.pitchR1),dn(t,"节圆 r₂′",n.checks.pitchR2,e.checks.pitchR2),dn(t,"重合度 ε_α",n.checks.contactRatio,e.checks.contactRatio,"",(i,r)=>r<1),dn(t,"法向侧隙 j_n",n.checks.backlashNormal,e.checks.backlashNormal),dn(t,"顶隙 c₁₂",n.checks.clearance12,e.checks.clearance12,"mm",(i,r)=>r<0),dn(t,"基节差 |Δp_b|",n.checks.basePitchDiff,e.checks.basePitchDiff,"mm",i=>!e.checks.basePitchMatch),{same:n.digest===e.digest,paramsDiffer:Uu(n.params)!==Uu(e.params)||n.parentDigest!==e.parentDigest,noteA:n.note,noteB:e.note,fields:t,interferenceA:n.checks.interference,interferenceB:e.checks.interference,liveInterference:null}}function Fm(n){const e=n;if(!e||!e.gear1||!e.gear2)throw new Error("旧案例缺少齿轮参数，无法迁移");const t=(l,c)=>{if(!(l.z>=4)||!(l.module>0)||!(l.alphaDeg>0)||!(l.faceWidth>0))throw new Error(`旧案例${c}参数不合法（z≥4, m>0, α>0, b>0），无法迁移`)};if(t(e.gear1,"轮1"),t(e.gear2,"轮2"),e.centerDistance!=null&&!(e.centerDistance>0))throw new Error("旧案例中心距不合法，无法迁移");const i={gear1:{z:e.gear1.z,module:e.gear1.module,alphaDeg:e.gear1.alphaDeg,faceWidth:e.gear1.faceWidth},gear2:{z:e.gear2.z,module:e.gear2.module,alphaDeg:e.gear2.alphaDeg,faceWidth:e.gear2.faceWidth},centerDistance:e.centerDistance==null?null:e.centerDistance,unit:e.unit??"mm"},r=`proj-${e.id??"migrated"}`,s=La(i);let a=null;if(e.outlines&&Array.isArray(e.outlines.gear1)&&Array.isArray(e.outlines.gear2)){const l=el(e.outlines),c=el(s);l.gear1===c.gear1&&l.gear2===c.gear2&&(a=e.outlines)}const{revision:o}=Nm({revId:`rev-migrated-${e.id??"unknown"}`,parentDigest:null,projectId:r,params:i,note:e.note?`（迁移自旧版）${e.note}`:"迁移自旧版单案例",includeOutlines:a!==null,interference:null,createdAt:e.createdAt??Date.now(),creator:"migration-v1"});return{revision:o,outlines:a}}const RT=Lm,CT="spur-gear-lab",PT=3,Bm="cases",kr="revisions",Ea="outlines",Ta="projects",Aa="quarantine";let Eo=null;function DT(){return Eo||(Eo=new Promise((n,e)=>{const t=indexedDB.open(CT,PT);t.onupgradeneeded=i=>{const r=t.result;if(!r.objectStoreNames.contains(kr)){const s=r.createObjectStore(kr,{keyPath:"digest"});s.createIndex("projectId","projectId"),s.createIndex("parentDigest","parentDigest"),s.createIndex("revId","revId"),s.createIndex("contentKey","contentKey")}if(r.objectStoreNames.contains(Ea)||r.createObjectStore(Ea,{keyPath:"digest"}),r.objectStoreNames.contains(Ta)||r.createObjectStore(Ta,{keyPath:"id"}).createIndex("updatedAt","updatedAt"),r.objectStoreNames.contains(Aa)||r.createObjectStore(Aa,{keyPath:"digest"}),i.oldVersion>=2&&i.oldVersion<3){const s=t.transaction.objectStore(kr);s.indexNames.contains("contentKey")||s.createIndex("contentKey","contentKey"),IT(t.transaction)}i.oldVersion<2&&r.objectStoreNames.contains(Bm)&&LT(t.transaction)},t.onsuccess=()=>{const i=t.result;i.onversionchange=()=>i.close(),n(i)},t.onerror=()=>e(t.error),t.onblocked=()=>e(new Error("数据库被其他标签页占用，请关闭旧标签页后重试"))}),Eo)}function LT(n){const e=n.objectStore(Bm),t=n.objectStore(kr),i=n.objectStore(Ea),r=n.objectStore(Ta),s=e.getAll();s.onsuccess=()=>{const a=s.result;for(const o of a)try{const{revision:l,outlines:c}=Fm(o),u=o,f=l.projectId;r.put({id:f,name:u.name??"迁移案例",createdAt:l.createdAt,updatedAt:u.updatedAt??l.createdAt}),t.put(l),l.hasOutlines&&c&&i.put({digest:l.digest,gear1:c.gear1,gear2:c.gear2})}catch(l){n.objectStore(Aa).put({digest:`mig-fail-${yT(JSON.stringify(o))}`,reason:`v1 迁移失败：${l.message}`,receivedAt:Date.now(),raw:o})}}}function IT(n){const e=n.objectStore(kr),t=e.getAll();t.onsuccess=()=>{for(const i of t.result)i&&typeof i.digest=="string"&&typeof i.contentKey!="string"&&e.put({...i,contentKey:Um(i)})}}function Ts(n){return DT().then(e=>new Promise((t,i)=>{const r=e.transaction([kr,Ea,Ta,Aa],n);r.onerror=()=>i(r.error),r.onabort=()=>i(r.error??new Error("事务中止")),t({db:e,tx:r,revs:r.objectStore(kr),outs:r.objectStore(Ea),projs:r.objectStore(Ta),quar:r.objectStore(Aa)})}))}function UT(n){return new Promise((e,t)=>{n.oncomplete=()=>e(),n.onerror=()=>t(n.error),n.onabort=()=>t(n.error??new Error("事务中止"))})}function $n(n){return new Promise((e,t)=>{n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function As(n){const e=await Ts("readwrite");try{const t=await n(e);return await UT(e.tx),t}catch(t){try{e.tx.abort()}catch{}throw t}}async function zm(n){const e=await Ts("readonly"),t=await $n(e.outs.get(n));return t?{gear1:t.gear1,gear2:t.gear2}:void 0}async function yl(){const n=await Ts("readonly");return $n(n.revs.getAll())}async function NT(){const n=await Ts("readonly");return[...await $n(n.projs.getAll())].sort((t,i)=>i.updatedAt-t.updatedAt)}async function OT(){const n=await Ts("readonly");return $n(n.quar.getAll())}function la(n,e){const t=e?n.filter(u=>u.projectId===e):n,i=new Map,r=new Map,s=new Map;for(const u of n){const f=s.get(u.revId)??[];f.push(u.digest),s.set(u.revId,f)}for(const u of t){i.set(u.digest,{rev:u,children:[],depth:0,isHead:!0,isRoot:u.parentDigest===null,twins:(s.get(u.revId)??[]).filter(h=>h!==u.digest),siblingBranches:[]});const f=r.get(u.revId)??[];f.push(u.digest),r.set(u.revId,f)}for(const[u,f]of i){const h=f.rev.parentDigest;h!==null&&i.has(h)?i.get(h).children.push(u):h!==null&&(f.isRoot=!0)}const a=(u,f=new Set)=>{const h=i.get(u);if(h.depth||f.has(u))return h.depth;f.add(u);const d=h.rev.parentDigest;return h.depth=d===null||!i.has(d)?0:a(d,f)+1,h.depth};for(const u of i.keys())a(u);const o=[],l=[];for(const[u,f]of i)if(f.children.length===0?o.push(u):f.isHead=!1,f.children.length>=2){l.push(u);for(const h of f.children)i.get(h).siblingBranches=f.children.filter(d=>d!==h)}const c=[...i.keys()].sort((u,f)=>{const h=i.get(u),d=i.get(f);return h.depth!==d.depth?h.depth-d.depth:h.rev.createdAt-d.rev.createdAt});return o.sort((u,f)=>i.get(f).rev.createdAt-i.get(u).rev.createdAt),{nodes:i,order:c,heads:o,byRevId:r,branchPoints:l}}function Ed(n,e){const t=[];let i=e;const r=new Set;for(;i&&n.nodes.has(i)&&!r.has(i);)r.add(i),t.push(i),i=n.nodes.get(i).rev.parentDigest;return t}function FT(n,e,t){const i=new Set(Ed(n,e));for(const r of Ed(n,t))if(i.has(r))return r;return null}async function Td(n){const{revision:e,outlines:t}=Nm({parentDigest:n.parentDigest,projectId:n.projectId,params:n.params,note:n.note,includeOutlines:n.includeOutlines,interference:n.interference??null,creator:n.creator,createdAt:n.createdAt}),i={kind:"exists"};await As(async l=>{const c=await $n(l.revs.get(e.digest));if(c){i.existing=c;return}const f=(await new Promise((_,y)=>{const m=l.revs.index("contentKey").getAll(e.contentKey);m.onsuccess=()=>_(m.result),m.onerror=()=>y(m.error)})??[]).find(_=>_.parentDigest===e.parentDigest&&_.projectId===e.projectId);if(f){i.existing=f;return}l.revs.put(e),e.hasOutlines&&t&&l.outs.put({digest:e.digest,gear1:t.gear1,gear2:t.gear2}),i.kind="created";const h=await $n(l.projs.get(n.projectId)),d=e.createdAt;if(h)l.projs.put({...h,updatedAt:Math.max(h.updatedAt,d),name:n.projectName??h.name});else{const _={id:n.projectId,name:n.projectName??"未命名实验",createdAt:d,updatedAt:d};n.forkedFrom&&(_.forkedFromProjectId=n.forkedFrom.projectId,_.forkedFromDigest=n.forkedFrom.digest),l.projs.put(_)}});const r=i.existing??e,s=await yl(),a=la(s,n.projectId),o=a.nodes.get(r.digest)?.twins.map(l=>s.find(c=>c.digest===l)).filter(Boolean)??[];return{revision:r,outcome:i.kind,branchHeads:a.heads,twins:o}}async function BT(n){await As(async e=>{const t=await $n(e.revs.getAll());for(const i of t)i.projectId===n&&(e.revs.delete(i.digest),i.hasOutlines&&e.outs.delete(i.digest));e.projs.delete(n)})}async function zT(n){await As(async e=>{if(!await $n(e.revs.get(n)))return;const i=e.revs.index("parentDigest");if((await new Promise((s,a)=>{const o=i.getAllKeys(n);o.onsuccess=()=>s(o.result),o.onerror=()=>a(o.error)})).length>0)throw new Error("该修订已有后继，不能删除（历史不可变）");e.revs.delete(n),e.outs.delete(n)})}function kT(n){return JSON.stringify(n,null,2)}async function VT(n){let e;try{e=JSON.parse(n)}catch(u){throw new Error(`JSON 解析失败：${u.message}`)}const t=e;if(t&&t.schemaVersion===1)return{outcomes:[await HT(e)]};if(!t||t.schemaVersion!==2)throw new Error(`不支持的文件版本（schemaVersion=${String(t?.schemaVersion)}，支持 1/2）`);const i=t;if(i.kind!=="revision-bundle"||!i.project)throw new Error('不是有效的修订包（缺少 kind="revision-bundle" 或 project）');if(!Array.isArray(i.revisions)||i.revisions.length===0)throw new Error("修订包为空或缺少 revisions");const r=i.project,s=new Map;for(const u of i.outlines??[])s.set(u.digest,{gear1:u.gear1,gear2:u.gear2});const a=i.revisions.map(u=>({rev:u,outs:s.get(u.digest)})),o=new Map;for(const u of a){const f=u.rev;if(!f||f.schemaVersion!==2||typeof f.digest!="string")throw new Error("包内存在 schemaVersion≠2 的修订，已整包拒绝");const h=Om(f,u.outs??null,!1);if(!h.ok)return await GT(f.digest,`导入校验未通过：${h.problems.join(",")}`,{rev:u.rev,outs:u.outs}),{outcomes:[{kind:"quarantined",reason:h.problems.join(","),message:`修订 ${f.revId} 校验未通过（${h.problems.join(",")}），轮廓/指纹不一致，已隔离，未冒充为同一修订`}]};o.set(f.projectId,r.name)}const l=[];await As(async u=>{for(const f of a){const h=f.rev,d=await $n(u.revs.get(h.digest));if(d){l.push({kind:"dedup",revision:d,message:`修订 ${h.revId} 已存在且内容一致，跳过（不产生副本）`});continue}let _=f.outs;h.hasOutlines&&!_&&(_=La(h.params)),u.revs.put(h),h.hasOutlines&&_&&u.outs.put({digest:h.digest,gear1:_.gear1,gear2:_.gear2}),await $n(u.projs.get(h.projectId))||u.projs.put({id:h.projectId,name:o.get(h.projectId)??"导入的实验",createdAt:h.createdAt,updatedAt:h.createdAt}),l.push({kind:"imported",revision:h,branchHeads:[],twins:[],message:""})}});const c=await yl();for(let u=0;u<l.length;u++){const f=l[u];if(f.kind!=="imported")continue;const h=la(c,f.revision.projectId),d=h.nodes.get(f.revision.digest)?.twins.map(_=>c.find(y=>y.digest===_)).filter(Boolean)??[];f.branchHeads=h.heads,f.twins=d,f.message=d.length>0?`修订 ${f.revision.revId} 与已有修订同 ID 但内容不同：已作为并列修订保留（冲突双存），未覆盖任何一方`:h.heads.length>1?`已导入并保留为并列分支（该实验现有 ${h.heads.length} 个 head），可与同父子修订比较`:`修订 ${f.revision.revId} 已导入`,d.length>0&&(l[u]={...f,kind:"conflict",message:f.message})}return{outcomes:l}}async function HT(n){const{revision:e,outlines:t}=Fm(n);return await As(async r=>{const s=await $n(r.revs.get(e.digest));if(s)return{kind:"dedup",revision:s,message:"该旧案例此前已迁移，跳过（不产生副本）"};const a=n;return r.revs.put(e),e.hasOutlines&&t&&r.outs.put({digest:e.digest,gear1:t.gear1,gear2:t.gear2}),r.projs.put({id:e.projectId,name:a.name??"迁移案例",createdAt:e.createdAt,updatedAt:e.createdAt}),{kind:"v1-migrated",revision:e,message:`旧版单案例已自动迁移为根修订 ${e.revId}`}})}async function GT(n,e,t){await As(async i=>{i.quar.put({digest:n,reason:e,receivedAt:Date.now(),raw:t})})}async function WT(n,e,{includeOutlines:t=!0}={}){const i=await Ts("readonly"),r=i.revs.index("projectId"),s=await new Promise((o,l)=>{const c=r.getAll(n);c.onsuccess=()=>o(c.result),c.onerror=()=>l(c.error)});s.sort((o,l)=>o.createdAt-l.createdAt);const a=[];if(t)for(const o of s){if(!o.hasOutlines)continue;const l=await $n(i.outs.get(o.digest));if(!l)throw new Error(`修订 ${o.revId} 的轮廓缺失，导出中止（完整性保护）`);a.push({digest:o.digest,gear1:l.gear1,gear2:l.gear2})}return{schemaVersion:RT,kind:"revision-bundle",exportedAt:Date.now(),project:{id:n,name:e},revisions:s,outlines:a}}function XT(n,e){const t=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i,r.download=n,r.click(),URL.revokeObjectURL(i)}function Ad(){return`proj-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}async function $T(){const n=await yl(),e=[];for(const i of n){const r=i.hasOutlines?await zm(i.digest):null,s=Om(i,r??null,!0);s.ok||e.push({digest:i.digest,revId:i.revId,problems:s.problems})}const t=await OT();return{issues:e,quarantined:t.length}}const qT="spur-gear-lab-revisions",wd="sgl.rev-tick";class YT{ch=null;storageHandler;constructor(e){typeof BroadcastChannel<"u"?(this.ch=new BroadcastChannel(qT),this.ch.onmessage=t=>e(t.data),this.storageHandler=()=>{}):(this.storageHandler=t=>{t.key===wd&&e({type:"committed",at:Date.now()})},window.addEventListener("storage",this.storageHandler))}post(e){if(this.ch)this.ch.postMessage(e);else try{localStorage.setItem(wd,String(e.at))}catch{}}close(){this.ch?.close(),this.ch||window.removeEventListener("storage",this.storageHandler)}}const KT={class:"app"},ZT={class:"panel"},JT={class:"units"},jT=["onClick"],QT=["step"],eA=["step"],tA={class:"two"},nA={key:0,class:"err"},iA={key:1,class:"err"},rA={class:"row"},sA={key:0},aA=["step"],oA={class:"row"},lA=["disabled"],cA=["disabled"],uA=["disabled","min","max"],hA=["disabled"],fA={key:0,class:"report"},dA={class:"row"},pA={class:"row"},mA={class:"row"},gA={class:"row"},_A={class:"row"},vA={class:"row"},xA={class:"samples"},SA={class:"viewport"},MA={class:"readouts"},yA={key:0,class:"dim-grid"},bA={class:"mesh-report"},EA={key:0,class:"warns"},TA={class:"panel right"},AA={class:"basis"},wA=["title"],RA={key:1},CA={class:"row"},PA=["disabled"],DA={class:"row"},LA=["disabled"],IA={class:"row"},UA={class:"wide filebtn"},NA={class:"projlist"},OA=["onClick"],FA=["onClick"],BA={key:0,class:"empty"},zA={key:0},kA={class:"revlist"},VA={class:"rev-main"},HA={class:"rev-meta"},GA={class:"rev-tags"},WA={key:0,class:"tag root-tag"},XA={key:1,class:"tag head-tag"},$A={key:2,class:"tag branch-tag"},qA={class:"rev-actions"},YA=["onClick"],KA=["onClick","disabled"],ZA=["onClick","disabled"],JA={key:0,class:"conflict-box"},jA={class:"two"},QA=["value"],ew=["value"],tw=["disabled"],nw={key:0,class:"diff-box"},iw={key:0,class:"good"},rw={class:"diff-table"},sw={class:"iface-row"},aw=["disabled"],ow={key:1,class:"iface-row"},lw={key:0,class:"conflict-box"},cw={class:"status"},uw=f_({__name:"App",setup(n){const e=Xt("mm"),t=hs({z1:20,z2:40,m:2,alphaDeg:20,faceWidth:10,centerDistance:60,useStandardCenter:!0}),i=Ns(),r=Ns(),s=Ns(),a=hs({g1:[],g2:[]});function o(){const E={z:Math.round(t.z1),module:t.m,alpha:t.alphaDeg*dr,faceWidth:t.faceWidth},A={z:Math.round(t.z2),module:t.m,alpha:t.alphaDeg*dr,faceWidth:t.faceWidth};if(a.g1=of(E),a.g2=of(A),a.g1.length||a.g2.length)return;i.value=Go(E),r.value=Go(A);const C=t.useStandardCenter?i.value.pitchR+r.value.pitchR:t.centerDistance;s.value=Fp({g1:i.value,g2:r.value,centerDistance:C})}const l=Qn({get:()=>No(t.m,e.value),set:E=>t.m=wc(E,e.value)}),c=Qn({get:()=>No(t.faceWidth,e.value),set:E=>t.faceWidth=wc(E,e.value)}),u=Qn({get:()=>No(t.centerDistance,e.value),set:E=>t.centerDistance=wc(E,e.value)});Nr(e,()=>{});const f=Xt(!0),h=Xt(0),d=Xt(.25);let _=0;const y=Xt(0),m=hs({showPitchCircle:!0,showBaseCircle:!0,showAddendumCircle:!1,showDedendumCircle:!1,showActionLine:!0,showContact:!0,contactS:0}),p=Xt(null),w=Ns([]),I=Xt(!1);let M=0;async function P(E){if(!i.value||!r.value||!s.value)return;const A=E,C=kc(i.value,r.value,s.value,A),_e=[Wo(i.value.outline,0,0,A)],Pe=[Wo(r.value.outline,s.value.a,0,C)],xe=++M;I.value=!0;try{const Ye=await Bp(_e,Pe);if(xe!==M)return;p.value=Ye.area,w.value=Ye.regions}finally{xe===M&&(I.value=!1)}}const D=Xt();let B=null;function S(){!B||!s.value||B.setMeshOverlay(s.value,{...m,contactS:y.value,contactRegions:[w.value]})}Uc(()=>{o(),B=new ST(D.value),i.value&&r.value&&s.value&&B.setGears(i.value,r.value,s.value.a);const E=A=>{const C=Math.min(.05,(A-_)/1e3||0);if(_=A,f.value&&i.value&&r.value&&s.value){h.value+=d.value*C;const _e=2*Math.PI/i.value.input.z;h.value=(h.value%_e+_e)%_e;const Pe=(h.value-lf(s.value,i.value,r.value,0).phi1)*i.value.baseR;y.value=N(Pe)}if(i.value&&r.value&&s.value){const _e=kc(i.value,r.value,s.value,h.value);B.setAngles(h.value,_e),m.contactS=y.value,S()}requestAnimationFrame(E)};requestAnimationFrame(E)});function N(E){if(!s.value)return 0;const A=s.value.actionLine,C=s.value.alphaPrime,_e=Math.sin(C),Pe=Math.cos(C),xe=(A.p0.x-s.value.pitchPoint.x)*_e+(A.p0.y-s.value.pitchPoint.y)*Pe,Ye=(A.p1.x-s.value.pitchPoint.x)*_e+(A.p1.y-s.value.pitchPoint.y)*Pe;return E<xe?Ye-(xe-E)%(Ye-xe):E>Ye?xe+(E-Ye)%(Ye-xe):E}Nr(()=>[t.z1,t.z2,t.m,t.alphaDeg,t.faceWidth,t.useStandardCenter,t.centerDistance],()=>{o(),B&&i.value&&r.value&&s.value&&B.setGears(i.value,r.value,s.value.a),h.value=0,y.value=0,p.value=null,w.value=[]}),Nr(m,S),Nr(y,()=>m.contactS=y.value);function k(){f.value=!1}function q(){f.value=!0}function ae(){f.value||!i.value||!r.value||!s.value||(h.value=lf(s.value,i.value,r.value,y.value).phi1)}const ie=Xt([]),V=Xt([]),Z=Xt(null),re=Xt(null),Q=Xt("未命名实验"),pe=Xt(""),ue=AT(),ve=Xt([]);function he(E){ve.value.unshift(`[${new Date().toLocaleTimeString()}] ${E}`),ve.value=ve.value.slice(0,8)}const De=Qn(()=>Z.value?la(V.value,Z.value):null),ke=Qn(()=>{const E=new Map;for(const A of V.value)E.set(A.digest,A);return E}),rt=Qn(()=>De.value?De.value.order.map(E=>{const A=De.value.nodes.get(E);return{digest:E,node:A,rev:A.rev,depth:A.depth,isHead:A.isHead,isRoot:A.isRoot,twins:A.twins.map(C=>ke.value.get(C)).filter(Boolean),siblings:A.siblingBranches.map(C=>De.value.nodes.get(C)?.rev).filter(Boolean),active:E===re.value}}):[]),it=Qn(()=>ie.value.find(E=>E.id===Z.value)??null);async function et(){ie.value=await NT(),V.value=await yl(),Z.value&&!ie.value.some(E=>E.id===Z.value)&&(Z.value=null,re.value=null)}function me(){return{gear1:{z:Math.round(t.z1),module:t.m,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth},gear2:{z:Math.round(t.z2),module:t.m,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth},centerDistance:t.useStandardCenter?null:t.centerDistance,unit:e.value}}const ce=Xt(!1);async function we(E){if(a.g1.length||a.g2.length){alert("参数不合法，无法保存修订");return}ce.value=!0;try{let A=null;E&&(A=await Rc(me(),h.value),p.value=A.areaMm2);let C=Z.value;C||(C=Ad(),Z.value=C);const _e=await Td({projectId:C,projectName:Q.value,parentDigest:re.value,params:me(),note:pe.value,includeOutlines:E,interference:A,creator:ue});re.value=_e.revision.digest,pe.value="",await et(),Ce?.post({type:"committed",projectId:C,at:Date.now()}),_e.outcome==="exists"?he(`内容与已有修订 ${_e.revision.revId} 完全相同，未产生重复修订（幂等）`):_e.twins.length>0?he(`⚠ 修订 ID ${_e.revision.revId} 已被不同内容占用：双方并列保留（冲突），未覆盖`):_e.branchHeads.length>1?he(`已保存为并列分支（本实验现有 ${_e.branchHeads.length} 个 head），可在下方比较`):he(`已保存修订 ${_e.revision.revId}（${E?"含轮廓+当前帧干涉":"仅参数"}）`)}catch(A){alert("保存失败（修订与轮廓在同一事务，未留下半成品）："+A.message)}finally{ce.value=!1}}function Xe(E){z(E.params),Z.value=E.projectId,Q.value=ie.value.find(A=>A.id===E.projectId)?.name??"实验",re.value=E.digest,he(`已恢复修订 ${E.revId} 的几何；再次保存将从该版本继续（原几何保持不变）`)}const Ne=Xt(!1);async function L(E){if(!Ne.value){Ne.value=!0;try{z(E.params);const A=Ad(),C=`${ie.value.find(Pe=>Pe.id===E.projectId)?.name??"实验"} · 分叉自 ${E.revId.slice(0,10)}`;Q.value=C,Z.value=A;const _e=await Td({projectId:A,projectName:C,parentDigest:null,params:E.params,note:`分叉自 ${E.revId}（${E.note||"无备注"}）`,includeOutlines:!0,interference:E.checks.interference,creator:ue,forkedFrom:{projectId:E.projectId,digest:E.digest}});re.value=_e.revision.digest,await et(),Ce?.post({type:"committed",projectId:A,at:Date.now()}),he(`已从修订 ${E.revId} 分叉出新实验线（原实验线完整保留）`)}finally{Ne.value=!1}}}function z(E){t.z1=E.gear1.z,t.z2=E.gear2.z,t.m=E.gear1.module,t.alphaDeg=E.gear1.alphaDeg,t.faceWidth=E.gear1.faceWidth,E.centerDistance==null?t.useStandardCenter=!0:(t.useStandardCenter=!1,t.centerDistance=E.centerDistance),e.value=E.unit??"mm",o(),B&&i.value&&r.value&&s.value&&B.setGears(i.value,r.value,s.value.a),h.value=0,y.value=0,p.value=null,w.value=[]}function O(E){Z.value=E.id,Q.value=E.name;const A=la(V.value,E.id),C=A.heads[0];if(re.value=C??null,C){const _e=A.nodes.get(C).rev;z(_e.params),pe.value=""}}function W(){Z.value=null,re.value=null,Q.value="未命名实验",pe.value="",he("已开始新实验线：下次保存将成为新项目的根修订")}async function X(E){confirm(`删除整个实验线「${E.name}」及其全部修订？此操作不可恢复。`)&&(await BT(E.id),Z.value===E.id&&(Z.value=null,re.value=null),await et(),Ce?.post({type:"deleted",projectId:E.id,at:Date.now()}),he(`已删除实验线 ${E.name}`))}async function G(E){try{await zT(E.digest),re.value===E.digest&&(re.value=null),await et(),he(`已删除 head 修订 ${E.revId}`)}catch(A){alert(A.message)}}async function te(E){const A=E.target,C=A.files?.[0];if(!C)return;const _e=await C.text();try{const Pe=await VT(_e);await et(),Ce?.post({type:"imported",at:Date.now()});for(const xe of Pe.outcomes)he(ge(xe)),(xe.kind==="imported"||xe.kind==="conflict"||xe.kind==="v1-migrated")&&!Z.value&&(Z.value=xe.revision.projectId,re.value=xe.revision.digest);if(!Z.value&&Pe.outcomes[0]){const xe=Pe.outcomes[0];"revision"in xe&&(Z.value=xe.revision.projectId,re.value=xe.revision.digest)}}catch(Pe){alert("导入失败（未写入任何修订）："+Pe.message)}A.value=""}function ge(E){switch(E.kind){case"dedup":return`重复导入：修订 ${E.revision.revId} 内容一致，已跳过，不产生副本`;case"imported":return E.message;case"conflict":return`⚠ ${E.message}`;case"v1-migrated":return`旧版案例自动迁移：${E.message}`;case"quarantined":return`✋ ${E.message}`}}async function fe(E){if(!it.value){alert("请先选择一个实验线");return}try{const A=await WT(it.value.id,it.value.name,{includeOutlines:E}),C=it.value.name.replace(/[^\w一-龥-]+/g,"_");XT(`${C}.r${A.revisions.length}.json`,kT(A)),he(`已导出 ${A.revisions.length} 个修订（${E?"含轮廓":"仅参数，轮廓可重建"}）`)}catch(A){alert("导出中止："+A.message)}}const ne=Xt(""),Te=Xt(""),R=Ns(null),Re=Xt(!1),Le=Qn(()=>[...V.value].sort((E,A)=>E.createdAt-A.createdAt));function T(){const E=V.value.find(C=>C.digest===ne.value),A=V.value.find(C=>C.digest===Te.value);if(R.value=E&&A?wT(E,A):null,E&&A){const C=FT(la(V.value),E.digest,A.digest);he(C?`比较 ${E.revId.slice(0,8)} ↔ ${A.revId.slice(0,8)}；共同祖先 ${C.slice(12,20)}…`:`比较 ${E.revId.slice(0,8)} ↔ ${A.revId.slice(0,8)}；两条无共同祖先的实验线`)}}async function g(){const E=V.value.find(C=>C.digest===ne.value),A=V.value.find(C=>C.digest===Te.value);if(!(!E||!A)){Re.value=!0;try{const C=h.value,[_e,Pe]=await Promise.all([Rc(E.params,C,E.hasOutlines?await F(E):null),Rc(A.params,C,A.hasOutlines?await F(A):null)]);R.value&&(R.value={...R.value,liveInterference:{phi1:C,a:_e,b:Pe,deltaArea:Pe.areaMm2-_e.areaMm2}})}finally{Re.value=!1}}}async function F(E){return await zm(E.digest)??La(E.params)}const J=Xt([]),se=Xt(0);async function Ae(){const E=await $T();J.value=E.issues,se.value=E.quarantined,E.issues.length?he(`⚠ 发现 ${E.issues.length} 个损坏修订（只含元数据/哈希不符），已在列表中标红`):he("完整性体检通过：所有修订 digest/轮廓指纹一致，无残缺修订")}let Ce=null;Uc(()=>{Ce=new YT(()=>{et(),he("检测到其他标签页的修订变更，已刷新（并列分支/冲突不会被覆盖）")}),et().then(async()=>{ie.value.length&&O(ie.value[0]),await Ae()})}),up(()=>Ce?.close());const ee=Qn(()=>!i.value||!r.value||!s.value?null:{g1:i.value,g2:r.value,mesh:s.value}),Me=Qn(()=>{if(!s.value)return[-30,30];const E=s.value,A=Math.sin(E.alphaPrime),C=Math.cos(E.alphaPrime),_e=(E.actionLine.p0.x-E.pitchPoint.x)*A+(E.actionLine.p0.y-E.pitchPoint.y)*C,Pe=(E.actionLine.p1.x-E.pitchPoint.x)*A+(E.actionLine.p1.y-E.pitchPoint.y)*C;return[Math.floor(_e*10)/10,Math.ceil(Pe*10)/10]});function ye(E){return MT(E,e.value)}function Ve(E){return new Date(E).toLocaleString()}function Oe(E,A,C=2,_e=20){t.z1=E,t.z2=A,t.m=C,t.alphaDeg=_e,t.useStandardCenter=!0}function Fe(E,A){return A==="°"?`${E.toFixed(3)}°`:A===""?Number.isInteger(E)?String(E):E.toFixed(4):`${E.toFixed(3)} mm`}function Je(E,A){const C=E>0?"+":"";return A==="°"?`${C}${E.toFixed(3)}°`:A===""?`${C}${Number.isInteger(E)?E:E.toFixed(4)}`:`${C}${E.toFixed(3)} mm`}function je(E){return E?E.intersects?`${E.areaMm2.toExponential(2)} mm² ❗`:`${E.areaMm2.toExponential(2)} mm² ✅`:"未记录"}function at(E){return E&&E.intersects?"bad":"good"}return(E,A)=>(lt(),ct("div",KT,[A[83]||(A[83]=K("header",null,[K("h1",null,"直齿圆柱齿轮参数化实验室 · 修订与合并工作流"),K("div",{class:"sub"},"外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）｜每次保存为不可变修订，支持分叉、比较与冲突检测")],-1)),K("main",null,[K("aside",ZT,[K("section",null,[A[30]||(A[30]=K("h2",null,"显示单位（不改变实际尺寸）",-1)),K("div",JT,[(lt(!0),ct(kt,null,Kn(Object.keys(zn(kn)),C=>(lt(),ct("button",{key:C,class:an({active:e.value===C}),onClick:_e=>e.value=C},ze(zn(kn)[C].label),11,jT))),128))])]),K("section",null,[A[34]||(A[34]=K("h2",null,"齿轮参数",-1)),K("label",null,[A[31]||(A[31]=dt("压力角 α（度） ",-1)),Kt(K("input",{type:"number","onUpdate:modelValue":A[0]||(A[0]=C=>t.alphaDeg=C),min:"1",max:"45",step:"0.5"},null,512),[[ci,t.alphaDeg,void 0,{number:!0}]])]),K("label",null,[dt("模数 m（"+ze(zn(kn)[e.value].label)+"） ",1),Kt(K("input",{type:"number","onUpdate:modelValue":A[1]||(A[1]=C=>l.value=C),step:zn(kn)[e.value].step},null,8,QT),[[ci,l.value,void 0,{number:!0}]])]),K("label",null,[dt("齿宽 b（"+ze(zn(kn)[e.value].label)+"） ",1),Kt(K("input",{type:"number","onUpdate:modelValue":A[2]||(A[2]=C=>c.value=C),step:zn(kn)[e.value].step},null,8,eA),[[ci,c.value,void 0,{number:!0}]])]),K("div",tA,[K("label",null,[A[32]||(A[32]=dt("齿数 z₁ ",-1)),Kt(K("input",{type:"number","onUpdate:modelValue":A[3]||(A[3]=C=>t.z1=C),min:"4",step:"1"},null,512),[[ci,t.z1,void 0,{number:!0}]])]),K("label",null,[A[33]||(A[33]=dt("齿数 z₂ ",-1)),Kt(K("input",{type:"number","onUpdate:modelValue":A[4]||(A[4]=C=>t.z2=C),min:"4",step:"1"},null,512),[[ci,t.z2,void 0,{number:!0}]])])]),a.g1.length?(lt(),ct("div",nA,ze(a.g1.join("；")),1)):Zt("",!0),a.g2.length?(lt(),ct("div",iA,ze(a.g2.join("；")),1)):Zt("",!0)]),K("section",null,[A[36]||(A[36]=K("h2",null,"中心距",-1)),K("label",rA,[Kt(K("input",{type:"checkbox","onUpdate:modelValue":A[5]||(A[5]=C=>t.useStandardCenter=C)},null,512),[[wr,t.useStandardCenter]]),A[35]||(A[35]=dt(" 使用标准中心距 a₀ = m(z₁+z₂)/2 ",-1))]),t.useStandardCenter?Zt("",!0):(lt(),ct("label",sA,[dt("实际中心距 a（"+ze(zn(kn)[e.value].label)+"） ",1),Kt(K("input",{type:"number","onUpdate:modelValue":A[6]||(A[6]=C=>u.value=C),step:zn(kn)[e.value].step},null,8,aA),[[ci,u.value,void 0,{number:!0}]])]))]),K("section",null,[A[39]||(A[39]=K("h2",null,"运动 / 检查",-1)),K("div",oA,[K("button",{onClick:k,disabled:!f.value},"暂停",8,lA),K("button",{onClick:q,disabled:f.value},"继续",8,cA)]),K("label",null,[A[37]||(A[37]=dt("轮1 角速度（rad/s） ",-1)),Kt(K("input",{type:"range","onUpdate:modelValue":A[7]||(A[7]=C=>d.value=C),min:"0",max:"1.5",step:"0.01"},null,512),[[ci,d.value,void 0,{number:!0}]])]),K("label",null,[A[38]||(A[38]=dt("接触点沿啮合线 s（mm，暂停可拖动） ",-1)),Kt(K("input",{type:"range",disabled:f.value,"onUpdate:modelValue":A[8]||(A[8]=C=>y.value=C),min:Me.value[0],max:Me.value[1],step:"0.05",onInput:ae},null,40,uA),[[ci,y.value,void 0,{number:!0}]])]),K("button",{class:"wide",onClick:A[9]||(A[9]=C=>P(h.value)),disabled:f.value||I.value},ze(I.value?"Clipper 求交中…":"在当前帧做局部干涉求交（Clipper2 WASM）"),9,hA),p.value!==null?(lt(),ct("div",fA,[dt(" 重叠面积 = "+ze(p.value.toExponential(3))+" mm² ",1),K("b",{class:an(p.value>1e-6?"bad":"good")},ze(p.value>1e-6?"存在实体干涉 ❗":"当前帧无干涉 ✅"),3)])):Zt("",!0)]),K("section",null,[A[46]||(A[46]=K("h2",null,"显示选项",-1)),K("label",dA,[Kt(K("input",{type:"checkbox","onUpdate:modelValue":A[10]||(A[10]=C=>m.showPitchCircle=C)},null,512),[[wr,m.showPitchCircle]]),A[40]||(A[40]=dt(" 节圆/分度圆",-1))]),K("label",pA,[Kt(K("input",{type:"checkbox","onUpdate:modelValue":A[11]||(A[11]=C=>m.showBaseCircle=C)},null,512),[[wr,m.showBaseCircle]]),A[41]||(A[41]=dt(" 基圆",-1))]),K("label",mA,[Kt(K("input",{type:"checkbox","onUpdate:modelValue":A[12]||(A[12]=C=>m.showAddendumCircle=C)},null,512),[[wr,m.showAddendumCircle]]),A[42]||(A[42]=dt(" 齿顶圆",-1))]),K("label",gA,[Kt(K("input",{type:"checkbox","onUpdate:modelValue":A[13]||(A[13]=C=>m.showDedendumCircle=C)},null,512),[[wr,m.showDedendumCircle]]),A[43]||(A[43]=dt(" 齿根圆",-1))]),K("label",_A,[Kt(K("input",{type:"checkbox","onUpdate:modelValue":A[14]||(A[14]=C=>m.showActionLine=C)},null,512),[[wr,m.showActionLine]]),A[44]||(A[44]=dt(" 啮合线（理论/实际）",-1))]),K("label",vA,[Kt(K("input",{type:"checkbox","onUpdate:modelValue":A[15]||(A[15]=C=>m.showContact=C)},null,512),[[wr,m.showContact]]),A[45]||(A[45]=dt(" 接触点",-1))])]),K("section",null,[A[47]||(A[47]=K("h2",null,"核对样本",-1)),K("div",xA,[K("button",{onClick:A[16]||(A[16]=C=>Oe(20,40))},"20/40 标准"),K("button",{onClick:A[17]||(A[17]=C=>Oe(17,17))},"17/17 临界"),K("button",{onClick:A[18]||(A[18]=C=>Oe(16,40))},"16/40 根切"),K("button",{onClick:A[19]||(A[19]=C=>Oe(12,40))},"12/40 极少齿")])])]),K("section",SA,[K("div",{ref_key:"host",ref:D,class:"canvas-host"},null,512),K("div",MA,[ee.value?(lt(),ct("div",yA,[K("table",null,[K("thead",null,[K("tr",null,[A[48]||(A[48]=K("th",null,null,-1)),K("th",null,"齿轮 1（z₁="+ze(t.z1)+"）",1),K("th",null,"齿轮 2（z₂="+ze(t.z2)+"）",1)])]),K("tbody",null,[K("tr",null,[A[49]||(A[49]=K("td",null,"分度圆直径 d",-1)),K("td",null,ze(ye(ee.value.g1.pitchR*2)),1),K("td",null,ze(ye(ee.value.g2.pitchR*2)),1)]),K("tr",null,[A[50]||(A[50]=K("td",null,"基圆直径 d_b",-1)),K("td",null,ze(ye(ee.value.g1.baseR*2)),1),K("td",null,ze(ye(ee.value.g2.baseR*2)),1)]),K("tr",null,[A[51]||(A[51]=K("td",null,"齿顶圆 d_a",-1)),K("td",null,ze(ye(ee.value.g1.addendumR*2)),1),K("td",null,ze(ye(ee.value.g2.addendumR*2)),1)]),K("tr",null,[A[52]||(A[52]=K("td",null,"齿根圆 d_f",-1)),K("td",null,ze(ye(ee.value.g1.dedendumR*2)),1),K("td",null,ze(ye(ee.value.g2.dedendumR*2)),1)]),K("tr",null,[A[53]||(A[53]=K("td",null,"齿距 p = πm",-1)),K("td",null,ze(ye(ee.value.g1.circularPitch)),1),K("td",null,ze(ye(ee.value.g2.circularPitch)),1)]),K("tr",null,[A[54]||(A[54]=K("td",null,"基节 p_b",-1)),K("td",null,ze(ye(ee.value.g1.basePitch)),1),K("td",null,ze(ye(ee.value.g2.basePitch)),1)]),K("tr",null,[A[55]||(A[55]=K("td",null,"齿顶压力角 α_a",-1)),K("td",null,ze((ee.value.g1.alphaTip/zn(dr)).toFixed(2))+"°",1),K("td",null,ze((ee.value.g2.alphaTip/zn(dr)).toFixed(2))+"°",1)]),K("tr",null,[K("td",null,"根切风险 (z<"+ze(ee.value.g1.zMinValue.toFixed(1))+")",1),K("td",{class:an(ee.value.g1.undercut?"bad":"good")},ze(ee.value.g1.undercut?"根切 ❗":"安全"),3),K("td",{class:an(ee.value.g2.undercut?"bad":"good")},ze(ee.value.g2.undercut?"根切 ❗":"安全"),3)])])]),K("div",bA,[A[65]||(A[65]=K("h3",null,"啮合检查",-1)),K("div",null,[A[56]||(A[56]=dt("标准中心距 a₀：",-1)),K("b",null,ze(ye(ee.value.mesh.a0)),1)]),K("div",null,[A[57]||(A[57]=dt("实际中心距 a：",-1)),K("b",null,ze(ye(ee.value.mesh.a)),1),dt("（Δa = "+ze(ye(ee.value.mesh.deltaA))+"）",1)]),K("div",null,[A[58]||(A[58]=dt("啮合角 α′：",-1)),K("b",null,ze((ee.value.mesh.alphaPrime/zn(dr)).toFixed(3))+"°",1)]),K("div",null,[A[59]||(A[59]=dt("节圆半径 r₁′/r₂′：",-1)),K("b",null,ze(ye(ee.value.mesh.pitchR1))+" / "+ze(ye(ee.value.mesh.pitchR2)),1)]),K("div",null,[A[60]||(A[60]=dt("实际啮合线长度 g_α：",-1)),K("b",null,ze(ye(ee.value.mesh.pathOfContact)),1)]),K("div",null,[A[61]||(A[61]=dt("重合度 ε_α = g_α/p_b：",-1)),K("b",{class:an(ee.value.mesh.contactRatio<1?"bad":"good")},ze(ee.value.mesh.contactRatio.toFixed(3)),3)]),K("div",null,[A[62]||(A[62]=dt("圆周/法向侧隙：",-1)),K("b",null,ze(ye(ee.value.mesh.backlashTangential))+" / "+ze(ye(ee.value.mesh.backlashNormal)),1)]),K("div",null,[A[63]||(A[63]=dt("顶隙 c：",-1)),K("b",null,ze(ye(ee.value.mesh.clearance12)),1)]),K("div",null,[A[64]||(A[64]=dt("基节一致：",-1)),K("b",{class:an(ee.value.mesh.basePitchMatch?"good":"bad")},ze(ee.value.mesh.basePitchMatch?"是 ✅":"否 ❌"),3)]),ee.value.mesh.warnings.length?(lt(),ct("ul",EA,[(lt(!0),ct(kt,null,Kn(ee.value.mesh.warnings,(C,_e)=>(lt(),ct("li",{key:_e},"⚠️ "+ze(C),1))),128))])):Zt("",!0),A[66]||(A[66]=K("div",{class:"formula"}," 渐开线：x=r_b(sin t−t cos t)，y=r_b(cos t+t sin t)；inv(α)=tanα−α； 啮合要求基节相等 + 相位共法线，且 r_b1·Δφ₁ = −r_b2·Δφ₂（不是只按转速比旋转）。 ",-1))])])):Zt("",!0)])]),K("aside",TA,[K("section",null,[A[69]||(A[69]=K("h2",null,"设计修订（不可变历史）",-1)),Kt(K("input",{"onUpdate:modelValue":A[20]||(A[20]=C=>Q.value=C),placeholder:"实验线名称"},null,512),[[ci,Q.value]]),Kt(K("textarea",{"onUpdate:modelValue":A[21]||(A[21]=C=>pe.value=C),placeholder:"本修订备注（可选，会进入修订指纹）",rows:"2"},null,512),[[ci,pe.value]]),K("div",AA,[A[67]||(A[67]=dt(" 基于父修订： ",-1)),re.value?(lt(),ct("b",{key:0,title:re.value},ze(re.value.slice(0,16))+"…",9,wA)):(lt(),ct("b",RA,"（新实验线根修订）"))]),K("div",CA,[K("button",{onClick:A[22]||(A[22]=C=>we(!0)),disabled:ce.value},"保存修订（含轮廓+当前帧干涉）",8,PA)]),K("div",DA,[K("button",{onClick:A[23]||(A[23]=C=>we(!1)),disabled:ce.value},"仅参数修订",8,LA),K("button",{onClick:W},"新实验线")]),K("div",IA,[K("button",{onClick:A[24]||(A[24]=C=>fe(!0))},"导出 JSON+轮廓"),K("button",{onClick:A[25]||(A[25]=C=>fe(!1))},"导出参数")]),K("label",UA,[A[68]||(A[68]=dt("导入修订 JSON（v1/v2，自动检测冲突） ",-1)),K("input",{type:"file",accept:"application/json,.json",onChange:te,hidden:""},null,32)])]),K("section",null,[A[70]||(A[70]=K("h2",null,"实验线",-1)),K("ul",NA,[(lt(!0),ct(kt,null,Kn(ie.value,C=>(lt(),ct("li",{key:C.id,class:an({active:C.id===Z.value})},[K("div",{class:"ci",onClick:_e=>O(C)},[K("b",null,ze(C.name),1),K("span",null,[dt(ze(Ve(C.updatedAt)),1),C.forkedFromProjectId?(lt(),ct(kt,{key:0},[dt(" · 🌱 分叉")],64)):Zt("",!0)])],8,OA),K("button",{class:"del",onClick:Ov(_e=>X(C),["stop"])},"删",8,FA)],2))),128)),ie.value.length?Zt("",!0):(lt(),ct("li",BA,"尚无实验线（保存第一条修订即创建）"))])]),rt.value.length?(lt(),ct("section",zA,[K("h2",null,"修订历史（"+ze(it.value?.name)+"）",1),K("ul",kA,[(lt(!0),ct(kt,null,Kn(rt.value,C=>(lt(),ct("li",{key:C.digest,class:an(["rev",{head:C.isHead,root:C.isRoot,active:C.active,branch:C.siblings.length>0,conflict:C.twins.length>0}]),style:al({marginLeft:Math.min(C.depth,6)*12+"px"})},[K("div",VA,[K("div",null,[K("b",null,ze(C.rev.note||C.rev.revId.slice(0,12)),1),K("div",HA,[dt(ze(C.rev.params.gear1.z)+"/"+ze(C.rev.params.gear2.z)+" · m="+ze(C.rev.params.gear1.module)+" · α="+ze(C.rev.params.gear1.alphaDeg)+"° · a="+ze(C.rev.checks.a.toFixed(2))+" ",1),C.rev.hasOutlines?(lt(),ct(kt,{key:0},[dt(" · 轮廓✓")],64)):Zt("",!0),C.rev.checks.interference?(lt(),ct(kt,{key:1},[dt(" · 帧干涉 "+ze(C.rev.checks.interference.areaMm2.toExponential(2)),1)],64)):Zt("",!0)]),K("div",GA,[C.isRoot?(lt(),ct("span",WA,"根")):Zt("",!0),C.isHead?(lt(),ct("span",XA,"head")):Zt("",!0),C.siblings.length?(lt(),ct("span",$A,"⑂ 并列分支 ×"+ze(C.siblings.length+1),1)):Zt("",!0),(lt(!0),ct(kt,null,Kn(C.twins,_e=>(lt(),ct("span",{key:_e.digest,class:"tag conflict-tag"},"⚠ 同ID不同内容"))),128))])]),K("div",qA,[K("button",{onClick:_e=>Xe(C.rev),title:"恢复该版几何，下一次保存成为其后继"},"恢复",8,YA),K("button",{onClick:_e=>L(C.rev),disabled:Ne.value,title:"从此版分叉为新实验线"},"分叉",8,KA),K("button",{class:"del",onClick:_e=>G(C.rev),disabled:!C.isHead,title:"仅可删除 head"},"删",8,ZA)])]),C.twins.length?(lt(),ct("div",JA,[dt(" 冲突：revId「"+ze(C.rev.revId)+"」存在 "+ze(C.twins.length+1)+" 份不同内容，已全部保留。 ",1),(lt(!0),ct(kt,null,Kn(C.twins,_e=>(lt(),ct("div",{key:_e.digest}," · "+ze(_e.note||_e.digest.slice(0,16))+"（"+ze(_e.creator)+"，"+ze(Ve(_e.createdAt))+"） ",1))),128))])):Zt("",!0)],6))),128))])])):Zt("",!0),K("section",null,[A[81]||(A[81]=K("h2",null,"比较两版",-1)),K("div",jA,[K("label",null,[A[72]||(A[72]=dt("A ",-1)),Kt(K("select",{"onUpdate:modelValue":A[26]||(A[26]=C=>ne.value=C),onChange:A[27]||(A[27]=C=>R.value=null)},[A[71]||(A[71]=K("option",{value:"",disabled:""},"选择修订…",-1)),(lt(!0),ct(kt,null,Kn(Le.value,C=>(lt(),ct("option",{key:C.digest,value:C.digest},ze(C.revId.slice(0,10))+" · "+ze(C.params.gear1.z)+"/"+ze(C.params.gear2.z)+" · a="+ze(C.checks.a.toFixed(1)),9,QA))),128))],544),[[tf,ne.value]])]),K("label",null,[A[74]||(A[74]=dt("B ",-1)),Kt(K("select",{"onUpdate:modelValue":A[28]||(A[28]=C=>Te.value=C),onChange:A[29]||(A[29]=C=>R.value=null)},[A[73]||(A[73]=K("option",{value:"",disabled:""},"选择修订…",-1)),(lt(!0),ct(kt,null,Kn(Le.value,C=>(lt(),ct("option",{key:C.digest,value:C.digest},ze(C.revId.slice(0,10))+" · "+ze(C.params.gear1.z)+"/"+ze(C.params.gear2.z)+" · a="+ze(C.checks.a.toFixed(1)),9,ew))),128))],544),[[tf,Te.value]])])]),K("button",{class:"wide",onClick:T,disabled:!ne.value||!Te.value||ne.value===Te.value},"比较尺寸 / 中心距 / 干涉",8,tw),R.value?(lt(),ct("div",nw,[R.value.same?(lt(),ct("div",iw,"两版内容完全相同（digest 一致）")):Zt("",!0),K("table",rw,[A[75]||(A[75]=K("thead",null,[K("tr",null,[K("th"),K("th",null,"A"),K("th",null,"B"),K("th",null,"Δ(B−A)")])],-1)),K("tbody",null,[(lt(!0),ct(kt,null,Kn(R.value.fields,(C,_e)=>(lt(),ct("tr",{key:_e,class:an({changed:Math.abs(C.delta)>1e-9})},[K("td",null,ze(C.label),1),K("td",null,ze(Fe(C.a,C.unit)),1),K("td",null,ze(Fe(C.b,C.unit)),1),K("td",{class:an(C.worse?"bad":"")},ze(Je(C.delta,C.unit)),3)],2))),128))])]),K("div",sw,[K("div",null,[A[76]||(A[76]=dt("保存时帧干涉 A：",-1)),K("b",{class:an(at(R.value.interferenceA))},ze(je(R.value.interferenceA)),3)]),K("div",null,[A[77]||(A[77]=dt("保存时帧干涉 B：",-1)),K("b",{class:an(at(R.value.interferenceB))},ze(je(R.value.interferenceB)),3)])]),K("button",{class:"wide",onClick:g,disabled:Re.value},ze(Re.value?"求交中…":`在当前帧（φ₁=${h.value.toFixed(3)}）重放两版干涉`),9,aw),R.value.liveInterference?(lt(),ct("div",ow,[K("div",null,[A[78]||(A[78]=dt("当前帧 A：",-1)),K("b",{class:an(at(R.value.liveInterference.a))},ze(je(R.value.liveInterference.a)),3)]),K("div",null,[A[79]||(A[79]=dt("当前帧 B：",-1)),K("b",{class:an(at(R.value.liveInterference.b))},ze(je(R.value.liveInterference.b)),3)]),K("div",null,[A[80]||(A[80]=dt("面积差 Δ：",-1)),K("b",null,ze(R.value.liveInterference.deltaArea.toExponential(2))+" mm²",1)])])):Zt("",!0)])):Zt("",!0)]),K("section",null,[A[82]||(A[82]=K("h2",null,"完整性 / 状态",-1)),K("button",{class:"wide",onClick:Ae},"修订库完整性体检"),se.value?(lt(),ct("div",lw,"已隔离可疑修订："+ze(se.value)+" 条（哈希/digest 不符的导入不会冒充）",1)):Zt("",!0),(lt(!0),ct(kt,null,Kn(J.value,(C,_e)=>(lt(),ct("div",{key:_e,class:"conflict-box"}," ⚠ 损坏修订 "+ze(C.revId)+"："+ze(C.problems.join(", ")),1))),128)),K("ul",cw,[(lt(!0),ct(kt,null,Kn(ve.value,(C,_e)=>(lt(),ct("li",{key:_e},ze(C),1))),128))])])])])]))}});zv(uw).mount("#app");

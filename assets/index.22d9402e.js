var xt=Object.defineProperty,Mt=Object.defineProperties;var At=Object.getOwnPropertyDescriptors;var Re=Object.getOwnPropertySymbols;var Lt=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable;var $e=(e,t,n)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))Lt.call(t,n)&&$e(e,n,t[n]);if(Re)for(var n of Re(t))Rt.call(t,n)&&$e(e,n,t[n]);return e},de=(e,t)=>Mt(e,At(t));const $t=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};$t();var ee,g,Ke,Xe,X,Qe,Ce,Je,se={},et=[],Ct=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function B(e,t){for(var n in t)e[n]=t[n];return e}function tt(e){var t=e.parentNode;t&&t.removeChild(e)}function me(e,t,n){var r,s,o,c={};for(o in t)o=="key"?r=t[o]:o=="ref"?s=t[o]:c[o]=t[o];if(arguments.length>2&&(c.children=arguments.length>3?ee.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return Q(e,c,r,s,null)}function Q(e,t,n,r,s){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s==null?++Ke:s};return s==null&&g.vnode!=null&&g.vnode(o),o}function nt(){return{current:null}}function te(e){return e.children}function J(e,t){this.props=e,this.context=t}function G(e,t){if(t==null)return e.__?G(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?G(e):null}function rt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return rt(e)}}function ge(e){(!e.__d&&(e.__d=!0)&&X.push(e)&&!ce.__r++||Ce!==g.debounceRendering)&&((Ce=g.debounceRendering)||Qe)(ce)}function ce(){for(var e;ce.__r=X.length;)e=X.sort(function(t,n){return t.__v.__b-n.__v.__b}),X=[],e.some(function(t){var n,r,s,o,c,u;t.__d&&(c=(o=(n=t).__v).__e,(u=n.__P)&&(r=[],(s=B({},o)).__v=o.__v+1,Se(u,o,s,n.__n,u.ownerSVGElement!==void 0,o.__h!=null?[c]:null,r,c==null?G(o):c,o.__h),at(r,o),o.__e!=c&&rt(o)))})}function ot(e,t,n,r,s,o,c,u,a,l){var i,h,f,d,p,w,m,b=r&&r.__k||et,v=b.length;for(n.__k=[],i=0;i<t.length;i++)if((d=n.__k[i]=(d=t[i])==null||typeof d=="boolean"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?Q(null,d,null,null,d):Array.isArray(d)?Q(te,{children:d},null,null,null):d.__b>0?Q(d.type,d.props,d.key,null,d.__v):d)!=null){if(d.__=n,d.__b=n.__b+1,(f=b[i])===null||f&&d.key==f.key&&d.type===f.type)b[i]=void 0;else for(h=0;h<v;h++){if((f=b[h])&&d.key==f.key&&d.type===f.type){b[h]=void 0;break}f=null}Se(e,d,f=f||se,s,o,c,u,a,l),p=d.__e,(h=d.ref)&&f.ref!=h&&(m||(m=[]),f.ref&&m.push(f.ref,null,d),m.push(h,d.__c||p,d)),p!=null?(w==null&&(w=p),typeof d.type=="function"&&d.__k===f.__k?d.__d=a=it(d,a,e):a=ct(e,d,f,b,p,a),typeof n.type=="function"&&(n.__d=a)):a&&f.__e==a&&a.parentNode!=e&&(a=G(f))}for(n.__e=w,i=v;i--;)b[i]!=null&&(typeof n.type=="function"&&b[i].__e!=null&&b[i].__e==n.__d&&(n.__d=G(r,i+1)),ut(b[i],b[i]));if(m)for(i=0;i<m.length;i++)lt(m[i],m[++i],m[++i])}function it(e,t,n){for(var r,s=e.__k,o=0;s&&o<s.length;o++)(r=s[o])&&(r.__=e,t=typeof r.type=="function"?it(r,t,n):ct(n,r,r,s,r.__e,t));return t}function st(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){st(n,t)}):t.push(e)),t}function ct(e,t,n,r,s,o){var c,u,a;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||s!=o||s.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(s),c=null;else{for(u=o,a=0;(u=u.nextSibling)&&a<r.length;a+=2)if(u==s)break e;e.insertBefore(s,o),c=o}return c!==void 0?c:s.nextSibling}function Tt(e,t,n,r,s){var o;for(o in n)o==="children"||o==="key"||o in t||ae(e,o,null,n[o],r);for(o in t)s&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||ae(e,o,t[o],n[o],r)}function Te(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ct.test(t)?n:n+"px"}function ae(e,t,n,r,s){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Te(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Te(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?Pe:Be,o):e.removeEventListener(t,o?Pe:Be,o);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Be(e){this.l[e.type+!1](g.event?g.event(e):e)}function Pe(e){this.l[e.type+!0](g.event?g.event(e):e)}function Se(e,t,n,r,s,o,c,u,a){var l,i,h,f,d,p,w,m,b,v,R,x=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,u=t.__e=n.__e,t.__h=null,o=[u]),(l=g.__b)&&l(t);try{e:if(typeof x=="function"){if(m=t.props,b=(l=x.contextType)&&r[l.__c],v=l?b?b.props.value:l.__:r,n.__c?w=(i=t.__c=n.__c).__=i.__E:("prototype"in x&&x.prototype.render?t.__c=i=new x(m,v):(t.__c=i=new J(m,v),i.constructor=x,i.render=Pt),b&&b.sub(i),i.props=m,i.state||(i.state={}),i.context=v,i.__n=r,h=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),x.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=B({},i.__s)),B(i.__s,x.getDerivedStateFromProps(m,i.__s))),f=i.props,d=i.state,h)x.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(x.getDerivedStateFromProps==null&&m!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,v),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,v)===!1||t.__v===n.__v){i.props=m,i.state=i.__s,t.__v!==n.__v&&(i.__d=!1),i.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function($){$&&($.__=t)}),i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,v),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,d,p)})}i.context=v,i.props=m,i.state=i.__s,(l=g.__r)&&l(t),i.__d=!1,i.__v=t,i.__P=e,l=i.render(i.props,i.state,i.context),i.state=i.__s,i.getChildContext!=null&&(r=B(B({},r),i.getChildContext())),h||i.getSnapshotBeforeUpdate==null||(p=i.getSnapshotBeforeUpdate(f,d)),R=l!=null&&l.type===te&&l.key==null?l.props.children:l,ot(e,Array.isArray(R)?R:[R],t,n,r,s,o,c,u,a),i.base=t.__e,t.__h=null,i.__h.length&&c.push(i),w&&(i.__E=i.__=null),i.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Bt(n.__e,t,n,r,s,o,c,a);(l=g.diffed)&&l(t)}catch($){t.__v=null,(a||o!=null)&&(t.__e=u,t.__h=!!a,o[o.indexOf(u)]=null),g.__e($,t,n)}}function at(e,t){g.__c&&g.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){g.__e(r,n.__v)}})}function Bt(e,t,n,r,s,o,c,u){var a,l,i,h=n.props,f=t.props,d=t.type,p=0;if(d==="svg"&&(s=!0),o!=null){for(;p<o.length;p++)if((a=o[p])&&"setAttribute"in a==!!d&&(d?a.localName===d:a.nodeType===3)){e=a,o[p]=null;break}}if(e==null){if(d===null)return document.createTextNode(f);e=s?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,f.is&&f),o=null,u=!1}if(d===null)h===f||u&&e.data===f||(e.data=f);else{if(o=o&&ee.call(e.childNodes),l=(h=n.props||se).dangerouslySetInnerHTML,i=f.dangerouslySetInnerHTML,!u){if(o!=null)for(h={},p=0;p<e.attributes.length;p++)h[e.attributes[p].name]=e.attributes[p].value;(i||l)&&(i&&(l&&i.__html==l.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(Tt(e,f,h,s,u),i)t.__k=[];else if(p=t.props.children,ot(e,Array.isArray(p)?p:[p],t,n,r,s&&d!=="foreignObject",o,c,o?o[0]:n.__k&&G(n,0),u),o!=null)for(p=o.length;p--;)o[p]!=null&&tt(o[p]);u||("value"in f&&(p=f.value)!==void 0&&(p!==e.value||d==="progress"&&!p||d==="option"&&p!==h.value)&&ae(e,"value",p,h.value,!1),"checked"in f&&(p=f.checked)!==void 0&&p!==e.checked&&ae(e,"checked",p,h.checked,!1))}return e}function lt(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){g.__e(r,n)}}function ut(e,t,n){var r,s;if(g.unmount&&g.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||lt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){g.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(s=0;s<r.length;s++)r[s]&&ut(r[s],t,typeof e.type!="function");n||e.__e==null||tt(e.__e),e.__e=e.__d=void 0}function Pt(e,t,n){return this.constructor(e,n)}function Ee(e,t,n){var r,s,o;g.__&&g.__(e,t),s=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Se(t,e=(!r&&n||t).__k=me(te,null,[e]),s||se,se,t.ownerSVGElement!==void 0,!r&&n?[n]:s?null:t.firstChild?ee.call(t.childNodes):null,o,!r&&n?n:s?s.__e:t.firstChild,r),at(o,e)}function ft(e,t){Ee(e,t,ft)}function It(e,t,n){var r,s,o,c=B({},e.props);for(o in t)o=="key"?r=t[o]:o=="ref"?s=t[o]:c[o]=t[o];return arguments.length>2&&(c.children=arguments.length>3?ee.call(arguments,2):n),Q(e.type,c,r||e.key,s||e.ref,null)}function zt(e,t){var n={__c:t="__cC"+Je++,__:e,Consumer:function(r,s){return r.children(s)},Provider:function(r){var s,o;return this.getChildContext||(s=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&s.some(ge)},this.sub=function(c){s.push(c);var u=c.componentWillUnmount;c.componentWillUnmount=function(){s.splice(s.indexOf(c),1),u&&u.call(c)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}ee=et.slice,g={__e:function(e,t,n,r){for(var s,o,c;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,r||{}),c=s.__d),c)return s.__E=s}catch(u){e=u}throw e}},Ke=0,Xe=function(e){return e!=null&&e.constructor===void 0},J.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=B({},this.state),typeof e=="function"&&(e=e(B({},n),this.props)),e&&B(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),ge(this))},J.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ge(this))},J.prototype.render=te,X=[],Qe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ce.__r=0,Je=0;var Dt=Object.freeze(Object.defineProperty({__proto__:null,render:Ee,hydrate:ft,createElement:me,h:me,Fragment:te,createRef:nt,get isValidElement(){return Xe},Component:J,cloneElement:It,createContext:zt,toChildArray:st,get options(){return g}},Symbol.toStringTag,{value:"Module"}));try{self["workbox:window:6.5.2"]&&_()}catch{}function Ie(e,t){return new Promise(function(n){var r=new MessageChannel;r.port1.onmessage=function(s){n(s.data)},e.postMessage(t,[r.port2])})}function Ut(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ze(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ht(e,t){var n;if(typeof Symbol=="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(n=function(s,o){if(s){if(typeof s=="string")return ze(s,o);var c=Object.prototype.toString.call(s).slice(8,-1);return c==="Object"&&s.constructor&&(c=s.constructor.name),c==="Map"||c==="Set"?Array.from(s):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?ze(s,o):void 0}}(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=e[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.5.2"]&&_()}catch{}var he=function(){var e=this;this.promise=new Promise(function(t,n){e.resolve=t,e.reject=n})};function pe(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var Z=function(e,t){this.type=e,Object.assign(this,t)};function oe(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function Ft(){}var Nt={type:"SKIP_WAITING"};function De(e,t){if(!t)return e&&e.then?e.then(Ft):Promise.resolve()}var Ot=function(e){var t,n;function r(u,a){var l,i;return a===void 0&&(a={}),(l=e.call(this)||this).nn={},l.tn=0,l.rn=new he,l.en=new he,l.on=new he,l.un=0,l.an=new Set,l.cn=function(){var h=l.fn,f=h.installing;l.tn>0||!pe(f.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=f,h.removeEventListener("updatefound",l.cn)):(l.hn=f,l.an.add(f),l.rn.resolve(f)),++l.tn,f.addEventListener("statechange",l.ln)},l.ln=function(h){var f=l.fn,d=h.target,p=d.state,w=d===l.vn,m={sw:d,isExternal:w,originalEvent:h};!w&&l.mn&&(m.isUpdate=!0),l.dispatchEvent(new Z(p,m)),p==="installed"?l.wn=self.setTimeout(function(){p==="installed"&&f.waiting===d&&l.dispatchEvent(new Z("waiting",m))},200):p==="activating"&&(clearTimeout(l.wn),w||l.en.resolve(d))},l.dn=function(h){var f=l.hn,d=f!==navigator.serviceWorker.controller;l.dispatchEvent(new Z("controlling",{isExternal:d,originalEvent:h,sw:f,isUpdate:l.mn})),d||l.on.resolve(f)},l.gn=(i=function(h){var f=h.data,d=h.ports,p=h.source;return oe(l.getSW(),function(){l.an.has(p)&&l.dispatchEvent(new Z("message",{data:f,originalEvent:h,ports:d,sw:p}))})},function(){for(var h=[],f=0;f<arguments.length;f++)h[f]=arguments[f];try{return Promise.resolve(i.apply(this,h))}catch(d){return Promise.reject(d)}}),l.sn=u,l.nn=a,navigator.serviceWorker.addEventListener("message",l.gn),l}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s,o,c=r.prototype;return c.register=function(u){var a=(u===void 0?{}:u).immediate,l=a!==void 0&&a;try{var i=this;return function(h,f){var d=h();return d&&d.then?d.then(f):f(d)}(function(){if(!l&&document.readyState!=="complete")return De(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return i.mn=Boolean(navigator.serviceWorker.controller),i.yn=i.pn(),oe(i.bn(),function(h){i.fn=h,i.yn&&(i.hn=i.yn,i.en.resolve(i.yn),i.on.resolve(i.yn),i.yn.addEventListener("statechange",i.ln,{once:!0}));var f=i.fn.waiting;return f&&pe(f.scriptURL,i.sn.toString())&&(i.hn=f,Promise.resolve().then(function(){i.dispatchEvent(new Z("waiting",{sw:f,wasWaitingBeforeRegister:!0}))}).then(function(){})),i.hn&&(i.rn.resolve(i.hn),i.an.add(i.hn)),i.fn.addEventListener("updatefound",i.cn),navigator.serviceWorker.addEventListener("controllerchange",i.dn),i.fn})})}catch(h){return Promise.reject(h)}},c.update=function(){try{return this.fn?De(this.fn.update()):void 0}catch(u){return Promise.reject(u)}},c.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},c.messageSW=function(u){try{return oe(this.getSW(),function(a){return Ie(a,u)})}catch(a){return Promise.reject(a)}},c.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Ie(this.fn.waiting,Nt)},c.pn=function(){var u=navigator.serviceWorker.controller;return u&&pe(u.scriptURL,this.sn.toString())?u:void 0},c.bn=function(){try{var u=this;return function(a,l){try{var i=a()}catch(h){return l(h)}return i&&i.then?i.then(void 0,l):i}(function(){return oe(navigator.serviceWorker.register(u.sn,u.nn),function(a){return u.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},s=r,(o=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Ut(s.prototype,o),r}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(n,r){this.Sn(n).add(r)},t.removeEventListener=function(n,r){this.Sn(n).delete(r)},t.dispatchEvent=function(n){n.target=this;for(var r,s=Ht(this.Sn(n.type));!(r=s()).done;)(0,r.value)(n)},t.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},e}());function jt(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisterError:o}=e;let c;const u=async(a=!0)=>{};return"serviceWorker"in navigator&&(c=new Ot("./sw.js",{scope:"./",type:"classic"}),c.addEventListener("activated",a=>{a.isUpdate?window.location.reload():r==null||r()}),c.register({immediate:t}).then(a=>{s==null||s(a)}).catch(a=>{o==null||o(a)})),u}const Wt=async(e,t)=>new AudioContext(t).decodeAudioData(await e.arrayBuffer()),_t=e=>{const t=document.createElement("canvas"),n=t.getContext("2d",e);return[t,n]},dt=()=>{const e=new Map;return{emit(t,...n){var r;(r=e.get(t))==null||r.forEach(s=>s(...n))},on(t,n){var r;e.set(t,[...(r=e.get(t))!=null?r:[],n])},off(t,n){var r,s;e.set(t,(s=(r=e.get(t))==null?void 0:r.filter(o=>o!==n))!=null?s:[])},unbindAll(){e.clear()}}},Vt=e=>{let t=-1;const n=()=>{e(),t=requestAnimationFrame(n)};return t=requestAnimationFrame(n),()=>cancelAnimationFrame(t)},qt=96e3,ht="RealtimeSpectrumRenderer",Gt=(e,t)=>{const[n,r]=_t(),{on:s,off:o,emit:c}=dt();let u=!1,a,l,i;const h={smoothingTimeConstant:0,fftSize:2**12,minDecibels:-120,maxDecibels:-20};let f=-1,d=0;const p={start:0,end:0},w=[],m=()=>{a&&l&&c("update",{canvas:n,time:p,audioContext:a,audioAnalyzer:l,bufferSize:d})},b=($,H)=>{if(n.width=$,n.height=H,!w.length)return;const P=w.slice(-$),S=new ImageData(P.length,H);for(let k=0;k<S.data.length;k+=4){const C=H-Math.floor(k/4/S.width),M=k/4%S.width,T=P[M],Y=T.buffer.length/S.height,I=T.buffer[Math.floor(C*Y)];if(I){const E=e[I];S.data.set(E,k)}else S.data.set(t,k)}f=Math.min(P.length-1),r.putImageData(S,0,0),m()},v=async()=>{await R(),await(a==null?void 0:a.close()),l=void 0,a=void 0,u=!1,c("destroy")},R=async()=>{u=!1,i==null||i(),c("stop")};return{on:s,off:o,name:ht,analyzerOptions:h,resize:b,start:async()=>{if(u)return;const $=performance.now();u=!0;const H=await navigator.mediaDevices.getUserMedia({audio:{deviceId:"default"}});await(a==null?void 0:a.close()),a=new AudioContext({sampleRate:qt});const P=l=a.createAnalyser();a.createMediaStreamSource(H).connect(l),i=Vt(()=>{var F,D;const{height:k,width:C}=n,M=new Uint8Array(P.frequencyBinCount),T=new ImageData(1,k),Y=M.length/k,I=Math.ceil(performance.now()-$);Object.assign(P,h),P.getByteFrequencyData(M);for(let U=0;U<k;U++){const ne=M[Math.floor(U*Y)],re=(k-U-1)*4;if(ne){const Et=e[ne];T.data.set(Et,re)}else T.data.set(t,re)}const E=w.length?((D=(F=w.at(-1))==null?void 0:F.at)!=null?D:0)/1e3/w.length:0;f===C-1?(r.globalCompositeOperation="copy",r.drawImage(n,-1,0),r.putImageData(T,f,0),r.globalCompositeOperation="source-over",p.end=E*w.length,p.start=E*(w.length-C)):(r.putImageData(T,++f,0),p.end=E*C),w.push({buffer:M,at:I}),d+=M.length,m()}),c("start")},stop:R,destroy:v,isRecording:()=>u}},ye=e=>typeof e=="object"&&(e==null?void 0:e.name)===ht,Yt=96e3,pt="AudioFileSpectrumRenderer",Zt=e=>{const[t,n]=_t(),{on:r,off:s,emit:o}=dt();let c=!1,u=!1,a,l,i,h,f,d,p;const w=S=>{let k=2;for(;k/2<S;)k*=2;return k},m=()=>{h&&a&&l&&i&&o("update",{canvas:t,audioFile:h,audioContext:a,audioAnalyzer:l,audioBuffer:i,audio:p})},b=async(S=h)=>{if(c||!S)return;f&&URL.revokeObjectURL(f),p==null||p.pause(),o("pause"),o("start"),p=void 0,f=void 0,u=!1,c=!0,h=S,i=await Wt(S,{sampleRate:Yt});const{width:k,height:C}=t,M=new Array(k);a=new OfflineAudioContext(i),l=a.createAnalyser(),l.connect(a.destination),l.fftSize=w(C),l.smoothingTimeConstant=0,l.minDecibels=-120,l.maxDecibels=-20;const T=i.duration/M.length,Y=l.frequencyBinCount;for(let E=0;E<M.length;E++){const F=E*T;a.suspend(F).then(()=>{a==null||a.resume(),l==null||l.getByteFrequencyData(M[E]=new Uint8Array(Y))})}const I=a.createBufferSource();I.buffer=i,I.connect(l),I.start(),await a.startRendering(),d=new ImageData(k,C);for(let E=0;E<k;E++){const F=M[E];for(let D=0;D<C;D++){const U=F[D];if(U){const ne=(E+(C-D-1)*k)*4,re=e[U];d.data.set(re,ne)}}}n.putImageData(d,0,0),c=!1,o("stop"),m()},v=async()=>{c||!h||!d||u||(f=f!=null?f:URL.createObjectURL(h),p=p!=null?p:new Audio(f),o("beforePlay"),p.addEventListener("timeupdate",()=>{if(!d||!p)return;n.putImageData(d,0,0);const S=Math.floor(p.currentTime/p.duration*t.width);S&&(n.fillStyle="white",n.fillRect(S,0,1,t.height)),m()}),await p.play(),u=!0,o("play"))},R=()=>{p==null||p.pause(),u=!1,f&&URL.revokeObjectURL(f),o("pause")};return{on:r,off:s,name:pt,resize:(S,k)=>{t.width=S,t.height=k,b()},render:b,destroy:()=>{R(),c=!1,o("destroy")},play:v,pause:R,rewind:()=>{p&&(p.currentTime=0)},setVolume:S=>{p&&(p.volume=S)},isPlaying:()=>u,isRendering:()=>c}},K=e=>typeof e=="object"&&(e==null?void 0:e.name)===pt,ve=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),Kt=(e,t,n)=>{let r,s,o;if(t===0)r=s=o=n;else{const c=n<.5?n*(1+t):n+t-n*t,u=2*n-c;r=ve(u,c,e+1/3),s=ve(u,c,e),o=ve(u,c,e-1/3)}return[Math.round(r*255),Math.round(s*255),Math.round(o*255)]},j=e=>e*window.devicePixelRatio,Ue=270,He=300,vt=new Array(256);for(let e=0;e<=255;e++){const t=vt[255-e]=new Uint8ClampedArray(4),n=e/255*He,r=n>Ue?.5*((300-n)/(He-Ue)):.5;t.set(Kt(n/360,1,r),0),t[3]=255}const xe=`${j(12)}px monospace`,W=vt,Xt=new Uint8ClampedArray([0,0,0,255]),fe=({width:e,height:t},{top:n,left:r,bottom:s,right:o})=>new DOMRect(r,n,e-r-o,t-n-s),Me=(e,t)=>{let n=2;for(;;){const r=n*2+n%2;if(t/r<e)break;n=r}return[n,t/n]},Qt={minDecibels:-120,maxDecibels:-20},Jt=({context:e,margin:t,layout:n,decibelRange:r=Qt})=>{const s=fe(e.canvas,t),o=s.right+10,c=s.top-1,u=o+n.width,a=s.bottom+1,l=e.createLinearGradient(o,c,u,a);for(let d=0;d<W.length;d++){const[p,w,m]=W[W.length-d-1];l.addColorStop(d/W.length,`rgb(${p}, ${w}, ${m})`)}e.fillStyle=l,e.fillRect(o,c,n.width,s.height),e.textAlign="left",e.textBaseline="middle",e.font=xe;const[i,h]=Me(n.tickMinDistance,s.height),f=r.minDecibels-r.maxDecibels;for(let d=0;d<=i;d++){const p=c+d*h,w=`${Math.floor(d/i*f+r.maxDecibels)} dB`;e.fillStyle=l,e.fillRect(u,p,n.tickLength,n.tickThickness),e.fillStyle="white",e.fillText(w,u+n.tickLength+2,p+1)}},en=({context:e,margin:t,layout:n,sampleRate:r=96e3})=>{const s=fe(e.canvas,t),o=s.height+1,c=r/2/1e3,[u,a]=Me(n.tickMinDistance,o);e.textAlign="right",e.textBaseline="middle";for(let l=0;l<=u;l++){const i=s.top+l*a-1,h=`${Math.floor((u-l)/u*c)} kHz`;e.fillRect(s.left-n.tickLength,i,n.tickLength,n.tickThickness),e.fillText(h,s.left-n.tickLength-2,i+1)}},tn=({context:e,margin:t,text:n})=>{e.fillStyle="white",e.textAlign="left",e.textBaseline="bottom",e.font=xe,e.fillText(n,t.left,t.top-j(8))},le=e=>{const t=Math.floor(e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},nn=({context:e,time:t,layout:n,margin:r,currentTime:s})=>{const o=fe(e.canvas,r),c=t.end-t.start,u=o.width+1,[a,l]=Me(n.tickMinDistance*2,u);e.strokeStyle="white",e.fillStyle="white",e.textAlign="center",e.textBaseline="hanging",e.font=xe;const i=[];for(let h=0;h<=a;h++){const f=o.left+h*l-1,d=le(t.start+h/a*c);e.fillRect(f,o.bottom,n.tickThickness,n.tickLength),e.fillText(d,f,o.bottom+n.tickLength+2),i.push([f,f+e.measureText(d).width])}if(s!==void 0){const h=Math.floor(o.left+s/c*u),f=o.bottom+1,d=n.tickLength/2;e.fillStyle="white",e.fillRect(h,f,n.tickThickness,d);const p=le(s),w=e.measureText(p);i.some(m=>h+w.width>m[0]&&h<m[1])||e.fillText(p,h,o.bottom+d+2)}};var _e,A,Fe,ue=0,mt=[],Ne=g.__b,Oe=g.__r,je=g.diffed,We=g.__c,Ve=g.unmount;function Ae(e,t){g.__h&&g.__h(A,e,ue||t),ue=0;var n=A.__H||(A.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function V(e){return ue=1,rn(yt,e)}function rn(e,t,n){var r=Ae(_e++,2);return r.t=e,r.__c||(r.__=[n?n(t):yt(void 0,t),function(s){var o=r.t(r.__[0],s);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=A),r.__}function q(e,t){var n=Ae(_e++,3);!g.__s&&gt(n.__H,t)&&(n.__=e,n.__H=t,A.__H.__h.push(n))}function on(e){return ue=5,sn(function(){return{current:e}},[])}function sn(e,t){var n=Ae(_e++,7);return gt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function cn(){for(var e;e=mt.shift();)if(e.__P)try{e.__H.__h.forEach(ie),e.__H.__h.forEach(we),e.__H.__h=[]}catch(t){e.__H.__h=[],g.__e(t,e.__v)}}g.__b=function(e){A=null,Ne&&Ne(e)},g.__r=function(e){Oe&&Oe(e),_e=0;var t=(A=e.__c).__H;t&&(t.__h.forEach(ie),t.__h.forEach(we),t.__h=[])},g.diffed=function(e){je&&je(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(mt.push(t)!==1&&Fe===g.requestAnimationFrame||((Fe=g.requestAnimationFrame)||function(n){var r,s=function(){clearTimeout(o),qe&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(s,100);qe&&(r=requestAnimationFrame(s))})(cn)),A=null},g.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ie),n.__h=n.__h.filter(function(r){return!r.__||we(r)})}catch(r){t.some(function(s){s.__h&&(s.__h=[])}),t=[],g.__e(r,n.__v)}}),We&&We(e,t)},g.unmount=function(e){Ve&&Ve(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ie(r)}catch(s){t=s}}),t&&g.__e(t,n.__v))};var qe=typeof requestAnimationFrame=="function";function ie(e){var t=A,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),A=t}function we(e){var t=A;e.__c=e.__(),A=t}function gt(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function yt(e,t){return typeof t=="function"?t(e):t}const an={renderer:void 0,rendererInstance:void 0},be=new Set,ln=e=>{be.forEach(t=>t(e))},un=e=>{switch(e==null?void 0:e.type){case"file":{const t=Zt(W);return requestAnimationFrame(()=>void t.render(e.file)),t}case"realtime":{const t=Gt(W,Xt);return t.start(),t}default:return}},wt=()=>{const[e,t]=V(an),n=async r=>{var o;await((o=e.rendererInstance)==null?void 0:o.destroy());const s=un(r);ln(de(N({},e),{renderer:r,rendererInstance:s}))};return q(()=>(be.add(t),()=>be.delete(t))),{state:e,changeRenderer:n}},fn=(e,t=devicePixelRatio)=>{e.width=0,e.height=0;const n=e.getBoundingClientRect(),r=Math.round(t*n.right)-Math.round(t*n.left),s=Math.round(t*n.bottom)-Math.round(t*n.top);return{width:r,height:s}},_n=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],dn=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],hn=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],pn=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],Ge=(e,t,n)=>{let r=e;return typeof t=="string"||Array.isArray(t)?r=e.toLocaleString(t,n):(t===!0||n!==void 0)&&(r=e.toLocaleString(void 0,n)),r};function vn(e,t){if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);t=N({bits:!1,binary:!1},t);const n=t.bits?t.binary?pn:hn:t.binary?dn:_n;if(t.signed&&e===0)return` 0 ${n[0]}`;const r=e<0,s=r?"-":t.signed?"+":"";r&&(e=-e);let o;if(t.minimumFractionDigits!==void 0&&(o={minimumFractionDigits:t.minimumFractionDigits}),t.maximumFractionDigits!==void 0&&(o=N({maximumFractionDigits:t.maximumFractionDigits},o)),e<1){const l=Ge(e,t.locale,o);return s+l+" "+n[0]}const c=Math.min(Math.floor(t.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),n.length-1);e/=(t.binary?1024:1e3)**c,o||(e=e.toPrecision(3));const u=Ge(Number(e),t.locale,o),a=n[c];return s+u+" "+a}const mn="_canvas_neruw_1";var gn={canvas:mn};function yn(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var wn=yn(Dt),bt,kt,St,ke=wn,bn=0;function Ye(e,t,n,r,s){var o,c,u={};for(c in t)c=="ref"?o=t[c]:u[c]=t[c];var a={type:e,props:u,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--bn,__source:s,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(c in o)u[c]===void 0&&(u[c]=o[c]);return ke.options.vnode&&ke.options.vnode(a),a}St=ke.Fragment,kt=Ye,bt=Ye;const y=kt,L=bt,kn=St,z={top:j(35),right:j(100),bottom:j(35),left:j(65)},Le={tickMinDistance:50,tickThickness:1,tickLength:10},Sn=de(N({},Le),{width:10}),En=N({},Le),xn=()=>{const[e,t]=V(),n=on(null),r=wt(),s=(c,u,a,l,i,h)=>{if(!n.current||!e)return;const f=fe(n.current,z);e.clearRect(0,0,n.current.width,n.current.height),u&&e.drawImage(u,z.left,z.top),e.fillStyle="white",e.strokeStyle="white",e.strokeRect(f.left-.5,f.top-.5,f.width+1,f.height+1),a&&nn({context:e,margin:z,time:a,currentTime:h==null?void 0:h.currentTime,layout:Le}),Jt({context:e,margin:z,decibelRange:l,layout:Sn}),en({context:e,margin:z,layout:En,sampleRate:i==null?void 0:i.sampleRate}),tn({context:e,margin:z,text:c})},o=()=>{var f;if(!n.current||!e)return;const{width:c,height:u}=fn(n.current),{top:a,right:l,bottom:i,left:h}=z;n.current.width=c,n.current.height=u,s(r.state.renderer?"Loading...":"Activate microphone or select an file to analyze..."),(f=r.state.rendererInstance)==null||f.resize(c-h-l,u-a-i)};return q(()=>(o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o))),q(()=>{var c;t((c=n.current)==null?void 0:c.getContext("2d",{alpha:!1}))},[n]),q(()=>{if(!e)return;const c=r.state.rendererInstance;ye(c)?c.on("update",u=>{const a=u.audioContext.sampleRate.toLocaleString(),l=vn(u.bufferSize,{minimumFractionDigits:2,maximumFractionDigits:2});s(`Recording with a sample-rate of ${a} (Buffer: ${l})`,u.canvas,u.time,u.audioAnalyzer,u.audioContext)}):K(c)?c.on("update",u=>{var b;const{length:a,duration:l,numberOfChannels:i}=u.audioBuffer,{name:h,type:f}=u.audioFile,{currentTime:d}=(b=u.audio)!=null?b:{currentTime:0},p=u.audioContext.sampleRate.toLocaleString(),w=a/l*8/1e3,m=`${h} (${f}, ${p} Hz, ${w}kbps, ${i} channels)`+(u.audio?` (playing - ${le(d)} / ${le(l)})`:"");s(m,u.canvas,{start:0,end:u.audioBuffer.duration},u.audioAnalyzer,u.audioContext,u.audio)}):o()},[r.state.rendererInstance]),y("div",{className:gn.canvas,style:"color: red",children:y("canvas",{ref:n})})},Mn="_slider_g0wh8_1";var An={slider:Mn};const Ln=e=>{const t=nt();let n=0,r=0;const s=u=>{var a,l,i,h;window.addEventListener("pointermove",o),window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c),window.addEventListener("pointerleave",c),r=(l=(a=t.current)==null?void 0:a.getBoundingClientRect().left)!=null?l:0,n=(h=(i=t.current)==null?void 0:i.clientWidth)!=null?h:0,o(u)},o=u=>{const a=(u.clientX-r)/n;e.onChange(Math.max(0,Math.min(1,a)))},c=()=>{window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",c),window.removeEventListener("pointercancel",c),window.removeEventListener("pointerleave",c)};return y("div",{ref:t,className:An.slider,onPointerDown:s,style:{"--value":e.value}})},Rn=({accept:e,multiple:t}={})=>{const n=document.createElement("input");return document.body.appendChild(n),n.type="file",n.style.display="none",e&&(n.accept=e),t&&(n.multiple=t),new Promise((r,s)=>{n.onchange=()=>{var c;const o=Array.from((c=n.files)!=null?c:[]);o.length?r(t?o:o[0]):s()},document.body.removeChild(n),n.click()})},$n="_icon_1ytls_1";var Cn={icon:$n};const Tn={mic:L("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[y("path",{fill:"none",d:"M0 0h24v24H0z"}),y("path",{d:"M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"})]}),"mic-off":L("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[y("path",{fill:"none",d:"M0 0h24v24H0z"}),y("path",{d:"M16.425 17.839A8.941 8.941 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11H5.07a7.002 7.002 0 0 0 9.87 5.354l-1.551-1.55A5 5 0 0 1 7 10V8.414L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-4.767-4.768zm-7.392-7.392l2.52 2.52a3.002 3.002 0 0 1-2.52-2.52zm10.342 4.713l-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.95 8.95 0 0 1-1.57 4.16zm-2.91-2.909l-1.548-1.548c.054-.226.083-.46.083-.703V6a3 3 0 0 0-5.818-1.032L7.686 3.471A5 5 0 0 1 17 6v4a4.98 4.98 0 0 1-.534 2.251z"})]}),play:L("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[y("path",{fill:"none",d:"M0 0h24v24H0z"}),y("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.622 8.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"})]}),pause:L("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[y("path",{fill:"none",d:"M0 0h24v24H0z"}),y("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9 9h2v6H9V9zm4 0h2v6h-2V9z"})]}),reset:L("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[y("path",{fill:"none",d:"M0 0h24v24H0z"}),y("path",{d:"M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z"})]}),file:L("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[y("path",{fill:"none",d:"M0 0h24v24H0z"}),y("path",{d:"M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997zM5.83 8H9V4.83L5.83 8zM11 4v5a1 1 0 0 1-1 1H5v10h14V4h-8z"})]}),"file-music":L("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[y("path",{fill:"none",d:"M0 0h24v24H0z"}),y("path",{d:"M16 8v2h-3v4.5a2.5 2.5 0 1 1-2-2.45V8h4V4H5v16h14V8h-3zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"})]}),github:L("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[y("path",{fill:"none",d:"M0 0h24v24H0z"}),y("path",{d:"M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"})]})},O=e=>y("span",{className:Cn.icon,children:Tn[e.icon]}),Bn="_header_1wmin_1",Pn="_gitHubLink_1wmin_20";var Ze={header:Bn,gitHubLink:Pn};const In=()=>{var p,w,m,b;const[e,t]=V(!1),[n,r]=V(!1),[s,o]=V(!1),[c,u]=V(.2),a=wt(),l=()=>{a.changeRenderer(void 0)},i=()=>{Rn({multiple:!1,accept:"audio/*"}).then(v=>{a.changeRenderer({file:v,type:"file"})})},h=()=>{const v=a.state.rendererInstance;ye(v)?v.isRecording()?v.stop():v.start():a.changeRenderer({type:"realtime"})},f=()=>{const v=a.state.rendererInstance;K(v)?v.isPlaying()?v.pause():v.play():a.changeRenderer({type:"realtime"})},d=()=>{K(a.state.rendererInstance)&&a.state.rendererInstance.rewind()};return q(()=>{const v=a.state.rendererInstance;K(v)?(v.on("pause",()=>o(!1)),v.on("beforePlay",()=>v.setVolume(c)),v.on("play",()=>o(!0)),v.on("start",()=>t(!0)),v.on("stop",()=>t(!1)),o(v.isPlaying()),t(v.isRendering())):ye(v)&&(v.on("start",()=>r(!0)),v.on("stop",()=>r(!1)),r(v.isRecording()),t(v.isRecording()))},[(p=a.state.rendererInstance)==null?void 0:p.name]),q(()=>{K(a.state.rendererInstance)&&a.state.rendererInstance.setVolume(c)},[c]),L("div",{className:Ze.header,children:[y("button",{onClick:h,children:y(O,{icon:n?"mic":"mic-off"})}),((w=a.state.renderer)==null?void 0:w.type)==="realtime"&&y("button",{onClick:l,children:y(O,{icon:"reset"})}),y("button",{onClick:i,children:y(O,{icon:((m=a.state.renderer)==null?void 0:m.type)==="file"?"file-music":"file"})}),((b=a.state.renderer)==null?void 0:b.type)==="file"&&!e&&L(kn,{children:[y("button",{onClick:f,children:y(O,{icon:s?"pause":"play"})}),y("button",{onClick:d,children:y(O,{icon:"reset"})}),y(Ln,{value:c,onChange:u})]}),y("a",{href:"https://github.com/Simonwep/spectrum",className:Ze.gitHubLink,children:y(O,{icon:"github"})})]})},zn="_app_16p5u_1";var Dn={app:zn};const Un=()=>L("div",{className:Dn.app,children:[y(In,{}),y(xn,{})]});Ee(y(Un,{}),document.getElementById("app"));jt();

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var se,y,Ne,j,be,te={},Ue=[],st=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function I(e,t){for(var n in t)e[n]=t[n];return e}function Pe(e){var t=e.parentNode;t&&t.removeChild(e)}function ct(e,t,n){var o,s,r,c={};for(r in t)r=="key"?o=t[r]:r=="ref"?s=t[r]:c[r]=t[r];if(arguments.length>2&&(c.children=arguments.length>3?se.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return K(e,c,o,s,null)}function K(e,t,n,o,s){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++Ne};return s==null&&y.vnode!=null&&y.vnode(r),r}function lt(){return{current:null}}function Y(e){return e.children}function J(e,t){this.props=e,this.context=t}function G(e,t){if(t==null)return e.__?G(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?G(e):null}function Fe(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Fe(e)}}function ke(e){(!e.__d&&(e.__d=!0)&&j.push(e)&&!ne.__r++||be!==y.debounceRendering)&&((be=y.debounceRendering)||setTimeout)(ne)}function ne(){for(var e;ne.__r=j.length;)e=j.sort(function(t,n){return t.__v.__b-n.__v.__b}),j=[],e.some(function(t){var n,o,s,r,c,l;t.__d&&(c=(r=(n=t).__v).__e,(l=n.__P)&&(o=[],(s=I({},r)).__v=r.__v+1,me(l,r,s,n.__n,l.ownerSVGElement!==void 0,r.__h!=null?[c]:null,o,c??G(r),r.__h),We(o,r),r.__e!=c&&Fe(r)))})}function Ve(e,t,n,o,s,r,c,l,a,f){var i,d,u,_,h,m,g,b=o&&o.__k||Ue,v=b.length;for(n.__k=[],i=0;i<t.length;i++)if((_=n.__k[i]=(_=t[i])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?K(null,_,null,null,_):Array.isArray(_)?K(Y,{children:_},null,null,null):_.__b>0?K(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)!=null){if(_.__=n,_.__b=n.__b+1,(u=b[i])===null||u&&_.key==u.key&&_.type===u.type)b[i]=void 0;else for(d=0;d<v;d++){if((u=b[d])&&_.key==u.key&&_.type===u.type){b[d]=void 0;break}u=null}me(e,_,u=u||te,s,r,c,l,a,f),h=_.__e,(d=_.ref)&&u.ref!=d&&(g||(g=[]),u.ref&&g.push(u.ref,null,_),g.push(d,_.__c||h,_)),h!=null?(m==null&&(m=h),typeof _.type=="function"&&_.__k===u.__k?_.__d=a=Oe(_,a,e):a=qe(e,_,u,b,h,a),typeof n.type=="function"&&(n.__d=a)):a&&u.__e==a&&a.parentNode!=e&&(a=G(u))}for(n.__e=m,i=v;i--;)b[i]!=null&&Ge(b[i],b[i]);if(g)for(i=0;i<g.length;i++)je(g[i],g[++i],g[++i])}function Oe(e,t,n){for(var o,s=e.__k,r=0;s&&r<s.length;r++)(o=s[r])&&(o.__=e,t=typeof o.type=="function"?Oe(o,t,n):qe(n,o,o,s,o.__e,t));return t}function qe(e,t,n,o,s,r){var c,l,a;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||s!=r||s.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(s),c=null;else{for(l=r,a=0;(l=l.nextSibling)&&a<o.length;a+=1)if(l==s)break e;e.insertBefore(s,r),c=r}return c!==void 0?c:s.nextSibling}function at(e,t,n,o,s){var r;for(r in n)r==="children"||r==="key"||r in t||re(e,r,null,n[r],o);for(r in t)s&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||re(e,r,t[r],n[r],o)}function Se(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||st.test(t)?n:n+"px"}function re(e,t,n,o,s){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Se(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||Se(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o||e.addEventListener(t,r?Re:Me,r):e.removeEventListener(t,r?Re:Me,r);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function Me(e){this.l[e.type+!1](y.event?y.event(e):e)}function Re(e){this.l[e.type+!0](y.event?y.event(e):e)}function me(e,t,n,o,s,r,c,l,a){var f,i,d,u,_,h,m,g,b,v,L,B,Z,A,E,w=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,l=t.__e=n.__e,t.__h=null,r=[l]),(f=y.__b)&&f(t);try{e:if(typeof w=="function"){if(g=t.props,b=(f=w.contextType)&&o[f.__c],v=f?b?b.props.value:f.__:o,n.__c?m=(i=t.__c=n.__c).__=i.__E:("prototype"in w&&w.prototype.render?t.__c=i=new w(g,v):(t.__c=i=new J(g,v),i.constructor=w,i.render=ft),b&&b.sub(i),i.props=g,i.state||(i.state={}),i.context=v,i.__n=o,d=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),w.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=I({},i.__s)),I(i.__s,w.getDerivedStateFromProps(g,i.__s))),u=i.props,_=i.state,d)w.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(w.getDerivedStateFromProps==null&&g!==u&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(g,v),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(g,i.__s,v)===!1||t.__v===n.__v){for(i.props=g,i.state=i.__s,t.__v!==n.__v&&(i.__d=!1),i.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(S){S&&(S.__=t)}),L=0;L<i._sb.length;L++)i.__h.push(i._sb[L]);i._sb=[],i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(g,i.__s,v),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(u,_,h)})}if(i.context=v,i.props=g,i.__v=t,i.__P=e,B=y.__r,Z=0,"prototype"in w&&w.prototype.render){for(i.state=i.__s,i.__d=!1,B&&B(t),f=i.render(i.props,i.state,i.context),A=0;A<i._sb.length;A++)i.__h.push(i._sb[A]);i._sb=[]}else do i.__d=!1,B&&B(t),f=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++Z<25);i.state=i.__s,i.getChildContext!=null&&(o=I(I({},o),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(h=i.getSnapshotBeforeUpdate(u,_)),E=f!=null&&f.type===Y&&f.key==null?f.props.children:f,Ve(e,Array.isArray(E)?E:[E],t,n,o,s,r,c,l,a),i.base=t.__e,t.__h=null,i.__h.length&&c.push(i),m&&(i.__E=i.__=null),i.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=_t(n.__e,t,n,o,s,r,c,a);(f=y.diffed)&&f(t)}catch(S){t.__v=null,(a||r!=null)&&(t.__e=l,t.__h=!!a,r[r.indexOf(l)]=null),y.__e(S,t,n)}}function We(e,t){y.__c&&y.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){y.__e(o,n.__v)}})}function _t(e,t,n,o,s,r,c,l){var a,f,i,d=n.props,u=t.props,_=t.type,h=0;if(_==="svg"&&(s=!0),r!=null){for(;h<r.length;h++)if((a=r[h])&&"setAttribute"in a==!!_&&(_?a.localName===_:a.nodeType===3)){e=a,r[h]=null;break}}if(e==null){if(_===null)return document.createTextNode(u);e=s?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,u.is&&u),r=null,l=!1}if(_===null)d===u||l&&e.data===u||(e.data=u);else{if(r=r&&se.call(e.childNodes),f=(d=n.props||te).dangerouslySetInnerHTML,i=u.dangerouslySetInnerHTML,!l){if(r!=null)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(i||f)&&(i&&(f&&i.__html==f.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(at(e,u,d,s,l),i)t.__k=[];else if(h=t.props.children,Ve(e,Array.isArray(h)?h:[h],t,n,o,s&&_!=="foreignObject",r,c,r?r[0]:n.__k&&G(n,0),l),r!=null)for(h=r.length;h--;)r[h]!=null&&Pe(r[h]);l||("value"in u&&(h=u.value)!==void 0&&(h!==e.value||_==="progress"&&!h||_==="option"&&h!==d.value)&&re(e,"value",h,d.value,!1),"checked"in u&&(h=u.checked)!==void 0&&h!==e.checked&&re(e,"checked",h,d.checked,!1))}return e}function je(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){y.__e(o,n)}}function Ge(e,t,n){var o,s;if(y.unmount&&y.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||je(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){y.__e(r,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&Ge(o[s],t,n||typeof e.type!="function");n||e.__e==null||Pe(e.__e),e.__=e.__e=e.__d=void 0}function ft(e,t,n){return this.constructor(e,n)}function ut(e,t,n){var o,s,r;y.__&&y.__(e,t),s=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],me(t,e=(!o&&n||t).__k=ct(Y,null,[e]),s||te,te,t.ownerSVGElement!==void 0,!o&&n?[n]:s?null:t.firstChild?se.call(t.childNodes):null,r,!o&&n?n:s?s.__e:t.firstChild,o),We(r,e)}se=Ue.slice,y={__e:function(e,t,n,o){for(var s,r,c;t=t.__;)if((s=t.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(e)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,o||{}),c=s.__d),c)return s.__E=s}catch(l){e=l}throw e}},Ne=0,J.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=I({},this.state),typeof e=="function"&&(e=e(I({},n),this.props)),e&&I(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ke(this))},J.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ke(this))},J.prototype.render=Y,j=[],ne.__r=0;const dt="modulepreload",ht=function(e){return"/"+e},Ee={},pt=function(t,n,o){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=ht(r),r in Ee)return;Ee[r]=!0;const c=r.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!o)for(let i=s.length-1;i>=0;i--){const d=s[i];if(d.href===r&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":dt,c||(f.as="script",f.crossOrigin=""),f.href=r,document.head.appendChild(f),c)return new Promise((i,d)=>{f.addEventListener("load",i),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};function mt(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:o,onRegistered:s,onRegisteredSW:r,onRegisterError:c}=e;let l,a;const f=async(d=!0)=>{await a};async function i(){if("serviceWorker"in navigator){const{Workbox:d}=await pt(()=>import("./workbox-window.prod.es5-295a6886.js"),[]);l=new d("./sw.js",{scope:"./",type:"classic"}),l.addEventListener("activated",u=>{!u.isUpdate&&u.isExternal||u.isUpdate?window.location.reload():o==null||o()}),l.register({immediate:t}).then(u=>{r?r("./sw.js",u):s==null||s(u)}).catch(u=>{c==null||c(u)})}}return a=i(),f}const Ye=(e,t,n)=>{let o=-1;for(let r=0;r<e.length;r++){const c=e[r];for(let l=0;l<c.length;l++){const a=l/c.length*(t/2);c[l]>n&&a>o&&(o=a)}}let s=2;for(;s/2<=o;)s*=2;return s},fe=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),gt=(e,t,n)=>{let o,s,r;if(t===0)o=s=r=n;else{const c=n<.5?n*(1+t):n+t-n*t,l=2*n-c;o=fe(l,c,e+1/3),s=fe(l,c,e),r=fe(l,c,e-1/3)}return[Math.round(o*255),Math.round(s*255),Math.round(r*255)]},U=e=>e*window.devicePixelRatio,xe=270,Ae=300,Ze=new Array(256);for(let e=0;e<=255;e++){const t=Ze[255-e]=new Uint8ClampedArray(4),n=e/255*Ae,o=n>xe?.5*((300-n)/(Ae-xe)):.5;t.set(gt(n/360,1,o),0),t[3]=255}const ge=`${U(10)}px monospace`,P=Ze,vt=new Uint8ClampedArray([0,0,0,255]),Xe=14,yt=async(e,t)=>new AudioContext(t).decodeAudioData(await e.arrayBuffer()),Ke=e=>{const t=document.createElement("canvas"),n=t.getContext("2d",e);return[t,n]},Je=()=>{const e=new Map;return{emit(t,...n){var o;(o=e.get(t))==null||o.forEach(s=>s(...n))},on(t,n){e.set(t,[...e.get(t)??[],n])},off(t,n){var o;e.set(t,((o=e.get(t))==null?void 0:o.filter(s=>s!==n))??[])},unbindAll(){e.clear()}}},wt=e=>{let t=-1;const n=()=>{e(),t=requestAnimationFrame(n)};return t=requestAnimationFrame(n),()=>cancelAnimationFrame(t)},q=192e3,Qe="RealtimeSpectrumRenderer",bt=(e,t)=>{const[n,o]=Ke(),{on:s,off:r,emit:c}=Je();let l=!1,a,f,i,d=q;const u={smoothingTimeConstant:0,fftSize:2**12,minDecibels:-120,maxDecibels:-20};let _=-1,h=0;const m={start:0,end:0},g=[],b=()=>{a&&f&&c("update",{canvas:n,time:m,audioContext:a,sampleRate:d,audioAnalyzer:f,bufferSize:h})},v=(A,E)=>{if(n.width=A,n.height=E,!g.length)return;const w=g.slice(-A),S=new ImageData(w.length,E);for(let R=0;R<S.data.length;R+=4){const x=E-Math.floor(R/4/S.width),C=R/4%S.width,$=w[C],z=Math.floor(x*(d/q)),M=$.buffer[z];S.data.set(M?e[M]:t,R)}_=Math.min(w.length-1),o.putImageData(S,0,0),b()},L=async()=>{await B(),await(a==null?void 0:a.close()),f=void 0,a=void 0,l=!1,c("destroy")},B=async()=>{l=!1,i==null||i(),c("stop")};return{on:s,off:r,name:Qe,sampleRate:d,analyzerOptions:u,resize:v,start:async()=>{if(l)return;const A=performance.now();l=!0;const E=await navigator.mediaDevices.getUserMedia({audio:{deviceId:"default"}});await(a==null?void 0:a.close()),a=new AudioContext({sampleRate:q});const w=f=a.createAnalyser();a.createMediaStreamSource(E).connect(f),i=wt(()=>{var H;const{height:R,width:x}=n,C=new Uint8Array(w.frequencyBinCount),$=new ImageData(1,R),z=Math.ceil(performance.now()-A);Object.assign(w,u),w.getByteFrequencyData(C),d=Math.max(Ye([C],q,Xe),g.length?d:0);for(let T=0;T<R;T++){const ae=Math.floor(T*(d/q)),O=C[ae],_e=(R-T-1)*4;$.data.set(O?e[O]:t,_e)}const M=g.length?(((H=g.at(-1))==null?void 0:H.at)??0)/1e3/g.length:0;_===x-1?(o.globalCompositeOperation="copy",o.drawImage(n,-1,0),o.putImageData($,_,0),o.globalCompositeOperation="source-over",m.end=M*g.length,m.start=M*(g.length-x)):(o.putImageData($,++_,0),m.end=M*x),g.push({buffer:C,at:z}),h+=C.length,b()}),c("start")},stop:B,destroy:L,isRecording:()=>l}},de=e=>typeof e=="object"&&(e==null?void 0:e.name)===Qe,X=192e3,et="AudioFileSpectrumRenderer",kt=e=>{let t=2;for(;t/2<=e;)t*=2;return t},St=e=>{const[t,n]=Ke(),{on:o,off:s,emit:r}=Je();let c=!1,l=!1,a=X,f,i,d,u,_,h,m;const g=()=>{u&&f&&i&&d&&r("update",{canvas:t,audioFile:u,audioContext:f,audioAnalyzer:i,audioBuffer:d,audio:m,sampleRate:a})},b=async(w=u)=>{if(c||!w)return;_&&URL.revokeObjectURL(_),m==null||m.pause(),r("pause"),r("start"),m=void 0,_=void 0,l=!1,c=!0,u=w,d=await yt(w,{sampleRate:X});const{width:S,height:R}=t,x=new Array(S);f=new OfflineAudioContext(d),i=f.createAnalyser(),i.connect(f.destination),i.fftSize=kt(R),i.smoothingTimeConstant=0,i.minDecibels=-120,i.maxDecibels=-20;const C=d.duration/x.length,$=i.frequencyBinCount;for(let M=0;M<x.length;M++){const H=M*C;f.suspend(H).then(()=>{f==null||f.resume(),i==null||i.getByteFrequencyData(x[M]=new Uint8Array($))})}const z=f.createBufferSource();z.buffer=d,z.connect(i),z.start(),await f.startRendering(),a=Ye(x,X,Xe),h=new ImageData(S,R);for(let M=0;M<S;M++){const H=x[M];for(let T=0;T<R;T++){const ae=Math.floor(T*(a/X)),O=H[ae];if(O){const _e=(M+(R-T-1)*S)*4,it=e[O];h.data.set(it,_e)}}}n.putImageData(h,0,0),c=!1,r("stop"),g()},v=async()=>{c||!u||!h||l||(_=_??URL.createObjectURL(u),m=m??new Audio(_),r("beforePlay"),m.addEventListener("timeupdate",()=>{if(!h||!m)return;n.putImageData(h,0,0);const w=Math.floor(m.currentTime/m.duration*t.width);w&&(n.fillStyle="white",n.fillRect(w,0,1,t.height)),g()}),await m.play(),l=!0,r("play"))},L=()=>{m==null||m.pause(),l=!1,_&&URL.revokeObjectURL(_),r("pause")};return{on:o,off:s,name:et,sampleRate:a,resize:(w,S)=>{t.width=w,t.height=S,b()},render:b,destroy:()=>{L(),c=!1,r("destroy")},play:v,pause:L,rewind:()=>{m&&(m.currentTime=0)},setVolume:w=>{m&&(m.volume=w)},isPlaying:()=>l,isRendering:()=>c}},W=e=>typeof e=="object"&&(e==null?void 0:e.name)===et,ce=({width:e,height:t},{top:n,left:o,bottom:s,right:r})=>new DOMRect(o,n,e-o-r,t-n-s),ve=(e,t)=>{let n=2;for(;;){const o=n*2+n%2;if(t/o<e)break;n=o}return[n,t/n]},Mt={minDecibels:-120,maxDecibels:-20},Rt=({context:e,margin:t,layout:n,decibelRange:o=Mt})=>{const s=ce(e.canvas,t),r=s.right+10,c=s.top-1,l=r+n.width,a=s.bottom+1,f=e.createLinearGradient(r,c,l,a);for(let _=0;_<P.length;_++){const[h,m,g]=P[P.length-_-1];f.addColorStop(_/P.length,`rgb(${h}, ${m}, ${g})`)}e.fillStyle=f,e.fillRect(r,c,n.width,s.height),e.textAlign="left",e.textBaseline="middle",e.font=ge;const[i,d]=ve(n.tickMinDistance,s.height),u=o.minDecibels-o.maxDecibels;for(let _=0;_<=i;_++){const h=c+_*d,m=`${Math.floor(_/i*u+o.maxDecibels)} dB`;e.fillStyle=f,e.fillRect(l,h,n.tickLength,n.tickThickness),e.fillStyle="white",e.fillText(m,l+n.tickLength+2,h+1)}},Et=({context:e,margin:t,layout:n,sampleRate:o=96e3})=>{const s=ce(e.canvas,t),r=s.height+1,c=o/2/1e3,[l,a]=ve(n.tickMinDistance,r);e.textAlign="right",e.textBaseline="middle";for(let f=0;f<=l;f++){const i=s.top+f*a-1,d=`${Math.floor((l-f)/l*c)} kHz`;e.fillRect(s.left-n.tickLength,i,n.tickLength,n.tickThickness),e.fillText(d,s.left-n.tickLength-2,i+1)}},xt=({context:e,margin:t,text:n})=>{e.fillStyle="white",e.textAlign="left",e.textBaseline="bottom",e.font=ge,e.fillText(n,t.left,t.top-U(8))},oe=e=>{const t=Math.floor(e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},At=({context:e,time:t,layout:n,margin:o,currentTime:s})=>{const r=ce(e.canvas,o),c=t.end-t.start,l=r.width+1,[a,f]=ve(n.tickMinDistance*2,l);e.strokeStyle="white",e.fillStyle="white",e.textAlign="center",e.textBaseline="hanging",e.font=ge;const i=[];for(let d=0;d<=a;d++){const u=r.left+d*f-1,_=oe(t.start+d/a*c);e.fillRect(u,r.bottom,n.tickThickness,n.tickLength),e.fillText(_,u,r.bottom+n.tickLength+2),i.push([u,u+e.measureText(_).width])}if(s!==void 0){const d=Math.floor(r.left+s/c*l),u=r.bottom+1,_=n.tickLength/2;e.fillStyle="white",e.fillRect(d,u,n.tickThickness,_);const h=oe(s),m=e.measureText(h);i.some(g=>d+m.width>g[0]&&d<g[1])||e.fillText(h,d,r.bottom+_+2)}};var le,k,ue,Le,ie=0,tt=[],Q=[],Be=y.__b,Ce=y.__r,Te=y.diffed,De=y.__c,Ie=y.unmount;function ye(e,t){y.__h&&y.__h(k,e,ie||t),ie=0;var n=k.__H||(k.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Q}),n.__[e]}function F(e){return ie=1,Lt(rt,e)}function Lt(e,t,n){var o=ye(le++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):rt(void 0,t),function(r){var c=o.__N?o.__N[0]:o.__[0],l=o.t(c,r);c!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=k,!k.u)){k.u=!0;var s=k.shouldComponentUpdate;k.shouldComponentUpdate=function(r,c,l){if(!o.__c.__H)return!0;var a=o.__c.__H.__.filter(function(i){return i.__c});if(a.every(function(i){return!i.__N}))return!s||s.call(this,r,c,l);var f=!1;return a.forEach(function(i){if(i.__N){var d=i.__[0];i.__=i.__N,i.__N=void 0,d!==i.__[0]&&(f=!0)}}),!(!f&&o.__c.props===r)&&(!s||s.call(this,r,c,l))}}return o.__N||o.__}function V(e,t){var n=ye(le++,3);!y.__s&&nt(n.__H,t)&&(n.__=e,n.i=t,k.__H.__h.push(n))}function Bt(e){return ie=5,Ct(function(){return{current:e}},[])}function Ct(e,t){var n=ye(le++,7);return nt(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Tt(){for(var e;e=tt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ee),e.__H.__h.forEach(he),e.__H.__h=[]}catch(t){e.__H.__h=[],y.__e(t,e.__v)}}y.__b=function(e){k=null,Be&&Be(e)},y.__r=function(e){Ce&&Ce(e),le=0;var t=(k=e.__c).__H;t&&(ue===k?(t.__h=[],k.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Q,n.__N=n.i=void 0})):(t.__h.forEach(ee),t.__h.forEach(he),t.__h=[])),ue=k},y.diffed=function(e){Te&&Te(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(tt.push(t)!==1&&Le===y.requestAnimationFrame||((Le=y.requestAnimationFrame)||Dt)(Tt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Q&&(n.__=n.__V),n.i=void 0,n.__V=Q})),ue=k=null},y.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ee),n.__h=n.__h.filter(function(o){return!o.__||he(o)})}catch(o){t.some(function(s){s.__h&&(s.__h=[])}),t=[],y.__e(o,n.__v)}}),De&&De(e,t)},y.unmount=function(e){Ie&&Ie(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{ee(o)}catch(s){t=s}}),n.__H=void 0,t&&y.__e(t,n.__v))};var $e=typeof requestAnimationFrame=="function";function Dt(e){var t,n=function(){clearTimeout(o),$e&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);$e&&(t=requestAnimationFrame(n))}function ee(e){var t=k,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),k=t}function he(e){var t=k;e.__c=e.__(),k=t}function nt(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function rt(e,t){return typeof t=="function"?t(e):t}const It={renderer:void 0,rendererInstance:void 0},pe=new Set,$t=e=>{pe.forEach(t=>t(e))},zt=e=>{switch(e==null?void 0:e.type){case"file":{const t=St(P);return requestAnimationFrame(()=>void t.render(e.file)),t}case"realtime":{const t=bt(P,vt);return t.start(),t}default:return}},ot=()=>{const[e,t]=F(It),n=async o=>{var r;await((r=e.rendererInstance)==null?void 0:r.destroy());const s=zt(o);$t({...e,renderer:o,rendererInstance:s})};return V(()=>(pe.add(t),()=>pe.delete(t))),{state:e,changeRenderer:n}},Ht=(e,t=devicePixelRatio)=>{e.width=0,e.height=0;const n=e.getBoundingClientRect(),o=Math.round(t*n.right)-Math.round(t*n.left),s=Math.round(t*n.bottom)-Math.round(t*n.top);return{width:o,height:s}},Nt=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Ut=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],Pt=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],Ft=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],ze=(e,t,n)=>{let o=e;return typeof t=="string"||Array.isArray(t)?o=e.toLocaleString(t,n):(t===!0||n!==void 0)&&(o=e.toLocaleString(void 0,n)),o};function Vt(e,t){if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);t={bits:!1,binary:!1,...t};const n=t.bits?t.binary?Ft:Pt:t.binary?Ut:Nt;if(t.signed&&e===0)return` 0 ${n[0]}`;const o=e<0,s=o?"-":t.signed?"+":"";o&&(e=-e);let r;if(t.minimumFractionDigits!==void 0&&(r={minimumFractionDigits:t.minimumFractionDigits}),t.maximumFractionDigits!==void 0&&(r={maximumFractionDigits:t.maximumFractionDigits,...r}),e<1){const f=ze(e,t.locale,r);return s+f+" "+n[0]}const c=Math.min(Math.floor(t.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),n.length-1);e/=(t.binary?1024:1e3)**c,r||(e=e.toPrecision(3));const l=ze(Number(e),t.locale,r),a=n[c];return s+l+" "+a}const Ot="a",qt={canvas:Ot};var Wt=0;function p(e,t,n,o,s){var r,c,l={};for(c in t)c=="ref"?r=t[c]:l[c]=t[c];var a={type:e,props:l,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Wt,__source:s,__self:o};if(typeof e=="function"&&(r=e.defaultProps))for(c in r)l[c]===void 0&&(l[c]=r[c]);return y.vnode&&y.vnode(a),a}const D={top:U(35),right:U(100),bottom:U(35),left:U(65)},we={tickMinDistance:50,tickThickness:1,tickLength:10},jt={...we,width:10},Gt={...we},Yt=()=>{const[e,t]=F(),n=Bt(null),o=ot(),s=(c,l,a,f,i,d,u)=>{if(!n.current||!e)return;const _=ce(n.current,D);e.clearRect(0,0,n.current.width,n.current.height),l&&e.drawImage(l,D.left,D.top),e.fillStyle="white",e.strokeStyle="white",e.strokeRect(_.left-.5,_.top-.5,_.width+1,_.height+1),a&&At({context:e,margin:D,time:a,currentTime:d==null?void 0:d.currentTime,layout:we}),Rt({context:e,margin:D,decibelRange:f,layout:jt}),Et({context:e,margin:D,layout:Gt,sampleRate:u}),xt({context:e,margin:D,text:c})},r=()=>{var u;if(!n.current||!e)return;const{width:c,height:l}=Ht(n.current),{top:a,right:f,bottom:i,left:d}=D;n.current.width=c,n.current.height=l,s(o.state.renderer?"Loading...":"Activate microphone or select an file to analyze..."),(u=o.state.rendererInstance)==null||u.resize(c-d-f,l-a-i)};return V(()=>(r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r))),V(()=>{var c;t((c=n.current)==null?void 0:c.getContext("2d",{alpha:!1}))},[n]),V(()=>{if(!e)return;const c=o.state.rendererInstance;if(de(c))return c.on("update",l=>{const a=Vt(l.bufferSize,{minimumFractionDigits:2,maximumFractionDigits:2});s(`Recording with a sample-rate of ~${l.sampleRate.toLocaleString()} (Buffer: ${a})`,l.canvas,l.time,l.audioAnalyzer,l.audioContext,void 0,l.sampleRate)});if(W(c))return c.on("update",l=>{const{length:a,duration:f,numberOfChannels:i}=l.audioBuffer,{name:d,type:u}=l.audioFile,{currentTime:_}=l.audio??{currentTime:0},h=a/f*8/1e3,m=`${d} (${u}, ~${l.sampleRate.toLocaleString()} Hz, ${h}kbps, ${i} channels)`+(l.audio?` (playing - ${oe(_)} / ${oe(f)})`:"");s(m,l.canvas,{start:0,end:l.audioBuffer.duration},l.audioAnalyzer,l.audioContext,l.audio,l.sampleRate)});r()},[o.state.rendererInstance]),p("div",{className:qt.canvas,style:"color: red",children:p("canvas",{ref:n})})},Zt="e",Xt={slider:Zt},Kt=e=>{const t=lt();let n=0,o=0;const s=l=>{var a,f;window.addEventListener("pointermove",r),window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c),window.addEventListener("pointerleave",c),o=((a=t.current)==null?void 0:a.getBoundingClientRect().left)??0,n=((f=t.current)==null?void 0:f.clientWidth)??0,r(l)},r=l=>{const a=(l.clientX-o)/n;e.onChange(Math.max(0,Math.min(1,a)))},c=()=>{window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",c),window.removeEventListener("pointercancel",c),window.removeEventListener("pointerleave",c)};return p("div",{ref:t,className:Xt.slider,onPointerDown:s,style:{"--value":e.value}})},Jt=({accept:e,multiple:t}={})=>{const n=document.createElement("input");return document.body.appendChild(n),n.type="file",n.style.display="none",e&&(n.accept=e),t&&(n.multiple=t),new Promise((o,s)=>{n.onchange=()=>{const r=Array.from(n.files??[]);r.length?o(t?r:r[0]):s()},document.body.removeChild(n),n.click()})},Qt="d",en={icon:Qt},tn={mic:p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"})]}),"mic-off":p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M16.425 17.839A8.941 8.941 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11H5.07a7.002 7.002 0 0 0 9.87 5.354l-1.551-1.55A5 5 0 0 1 7 10V8.414L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-4.767-4.768zm-7.392-7.392l2.52 2.52a3.002 3.002 0 0 1-2.52-2.52zm10.342 4.713l-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.95 8.95 0 0 1-1.57 4.16zm-2.91-2.909l-1.548-1.548c.054-.226.083-.46.083-.703V6a3 3 0 0 0-5.818-1.032L7.686 3.471A5 5 0 0 1 17 6v4a4.98 4.98 0 0 1-.534 2.251z"})]}),play:p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.622 8.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"})]}),pause:p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9 9h2v6H9V9zm4 0h2v6h-2V9z"})]}),reset:p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z"})]}),file:p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997zM5.83 8H9V4.83L5.83 8zM11 4v5a1 1 0 0 1-1 1H5v10h14V4h-8z"})]}),"file-music":p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M16 8v2h-3v4.5a2.5 2.5 0 1 1-2-2.45V8h4V4H5v16h14V8h-3zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"})]}),github:p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"})]})},N=e=>p("span",{className:en.icon,children:tn[e.icon]}),nn="b",rn="c",He={header:nn,gitHubLink:rn},on=()=>{var h,m,g,b;const[e,t]=F(!1),[n,o]=F(!1),[s,r]=F(!1),[c,l]=F(.2),a=ot(),f=()=>{a.changeRenderer(void 0)},i=()=>{Jt({multiple:!1,accept:"audio/*"}).then(v=>{a.changeRenderer({file:v,type:"file"})})},d=()=>{const v=a.state.rendererInstance;de(v)?v.isRecording()?v.stop():v.start():a.changeRenderer({type:"realtime"})},u=()=>{const v=a.state.rendererInstance;W(v)?v.isPlaying()?v.pause():v.play():a.changeRenderer({type:"realtime"})},_=()=>{W(a.state.rendererInstance)&&a.state.rendererInstance.rewind()};return V(()=>{const v=a.state.rendererInstance;W(v)?(v.on("pause",()=>r(!1)),v.on("beforePlay",()=>v.setVolume(c)),v.on("play",()=>r(!0)),v.on("start",()=>t(!0)),v.on("stop",()=>t(!1)),r(v.isPlaying()),t(v.isRendering())):de(v)&&(v.on("start",()=>o(!0)),v.on("stop",()=>o(!1)),o(v.isRecording()),t(v.isRecording()))},[(h=a.state.rendererInstance)==null?void 0:h.name]),V(()=>{W(a.state.rendererInstance)&&a.state.rendererInstance.setVolume(c)},[c]),p("div",{className:He.header,children:[p("button",{onClick:d,children:p(N,{icon:n?"mic":"mic-off"})}),((m=a.state.renderer)==null?void 0:m.type)==="realtime"&&p("button",{onClick:f,children:p(N,{icon:"reset"})}),p("button",{onClick:i,children:p(N,{icon:((g=a.state.renderer)==null?void 0:g.type)==="file"?"file-music":"file"})}),((b=a.state.renderer)==null?void 0:b.type)==="file"&&!e&&p(Y,{children:[p("button",{onClick:u,children:p(N,{icon:s?"pause":"play"})}),p("button",{onClick:_,children:p(N,{icon:"reset"})}),p(Kt,{value:c,onChange:l})]}),p("a",{href:"https://github.com/Simonwep/spectrum",className:He.gitHubLink,children:p(N,{icon:"github"})})]})},sn="_",cn={app:sn},ln=()=>p("div",{className:cn.app,children:[p(on,{}),p(Yt,{})]});ut(p(ln,{}),document.getElementById("app"));mt();

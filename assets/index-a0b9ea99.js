(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var ie,g,Ie,G,ye,ee={},He=[],tt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function D(e,t){for(var n in t)e[n]=t[n];return e}function Ne(e){var t=e.parentNode;t&&t.removeChild(e)}function nt(e,t,n){var o,s,r,c={};for(r in t)r=="key"?o=t[r]:r=="ref"?s=t[r]:c[r]=t[r];if(arguments.length>2&&(c.children=arguments.length>3?ie.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return X(e,c,o,s,null)}function X(e,t,n,o,s){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++Ie};return s==null&&g.vnode!=null&&g.vnode(r),r}function rt(){return{current:null}}function Y(e){return e.children}function K(e,t){this.props=e,this.context=t}function j(e,t){if(t==null)return e.__?j(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?j(e):null}function Ue(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ue(e)}}function we(e){(!e.__d&&(e.__d=!0)&&G.push(e)&&!te.__r++||ye!==g.debounceRendering)&&((ye=g.debounceRendering)||setTimeout)(te)}function te(){for(var e;te.__r=G.length;)e=G.sort(function(t,n){return t.__v.__b-n.__v.__b}),G=[],e.some(function(t){var n,o,s,r,c,a;t.__d&&(c=(r=(n=t).__v).__e,(a=n.__P)&&(o=[],(s=D({},r)).__v=r.__v+1,he(a,r,s,n.__n,a.ownerSVGElement!==void 0,r.__h!=null?[c]:null,o,c??j(r),r.__h),Oe(o,r),r.__e!=c&&Ue(r)))})}function Fe(e,t,n,o,s,r,c,a,l,_){var i,h,u,f,d,w,v,k=o&&o.__k||He,m=k.length;for(n.__k=[],i=0;i<t.length;i++)if((f=n.__k[i]=(f=t[i])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?X(null,f,null,null,f):Array.isArray(f)?X(Y,{children:f},null,null,null):f.__b>0?X(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(u=k[i])===null||u&&f.key==u.key&&f.type===u.type)k[i]=void 0;else for(h=0;h<m;h++){if((u=k[h])&&f.key==u.key&&f.type===u.type){k[h]=void 0;break}u=null}he(e,f,u=u||ee,s,r,c,a,l,_),d=f.__e,(h=f.ref)&&u.ref!=h&&(v||(v=[]),u.ref&&v.push(u.ref,null,f),v.push(h,f.__c||d,f)),d!=null?(w==null&&(w=d),typeof f.type=="function"&&f.__k===u.__k?f.__d=l=Pe(f,l,e):l=Ve(e,f,u,k,d,l),typeof n.type=="function"&&(n.__d=l)):l&&u.__e==l&&l.parentNode!=e&&(l=j(u))}for(n.__e=w,i=m;i--;)k[i]!=null&&qe(k[i],k[i]);if(v)for(i=0;i<v.length;i++)We(v[i],v[++i],v[++i])}function Pe(e,t,n){for(var o,s=e.__k,r=0;s&&r<s.length;r++)(o=s[r])&&(o.__=e,t=typeof o.type=="function"?Pe(o,t,n):Ve(n,o,o,s,o.__e,t));return t}function Ve(e,t,n,o,s,r){var c,a,l;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||s!=r||s.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(s),c=null;else{for(a=r,l=0;(a=a.nextSibling)&&l<o.length;l+=1)if(a==s)break e;e.insertBefore(s,r),c=r}return c!==void 0?c:s.nextSibling}function ot(e,t,n,o,s){var r;for(r in n)r==="children"||r==="key"||r in t||ne(e,r,null,n[r],o);for(r in t)s&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||ne(e,r,t[r],n[r],o)}function be(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||tt.test(t)?n:n+"px"}function ne(e,t,n,o,s){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||be(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||be(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o||e.addEventListener(t,r?Se:ke,r):e.removeEventListener(t,r?Se:ke,r);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function ke(e){this.l[e.type+!1](g.event?g.event(e):e)}function Se(e){this.l[e.type+!0](g.event?g.event(e):e)}function he(e,t,n,o,s,r,c,a,l){var _,i,h,u,f,d,w,v,k,m,x,I,C,A,M,y=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,a=t.__e=n.__e,t.__h=null,r=[a]),(_=g.__b)&&_(t);try{e:if(typeof y=="function"){if(v=t.props,k=(_=y.contextType)&&o[_.__c],m=_?k?k.props.value:_.__:o,n.__c?w=(i=t.__c=n.__c).__=i.__E:("prototype"in y&&y.prototype.render?t.__c=i=new y(v,m):(t.__c=i=new K(v,m),i.constructor=y,i.render=st),k&&k.sub(i),i.props=v,i.state||(i.state={}),i.context=m,i.__n=o,h=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),y.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=D({},i.__s)),D(i.__s,y.getDerivedStateFromProps(v,i.__s))),u=i.props,f=i.state,h)y.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(y.getDerivedStateFromProps==null&&v!==u&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(v,m),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(v,i.__s,m)===!1||t.__v===n.__v){for(i.props=v,i.state=i.__s,t.__v!==n.__v&&(i.__d=!1),i.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(b){b&&(b.__=t)}),x=0;x<i._sb.length;x++)i.__h.push(i._sb[x]);i._sb=[],i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(v,i.__s,m),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(u,f,d)})}if(i.context=m,i.props=v,i.__v=t,i.__P=e,I=g.__r,C=0,"prototype"in y&&y.prototype.render){for(i.state=i.__s,i.__d=!1,I&&I(t),_=i.render(i.props,i.state,i.context),A=0;A<i._sb.length;A++)i.__h.push(i._sb[A]);i._sb=[]}else do i.__d=!1,I&&I(t),_=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++C<25);i.state=i.__s,i.getChildContext!=null&&(o=D(D({},o),i.getChildContext())),h||i.getSnapshotBeforeUpdate==null||(d=i.getSnapshotBeforeUpdate(u,f)),M=_!=null&&_.type===Y&&_.key==null?_.props.children:_,Fe(e,Array.isArray(M)?M:[M],t,n,o,s,r,c,a,l),i.base=t.__e,t.__h=null,i.__h.length&&c.push(i),w&&(i.__E=i.__=null),i.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=it(n.__e,t,n,o,s,r,c,l);(_=g.diffed)&&_(t)}catch(b){t.__v=null,(l||r!=null)&&(t.__e=a,t.__h=!!l,r[r.indexOf(a)]=null),g.__e(b,t,n)}}function Oe(e,t){g.__c&&g.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){g.__e(o,n.__v)}})}function it(e,t,n,o,s,r,c,a){var l,_,i,h=n.props,u=t.props,f=t.type,d=0;if(f==="svg"&&(s=!0),r!=null){for(;d<r.length;d++)if((l=r[d])&&"setAttribute"in l==!!f&&(f?l.localName===f:l.nodeType===3)){e=l,r[d]=null;break}}if(e==null){if(f===null)return document.createTextNode(u);e=s?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,u.is&&u),r=null,a=!1}if(f===null)h===u||a&&e.data===u||(e.data=u);else{if(r=r&&ie.call(e.childNodes),_=(h=n.props||ee).dangerouslySetInnerHTML,i=u.dangerouslySetInnerHTML,!a){if(r!=null)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(i||_)&&(i&&(_&&i.__html==_.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(ot(e,u,h,s,a),i)t.__k=[];else if(d=t.props.children,Fe(e,Array.isArray(d)?d:[d],t,n,o,s&&f!=="foreignObject",r,c,r?r[0]:n.__k&&j(n,0),a),r!=null)for(d=r.length;d--;)r[d]!=null&&Ne(r[d]);a||("value"in u&&(d=u.value)!==void 0&&(d!==e.value||f==="progress"&&!d||f==="option"&&d!==h.value)&&ne(e,"value",d,h.value,!1),"checked"in u&&(d=u.checked)!==void 0&&d!==e.checked&&ne(e,"checked",d,h.checked,!1))}return e}function We(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){g.__e(o,n)}}function qe(e,t,n){var o,s;if(g.unmount&&g.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||We(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){g.__e(r,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&qe(o[s],t,n||typeof e.type!="function");n||e.__e==null||Ne(e.__e),e.__=e.__e=e.__d=void 0}function st(e,t,n){return this.constructor(e,n)}function ct(e,t,n){var o,s,r;g.__&&g.__(e,t),s=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],he(t,e=(!o&&n||t).__k=nt(Y,null,[e]),s||ee,ee,t.ownerSVGElement!==void 0,!o&&n?[n]:s?null:t.firstChild?ie.call(t.childNodes):null,r,!o&&n?n:s?s.__e:t.firstChild,o),Oe(r,e)}ie=He.slice,g={__e:function(e,t,n,o){for(var s,r,c;t=t.__;)if((s=t.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(e)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,o||{}),c=s.__d),c)return s.__E=s}catch(a){e=a}throw e}},Ie=0,K.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=D({},this.state),typeof e=="function"&&(e=e(D({},n),this.props)),e&&D(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),we(this))},K.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),we(this))},K.prototype.render=Y,G=[],te.__r=0;const at="modulepreload",lt=function(e){return"/"+e},Re={},_t=function(t,n,o){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=lt(r),r in Re)return;Re[r]=!0;const c=r.endsWith(".css"),a=c?'[rel="stylesheet"]':"";if(!!o)for(let i=s.length-1;i>=0;i--){const h=s[i];if(h.href===r&&(!c||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const _=document.createElement("link");if(_.rel=c?"stylesheet":at,c||(_.as="script",_.crossOrigin=""),_.href=r,document.head.appendChild(_),c)return new Promise((i,h)=>{_.addEventListener("load",i),_.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};function ft(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:o,onRegistered:s,onRegisteredSW:r,onRegisterError:c}=e;let a,l;const _=async(h=!0)=>{await l};async function i(){if("serviceWorker"in navigator){const{Workbox:h}=await _t(()=>import("./workbox-window.prod.es5-295a6886.js"),[]);a=new h("./sw.js",{scope:"./",type:"classic"}),a.addEventListener("activated",u=>{!u.isUpdate&&u.isExternal||u.isUpdate?window.location.reload():o==null||o()}),a.register({immediate:t}).then(u=>{r?r("./sw.js",u):s==null||s(u)}).catch(u=>{c==null||c(u)})}}return l=i(),_}const ut=async(e,t)=>new AudioContext(t).decodeAudioData(await e.arrayBuffer()),Ge=e=>{const t=document.createElement("canvas"),n=t.getContext("2d",e);return[t,n]},je=()=>{const e=new Map;return{emit(t,...n){var o;(o=e.get(t))==null||o.forEach(s=>s(...n))},on(t,n){e.set(t,[...e.get(t)??[],n])},off(t,n){var o;e.set(t,((o=e.get(t))==null?void 0:o.filter(s=>s!==n))??[])},unbindAll(){e.clear()}}},dt=e=>{let t=-1;const n=()=>{e(),t=requestAnimationFrame(n)};return t=requestAnimationFrame(n),()=>cancelAnimationFrame(t)},ht=96e3,Ye="RealtimeSpectrumRenderer",pt=(e,t)=>{const[n,o]=Ge(),{on:s,off:r,emit:c}=je();let a=!1,l,_,i;const h={smoothingTimeConstant:0,fftSize:2**12,minDecibels:-120,maxDecibels:-20};let u=-1,f=0;const d={start:0,end:0},w=[],v=()=>{l&&_&&c("update",{canvas:n,time:d,audioContext:l,audioAnalyzer:_,bufferSize:f})},k=(C,A)=>{if(n.width=C,n.height=A,!w.length)return;const M=w.slice(-C),y=new ImageData(M.length,A);for(let b=0;b<y.data.length;b+=4){const B=A-Math.floor(b/4/y.width),E=b/4%y.width,L=M[E],O=L.buffer.length/y.height,$=L.buffer[Math.floor(B*O)];if($){const R=e[$];y.data.set(R,b)}else y.data.set(t,b)}u=Math.min(M.length-1),o.putImageData(y,0,0),v()},m=async()=>{await x(),await(l==null?void 0:l.close()),_=void 0,l=void 0,a=!1,c("destroy")},x=async()=>{a=!1,i==null||i(),c("stop")};return{on:s,off:r,name:Ye,analyzerOptions:h,resize:k,start:async()=>{if(a)return;const C=performance.now();a=!0;const A=await navigator.mediaDevices.getUserMedia({audio:{deviceId:"default"}});await(l==null?void 0:l.close()),l=new AudioContext({sampleRate:ht});const M=_=l.createAnalyser();l.createMediaStreamSource(A).connect(_),i=dt(()=>{var H;const{height:b,width:B}=n,E=new Uint8Array(M.frequencyBinCount),L=new ImageData(1,b),O=E.length/b,$=Math.ceil(performance.now()-C);Object.assign(M,h),M.getByteFrequencyData(E);for(let T=0;T<b;T++){const W=E[Math.floor(T*O)],Z=(b-T-1)*4;if(W){const ae=e[W];L.data.set(ae,Z)}else L.data.set(t,Z)}const R=w.length?(((H=w.at(-1))==null?void 0:H.at)??0)/1e3/w.length:0;u===B-1?(o.globalCompositeOperation="copy",o.drawImage(n,-1,0),o.putImageData(L,u,0),o.globalCompositeOperation="source-over",d.end=R*w.length,d.start=R*(w.length-B)):(o.putImageData(L,++u,0),d.end=R*B),w.push({buffer:E,at:$}),f+=E.length,v()}),c("start")},stop:x,destroy:m,isRecording:()=>a}},fe=e=>typeof e=="object"&&(e==null?void 0:e.name)===Ye,mt=96e3,Ze="AudioFileSpectrumRenderer",gt=e=>{const[t,n]=Ge(),{on:o,off:s,emit:r}=je();let c=!1,a=!1,l,_,i,h,u,f,d;const w=y=>{let b=2;for(;b/2<y;)b*=2;return b},v=()=>{h&&l&&_&&i&&r("update",{canvas:t,audioFile:h,audioContext:l,audioAnalyzer:_,audioBuffer:i,audio:d})},k=async(y=h)=>{if(c||!y)return;u&&URL.revokeObjectURL(u),d==null||d.pause(),r("pause"),r("start"),d=void 0,u=void 0,a=!1,c=!0,h=y,i=await ut(y,{sampleRate:mt});const{width:b,height:B}=t,E=new Array(b);l=new OfflineAudioContext(i),_=l.createAnalyser(),_.connect(l.destination),_.fftSize=w(B),_.smoothingTimeConstant=0,_.minDecibels=-120,_.maxDecibels=-20;const L=i.duration/E.length,O=_.frequencyBinCount;for(let R=0;R<E.length;R++){const H=R*L;l.suspend(H).then(()=>{l==null||l.resume(),_==null||_.getByteFrequencyData(E[R]=new Uint8Array(O))})}const $=l.createBufferSource();$.buffer=i,$.connect(_),$.start(),await l.startRendering(),f=new ImageData(b,B);for(let R=0;R<b;R++){const H=E[R];for(let T=0;T<B;T++){const W=H[T];if(W){const Z=(R+(B-T-1)*b)*4,ae=e[W];f.data.set(ae,Z)}}}n.putImageData(f,0,0),c=!1,r("stop"),v()},m=async()=>{c||!h||!f||a||(u=u??URL.createObjectURL(h),d=d??new Audio(u),r("beforePlay"),d.addEventListener("timeupdate",()=>{if(!f||!d)return;n.putImageData(f,0,0);const y=Math.floor(d.currentTime/d.duration*t.width);y&&(n.fillStyle="white",n.fillRect(y,0,1,t.height)),v()}),await d.play(),a=!0,r("play"))},x=()=>{d==null||d.pause(),a=!1,u&&URL.revokeObjectURL(u),r("pause")};return{on:o,off:s,name:Ze,resize:(y,b)=>{t.width=y,t.height=b,k()},render:k,destroy:()=>{x(),c=!1,r("destroy")},play:m,pause:x,rewind:()=>{d&&(d.currentTime=0)},setVolume:y=>{d&&(d.volume=y)},isPlaying:()=>a,isRendering:()=>c}},q=e=>typeof e=="object"&&(e==null?void 0:e.name)===Ze,le=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),vt=(e,t,n)=>{let o,s,r;if(t===0)o=s=r=n;else{const c=n<.5?n*(1+t):n+t-n*t,a=2*n-c;o=le(a,c,e+1/3),s=le(a,c,e),r=le(a,c,e-1/3)}return[Math.round(o*255),Math.round(s*255),Math.round(r*255)]},U=e=>e*window.devicePixelRatio,Me=270,Ee=300,Xe=new Array(256);for(let e=0;e<=255;e++){const t=Xe[255-e]=new Uint8ClampedArray(4),n=e/255*Ee,o=n>Me?.5*((300-n)/(Ee-Me)):.5;t.set(vt(n/360,1,o),0),t[3]=255}const pe=`${U(10)}px monospace`,F=Xe,yt=new Uint8ClampedArray([0,0,0,255]),se=({width:e,height:t},{top:n,left:o,bottom:s,right:r})=>new DOMRect(o,n,e-o-r,t-n-s),me=(e,t)=>{let n=2;for(;;){const o=n*2+n%2;if(t/o<e)break;n=o}return[n,t/n]},wt={minDecibels:-120,maxDecibels:-20},bt=({context:e,margin:t,layout:n,decibelRange:o=wt})=>{const s=se(e.canvas,t),r=s.right+10,c=s.top-1,a=r+n.width,l=s.bottom+1,_=e.createLinearGradient(r,c,a,l);for(let f=0;f<F.length;f++){const[d,w,v]=F[F.length-f-1];_.addColorStop(f/F.length,`rgb(${d}, ${w}, ${v})`)}e.fillStyle=_,e.fillRect(r,c,n.width,s.height),e.textAlign="left",e.textBaseline="middle",e.font=pe;const[i,h]=me(n.tickMinDistance,s.height),u=o.minDecibels-o.maxDecibels;for(let f=0;f<=i;f++){const d=c+f*h,w=`${Math.floor(f/i*u+o.maxDecibels)} dB`;e.fillStyle=_,e.fillRect(a,d,n.tickLength,n.tickThickness),e.fillStyle="white",e.fillText(w,a+n.tickLength+2,d+1)}},kt=({context:e,margin:t,layout:n,sampleRate:o=96e3})=>{const s=se(e.canvas,t),r=s.height+1,c=o/2/1e3,[a,l]=me(n.tickMinDistance,r);e.textAlign="right",e.textBaseline="middle";for(let _=0;_<=a;_++){const i=s.top+_*l-1,h=`${Math.floor((a-_)/a*c)} kHz`;e.fillRect(s.left-n.tickLength,i,n.tickLength,n.tickThickness),e.fillText(h,s.left-n.tickLength-2,i+1)}},St=({context:e,margin:t,text:n})=>{e.fillStyle="white",e.textAlign="left",e.textBaseline="bottom",e.font=pe,e.fillText(n,t.left,t.top-U(8))},re=e=>{const t=Math.floor(e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},Rt=({context:e,time:t,layout:n,margin:o,currentTime:s})=>{const r=se(e.canvas,o),c=t.end-t.start,a=r.width+1,[l,_]=me(n.tickMinDistance*2,a);e.strokeStyle="white",e.fillStyle="white",e.textAlign="center",e.textBaseline="hanging",e.font=pe;const i=[];for(let h=0;h<=l;h++){const u=r.left+h*_-1,f=re(t.start+h/l*c);e.fillRect(u,r.bottom,n.tickThickness,n.tickLength),e.fillText(f,u,r.bottom+n.tickLength+2),i.push([u,u+e.measureText(f).width])}if(s!==void 0){const h=Math.floor(r.left+s/c*a),u=r.bottom+1,f=n.tickLength/2;e.fillStyle="white",e.fillRect(h,u,n.tickThickness,f);const d=re(s),w=e.measureText(d);i.some(v=>h+w.width>v[0]&&h<v[1])||e.fillText(d,h,r.bottom+f+2)}};var ce,S,_e,Ae,oe=0,Ke=[],Q=[],xe=g.__b,Be=g.__r,Le=g.diffed,Te=g.__c,Ce=g.unmount;function ge(e,t){g.__h&&g.__h(S,e,oe||t),oe=0;var n=S.__H||(S.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Q}),n.__[e]}function P(e){return oe=1,Mt(Je,e)}function Mt(e,t,n){var o=ge(ce++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):Je(void 0,t),function(r){var c=o.__N?o.__N[0]:o.__[0],a=o.t(c,r);c!==a&&(o.__N=[a,o.__[1]],o.__c.setState({}))}],o.__c=S,!S.u)){S.u=!0;var s=S.shouldComponentUpdate;S.shouldComponentUpdate=function(r,c,a){if(!o.__c.__H)return!0;var l=o.__c.__H.__.filter(function(i){return i.__c});if(l.every(function(i){return!i.__N}))return!s||s.call(this,r,c,a);var _=!1;return l.forEach(function(i){if(i.__N){var h=i.__[0];i.__=i.__N,i.__N=void 0,h!==i.__[0]&&(_=!0)}}),!(!_&&o.__c.props===r)&&(!s||s.call(this,r,c,a))}}return o.__N||o.__}function V(e,t){var n=ge(ce++,3);!g.__s&&Qe(n.__H,t)&&(n.__=e,n.i=t,S.__H.__h.push(n))}function Et(e){return oe=5,At(function(){return{current:e}},[])}function At(e,t){var n=ge(ce++,7);return Qe(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function xt(){for(var e;e=Ke.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(J),e.__H.__h.forEach(ue),e.__H.__h=[]}catch(t){e.__H.__h=[],g.__e(t,e.__v)}}g.__b=function(e){S=null,xe&&xe(e)},g.__r=function(e){Be&&Be(e),ce=0;var t=(S=e.__c).__H;t&&(_e===S?(t.__h=[],S.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Q,n.__N=n.i=void 0})):(t.__h.forEach(J),t.__h.forEach(ue),t.__h=[])),_e=S},g.diffed=function(e){Le&&Le(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ke.push(t)!==1&&Ae===g.requestAnimationFrame||((Ae=g.requestAnimationFrame)||Bt)(xt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Q&&(n.__=n.__V),n.i=void 0,n.__V=Q})),_e=S=null},g.__c=function(e,t){t.some(function(n){try{n.__h.forEach(J),n.__h=n.__h.filter(function(o){return!o.__||ue(o)})}catch(o){t.some(function(s){s.__h&&(s.__h=[])}),t=[],g.__e(o,n.__v)}}),Te&&Te(e,t)},g.unmount=function(e){Ce&&Ce(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{J(o)}catch(s){t=s}}),n.__H=void 0,t&&g.__e(t,n.__v))};var $e=typeof requestAnimationFrame=="function";function Bt(e){var t,n=function(){clearTimeout(o),$e&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);$e&&(t=requestAnimationFrame(n))}function J(e){var t=S,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),S=t}function ue(e){var t=S;e.__c=e.__(),S=t}function Qe(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function Je(e,t){return typeof t=="function"?t(e):t}const Lt={renderer:void 0,rendererInstance:void 0},de=new Set,Tt=e=>{de.forEach(t=>t(e))},Ct=e=>{switch(e==null?void 0:e.type){case"file":{const t=gt(F);return requestAnimationFrame(()=>void t.render(e.file)),t}case"realtime":{const t=pt(F,yt);return t.start(),t}default:return}},et=()=>{const[e,t]=P(Lt),n=async o=>{var r;await((r=e.rendererInstance)==null?void 0:r.destroy());const s=Ct(o);Tt({...e,renderer:o,rendererInstance:s})};return V(()=>(de.add(t),()=>de.delete(t))),{state:e,changeRenderer:n}},$t=(e,t=devicePixelRatio)=>{e.width=0,e.height=0;const n=e.getBoundingClientRect(),o=Math.round(t*n.right)-Math.round(t*n.left),s=Math.round(t*n.bottom)-Math.round(t*n.top);return{width:o,height:s}},zt=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Dt=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],It=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],Ht=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],ze=(e,t,n)=>{let o=e;return typeof t=="string"||Array.isArray(t)?o=e.toLocaleString(t,n):(t===!0||n!==void 0)&&(o=e.toLocaleString(void 0,n)),o};function Nt(e,t){if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);t={bits:!1,binary:!1,...t};const n=t.bits?t.binary?Ht:It:t.binary?Dt:zt;if(t.signed&&e===0)return` 0 ${n[0]}`;const o=e<0,s=o?"-":t.signed?"+":"";o&&(e=-e);let r;if(t.minimumFractionDigits!==void 0&&(r={minimumFractionDigits:t.minimumFractionDigits}),t.maximumFractionDigits!==void 0&&(r={maximumFractionDigits:t.maximumFractionDigits,...r}),e<1){const _=ze(e,t.locale,r);return s+_+" "+n[0]}const c=Math.min(Math.floor(t.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),n.length-1);e/=(t.binary?1024:1e3)**c,r||(e=e.toPrecision(3));const a=ze(Number(e),t.locale,r),l=n[c];return s+a+" "+l}const Ut="c",Ft={canvas:Ut};var Pt=0;function p(e,t,n,o,s){var r,c,a={};for(c in t)c=="ref"?r=t[c]:a[c]=t[c];var l={type:e,props:a,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Pt,__source:s,__self:o};if(typeof e=="function"&&(r=e.defaultProps))for(c in r)a[c]===void 0&&(a[c]=r[c]);return g.vnode&&g.vnode(l),l}const z={top:U(35),right:U(100),bottom:U(35),left:U(65)},ve={tickMinDistance:50,tickThickness:1,tickLength:10},Vt={...ve,width:10},Ot={...ve},Wt=()=>{const[e,t]=P(),n=Et(null),o=et(),s=(c,a,l,_,i,h)=>{if(!n.current||!e)return;const u=se(n.current,z);e.clearRect(0,0,n.current.width,n.current.height),a&&e.drawImage(a,z.left,z.top),e.fillStyle="white",e.strokeStyle="white",e.strokeRect(u.left-.5,u.top-.5,u.width+1,u.height+1),l&&Rt({context:e,margin:z,time:l,currentTime:h==null?void 0:h.currentTime,layout:ve}),bt({context:e,margin:z,decibelRange:_,layout:Vt}),kt({context:e,margin:z,layout:Ot,sampleRate:i==null?void 0:i.sampleRate}),St({context:e,margin:z,text:c})},r=()=>{var u;if(!n.current||!e)return;const{width:c,height:a}=$t(n.current),{top:l,right:_,bottom:i,left:h}=z;n.current.width=c,n.current.height=a,s(o.state.renderer?"Loading...":"Activate microphone or select an file to analyze..."),(u=o.state.rendererInstance)==null||u.resize(c-h-_,a-l-i)};return V(()=>(r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r))),V(()=>{var c;t((c=n.current)==null?void 0:c.getContext("2d",{alpha:!1}))},[n]),V(()=>{if(!e)return;const c=o.state.rendererInstance;fe(c)?c.on("update",a=>{const l=a.audioContext.sampleRate.toLocaleString(),_=Nt(a.bufferSize,{minimumFractionDigits:2,maximumFractionDigits:2});s(`Recording with a sample-rate of ${l} (Buffer: ${_})`,a.canvas,a.time,a.audioAnalyzer,a.audioContext)}):q(c)?c.on("update",a=>{const{length:l,duration:_,numberOfChannels:i}=a.audioBuffer,{name:h,type:u}=a.audioFile,{currentTime:f}=a.audio??{currentTime:0},d=a.audioContext.sampleRate.toLocaleString(),w=l/_*8/1e3,v=`${h} (${u}, ${d} Hz, ${w}kbps, ${i} channels)`+(a.audio?` (playing - ${re(f)} / ${re(_)})`:"");s(v,a.canvas,{start:0,end:a.audioBuffer.duration},a.audioAnalyzer,a.audioContext,a.audio)}):r()},[o.state.rendererInstance]),p("div",{className:Ft.canvas,style:"color: red",children:p("canvas",{ref:n})})},qt="e",Gt={slider:qt},jt=e=>{const t=rt();let n=0,o=0;const s=a=>{var l,_;window.addEventListener("pointermove",r),window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c),window.addEventListener("pointerleave",c),o=((l=t.current)==null?void 0:l.getBoundingClientRect().left)??0,n=((_=t.current)==null?void 0:_.clientWidth)??0,r(a)},r=a=>{const l=(a.clientX-o)/n;e.onChange(Math.max(0,Math.min(1,l)))},c=()=>{window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",c),window.removeEventListener("pointercancel",c),window.removeEventListener("pointerleave",c)};return p("div",{ref:t,className:Gt.slider,onPointerDown:s,style:{"--value":e.value}})},Yt=({accept:e,multiple:t}={})=>{const n=document.createElement("input");return document.body.appendChild(n),n.type="file",n.style.display="none",e&&(n.accept=e),t&&(n.multiple=t),new Promise((o,s)=>{n.onchange=()=>{const r=Array.from(n.files??[]);r.length?o(t?r:r[0]):s()},document.body.removeChild(n),n.click()})},Zt="d",Xt={icon:Zt},Kt={mic:p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"})]}),"mic-off":p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M16.425 17.839A8.941 8.941 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11H5.07a7.002 7.002 0 0 0 9.87 5.354l-1.551-1.55A5 5 0 0 1 7 10V8.414L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-4.767-4.768zm-7.392-7.392l2.52 2.52a3.002 3.002 0 0 1-2.52-2.52zm10.342 4.713l-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.95 8.95 0 0 1-1.57 4.16zm-2.91-2.909l-1.548-1.548c.054-.226.083-.46.083-.703V6a3 3 0 0 0-5.818-1.032L7.686 3.471A5 5 0 0 1 17 6v4a4.98 4.98 0 0 1-.534 2.251z"})]}),play:p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.622 8.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"})]}),pause:p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9 9h2v6H9V9zm4 0h2v6h-2V9z"})]}),reset:p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z"})]}),file:p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997zM5.83 8H9V4.83L5.83 8zM11 4v5a1 1 0 0 1-1 1H5v10h14V4h-8z"})]}),"file-music":p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M16 8v2h-3v4.5a2.5 2.5 0 1 1-2-2.45V8h4V4H5v16h14V8h-3zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"})]}),github:p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[p("path",{fill:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"})]})},N=e=>p("span",{className:Xt.icon,children:Kt[e.icon]}),Qt="a",Jt="b",De={header:Qt,gitHubLink:Jt},en=()=>{var d,w,v,k;const[e,t]=P(!1),[n,o]=P(!1),[s,r]=P(!1),[c,a]=P(.2),l=et(),_=()=>{l.changeRenderer(void 0)},i=()=>{Yt({multiple:!1,accept:"audio/*"}).then(m=>{l.changeRenderer({file:m,type:"file"})})},h=()=>{const m=l.state.rendererInstance;fe(m)?m.isRecording()?m.stop():m.start():l.changeRenderer({type:"realtime"})},u=()=>{const m=l.state.rendererInstance;q(m)?m.isPlaying()?m.pause():m.play():l.changeRenderer({type:"realtime"})},f=()=>{q(l.state.rendererInstance)&&l.state.rendererInstance.rewind()};return V(()=>{const m=l.state.rendererInstance;q(m)?(m.on("pause",()=>r(!1)),m.on("beforePlay",()=>m.setVolume(c)),m.on("play",()=>r(!0)),m.on("start",()=>t(!0)),m.on("stop",()=>t(!1)),r(m.isPlaying()),t(m.isRendering())):fe(m)&&(m.on("start",()=>o(!0)),m.on("stop",()=>o(!1)),o(m.isRecording()),t(m.isRecording()))},[(d=l.state.rendererInstance)==null?void 0:d.name]),V(()=>{q(l.state.rendererInstance)&&l.state.rendererInstance.setVolume(c)},[c]),p("div",{className:De.header,children:[p("button",{onClick:h,children:p(N,{icon:n?"mic":"mic-off"})}),((w=l.state.renderer)==null?void 0:w.type)==="realtime"&&p("button",{onClick:_,children:p(N,{icon:"reset"})}),p("button",{onClick:i,children:p(N,{icon:((v=l.state.renderer)==null?void 0:v.type)==="file"?"file-music":"file"})}),((k=l.state.renderer)==null?void 0:k.type)==="file"&&!e&&p(Y,{children:[p("button",{onClick:u,children:p(N,{icon:s?"pause":"play"})}),p("button",{onClick:f,children:p(N,{icon:"reset"})}),p(jt,{value:c,onChange:a})]}),p("a",{href:"https://github.com/Simonwep/spectrum",className:De.gitHubLink,children:p(N,{icon:"github"})})]})},tn="_",nn={app:tn},rn=()=>p("div",{className:nn.app,children:[p(en,{}),p(Wt,{})]});ct(p(rn,{}),document.getElementById("app"));ft();

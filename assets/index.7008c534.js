var dn=Object.defineProperty,fn=Object.defineProperties;var mn=Object.getOwnPropertyDescriptors;var pe=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var Qe=Math.pow,Ke=(e,t,n)=>t in e?dn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F=(e,t)=>{for(var n in t||(t={}))Ne.call(t,n)&&Ke(e,n,t[n]);if(pe)for(var n of pe(t))Be.call(t,n)&&Ke(e,n,t[n]);return e},_e=(e,t)=>fn(e,mn(t));var le=(e,t)=>{var n={};for(var a in e)Ne.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&pe)for(var a of pe(e))t.indexOf(a)<0&&Be.call(e,a)&&(n[a]=e[a]);return n};var Te=(e,t,n)=>new Promise((a,l)=>{var g=u=>{try{s(n.next(u))}catch(v){l(v)}},_=u=>{try{s(n.throw(u))}catch(v){l(v)}},s=u=>u.done?a(u.value):Promise.resolve(u.value).then(g,_);s((n=n.apply(e,t)).next())});import{e as Pe,d as re,c as A,r as w,V as vn,M as Re,m as P,q as H,t as K,v as te,W as G,A as se,ad as J,a7 as ge,a6 as Ve,Y as He,X as Ie,al as pn,an as _n,ao as gn,ap as hn,am as yn,aq as bn,_ as wn,ak as En,ar as Tn,D as Cn,p as On,i as Ge,w as Ce,o as Sn,u as kn,k as Fe,h as Rn,y as In,as as $n,G as Pn,at as Fn,af as Ln,au as Dn}from"./antdv.65c2eb16.js";import{b as Je,c as Xe,_ as xe}from"./index.eb4f97cf.js";const An=Pe({props:["hiddenFilter","button","items","model"],emits:["onSearch"],setup(e,{emit:t}){const{hasPermission:n}=Je(),{hasRole:a}=Xe(),l=re(e.model||{}),g=A(()=>(e.items||[]).map(v=>F({type:"input"},v))),_=()=>{t("onSearch")},s=w(e.hiddenFilter);vn(()=>{!e.button&&!e.items&&(s.value=!0)});const u=A(()=>{const v=Re(e.button)||{};return _e(F({},v),{permission:n(v.auth)&&a(v.role)})});return{formModel:l,getItems:g,hasHidden:s,getButton:u,handleSubmit:_}}}),jn={key:0,class:"text"},Mn=Ve("\u67E5\u8BE2");function Kn(e,t,n,a,l,g){const _=pn,s=_n,u=gn,v=hn,T=yn,b=bn,S=wn,k=En,E=Tn,h=Cn;return e.hasHidden?J("",!0):(P(),H(h,{key:0,"body-style":{padding:"0 0 24px 0"},bordered:!1},{default:K(()=>[te(E,{class:"form-container",layout:"horizontal",model:e.formModel},{default:K(()=>[te(k,{type:"flex"},{default:K(()=>[e.button?(P(),H(s,{key:0,flex:"100px"},{default:K(()=>{var o;return[e.button.type==="text"?(P(),G("span",jn,se(e.button.label),1)):J("",!0),e.getButton.permission?(P(),H(_,ge({key:1},e.button,{onClick:(o=e.button)==null?void 0:o.onClick}),{default:K(()=>[Ve(se(e.button.label),1)]),_:1},16,["onClick"])):J("",!0)]}),_:1})):J("",!0),te(s,{flex:"auto",class:"rowE"},{default:K(()=>[te(S,null,{default:K(()=>[(P(!0),G(Ie,null,He(e.getItems,o=>(P(),H(b,{key:o.name,name:o.name},{default:K(()=>[o.type==="select"?(P(),H(u,ge({key:0,key:`select-${o.name}`},o,{value:e.formModel[o.name],"onUpdate:value":p=>e.formModel[o.name]=p,class:"default-select-w"}),null,16,["value","onUpdate:value"])):o.type==="date"?(P(),H(v,ge({key:1,key:`date-${o.name}`},o,{value:e.formModel[o.name],"onUpdate:value":p=>e.formModel[o.name]=p,class:"default-select-w"}),null,16,["value","onUpdate:value"])):(P(),H(T,ge({key:2},o,{key:`input-${o.name}`,value:e.formModel[o.name],"onUpdate:value":p=>e.formModel[o.name]=p,onSearch:e.handleSubmit,class:"default-search-w"}),{enterButton:K(()=>[te(_,{type:"primary"},{default:K(()=>[Mn]),_:1})]),_:2},1040,["value","onUpdate:value","onSearch"]))]),_:2},1032,["name"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}))}var Nn=xe(An,[["render",Kn],["__scopeId","data-v-49edeabf"]]);const Bn={},Le=Symbol("GLOBAL_OPTIONS_PROVIDE_KEY"),Ze=()=>Bn;Pe({name:"RequestConfig",props:{config:{type:Object,required:!0}},setup(e,{slots:t}){const{config:n}=e;return On(Le,n),()=>{var a;return(a=t.default)===null||a===void 0?void 0:a.call(t)}}});const Qn=Object.prototype.toString,en=e=>Qn.call(e),qn=e=>en(e)==="[object String]",nn=e=>en(e)==="[object Object]",Un=e=>Array.isArray(e),ce=e=>e!==null&&typeof e=="object",Wn=e=>ce(e)&&Ee(e.then)&&Ee(e.catch),Ee=e=>e instanceof Function,be=e=>e==null,De=typeof window=="undefined",$e=()=>{var e,t;return!De&&((e=window)===null||e===void 0||(t=e.document)===null||t===void 0?void 0:t.visibilityState)==="visible"},qe=()=>{var e,t,n;return(e=!De&&((t=window)===null||t===void 0||(n=t.navigator)===null||n===void 0?void 0:n.onLine))!==null&&e!==void 0?e:!0},Yn=e=>{const t={};return Object.keys(e).forEach(n=>{t[n]=kn(e[n])}),t},ue=Promise.resolve(null),Ue=(...e)=>Te(void 0,null,function*(){const t=yield fetch(...e);if(t.ok)return t.json();throw new Error(t.statusText)}),We=(e,t,n=void 0)=>{const a=t.replace(/\[(\d+)\]/g,".$1").split(".");let l=e;for(const g of a)if(l=Object(l)[g],l===void 0)return n;return l};function zn(e,t){const n=Object.assign({},e);for(const a of t)delete n[a];return n}const tn=(e,t=!1)=>{const n=`Warning: [vue-request] ${e}`;if(t)return new Error(n);console.error(n)},Vn=(e,t)=>{let n=!1;return(...a)=>{n||(n=!0,e(...a),setTimeout(()=>{n=!1},t))}};var Oe;const an=new Set,on=new Set,rn=new Set,he=(e,t)=>{let n;switch(e){case"FOCUS_LISTENER":n=an;break;case"RECONNECT_LISTENER":n=rn;break;case"VISIBLE_LISTENER":n=on;break}if(!n.has(t))return n.add(t),()=>{n.delete(t)}},Se=e=>{e.forEach(t=>{t()})};!De&&(Oe=window)!==null&&Oe!==void 0&&Oe.addEventListener&&(window.addEventListener("visibilitychange",()=>{$e()&&Se(on)},!1),window.addEventListener("focus",()=>Se(an),!1),window.addEventListener("online",()=>Se(rn),!1));function sn(e,t,n){let a,l,g,_,s,u,v=0,T=!1,b=!1,S=!0;const k=!t&&t!==0&&typeof window.requestAnimationFrame=="function";if(typeof e!="function")throw new TypeError("Expected a function");t=+t||0,ce(n)&&(T=!!n.leading,b="maxWait"in n,g=b?Math.max(+n.maxWait||0,t):g,S="trailing"in n?!!n.trailing:S);function E(c){const f=a,I=l;return a=l=void 0,v=c,_=e.apply(I,f),_}function h(c,f){return k?(window.cancelAnimationFrame(s),window.requestAnimationFrame(c)):setTimeout(c,f)}function o(c){if(k)return window.cancelAnimationFrame(c);clearTimeout(c)}function p(c){return v=c,s=h(r,t),T?E(c):_}function j(c){const f=c-u,I=c-v,L=t-f;return b?Math.min(L,g-I):L}function Y(c){const f=c-u,I=c-v;return u===void 0||f>=t||f<0||b&&I>=g}function r(){const c=Date.now();if(Y(c))return y(c);s=h(r,j(c))}function y(c){return s=void 0,S&&a?E(c):(a=l=void 0,_)}function R(){s!==void 0&&o(s),v=0,a=u=l=s=void 0}function z(){return s===void 0?_:y(Date.now())}function N(){return s!==void 0}function M(...c){const f=Date.now(),I=Y(f);if(a=c,l=this,u=f,I){if(s===void 0)return p(u);if(b)return s=h(r,t),E(u)}return s===void 0&&(s=h(r,t)),_}return M.cancel=R,M.flush=z,M.pending=N,M}function ln(e,t){for(const n in t)if(t[n]!==void 0){if(!ce(t[n])||!ce(e[n])||!(n in e)){e[n]=t[n];continue}(nn(t[n])||Un(t[n]))&&ln(e[n],t[n])}}function Ye(e,...t){const n=Object.assign({},e);if(!t.length)return n;for(const a of t)ln(n,a);return n}function Hn(e,t,n){let a=!0,l=!0;if(typeof e!="function")throw new TypeError("Expected a function");return ce(n)&&(a="leading"in n?!!n.leading:a,l="trailing"in n?!!n.trailing:l),sn(e,t,{leading:a,trailing:l,maxWait:t})}const Gn=(e,t)=>n=>{Object.keys(n).forEach(a=>{e[a].value=n[a]}),t.forEach(a=>a(e))},ye=(e,t,n)=>{var a,l,g;const{initialAutoRunFlag:_,initialData:s,loadingDelay:u,pollingInterval:v,debounceInterval:T,debounceOptions:b,throttleInterval:S,throttleOptions:k,pollingWhenHidden:E,pollingWhenOffline:h,errorRetryCount:o,errorRetryInterval:p,stopPollingWhenHiddenOrOffline:j,refreshOnWindowFocus:Y,refocusTimespan:r,updateCache:y,formatResult:R,onSuccess:z,onError:N,onBefore:M,onAfter:c}=t,f=w(0),I=w((a=n==null?void 0:n.loading)!==null&&a!==void 0?a:!1),L=w((l=n==null?void 0:n.data)!==null&&l!==void 0?l:s),B=w(n==null?void 0:n.error),q=w((g=n==null?void 0:n.params)!==null&&g!==void 0?g:[]),m=Gn({loading:I,data:L,error:B,params:q},[d=>y(d)]),C=()=>{f.value=0},U=w(0),X=w(),x=w(),ae=w(),de=()=>{X.value&&X.value(),ae.value&&ae.value(),x.value&&x.value()},ie=()=>{let d;return u&&(d=setTimeout(m,u,{loading:!0})),()=>d&&clearTimeout(d)},fe=d=>{if(B.value&&o!==0)return;let D;if(!be(v)&&v>=0)if((E||$e())&&(h||qe()))D=setTimeout(d,v);else{j.value=!0;return}return()=>D&&clearTimeout(D)},me=A(()=>{if(p)return p;const d=1e3,D=1,Q=9,ne=Math.floor(Math.random()*Qe(2,Math.min(f.value,Q))+D);return d*ne}),i=d=>{let D;const Q=o===-1,ne=f.value<o;return B.value&&(Q||ne)&&(Q||(f.value+=1),D=setTimeout(d,me.value)),()=>D&&clearTimeout(D)},$=(...d)=>{m({loading:!u,params:d}),ae.value=ie(),U.value+=1;const D=U.value;return M==null||M(d),e(...d).then(Q=>{if(D===U.value){const ne=R?R(Q):Q;return m({data:ne,loading:!1,error:void 0}),z&&z(ne,d),C(),ne}return ue}).catch(Q=>(D===U.value&&(m({data:void 0,loading:!1,error:Q}),N&&N(Q,d),console.error(Q)),ue)).finally(()=>{D===U.value&&(ae.value(),x.value=i(()=>$(...d)),X.value=fe(()=>$(...d)),c==null||c(d))})},O=!be(T)&&sn($,T,b),W=!be(S)&&Hn($,S,k),V=(...d)=>(de(),!_.value&&O?(O(...d),ue):W?(W(...d),ue):(C(),$(...d))),Z=()=>{U.value+=1,m({loading:!1}),O&&O.cancel(),W&&W.cancel(),de()},ee=()=>V(...q.value),cn=d=>{const D=Ee(d)?d(L.value):d;m({data:D})},Ae=[],ve=d=>{d&&Ae.push(d)},je=()=>{j.value&&(E||$e())&&(h||qe())&&(ee(),j.value=!1)};E||ve(he("VISIBLE_LISTENER",je)),h||ve(he("RECONNECT_LISTENER",je));const Me=Vn(ee,r);return Y&&(ve(he("VISIBLE_LISTENER",Me)),ve(he("FOCUS_LISTENER",Me))),{loading:I,data:L,error:B,params:q,run:V,cancel:Z,refresh:ee,mutate:cn,unmount:()=>{Ae.forEach(d=>d())}}},we=new Map,ke=e=>{if(be(e))return;const t=we.get(e);if(!!t)return{data:t.data,cacheTime:t.cacheTime}},Jn=(e,t,n)=>{const a=we.get(e);a!=null&&a.timer&&clearTimeout(a.timer);const l=setTimeout(()=>we.delete(e),n);we.set(e,{data:t,timer:l,cacheTime:new Date().getTime()})},oe="__QUERY_DEFAULT_KEY__";function Xn(e,t){const n=Ge(Le,{}),me=F(F(F({},Ze()),n),t),{cacheKey:a,defaultParams:l=[],manual:g=!1,ready:_=w(!0),refreshDeps:s=[],loadingDelay:u=0,pollingWhenHidden:v=!1,pollingWhenOffline:T=!1,refreshOnWindowFocus:b=!1,refocusTimespan:S=5e3,cacheTime:k=6e5,staleTime:E=0,errorRetryCount:h=0,errorRetryInterval:o=0,queryKey:p}=me,j=le(me,["cacheKey","defaultParams","manual","ready","refreshDeps","loadingDelay","pollingWhenHidden","pollingWhenOffline","refreshOnWindowFocus","refocusTimespan","cacheTime","staleTime","errorRetryCount","errorRetryInterval","queryKey"]),Y=w(!1),r=w(!1),R=F({initialAutoRunFlag:r,loadingDelay:u,pollingWhenHidden:v,pollingWhenOffline:T,stopPollingWhenHiddenOrOffline:Y,cacheKey:a,errorRetryCount:h,errorRetryInterval:o,refreshOnWindowFocus:b,refocusTimespan:S,updateCache:i=>{var $,O;if(!a)return;const W=($=ke(a))===null||$===void 0?void 0:$.data,V=W==null?void 0:W.queries,Z=Yn(i),ee=(O=p==null?void 0:p(...i.params.value))!==null&&O!==void 0?O:oe;Jn(a,{queries:_e(F({},V),{[ee]:F(F({},V==null?void 0:V[ee]),Z)}),latestQueriesKey:ee},k)}},zn(j,["pagination","listKey"])),z=w(!1),N=w(),M=w(),c=w(),f=re({[oe]:re(ye(e,R))}),I=w(oe),L=A(()=>{var i;return(i=f[I.value])!==null&&i!==void 0?i:{}});if(Ce(L,i=>{z.value=i.loading,N.value=i.data,M.value=i.error,c.value=i.params},{immediate:!0,deep:!0}),a){var B;const i=ke(a);i!=null&&(B=i.data)!==null&&B!==void 0&&B.queries&&(Object.keys(i.data.queries).forEach($=>{const O=i.data.queries[$];f[$]=re(ye(e,R,{loading:O.loading,params:O.params,data:O.data,error:O.error}))}),i.data.latestQueriesKey&&(I.value=i.data.latestQueriesKey))}const q=w(),m=w(!1),C=(...i)=>{var $;if(!_.value&&!m.value)return q.value=i,ue;const O=($=p==null?void 0:p(...i))!==null&&$!==void 0?$:oe;return f[O]||(f[O]=re(ye(e,R))),I.value=O,L.value.run(...i)},U=()=>{X(),I.value=oe,f[oe]=re(ye(e,R))},X=()=>{Object.keys(f).forEach(i=>{f[i].cancel(),f[i].unmount(),delete f[i]})},x=()=>L.value.cancel(),ae=()=>L.value.refresh(),de=i=>L.value.mutate(i);if(!g){var ie;r.value=!0;const i=ke(a),$=(ie=i==null?void 0:i.data.queries)!==null&&ie!==void 0?ie:{},O=i&&(E===-1||i.cacheTime+E>new Date().getTime()),W=Object.keys($).length>0;O||(W?Object.keys(f).forEach(V=>{var Z;(Z=f[V])===null||Z===void 0||Z.refresh()}):C(...l)),r.value=!1}const fe=w();return fe.value=Ce(_,i=>{m.value=!0,i&&q.value&&(C(...q.value),fe.value())},{flush:"sync"}),s.length&&Ce(s,()=>{!g&&L.value.refresh()}),Sn(()=>{X()}),{loading:z,data:N,error:M,params:c,cancel:x,refresh:ae,mutate:de,run:C,reset:U,queries:f}}const un=e=>(...t)=>{if(Ee(e))return un(e(...t))();if(Wn(e))return e;if(nn(e)){const n=e,{url:a}=n,l=le(n,["url"]);return Ue(a,l)}else{if(qn(e))return Ue(e);throw tn("Unknown service type",!0)}};function xn(e,t){var n,a;const l=un(e),g={pagination:{currentKey:"current",pageSizeKey:"pageSize",totalKey:"total",totalPageKey:"totalPage"}},_=Ge(Le,{}),B=Ye(g,{pagination:(n=Ze().pagination)!==null&&n!==void 0?n:{}},{pagination:(a=_.pagination)!==null&&a!==void 0?a:{}},t!=null?t:{}),{pagination:{currentKey:s,pageSizeKey:u,totalKey:v,totalPageKey:T},queryKey:b}=B,S=le(B,["pagination","queryKey"]);b&&tn("usePagination does not support concurrent request");const k=Ye({defaultParams:[{[s]:1,[u]:10}]},S),q=Xn(l,k),{data:E,params:h,queries:o,run:p,reset:j}=q,Y=le(q,["data","params","queries","run","reset"]),r=m=>{const[C,...U]=h.value,x=[F(F({},C),m),...U];p(...x)},y=m=>{r({[s]:m})},R=m=>{r({[u]:m})},z=(m,C)=>{r({[s]:m,[u]:C})},N=w(!1),M=()=>Te(this,null,function*(){const{defaultParams:m,manual:C}=k;j(),C||(N.value=!0,yield p(...m),N.value=!1)}),c=A(()=>We(E.value,v,0)),f=A({get:()=>{var m,C;return(m=(C=h.value[0])===null||C===void 0?void 0:C[s])!==null&&m!==void 0?m:k.defaultParams[0][s]},set:m=>{y(m)}}),I=A({get:()=>{var m,C;return(m=(C=h.value[0])===null||C===void 0?void 0:C[u])!==null&&m!==void 0?m:k.defaultParams[0][u]},set:m=>{R(m)}}),L=A(()=>We(E.value,T,Math.ceil(c.value/I.value)));return F({data:E,params:h,current:f,pageSize:I,total:c,totalPage:L,reloading:N,run:p,changeCurrent:y,changePageSize:R,changePagination:z,reload:M},Y)}const Zn="YYYY-MM-DD HH:mm:ss",et="YYYY-MM-DD ";function nt(e=void 0,t=Zn){return Fe(e).format(t)}function ze(e=void 0,t=et){return Fe(e).format(t)}const tt=Pe({props:["bordered","hiddenFilter","url","columns","actions","button","items","model","resKey","scroll"],setup(e){const{hasPermission:t}=Je(),{hasRole:n}=Xe(),{data:a,run:l,loading:g,current:_,pageSize:s,total:u,refresh:v}=xn(e.url,{pagination:{pageSizeKey:"limit",currentKey:"page"}}),T=A(()=>{var r;return(r=e.bordered)!=null?r:!0}),b=A(()=>{var r,y;return((y=a.value)==null?void 0:y[((r=e==null?void 0:e.resKey)==null?void 0:r.list)||"list"])||[]}),S=A(()=>({total:u.value,current:_.value,pageSize:s.value,showQuickJumper:!0,showSizeChanger:!0,showTotal:()=>Rn("span",{},`\u5171 ${u.value} \u6761`)})),k=(r,y,R)=>{l(F({limit:r.pageSize,page:r==null?void 0:r.current,sortField:R.field,sortOrder:R.order},y))},E=A(()=>(Re(e.actions)||[]).map(r=>{const{popConfirm:y}=r;return _e(F(F({type:"link"},r),y||{}),{enable:!!y,permission:t(r.auth)&&n(r.role)})})),h=A(()=>e.model),o=A(()=>e.button),p=A(()=>e.items);return{dataSource:b,loading:g,pagination:S,hasBordered:T,handleTableChange:k,run:l,refresh:v,getActions:E,tableFilterModel:h,tableFilterButton:o,tableFilterItems:p,onSearch:()=>{const r=Re(h.value)||{};r&&Object.keys(r).map(y=>{r[y]&&Fe.isDayjs(r[y])&&(r[y]=ze(r[y]))}),l(F({page:_.value,limit:s.value},r))},formatDate:(r,y="date")=>{const R=y==="date"?ze:nt;return r.length===10?R(Number(r)*1e3):R(r)}}}}),at={class:"table-component"},ot={key:0},rt={key:1},st=["type"],it={key:1},lt=["onClick","type"];function ut(e,t,n,a,l,g){const _=Nn,s=Fn,u=Ln,v=Dn;return P(),G("div",at,[te(_,{button:e.tableFilterButton,items:e.tableFilterItems,model:e.tableFilterModel,hiddenFilter:e.hiddenFilter,pagination:null,onOnSearch:e.onSearch},null,8,["button","items","model","hiddenFilter","onOnSearch"]),te(v,{class:Pn(["ant-table-striped",{border:e.hasBordered}]),rowClassName:(T,b)=>b%2===1?"table-striped":"",dataSource:e.dataSource,columns:e.columns,rowKey:T=>T.id,pagination:e.pagination,loading:e.loading,onChange:e.handleTableChange,scroll:e.scroll},{bodyCell:K(({column:T,text:b,record:S})=>{var k,E,h;return[((k=T.slots)==null?void 0:k.customRender)==="toDate"?(P(),G("span",ot,se(b?e.formatDate(b):"-"),1)):J("",!0),((E=T.slots)==null?void 0:E.customRender)==="toDateTime"?(P(),G("span",rt,se(b?e.formatDate(b,"time"):"-"),1)):J("",!0),((h=T.slots)==null?void 0:h.customRender)==="action"?(P(!0),G(Ie,{key:2},He(e.getActions,(o,p)=>(P(),G(Ie,{key:`${p}-${o.label}`},[o.enable?(P(),H(s,{key:0,title:o==null?void 0:o.title,onConfirm:j=>o==null?void 0:o.onConfirm(S),onCancel:j=>o==null?void 0:o.onCancel(S)},{default:K(()=>[In("a",{onClick:t[0]||(t[0]=$n(()=>{},["prevent"])),type:o.type},se(o.label),9,st)]),_:2},1032,["title","onConfirm","onCancel"])):o.permission?(P(),G("a",{key:2,onClick:j=>o==null?void 0:o.onClick(S),type:o.type},se(o.label),9,lt)):(P(),G("span",it,"\u2014\u2014")),p<e.getActions.length-1?(P(),H(u,{key:3,type:"vertical"})):J("",!0)],64))),128)):J("",!0)]}),_:1},8,["class","rowClassName","dataSource","columns","rowKey","pagination","loading","onChange","scroll"])])}var vt=xe(tt,[["render",ut],["__scopeId","data-v-f26e9c78"]]);export{vt as _};
var cn=Object.defineProperty,dn=Object.defineProperties;var fn=Object.getOwnPropertyDescriptors;var ve=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var Qe=Math.pow,Ke=(e,t,n)=>t in e?cn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$=(e,t)=>{for(var n in t||(t={}))Ne.call(t,n)&&Ke(e,n,t[n]);if(ve)for(var n of ve(t))Be.call(t,n)&&Ke(e,n,t[n]);return e},Ee=(e,t)=>dn(e,fn(t));var se=(e,t)=>{var n={};for(var o in e)Ne.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&ve)for(var o of ve(e))t.indexOf(o)<0&&Be.call(e,o)&&(n[o]=e[o]);return n};var Te=(e,t,n)=>new Promise((o,u)=>{var g=d=>{try{r(n.next(d))}catch(y){u(y)}},h=d=>{try{r(n.throw(d))}catch(y){u(y)}},r=d=>d.done?o(d.value):Promise.resolve(d.value).then(g,h);r((n=n.apply(e,t)).next())});import{e as Pe,d as oe,c as M,r as b,R as mn,ao as vn,m as L,j as H,k as A,q as ee,S as ae,W as re,ap as pn,t as pe,a4 as He,aa as ke,U as Ge,T as Re,ak as _n,am as gn,aq as hn,ar as yn,al as bn,as as En,_ as Tn,an as wn,at as Cn,ad as Sn,p as On,i as Je,w as we,b as In,u as kn,f as Fe,h as Rn,I as Ue,V as Ce,au as $n,D as Pn,av as Fn,ae as Ln,aw as Dn}from"./antdv.36d905f5.js";import{_ as Xe,b as An}from"./index.44dc0730.js";const Mn=Pe({props:["hiddenFilter","button","items","model"],emits:["onSearch"],setup(e,{emit:t}){const n=oe(e.model||{}),o=M(()=>(e.items||[]).map(h=>$({type:"input"},h))),u=()=>{t("onSearch")},g=b(e.hiddenFilter);return mn(()=>{!e.button&&!e.items&&(g.value=!0)}),{formModel:n,getItems:o,hasHidden:g,handleSubmit:u}}}),jn={key:0,class:"text"},Kn=He("\u67E5\u8BE2");function Nn(e,t,n,o,u,g){const h=_n,r=gn,d=hn,y=yn,_=bn,l=En,k=Tn,S=wn,T=Cn,w=Sn,K=vn("auth");return e.hasHidden?ke("",!0):(L(),H(w,{key:0,"body-style":{padding:"0 0 24px 0"},bordered:!1},{default:A(()=>[ee(T,{class:"form-container",layout:"horizontal",model:e.formModel},{default:A(()=>[ee(S,{type:"flex"},{default:A(()=>[e.button?(L(),H(r,{key:0,flex:"100px"},{default:A(()=>{var s;return[e.button.type==="text"?(L(),ae("span",jn,re(e.button.label),1)):pn((L(),H(h,pe({key:1},e.button,{onClick:(s=e.button)==null?void 0:s.onClick}),{default:A(()=>[He(re(e.button.label),1)]),_:1},16,["onClick"])),[[K,e.button.auth]])]}),_:1})):ke("",!0),ee(r,{flex:"auto",class:"rowE"},{default:A(()=>[ee(k,null,{default:A(()=>[(L(!0),ae(Re,null,Ge(e.getItems,s=>(L(),H(l,{key:s.name,name:s.name},{default:A(()=>[s.type==="select"?(L(),H(d,pe({key:0,key:`select-${s.name}`},s,{value:e.formModel[s.name],"onUpdate:value":R=>e.formModel[s.name]=R,class:"default-select-w"}),null,16,["value","onUpdate:value"])):s.type==="date"?(L(),H(y,pe({key:1,key:`date-${s.name}`},s,{value:e.formModel[s.name],"onUpdate:value":R=>e.formModel[s.name]=R,class:"default-select-w"}),null,16,["value","onUpdate:value"])):(L(),H(_,pe({key:2},s,{key:`input-${s.name}`,value:e.formModel[s.name],"onUpdate:value":R=>e.formModel[s.name]=R,onSearch:e.handleSubmit,class:"default-search-w"}),{enterButton:A(()=>[ee(h,{type:"primary"},{default:A(()=>[Kn]),_:1})]),_:2},1040,["value","onUpdate:value","onSearch"]))]),_:2},1032,["name"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}))}var Bn=Xe(Mn,[["render",Nn],["__scopeId","data-v-26216c94"]]);const Qn={},Le=Symbol("GLOBAL_OPTIONS_PROVIDE_KEY"),Ze=()=>Qn;Pe({name:"RequestConfig",props:{config:{type:Object,required:!0}},setup(e,{slots:t}){const{config:n}=e;return On(Le,n),()=>{var o;return(o=t.default)===null||o===void 0?void 0:o.call(t)}}});const Un=Object.prototype.toString,xe=e=>Un.call(e),qn=e=>xe(e)==="[object String]",en=e=>xe(e)==="[object Object]",Wn=e=>Array.isArray(e),ue=e=>e!==null&&typeof e=="object",Yn=e=>ue(e)&&be(e.then)&&be(e.catch),be=e=>e instanceof Function,he=e=>e==null,De=typeof window=="undefined",$e=()=>{var e,t;return!De&&((e=window)===null||e===void 0||(t=e.document)===null||t===void 0?void 0:t.visibilityState)==="visible"},qe=()=>{var e,t,n;return(e=!De&&((t=window)===null||t===void 0||(n=t.navigator)===null||n===void 0?void 0:n.onLine))!==null&&e!==void 0?e:!0},zn=e=>{const t={};return Object.keys(e).forEach(n=>{t[n]=kn(e[n])}),t},ie=Promise.resolve(null),We=(...e)=>Te(void 0,null,function*(){const t=yield fetch(...e);if(t.ok)return t.json();throw new Error(t.statusText)}),Ye=(e,t,n=void 0)=>{const o=t.replace(/\[(\d+)\]/g,".$1").split(".");let u=e;for(const g of o)if(u=Object(u)[g],u===void 0)return n;return u};function Vn(e,t){const n=Object.assign({},e);for(const o of t)delete n[o];return n}const nn=(e,t=!1)=>{const n=`Warning: [vue-request] ${e}`;if(t)return new Error(n);console.error(n)},Hn=(e,t)=>{let n=!1;return(...o)=>{n||(n=!0,e(...o),setTimeout(()=>{n=!1},t))}};var Se;const tn=new Set,on=new Set,an=new Set,_e=(e,t)=>{let n;switch(e){case"FOCUS_LISTENER":n=tn;break;case"RECONNECT_LISTENER":n=an;break;case"VISIBLE_LISTENER":n=on;break}if(!n.has(t))return n.add(t),()=>{n.delete(t)}},Oe=e=>{e.forEach(t=>{t()})};!De&&(Se=window)!==null&&Se!==void 0&&Se.addEventListener&&(window.addEventListener("visibilitychange",()=>{$e()&&Oe(on)},!1),window.addEventListener("focus",()=>Oe(tn),!1),window.addEventListener("online",()=>Oe(an),!1));function rn(e,t,n){let o,u,g,h,r,d,y=0,_=!1,l=!1,k=!0;const S=!t&&t!==0&&typeof window.requestAnimationFrame=="function";if(typeof e!="function")throw new TypeError("Expected a function");t=+t||0,ue(n)&&(_=!!n.leading,l="maxWait"in n,g=l?Math.max(+n.maxWait||0,t):g,k="trailing"in n?!!n.trailing:k);function T(c){const m=o,O=u;return o=u=void 0,y=c,h=e.apply(O,m),h}function w(c,m){return S?(window.cancelAnimationFrame(r),window.requestAnimationFrame(c)):setTimeout(c,m)}function K(c){if(S)return window.cancelAnimationFrame(c);clearTimeout(c)}function s(c){return y=c,r=w(p,t),_?T(c):h}function R(c){const m=c-d,O=c-y,P=t-m;return l?Math.min(P,g-O):P}function i(c){const m=c-d,O=c-y;return d===void 0||m>=t||m<0||l&&O>=g}function p(){const c=Date.now();if(i(c))return D(c);r=w(p,R(c))}function D(c){return r=void 0,k&&o?T(c):(o=u=void 0,h)}function N(){r!==void 0&&K(r),y=0,o=d=u=r=void 0}function z(){return r===void 0?h:D(Date.now())}function B(){return r!==void 0}function j(...c){const m=Date.now(),O=i(m);if(o=c,u=this,d=m,O){if(r===void 0)return s(d);if(l)return r=w(p,t),T(d)}return r===void 0&&(r=w(p,t)),h}return j.cancel=N,j.flush=z,j.pending=B,j}function ln(e,t){for(const n in t)if(t[n]!==void 0){if(!ue(t[n])||!ue(e[n])||!(n in e)){e[n]=t[n];continue}(en(t[n])||Wn(t[n]))&&ln(e[n],t[n])}}function ze(e,...t){const n=Object.assign({},e);if(!t.length)return n;for(const o of t)ln(n,o);return n}function Gn(e,t,n){let o=!0,u=!0;if(typeof e!="function")throw new TypeError("Expected a function");return ue(n)&&(o="leading"in n?!!n.leading:o,u="trailing"in n?!!n.trailing:u),rn(e,t,{leading:o,trailing:u,maxWait:t})}const Jn=(e,t)=>n=>{Object.keys(n).forEach(o=>{e[o].value=n[o]}),t.forEach(o=>o(e))},ge=(e,t,n)=>{var o,u,g;const{initialAutoRunFlag:h,initialData:r,loadingDelay:d,pollingInterval:y,debounceInterval:_,debounceOptions:l,throttleInterval:k,throttleOptions:S,pollingWhenHidden:T,pollingWhenOffline:w,errorRetryCount:K,errorRetryInterval:s,stopPollingWhenHiddenOrOffline:R,refreshOnWindowFocus:i,refocusTimespan:p,updateCache:D,formatResult:N,onSuccess:z,onError:B,onBefore:j,onAfter:c}=t,m=b(0),O=b((o=n==null?void 0:n.loading)!==null&&o!==void 0?o:!1),P=b((u=n==null?void 0:n.data)!==null&&u!==void 0?u:r),Q=b(n==null?void 0:n.error),q=b((g=n==null?void 0:n.params)!==null&&g!==void 0?g:[]),v=Jn({loading:O,data:P,error:Q,params:q},[f=>D(f)]),E=()=>{m.value=0},W=b(0),G=b(),J=b(),ne=b(),ce=()=>{G.value&&G.value(),ne.value&&ne.value(),J.value&&J.value()},le=()=>{let f;return d&&(f=setTimeout(v,d,{loading:!0})),()=>f&&clearTimeout(f)},de=f=>{if(Q.value&&K!==0)return;let F;if(!he(y)&&y>=0)if((T||$e())&&(w||qe()))F=setTimeout(f,y);else{R.value=!0;return}return()=>F&&clearTimeout(F)},fe=M(()=>{if(s)return s;const f=1e3,F=1,U=9,x=Math.floor(Math.random()*Qe(2,Math.min(m.value,U))+F);return f*x}),a=f=>{let F;const U=K===-1,x=m.value<K;return Q.value&&(U||x)&&(U||(m.value+=1),F=setTimeout(f,fe.value)),()=>F&&clearTimeout(F)},I=(...f)=>{v({loading:!d,params:f}),ne.value=le(),W.value+=1;const F=W.value;return j==null||j(f),e(...f).then(U=>{if(F===W.value){const x=N?N(U):U;return v({data:x,loading:!1,error:void 0}),z&&z(x,f),E(),x}return ie}).catch(U=>(F===W.value&&(v({data:void 0,loading:!1,error:U}),B&&B(U,f),console.error(U)),ie)).finally(()=>{F===W.value&&(ne.value(),J.value=a(()=>I(...f)),G.value=de(()=>I(...f)),c==null||c(f))})},C=!he(_)&&rn(I,_,l),Y=!he(k)&&Gn(I,k,S),V=(...f)=>(ce(),!h.value&&C?(C(...f),ie):Y?(Y(...f),ie):(E(),I(...f))),X=()=>{W.value+=1,v({loading:!1}),C&&C.cancel(),Y&&Y.cancel(),ce()},Z=()=>V(...q.value),un=f=>{const F=be(f)?f(P.value):f;v({data:F})},Ae=[],me=f=>{f&&Ae.push(f)},Me=()=>{R.value&&(T||$e())&&(w||qe())&&(Z(),R.value=!1)};T||me(_e("VISIBLE_LISTENER",Me)),w||me(_e("RECONNECT_LISTENER",Me));const je=Hn(Z,p);return i&&(me(_e("VISIBLE_LISTENER",je)),me(_e("FOCUS_LISTENER",je))),{loading:O,data:P,error:Q,params:q,run:V,cancel:X,refresh:Z,mutate:un,unmount:()=>{Ae.forEach(f=>f())}}},ye=new Map,Ie=e=>{if(he(e))return;const t=ye.get(e);if(!!t)return{data:t.data,cacheTime:t.cacheTime}},Xn=(e,t,n)=>{const o=ye.get(e);o!=null&&o.timer&&clearTimeout(o.timer);const u=setTimeout(()=>ye.delete(e),n);ye.set(e,{data:t,timer:u,cacheTime:new Date().getTime()})},te="__QUERY_DEFAULT_KEY__";function Zn(e,t){const n=Je(Le,{}),fe=$($($({},Ze()),n),t),{cacheKey:o,defaultParams:u=[],manual:g=!1,ready:h=b(!0),refreshDeps:r=[],loadingDelay:d=0,pollingWhenHidden:y=!1,pollingWhenOffline:_=!1,refreshOnWindowFocus:l=!1,refocusTimespan:k=5e3,cacheTime:S=6e5,staleTime:T=0,errorRetryCount:w=0,errorRetryInterval:K=0,queryKey:s}=fe,R=se(fe,["cacheKey","defaultParams","manual","ready","refreshDeps","loadingDelay","pollingWhenHidden","pollingWhenOffline","refreshOnWindowFocus","refocusTimespan","cacheTime","staleTime","errorRetryCount","errorRetryInterval","queryKey"]),i=b(!1),p=b(!1),N=$({initialAutoRunFlag:p,loadingDelay:d,pollingWhenHidden:y,pollingWhenOffline:_,stopPollingWhenHiddenOrOffline:i,cacheKey:o,errorRetryCount:w,errorRetryInterval:K,refreshOnWindowFocus:l,refocusTimespan:k,updateCache:a=>{var I,C;if(!o)return;const Y=(I=Ie(o))===null||I===void 0?void 0:I.data,V=Y==null?void 0:Y.queries,X=zn(a),Z=(C=s==null?void 0:s(...a.params.value))!==null&&C!==void 0?C:te;Xn(o,{queries:Ee($({},V),{[Z]:$($({},V==null?void 0:V[Z]),X)}),latestQueriesKey:Z},S)}},Vn(R,["pagination","listKey"])),z=b(!1),B=b(),j=b(),c=b(),m=oe({[te]:oe(ge(e,N))}),O=b(te),P=M(()=>{var a;return(a=m[O.value])!==null&&a!==void 0?a:{}});if(we(P,a=>{z.value=a.loading,B.value=a.data,j.value=a.error,c.value=a.params},{immediate:!0,deep:!0}),o){var Q;const a=Ie(o);a!=null&&(Q=a.data)!==null&&Q!==void 0&&Q.queries&&(Object.keys(a.data.queries).forEach(I=>{const C=a.data.queries[I];m[I]=oe(ge(e,N,{loading:C.loading,params:C.params,data:C.data,error:C.error}))}),a.data.latestQueriesKey&&(O.value=a.data.latestQueriesKey))}const q=b(),v=b(!1),E=(...a)=>{var I;if(!h.value&&!v.value)return q.value=a,ie;const C=(I=s==null?void 0:s(...a))!==null&&I!==void 0?I:te;return m[C]||(m[C]=oe(ge(e,N))),O.value=C,P.value.run(...a)},W=()=>{G(),O.value=te,m[te]=oe(ge(e,N))},G=()=>{Object.keys(m).forEach(a=>{m[a].cancel(),m[a].unmount(),delete m[a]})},J=()=>P.value.cancel(),ne=()=>P.value.refresh(),ce=a=>P.value.mutate(a);if(!g){var le;p.value=!0;const a=Ie(o),I=(le=a==null?void 0:a.data.queries)!==null&&le!==void 0?le:{},C=a&&(T===-1||a.cacheTime+T>new Date().getTime()),Y=Object.keys(I).length>0;C||(Y?Object.keys(m).forEach(V=>{var X;(X=m[V])===null||X===void 0||X.refresh()}):E(...u)),p.value=!1}const de=b();return de.value=we(h,a=>{v.value=!0,a&&q.value&&(E(...q.value),de.value())},{flush:"sync"}),r.length&&we(r,()=>{!g&&P.value.refresh()}),In(()=>{G()}),{loading:z,data:B,error:j,params:c,cancel:J,refresh:ne,mutate:ce,run:E,reset:W,queries:m}}const sn=e=>(...t)=>{if(be(e))return sn(e(...t))();if(Yn(e))return e;if(en(e)){const n=e,{url:o}=n,u=se(n,["url"]);return We(o,u)}else{if(qn(e))return We(e);throw nn("Unknown service type",!0)}};function xn(e,t){var n,o;const u=sn(e),g={pagination:{currentKey:"current",pageSizeKey:"pageSize",totalKey:"total",totalPageKey:"totalPage"}},h=Je(Le,{}),Q=ze(g,{pagination:(n=Ze().pagination)!==null&&n!==void 0?n:{}},{pagination:(o=h.pagination)!==null&&o!==void 0?o:{}},t!=null?t:{}),{pagination:{currentKey:r,pageSizeKey:d,totalKey:y,totalPageKey:_},queryKey:l}=Q,k=se(Q,["pagination","queryKey"]);l&&nn("usePagination does not support concurrent request");const S=ze({defaultParams:[{[r]:1,[d]:10}]},k),q=Zn(u,S),{data:T,params:w,queries:K,run:s,reset:R}=q,i=se(q,["data","params","queries","run","reset"]),p=v=>{const[E,...W]=w.value,J=[$($({},E),v),...W];s(...J)},D=v=>{p({[r]:v})},N=v=>{p({[d]:v})},z=(v,E)=>{p({[r]:v,[d]:E})},B=b(!1),j=()=>Te(this,null,function*(){const{defaultParams:v,manual:E}=S;R(),E||(B.value=!0,yield s(...v),B.value=!1)}),c=M(()=>Ye(T.value,y,0)),m=M({get:()=>{var v,E;return(v=(E=w.value[0])===null||E===void 0?void 0:E[r])!==null&&v!==void 0?v:S.defaultParams[0][r]},set:v=>{D(v)}}),O=M({get:()=>{var v,E;return(v=(E=w.value[0])===null||E===void 0?void 0:E[d])!==null&&v!==void 0?v:S.defaultParams[0][d]},set:v=>{N(v)}}),P=M(()=>Ye(T.value,_,Math.ceil(c.value/O.value)));return $({data:T,params:w,current:m,pageSize:O,total:c,totalPage:P,reloading:B,run:s,changeCurrent:D,changePageSize:N,changePagination:z,reload:j},i)}const et="YYYY-MM-DD HH:mm:ss",nt="YYYY-MM-DD ";function tt(e=void 0,t=et){return Fe(e).format(t)}function Ve(e=void 0,t=nt){return Fe(e).format(t)}const ot=Pe({props:["bordered","hiddenFilter","url","columns","actions","button","items","model","resKey","scroll"],setup(e){const{hasPermission:t}=An(),{data:n,run:o,loading:u,current:g,pageSize:h,total:r,refresh:d}=xn(e.url,{pagination:{pageSizeKey:"limit",currentKey:"page"}}),y=M(()=>{var i;return(i=e.bordered)!=null?i:!0}),_=M(()=>{var i,p;return((p=n.value)==null?void 0:p[((i=e==null?void 0:e.resKey)==null?void 0:i.list)||"list"])||[]}),l=M(()=>({total:r.value,current:g.value,pageSize:h.value,showQuickJumper:!0,showSizeChanger:!0,showTotal:()=>Rn("span",{},`\u5171 ${r.value} \u6761`)})),k=(i,p,D)=>{o($({limit:i.pageSize,page:i==null?void 0:i.current,sortField:D.field,sortOrder:D.order},p))},S=M(()=>(Ue(e.actions)||[]).filter(i=>t(i.auth)).map(i=>{const{popConfirm:p}=i;return Ee($($({type:"link"},i),p||{}),{enable:!!p})})),T=M(()=>e.model),w=M(()=>e.button),K=M(()=>e.items);return{dataSource:_,loading:u,pagination:l,hasBordered:y,handleTableChange:k,run:o,refresh:d,getActions:S,tableFilterModel:T,tableFilterButton:w,tableFilterItems:K,onSearch:()=>{const i=Ue(T.value)||{};i&&Object.keys(i).map(p=>{i[p]&&Fe.isMoment(i[p])&&(i[p]=Ve(i[p]))}),o($({page:g.value,limit:h.value},i))},formatDate:(i,p="date")=>{const D=p==="date"?Ve:tt;return i.length===10?D(Number(i)*1e3):D(i)}}}}),at={class:"table-component"},rt=["type"],lt=["onClick","type"];function st(e,t,n,o,u,g){const h=Bn,r=Fn,d=Ln,y=Dn;return L(),ae("div",at,[ee(h,{button:e.tableFilterButton,items:e.tableFilterItems,model:e.tableFilterModel,hiddenFilter:e.hiddenFilter,pagination:null,onOnSearch:e.onSearch},null,8,["button","items","model","hiddenFilter","onOnSearch"]),ee(y,{class:Pn(["ant-table-striped",{border:e.hasBordered}]),rowClassName:(_,l)=>l%2===1?"table-striped":null,dataSource:e.dataSource,columns:e.columns,rowKey:_=>_.id,pagination:e.pagination,loading:e.loading,onChange:e.handleTableChange,scroll:e.scroll},{toDate:A(({text:_})=>[Ce("span",null,re(_?e.formatDate(_):"-"),1)]),toDateTime:A(({text:_})=>[Ce("span",null,re(_?e.formatDate(_,"time"):"-"),1)]),action:A(({record:_})=>[(L(!0),ae(Re,null,Ge(e.getActions,(l,k)=>(L(),ae(Re,{key:`${k}-${l.label}`},[l.enable?(L(),H(r,{key:0,title:l==null?void 0:l.title,onConfirm:S=>l==null?void 0:l.onConfirm(_),onCancel:S=>l==null?void 0:l.onCancel(_)},{default:A(()=>[Ce("a",{onClick:t[0]||(t[0]=$n(()=>{},["prevent"])),type:l.type},re(l.label),9,rt)]),_:2},1032,["title","onConfirm","onCancel"])):(L(),ae("a",{key:1,onClick:S=>l==null?void 0:l.onClick(_),type:l.type},re(l.label),9,lt)),k<e.getActions.length-1?(L(),H(d,{key:2,type:"vertical"})):ke("",!0)],64))),128))]),_:1},8,["class","rowClassName","dataSource","columns","rowKey","pagination","loading","onChange","scroll"])])}var ft=Xe(ot,[["render",st],["__scopeId","data-v-b69de9d8"]]);export{ft as _};

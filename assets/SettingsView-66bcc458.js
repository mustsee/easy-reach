import{p,j as E,o as l,c as d,e,F as f,m as w,t as g,l as C,y as $,n as N,q as x,B,C as O,D as U,E as T,a as J,b as P,h as V,g as k,w as S,x as R,G as j,v as z,k as G,S as H}from"./index-a3644dfe.js";import{u as W,S as K}from"./SelectSkeleton-df0ef3ec.js";const Q=e("div",{class:"text-xl mb-4"},"Sender Names",-1),X={class:"table-auto mb-4"},Y=e("thead",null,[e("tr",null,[e("th",{class:"font-medium border py-1 px-4"},"Name"),e("th",{class:"font-medium border py-1 px-3"},"Delete")])],-1),Z={class:"border py-1 px-4 text-center"},ee=["onClick"],te={class:"flex flex-wrap gap-4 mb-2"},se={__name:"SenderName",async setup(A){let i,_;const b=W(),n=p(""),a=p(([i,_]=E(()=>x("senders","created_at")),i=await i,_(),i)),m=async u=>{await B("senders",u);const c=await x("senders","created_at");a.value=c,b.setSenders(c)},r=async()=>{await O("senders",{name:n.value,created_at:U.now()});const u=await x("senders","created_at");a.value=u,b.setSenders(u),n.value=""};return(u,c)=>(l(),d("div",null,[Q,e("table",X,[Y,e("tbody",null,[(l(!0),d(f,null,w(a.value,v=>(l(),d("tr",null,[e("td",Z,g(v.name),1),e("td",{onClick:D=>m(v.id),class:"text-sm border hover:bg-gray-100 py-1 px-2 text-center cursor-pointer"}," DEL ",8,ee)]))),256))])]),e("div",te,[C(e("input",{"onUpdate:modelValue":c[0]||(c[0]=v=>n.value=v),type:"text",placeholder:"Add sender name",class:"py-2 px-4 border border-gray-200 rounded focus:shadow-md focus:outline-none"},null,512),[[$,n.value]]),e("div",null,[e("button",{onClick:r,class:N(`${!n.value&&"opacity-25 pointer-events-none"} bg-white hover:bg-gray-100 py-2 px-4 border border-gray-200 rounded w-24`)}," Add ",2),e("button",{onClick:c[1]||(c[1]=v=>n.value=""),class:"ml-4 bg-white hover:bg-gray-100 py-2 px-4 border border-gray-200 rounded w-24"}," Cancel ")])])]))}};const ae={class:"text-xl mb-4 flex items-center"},oe=["title"],le={key:0,class:"table-auto mb-4"},ne=e("thead",null,[e("tr",null,[e("th",{class:"font-medium border py-1 px-4"},"Name"),e("th",{class:"font-medium border py-1 px-4"},"Variables"),e("th",{class:"font-medium border py-1 px-4"},"Text"),e("th",{class:"font-medium border py-1 px-3"},"Delete")])],-1),re={class:"border py-1 px-4 text-center"},de={class:"border py-1 px-4 text-center"},ue={class:"border py-2 px-4 whitespace-pre-wrap"},ce=["onClick"],ie=e("option",{disabled:"",value:""},"Variables",-1),pe=["value","disabled"],me={class:"flex flex-wrap"},ve=["onClick"],_e=e("div",{class:"ml-2 mr-1"},"x",-1),be={class:"mt-4"},ye={__name:"Messages",async setup(A){let i,_;const b=p(([i,_]=E(()=>x("messages","created_at")),i=await i,_(),i)),n=p(""),a=p(""),m=p(""),r=p([]),u=p(!0),c=p(null),v=["guestFirstName","senderName","dayOfWeek","checkinTime","roomNumber"];T(a,o=>{r.value.length&&r.value.forEach(s=>{o.includes(`--${s}--`)||(r.value=r.value.filter(t=>t!==s))})}),T(m,o=>{if(!o)return;const s=c.value.selectionStart,h=c.value.selectionEnd;a.value=a.value.substring(0,s)+`--${o}--`+a.value.substring(h,a.value.length),r.value.push(o),m.value=""});const D=o=>{let s="";return o.split(" ").forEach((t,y)=>{y===0?s+=t.toLowerCase():s+=t.charAt(0).toUpperCase()+t.slice(1)}),s},I=o=>{console.log("selection",o),a.value=a.value.replace(`--${o}--`,""),r.value=r.value.filter(s=>s!==o)},L=async()=>{const o={custom:!0,messageType:D(n.value),variables:r.value,name:n.value,text:JSON.stringify(a.value),created_at:U.now()};await O("messages",o);const s=await x("messages","created_at");b.value=s,M()},F=async o=>{await B("messages",o);const s=await x("messages","created_at");b.value=s},q=J(()=>!a.value||!n.value),M=()=>{a.value="",n.value="",m.value="",r.value=[]};return(o,s)=>{const h=P("ArrowDownIcon");return l(),d("div",null,[e("div",ae,[V(" Custom messages "),e("span",{onClick:s[0]||(s[0]=t=>u.value=!u.value),class:N([!u.value&&"rotate-180","inline-block w-7 h-7 p-1 ml-2 bg-gray-200 rounded-lg cursor-pointer"]),title:u.value?"Hide custom messages":"Display custom messages"},[k(h)],10,oe)]),k(j,null,{default:S(()=>[u.value?(l(),d("table",le,[ne,e("tbody",null,[(l(!0),d(f,null,w(b.value,t=>(l(),d("tr",{key:t.id},[e("td",re,g(t.name),1),e("td",de,[e("ul",null,[(l(!0),d(f,null,w(t.variables,y=>(l(),d("li",{key:y},g(y),1))),128))])]),e("td",ue,g(JSON.parse(t.text)),1),e("td",{onClick:y=>F(t.id),class:"text-sm border hover:bg-gray-100 py-1 px-2 text-center cursor-pointer"}," DEL ",8,ce)]))),128))])])):R("",!0)]),_:1}),C(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>n.value=t),type:"text",placeholder:"Add message name",class:"py-2 px-4 w-full md:w-1/4 border border-gray-200 rounded focus:shadow-md focus:outline-none mb-4"},null,512),[[$,n.value]]),k(K,{class:"mb-4 w-full md:w-1/4"},{default:S(()=>[C(e("select",{"onUpdate:modelValue":s[2]||(s[2]=t=>m.value=t),class:"select",name:"variable",id:"variable"},[ie,(l(),d(f,null,w(v,t=>e("option",{value:t,disabled:r.value.includes(t)},g(t),9,pe)),64))],512),[[z,m.value]])]),_:1}),e("div",me,[(l(!0),d(f,null,w(r.value,t=>(l(),d("div",{onClick:y=>I(t),key:t,class:"border py-1 px-3 rounded-full flex bg-gray-100 cursor-pointer mr-3 mb-4"},[V(g(t)+" ",1),_e],8,ve))),128))]),C(e("textarea",{ref_key:"textareaRef",ref:c,"onUpdate:modelValue":s[3]||(s[3]=t=>a.value=t),rows:"6",spellcheck:"false",placeholder:"Text to be sent to the guest",class:"flex w-full md:w-2/3 py-2 px-4 focus:shadow-sm focus:outline-none border",name:"output"},null,512),[[$,a.value]]),e("div",be,[e("button",{onClick:L,class:N(`${q.value&&"opacity-25 pointer-events-none"} bg-white hover:bg-gray-100 py-2 px-4 border border-gray-200 rounded w-24`)}," Add ",2),e("button",{onClick:M,class:"ml-4 bg-white hover:bg-gray-100 px-4 py-2 border border-gray-200 rounded w-24"}," Cancel ")])])}}},ge={class:"my-8"},xe={class:"grid grid-flow-row gap-6"},he=e("div",null,"loading...",-1),ke={__name:"SettingsView",setup(A){return(i,_)=>(l(),d("div",ge,[(l(),G(H,null,{fallback:S(()=>[he]),default:S(()=>[e("div",xe,[k(se),k(ye)])]),_:1}))]))}};export{ke as default};

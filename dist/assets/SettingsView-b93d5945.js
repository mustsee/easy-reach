import{r as p,i as h,o,c as d,a as e,F as _,e as w,w as g,j as x,n as f,q as i,k as S,l as k,t as C,m as N,h as $,p as m,S as B,g as A}from"./index-f4d21588.js";import{u as D}from"./ArrivalsOptionsStore-a60d4056.js";const V=e("div",{class:"text-xl mb-4"},"Sender Names",-1),q={class:"table-auto mb-4 w-96"},E=e("thead",null,[e("tr",null,[e("th",{class:"font-medium border w-64 py-1"},"Name"),e("th",{class:"font-medium border w-24 py-1"},"Delete")])],-1),F={class:"border py-1 text-center"},L=["onClick"],j={class:"flex gap-4 mb-2"},z={__name:"SenderName",async setup(b){let a,l;const u=D(),t=p(""),c=p(([a,l]=h(()=>i("senders")),a=await a,l(),a)),y=async n=>{N("senders",n);const s=await i("senders");c.value=s,u.setSenderNames(s)},v=async()=>{S("senders",{name:t.value,created_at:k.now()});const n=await i("senders");c.value=n,u.setSenderNames(n),t.value=""};return(n,s)=>(o(),d(_,null,[V,e("table",q,[E,e("tbody",null,[(o(!0),d(_,null,w(c.value,r=>(o(),d("tr",null,[e("td",F,C(r.name),1),e("td",{onClick:T=>y(r.id),class:"text-sm border hover:bg-gray-100 px-12 py-1 cursor-pointer"}," DEL ",8,L)]))),256))])]),e("div",j,[g(e("input",{"onUpdate:modelValue":s[0]||(s[0]=r=>t.value=r),type:"text",placeholder:"Add new sender name",class:"py-2 px-4 border border-gray-200 rounded focus:shadow-md focus:outline-none"},null,512),[[x,t.value]]),e("button",{onClick:v,class:f(`${!t.value&&"opacity-25 pointer-events-none"} bg-white hover:bg-gray-100 py-2 px-4 border border-gray-200 rounded w-24`)}," Add ",2),e("button",{onClick:s[1]||(s[1]=r=>t.value=""),class:"bg-white hover:bg-gray-100 py-2 px-4 border border-gray-200 rounded w-24"}," Cancel ")])],64))}},M={class:"my-8"},O=e("div",null,"loading...",-1),H={__name:"SettingsView",setup(b){return(a,l)=>(o(),d("div",M,[(o(),$(B,null,{fallback:m(()=>[O]),default:m(()=>[A(z)]),_:1}))]))}};export{H as default};
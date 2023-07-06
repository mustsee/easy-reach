import{d as z,f as H,q as G,r as $,o as l,c,a as e,n as m,t as h,u as g,_ as D,b as x,w as O,e as S,v as C,F as w,g as N,h as _,i as f,j as A,k as I,S as E,p as P,l as j,m as V,s as L,x as T,y as U}from"./index-2e178a38.js";import{u as M}from"./ArrivalsOptionsStore-5cda2fcd.js";const F=z("date",{state:()=>({currentDate:null,options:{weekday:"long",year:"numeric",month:"long",day:"numeric"}}),getters:{displayDate(s){if(s.currentDate)return s.currentDate.toLocaleDateString("en-GB",s.options)},apiDate(s){const{currentDate:t}=s;if(t){let n=t.getTimezoneOffset();return new Date(t.setHours(t.getHours()+n/60)).toISOString().split("T")[0].replace(/-/g,"")}},fireStoreDate(s){const{currentDate:t}=s;if(t){let n=t.getTimezoneOffset();return new Date(t.setHours(t.getHours()+n/60)).toISOString().split("T")[0]}}},actions:{setCurrentDate(s){this.currentDate=s}}}),W=z("messages",{state:()=>({messages:[{messageType:"defaultWelcomeMessage",name:"Default welcome message",variables:["guestFirstName","senderName","dayOfWeek"],text:`Hi --guestFirstName--, this is --senderName-- from the Princes Street Hostel, I hope you are well and thanks again for booking with us. Could you please let us know what time you will be arriving on --dayOfWeek--?
Please bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`},{messageType:"withArrivalTime",name:"With arrival time",variables:["guestFirstName","senderName","dayOfWeek","checkinTime"],text:`Hi --guestFirstName--, this is --senderName-- from the Princes Street Hostel, I hope you are well and thanks again for booking with us. We look forward to welcoming you on --dayOfWeek-- --checkinTime--.
Please bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`},{messageType:"earlyCheckin",name:"Early Checkin",variables:["guestFirstName","senderName","dayOfWeek","checkinTime"],text:`Hi --guestFirstName--, this is --senderName-- from the Princes Street Hostel, I hope you are well and thanks again for booking with us. We look forward to welcoming you on --dayOfWeek-- --checkinTime--.
Our official check-in time is at 3pm, however you are very welcome to leave your luggage here at reception, then you are free to explore Edinburgh!
Please bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`},{messageType:"lateCheckin",name:"Late Checkin",variables:["guestFirstName","senderName","roomNumber"],text:`Hello --guestFirstName--, this is --senderName-- from the Princes Street Hostel.
As you are checking in at a time when the reception will be closed, I have put your key in an envelope with your name on it, next to the check out box which is located directly on your right as you walk through the front door.
The door code to enter the hostel is 2805. Your room number is --roomNumber--. Turn to your left as you walk in, go down the corridor and there you will find signs to your room. Sorry for the inconvenience and thank you for your understanding.
There are bathrooms and showers on your floor as well as next to reception if yours are busy in the morning. And please switch off any lights you switch on.
For late night food, McDonalds is open.
There is no one at reception just now (although staff is on site in case of emergency) until tomorrow morning 8.30am so just pop by to say hi!`},{messageType:"emailMessage",name:"Email Message",variables:["guestFirstName","senderName","dayOfWeek"],text:`Hi --guestFirstName--, this is --senderName--, I hope you are well and thanks again for booking with us.
Could you please let us know what time you will be arriving --dayOfWeek-- and also if you have a WhatsApp number?
Please bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`},{messageType:"other",name:"Custom",variables:[],text:"Write here custom message"}]}),getters:{},actions:{}}),b=F(),q=W(),y=M(),k=z("bookings",{state:()=>({bookings:null}),getters:{getBookings(s){return s.bookings?s.bookings[b.apiDate]:null},getNumberOfGuests(){return this.getBookings?this.getBookings.length:0},filteredBookings(){const s=y.currentTypeFilter,t=y.currentStatus;let n=this.getBookings;return s!=="all"&&(n=n.filter(o=>o.type===s)),t!=="all"&&(n=n.filter(o=>o.status===t)),n}},actions:{setMessage(s,t){let n=this.bookings[b.apiDate].map(o=>{if(o.bookId===s){o.messageType=t,t==="emailMessage"?o.type="email":t!=="other"&&(o.type="whatsapp");const a=q.messages.find(v=>v.messageType===t),{text:i,variables:r}=a,u=y.currentSender?y.currentSender:"--senderName--";let d=i;for(const v of r){let p=o[v]?o[v]:v==="senderName"?u:`--${v}--`;d=d.replace(`--${v}--`,p)}o.text=d}return o});this.bookings={...this.bookings,[b.apiDate]:n}},setCurrentText(s,t){let n=this.bookings[b.apiDate].map(o=>(o.bookId===s&&(o.text=t),o));this.bookings={...this.bookings,[b.apiDate]:n}},setSenderName(s){let t=this.bookings[b.apiDate].map(n=>{const o=y.lastSender,{text:a}=n;let i=a.search("--senderName--"),r;return i!==-1?r=a.replace("--senderName--",s):r=a.replace(o,s),n.text=r,n});this.bookings={...this.bookings,[b.apiDate]:t},y.setLastSender(s)},async writeGuestsData(s=!1){try{let t="getArrivals?date="+b.apiDate+(s?"&updateData=true":"");const o=await(await fetch(H+t)).json();if(o.success)return o}catch{console.log("Error in writeGuestsData: ",error)}},async loadGuestsData(){try{const s=await G(`guests/${b.apiDate}/bookings`,"guestName");this.bookings={...this.bookings,[b.apiDate]:s},y.currentSender&&this.setSenderName(y.currentSender)}catch(s){console.log("Error in loadGuestsData: ",s)}},async updateCardStatus(s,t){}}}),R={class:"p-4 flex items-center h-full"},J={class:"flex-1 flex items-center justify-center text-gray-500"},K=e("svg",{fill:"currentColor",class:"py-1 px-2 w-10 h-8 border bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 hover:text-gray-600",viewBox:"0 0 24 24"},[e("path",{d:"m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z"})],-1),Y=[K],Q={class:"flex items-center justify-center text-sm sm:text-base text-center tracking-wider font-medium uppercase text-gray-500 px-2 sm:px-8 sm:w-96 select-none"},X=e("svg",{fill:"currentColor",class:"py-1 px-2 w-10 h-8 cursor-pointer hover:text-gray-600",viewBox:"0 0 24 24"},[e("path",{d:"M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z"})],-1),Z=[X],ee=e("svg",{fill:"currentColor",class:"py-1 px-2 w-10 h-8 border bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 hover:text-gray-600",viewBox:"0 0 24 24"},[e("path",{d:"m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"})],-1),te=[ee],se=-10,oe=10,ne={__name:"Date",props:["removeBorder"],setup(s){const t=F(),n=k(),o=$(0),a=$(!1),i=$(!1);let r=new Date;if(!t.currentDate){let p=new Date(r.setDate(r.getDate()+2));t.setCurrentDate(p)}const u=()=>{if(a.value)return;a.value=!0,o.value-=1;let p=new Date(t.currentDate.setDate(t.currentDate.getDate()-1));t.setCurrentDate(p),n.loadGuestsData().finally(()=>a.value=!1)},d=()=>{if(a.value)return;a.value=!0,o.value+=1;let p=new Date(t.currentDate.setDate(t.currentDate.getDate()+1));t.setCurrentDate(p),n.loadGuestsData().finally(()=>a.value=!1)},v=()=>{i.value||(i.value=!0,n.writeGuestsData(!0).then(p=>{p.length>0&&n.loadGuestsData()}).catch(p=>console.log("Error in handleLoadData function: ",p)),setTimeout(()=>i.value=!1,5e3))};return(p,qt)=>(l(),c("div",{class:m(`min-w-0 overflow-hidden ${s.removeBorder?"":"border-2 border-gray-100"} bg-white`)},[e("div",R,[e("div",J,[e("span",{onClick:u,class:m([o.value>se?"":"pointer-events-none opacity-50",a.value?"pointer-events-none opacity-50":""])},Y,2),e("p",Q,[e("span",null,h(g(t).displayDate),1),e("span",{onClick:v,class:m([i.value?"pointer-events-none opacity-50":""])},Z,2)]),e("span",{onClick:d,class:m([o.value<oe?"":"pointer-events-none opacity-50",a.value?"pointer-events-none opacity-50":""])},te,2)])])],2))}},ae={props:["color","numberOfGuests"]},re={class:m("min-w-0 overflow-hidden shadow-md bg-white border-t-4 border-blue-500")},le={class:"p-4 flex items-center"},ie=e("div",{class:m("p-3 rounded-full text-blue-500 bg-blue-100 mr-4")},[e("svg",{fill:"currentColor",viewBox:"0 0 20 20",class:"w-5 h-5"},[e("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"})])],-1),ce=e("p",{class:"mb-2 text-sm font-normal text-gray-600"},"Guests",-1),de={class:"text-base font-normal text-gray-700"};function ue(s,t,n,o,a,i){return l(),c("div",re,[e("div",le,[ie,e("div",null,[ce,e("p",de,h(n.numberOfGuests),1)])])])}const me=D(ae,[["render",ue]]),he={props:["color","done","total"]},ge={class:m("min-w-0 overflow-hidden shadow-md bg-white border-t-4 border-blue-500")},pe={class:"p-4 flex items-center"},fe=e("div",{class:m("p-3 rounded-full text-blue-500 bg-blue-100 mr-4")},[e("svg",{fill:"currentColor",class:"w-5 h-5",viewBox:"0 0 24 24"},[e("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"})])],-1),ve={class:"pr-4"},be=e("p",{class:"mb-2 text-sm font-normal text-gray-600"},"WhatsApp",-1),_e={class:"text-base font-normal text-gray-700"};function ye(s,t,n,o,a,i){return l(),c("div",ge,[e("div",pe,[fe,e("div",ve,[be,e("p",_e,h(n.done)+" / "+h(n.total),1)])])])}const xe=D(he,[["render",ye]]),we={props:["color","done","total"]},ke={class:m("min-w-0 overflow-hidden shadow-md bg-white border-t-4 border-blue-500")},$e={class:"p-4 flex items-center"},De=e("div",{class:m("p-3 rounded-full text-blue-500 bg-blue-100 mr-4")},[e("svg",{fill:"currentColor",class:"w-5 h-5",viewBox:"0 0 24 24"},[e("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"})])],-1),Se=e("p",{class:"mb-2 text-sm font-normal text-gray-600"},"Email",-1),Ne={class:"text-base font-normal text-gray-700"};function Te(s,t,n,o,a,i){return l(),c("div",ke,[e("div",$e,[De,e("div",null,[Se,e("p",Ne,h(n.done)+" / "+h(n.total),1)])])])}const Be=D(we,[["render",Te]]),Ce={props:["color","total","progress"]},Me={class:m("min-w-0 overflow-hidden shadow-md bg-white border-t-4 border-blue-500")},ze={class:"p-4 flex items-center"},Oe=e("div",{class:m("p-3 rounded-full text-blue-500 bg-blue-100 mr-4")},[e("svg",{fill:"currentColor",class:"w-5 h-5",viewBox:"0 0 24 24"},[e("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z"})])],-1),Ie=e("p",{class:"mb-2 text-sm font-normal text-gray-600"},"Progression",-1),Ge={class:"text-base font-normal text-gray-700"},Ae=e("span",{class:"font-light"},"/",-1);function Le(s,t,n,o,a,i){return l(),c("div",Me,[e("div",ze,[Oe,e("div",null,[Ie,e("p",Ge,[x(h(n.progress)+" ",1),Ae,x(" "+h(n.total),1)])])])])}const Fe=D(Ce,[["render",Le]]),We={class:"min-w-0 overflow-hidden bg-white"},He={class:"w-full sm:py-4 flex items-center"},Ee=e("option",{disabled:"",value:""},"Sender name",-1),Pe=["value"],je=e("div",{class:"pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-3 text-gray-700"},[e("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),Ve={__name:"SenderName",props:["removeBorder"],async setup(s){let t,n;const o=M(),a=k();let i=([t,n]=O(()=>G("senders","created_at")),t=await t,n(),t);return[t,n]=O(()=>o.setSenders(i.map(r=>r.name))),await t,n(),o.$subscribe((r,u)=>{a.setSenderName(u.currentSender)}),(r,u)=>(l(),c("div",We,[e("div",He,[e("div",{class:m(`relative flex flex-1 text-base font-normal text-gray-700 ${s.removeBorder?"":"border-2 border-gray-100"}`)},[S(e("select",{"onUpdate:modelValue":u[0]||(u[0]=d=>g(o).currentSender=d),class:"appearance-none w-full py-2 pl-3 pr-10 bg-white focus:outline-none",name:"senderName",id:"senderName"},[Ee,(l(!0),c(w,null,N(g(o).senders,d=>(l(),c("option",{value:d},h(d),9,Pe))),256))],512),[[C,g(o).currentSender]]),je],2)])]))}},Ue={class:"min-w-0 overflow-hidden bg-white"},qe={class:"w-full sm:py-4 flex items-center"},Re=e("option",{disabled:""},"Message type",-1),Je=["value"],Ke=e("div",{class:"pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-3 text-gray-700"},[e("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),Ye={__name:"MessageTypes",props:["removeBorder"],setup(s){const t=M();return t.currentTypeFilter||t.setCurrentTypeFilter(t.typeFilters[0].value),(n,o)=>(l(),c("div",Ue,[e("div",qe,[e("div",{class:m(`flex flex-1 relative text-gray-700 bg-white ${s.removeBorder?"":"border-2 border-gray-100"}`)},[S(e("select",{"onUpdate:modelValue":o[0]||(o[0]=a=>g(t).currentTypeFilter=a),class:"appearance-none w-full py-2 pl-3 pr-10 bg-white focus:outline-none",name:"type",id:"type"},[Re,(l(!0),c(w,null,N(g(t).typeFilters,a=>(l(),c("option",{value:a.value},h(a.displayName),9,Je))),256))],512),[[C,g(t).currentTypeFilter]]),Ke],2)])]))}},Qe={class:"min-w-0 overflow-hidden bg-white"},Xe={class:"w-full sm:py-4 flex items-center"},Ze=e("option",{disabled:""},"Status",-1),et=["value"],tt=e("div",{class:"pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-3 text-gray-700"},[e("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),st={__name:"Status",props:["removeBorder"],setup(s){const t=M();return t.currentStatus||t.setCurrentStatus(t.statuses[0].value),(n,o)=>(l(),c("div",Qe,[e("div",Xe,[e("div",{class:m(`flex flex-1 relative text-gray-700 bg-white ${s.removeBorder?"":"border-2 border-gray-100"}`)},[S(e("select",{"onUpdate:modelValue":o[0]||(o[0]=a=>g(t).currentStatus=a),class:"appearance-none w-full py-2 pl-3 pr-10 bg-white focus:outline-none",name:"status",id:"status"},[Ze,(l(!0),c(w,null,N(g(t).statuses,a=>(l(),c("option",{value:a.value},h(a.displayName),9,et))),256))],512),[[C,g(t).currentStatus]]),tt],2)])]))}};const ot=s=>(P("data-v-995af429"),s=s(),j(),s),nt={class:"grid gap-6 my-8 sm:grid-cols-12"},at=ot(()=>e("div",null,"loading...",-1)),B="blue",rt=!0,lt={__name:"ArrivalsMenu",props:["numberOfGuests","bookings"],setup(s){const t=s,n=_(()=>t.bookings?t.bookings.filter(d=>{if(d.status==="done"&&d.type==="whatsapp")return!0}).length:0),o=_(()=>t.bookings?t.bookings.filter(d=>{if(d.type==="whatsapp")return!0}).length:0),a=_(()=>t.bookings?t.bookings.filter(d=>{if(d.status==="done"&&d.type==="email")return!0}).length:0),i=_(()=>t.bookings?t.bookings.filter(d=>{if(d.type==="email")return!0}).length:0),r=_(()=>t.bookings?t.bookings.filter(d=>{if(d.status==="done")return!0}).length:0),u=_(()=>t.bookings?i.value+o.value:0);return(d,v)=>(l(),c("div",nt,[f(ne,{class:"col-span-12",removeBorder:rt}),f(me,{class:"col-span-12 sm:col-span-6 lg:col-span-3",numberOfGuests:s.numberOfGuests,color:B},null,8,["numberOfGuests"]),f(xe,{class:"col-span-12 sm:col-span-6 lg:col-span-3",done:n.value,total:o.value,color:B},null,8,["done","total"]),f(Be,{class:"col-span-12 sm:col-span-6 lg:col-span-3",done:a.value,total:i.value,color:B},null,8,["done","total"]),f(Fe,{class:"col-span-12 sm:col-span-6 lg:col-span-3",progress:r.value,total:u.value,color:B},null,8,["progress","total"]),(l(),A(E,null,{fallback:I(()=>[at]),default:I(()=>[f(Ve,{class:"col-span-12 sm:col-span-4",removeBorder:!1})]),_:1})),f(Ye,{class:"col-span-12 sm:col-span-4",removeBorder:!1}),f(st,{class:"col-span-12 sm:col-span-4",removeBorder:!1})]))}},it=D(lt,[["__scopeId","data-v-995af429"]]);const ct={class:"relative border border-gray-300 text-gray-800 bg-white shadow-md"},dt=["name","id"],ut=["value"],mt=e("div",{class:"pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l border-gray-300"},[e("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),ht={__name:"SelectComponent",props:["bookId","messageType"],setup(s){const t=s,n=W(),o=k(),a=_({get(){return t.messageType},set(i){o.setMessage(t.bookId,i)}});return(i,r)=>(l(),c("div",ct,[S(e("select",{class:"appearance-none w-full py-1 px-2 bg-white focus:outline-none",name:"messages-"+s.bookId,id:"messages-"+s.bookId,"onUpdate:modelValue":r[0]||(r[0]=u=>a.value=u)},[(l(!0),c(w,null,N(g(n).messages,u=>(l(),c("option",{value:u.messageType},h(u.name),9,ut))),256))],8,dt),[[C,a.value]]),mt]))}};const gt={class:"border border-gray-300 rounded flex flex-col text-gray-800 bg-white shadow-md"},pt=e("div",{class:"bg-gray-200 px-3 py-2 border-b border-gray-300"},[e("h3",{class:"text-sm text-left font-medium"},"Output")],-1),ft={__name:"TextareaComponent",props:["bookId","text"],setup(s){const t=s,n=k(),o=_({get(){return t.text},set(a){n.setCurrentText(t.bookId,a)}});return(a,i)=>(l(),c("div",gt,[pt,S(e("textarea",{"onUpdate:modelValue":i[0]||(i[0]=r=>o.value=r),rows:"6",spellcheck:"false",placeholder:"Text to be sent to the guest",class:"flex-1 p-2 m-1 focus:outline-none",name:"output"},null,512),[[V,o.value]])]))}};const vt={class:"pb-6"},bt={class:"shadow-md lg:flex"},_t={class:"flex-1 px-6 py-8 bg-white lg:p-12"},yt={class:"text-2xl font-extrabold text-gray-900 sm:text-3xl"},xt={class:"mt-6 text-base text-gray-500 truncate"},wt={key:0},kt=e("br",null,null,-1),$t=e("br",null,null,-1),Dt={class:"mt-8"},St=e("div",{class:"flex items-center"},[e("h4",{class:"flex-shrink-0 pr-4 text-sm font-semibold tracking-wider uppercase bg-white"}," Guest infos "),e("div",{class:"flex-1 border-t-2 border-gray-200"})],-1),Nt={class:"mt-8 space-y-5"},Tt={class:"lg:col-span-1"},Bt=e("p",{class:"text-gray-900"},"Arrival time",-1),Ct={class:"text-sm text-gray-700"},Mt={class:"lg:col-span-1"},zt=e("p",{class:"text-gray-900"},"Comments",-1),Ot=["innerHTML"],It={key:0,class:"lg:w-3/5 px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"},Gt={class:"mt-8"},At=U('<span class="w-6 h-6 ml-2"><svg viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-tabler"><rect width="18" height="14" x="3" y="5" rx="2"></rect><path d="m3 7 9 6 9-6"></path></g></svg></span>',1),Lt={key:1,class:"action-button rounded-md shadow"},Ft=["href"],Wt=e("span",{class:"w-6 h-6 ml-2"},[e("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[e("path",{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"})])],-1),Ht={__name:"Card",props:["booking"],setup(s){const t=s,n=k();L(()=>{});const o=_(()=>{let r=encodeURI(t.booking.text);return`https://web.whatsapp.com/send?phone=${t.booking.phone}&text=${r}`}),a=r=>{this.booking.email,JSON.stringify(this.text)},i=(r,u)=>{n.updateCardStatus(r,u)};return(r,u)=>(l(),c("div",vt,[e("div",bt,[e("div",_t,[e("h3",yt,h(s.booking.name),1),e("p",xt,[s.booking.groupReservation?(l(),c("span",wt,[x("(group of "+h(s.booking.personsInGroup)+")",1),kt])):T("",!0),x(" "+h(s.booking.phone?s.booking.phone:"No phone")+" ",1),$t,x(" "+h(s.booking.email?s.booking.email:"No email"),1)]),e("div",Dt,[St,e("ul",Nt,[e("li",Tt,[Bt,e("p",Ct,h(s.booking.arrivalTime?s.booking.arrivalTime:"No data"),1)]),e("li",Mt,[zt,e("p",{class:"text-sm text-gray-700",innerHTML:`${s.booking.guestCommentsModified?s.booking.guestCommentsModified:"No data"}`},null,8,Ot)])])])]),s.booking.status==="todo"?(l(),c("div",It,[f(ht,{bookId:s.booking.bookId,messageType:s.booking.messageType},null,8,["bookId","messageType"]),f(ft,{bookId:s.booking.bookId,text:s.booking.text,class:"mt-6"},null,8,["bookId","text"]),e("div",Gt,[s.booking.type==="email"?(l(),c("div",{key:0,class:m(["action-button rounded-md shadow cursor-pointer",["flex items-center justify-center w-full px-5 py-3 text-base font-medium text-red-600 border border-red-600 bg-white rounded-md hover:bg-red-200 transition-all"]]),onClick:u[0]||(u[0]=d=>a(s.booking.id))},[x(" Send email "),At])):T("",!0),s.booking.type==="whatsapp"?(l(),c("div",Lt,[e("a",{onClick:u[1]||(u[1]=d=>i(s.booking.bookId,"inProgress")),href:o.value,class:m(["flex items-center justify-center w-full px-5 py-3 text-base font-medium text-green-600 border border-green-600 bg-white rounded-md hover:bg-green-200 transition-all"]),target:"_blank"},[x(" Open in "),Wt],8,Ft)])):T("",!0)])])):T("",!0)])]))}},Et={key:0,class:"flex flex-col mb-12 justify-center items-center text-gray-500"},Pt=e("span",{class:"my-8 text-xl font-semi-bold"},"NO DATA",-1),jt=e("svg",{fill:"currentColor",class:"my-2 py-9 px-4 w-24 h-24 border bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-600",viewBox:"0 0 24 24"},[e("path",{d:"M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"})],-1),Vt=[jt],Ut={key:1},Kt={__name:"ArrivalsView",setup(s){const t=k();L(()=>{t.getBookings||i()});const n=$(!1),o=$(!1),a=()=>{n.value||(n.value=!0,t.writeGuestsData().then(r=>{r.length>0&&i()}).catch(r=>console.log("Error in writeData function: ",r)),setTimeout(()=>n.value=!1,5e3))},i=()=>{o.value||(o.value=!0,t.loadGuestsData().catch(r=>console.log("Error in loadData function: ",r)).finally(()=>o.value=!1))};return(r,u)=>(l(),c(w,null,[f(it,{numberOfGuests:g(t).getNumberOfGuests,bookings:g(t).getBookings},null,8,["numberOfGuests","bookings"]),g(t).getNumberOfGuests?(l(),c("div",Ut,[(l(!0),c(w,null,N(g(t).filteredBookings,d=>(l(),A(Ht,{booking:d},null,8,["booking"]))),256))])):(l(),c("div",Et,[Pt,e("span",{onClick:a,class:m(n.value?"pointer-events-none opacity-50":""),title:"Upload data"},Vt,2)]))],64))}};export{Kt as default};

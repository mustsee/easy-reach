import{d as K,s as Z,f as A,i as F,q as Y,o as r,c as l,r as V,n as C,a as k,b as f,e as a,g as c,w as y,u as h,t as b,h as _,F as I,j as oe,k as S,l as N,m as M,v as H,S as ae,p as O,x as G,y as z,z as ne,_ as re,A as ie,T as le}from"./index-68c750bf.js";import{u as R,S as q}from"./SelectSkeleton-83436d4b.js";const Q=K("date",{state:()=>({currentDate:null,displayOptions:{weekday:"long",year:"numeric",month:"long",day:"numeric"},dataOptions:{year:"numeric",month:"numeric",day:"numeric"}}),getters:{displayDate(e){if(e.currentDate)return e.currentDate.toLocaleDateString("en-GB",e.displayOptions)},apiDate(e){if(e.currentDate)return e.currentDate.toLocaleDateString("en-GB",e.dataOptions).split("/").reverse().join("")},fireStoreDate(e){if(e.currentDate)return e.currentDate.toLocaleDateString("en-GB",e.dataOptions).split("/").reverse().join("-")}},actions:{setCurrentDate(e=0){let t;if(this.currentDate)t=new Date(this.currentDate.setDate(this.currentDate.getDate()+e));else{let s=new Date;t=new Date(s.setDate(s.getDate()+2))}this.currentDate=t},setCurrentDateBis(e){this.currentDate=new Date(e)}}}),X=K("messages",{state:()=>({customMessages:[],messages:[{custom:!1,messageType:"defaultWelcomeMessage",name:"Default welcome message",variables:["guestFirstName","senderName","dayOfWeek"],text:`Hi --guestFirstName--, this is --senderName-- from the Princes Street Hostel, I hope you are well and thanks again for booking with us. Could you please let us know what time you will be arriving on --dayOfWeek--?
Please bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`},{custom:!1,messageType:"withArrivalTime",name:"With arrival time",variables:["guestFirstName","senderName","dayOfWeek","checkinTime"],text:`Hi --guestFirstName--, this is --senderName-- from the Princes Street Hostel, I hope you are well and thanks again for booking with us. We look forward to welcoming you on --dayOfWeek-- --checkinTime--.
Please bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`},{custom:!1,messageType:"earlyCheckin",name:"Early Checkin",variables:["guestFirstName","senderName","dayOfWeek","checkinTime"],text:`Hi --guestFirstName--, this is --senderName-- from the Princes Street Hostel, I hope you are well and thanks again for booking with us. We look forward to welcoming you on --dayOfWeek-- --checkinTime--.
Our official check-in time is at 3pm, however you are very welcome to leave your luggage here at reception, then you are free to explore Edinburgh!
Please bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`},{custom:!1,messageType:"lateCheckin",name:"Late Checkin",variables:["guestFirstName","senderName","roomNumber"],text:`Hello --guestFirstName--, this is --senderName-- from the Princes Street Hostel.
As you are checking in at a time when the reception will be closed, I have put your key in an envelope with your name on it, next to the check out box which is located directly on your right as you walk through the front door.
The door code to enter the hostel is 2805. Your room number is --roomNumber--. Turn to your left as you walk in, go down the corridor and there you will find signs to your room. Sorry for the inconvenience and thank you for your understanding.
There are bathrooms and showers on your floor as well as next to reception if yours are busy in the morning. And please switch off any lights you switch on.
For late night food, McDonalds is open.
There is no one at reception just now (although staff is on site in case of emergency) until tomorrow morning 8.30am so just pop by to say hi!`},{custom:!1,messageType:"emailMessage",name:"Email Message",variables:["guestFirstName","senderName","dayOfWeek"],text:`Hi --guestFirstName--, this is --senderName--, I hope you are well and thanks again for booking with us.
Could you please let us know what time you will be arriving --dayOfWeek-- and also if you have a WhatsApp number?
Please bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`}]}),getters:{},actions:{setCustomMessages(e){this.customMessages=e}}}),v=Q(),ee=X(),w=R(),B=K("bookings",{state:()=>({bookings:null,isSendingMail:!1,isLoadingData:!1,isWritingData:!1}),getters:{getBookings(e){return e.bookings?e.bookings[v.apiDate]:null},getNumberOfGuests(){return this.getBookings?this.getBookings.length:0},filteredBookings(){const e=w.currentTypeFilter,t=w.currentStatus;let s=this.getBookings;return e!=="all"&&(s=s.filter(o=>o.type===e)),t!=="all"&&(t==="todo"?s=s.filter(o=>o.status==="todo"||o.status==="inProgress"):s=s.filter(o=>o.status===t)),s}},actions:{setCustomMessage(e,t){let s=this.bookings[v.apiDate].map(o=>{if(o.bookId===e){o.custom=!0,o.messageType=`custom-${t}`;const n=ee.customMessages.find(i=>i.messageType===t),{text:d,variables:m}=n,u=w.currentSender?w.currentSender:"--senderName--";let g=JSON.parse(d);for(const i of m){let p=o[i]?o[i]:i==="senderName"?u:`--${i}--`;g=g.replace(`--${i}--`,p)}o.text=g}return o});this.bookings={...this.bookings,[v.apiDate]:s}},setMessage(e,t){let s="",o=this.bookings[v.apiDate].map(n=>{if(n.bookId===e){n.messageType=t,n.custom=!1,t==="emailMessage"?n.type="email":n.type="whatsapp";const d=ee.messages.find(p=>p.messageType===t),{text:m,variables:u}=d,g=w.currentSender?w.currentSender:"--senderName--";let i=m;for(const p of u){let x=n[p]?n[p]:p==="senderName"?g:`--${p}--`;i=i.replace(`--${p}--`,x)}n.text=i,s=this.replaceVariablesInText(n,d)}return n});Z(`guests/${v.apiDate}/bookings/${e}`,{messageType:t,type:t==="emailMessage"?"email":"whatsapp",text:s}),this.bookings={...this.bookings,[v.apiDate]:o}},setCurrentText(e,t){let s=this.bookings[v.apiDate].map(o=>(o.bookId===e&&(o.text=t),o));this.bookings={...this.bookings,[v.apiDate]:s}},setSenderName(e){let t=this.bookings[v.apiDate].map(s=>{const o=w.lastSender,{text:n}=s;let d=n.search("--senderName--"),m;return d!==-1?m=n.replace("--senderName--",e):m=n.replace(o,e),s.text=m,s});this.bookings={...this.bookings,[v.apiDate]:t},w.setLastSender(e)},replaceVariablesInText(e,t){const{text:s,variables:o}=t;let n=s;for(const d of o){let m=e[d]?e[d]:`--${d}--`;n=n.replace(`--${d}--`,m)}return n},async writeGuestsData(e=!1){try{this.isWritingData=!0;const t="getArrivals?date="+v.apiDate+(e?"&updateData=true":""),o=await(await fetch(A+t)).json();if(o.success)return o;F("Error while writing data",{position:F.POSITION.BOTTOM_RIGHT,autoClose:!1,type:"error"})}catch{}finally{this.isWritingData=!1}},async loadGuestsData(){try{this.isLoadingData=!0;const e=await Y(`guests/${v.apiDate}/bookings`,"guestName");this.bookings={...this.bookings,[v.apiDate]:e},w.currentSender&&this.setSenderName(w.currentSender)}catch{F("Error while loading data",{position:F.POSITION.BOTTOM_RIGHT,autoClose:!1,type:"error"})}finally{this.isLoadingData=!1}},async updateBooking(e,t){try{await Z(`guests/${v.apiDate}/bookings/${e}`,t),this.loadGuestsData()}catch(s){console.log("Error while updating booking: ",s)}},async updateGuestPhone(e,t){try{const s="updateGuestPhone?bookId="+e+"&guestPhone="+t,n=await(await fetch(A+s)).json();if(n.success)return await this.updateBooking(e,{phone:n.phone}),{success:!0};console.log("Error in updateGuestPhone: ",error)}catch(s){console.log("Error in updateGuestPhone: ",s)}},async updateArrivalTimeSectionEdit(e,t){try{const s="updateArrivalTimeSectionEdit?bookId="+e+"&arrivalTimeText="+t,n=await(await fetch(A+s)).json();if(n.success)return await this.updateBooking(e,{arrivalTime:n.text}),{success:!0}}catch(s){console.log("Error in updateArrivalTimeSectionEdit: ",s)}},async updateArrivalTimeSection(e,t,s){try{const o="updateBeds24ArrivalTimeSection?bookId="+e+"&previousArrivalTimeText="+s+"&type="+t,d=await(await fetch(A+o)).json();d.success&&this.updateBooking(e,{arrivalTime:d.text})}catch(o){console.log("Error in updateArrivalTimeSection: ",o)}},async sendEmail(e){try{this.isSendingMail=!0;const t="sendEmail?guestEmail="+e.email+"&text="+JSON.stringify(e.text),o=await(await fetch(A+t)).json();o.success?(this.updateBooking(e.bookId,{status:"done"}),this.updateArrivalTimeSection(e.bookId,e.type,e.arrivalTime)):(this.updateBooking(e.bookId,{status:"error"}),console.log("Error in sendEmail: ",o.error))}finally{this.isSendingMail=!1}},async sendEmailSimple(e){try{this.isSendingMail=!0;const t="sendEmail?guestEmail="+e.email+"&text="+JSON.stringify(e.text),o=await(await fetch(A+t)).json();o.success||console.log("Error in sendEmailSimple: ",o.error)}finally{this.isSendingMail=!1}}}}),ce=["title"],te={__name:"DateItem",props:["title","preventClick","increaseBy"],setup(e){return(t,s)=>(r(),l("span",{title:e.title,onClick:s[0]||(s[0]=o=>t.$emit("increaseDate",e.increaseBy)),class:C([e.preventClick&&"prevent-click"])},[V(t.$slots,"icon")],10,ce))}},de={class:"min-w-0 overflow-hidden bg-white"},ue={class:"p-4 flex items-center h-full"},me={class:"flex-1 flex items-center justify-center text-gray-500"},ge={class:"flex items-center justify-center text-sm sm:text-base text-center tracking-wider font-medium uppercase text-gray-500 px-2 sm:px-8 sm:w-96 select-none"},pe=["value"],he={class:"text-xs"},ye={__name:"Date",setup(e){const t=Q(),s=B(),o=k(()=>!s.getNumberOfGuests||s.isWritingData),n=u=>{t.setCurrentDate(u),s.loadGuestsData()},d=u=>{t.setCurrentDateBis(u.target.value),s.loadGuestsData()},m=()=>{s.writeGuestsData(!0).then(u=>{(u==null?void 0:u.length)>0&&s.loadGuestsData()})};return(u,g)=>{const i=f("LeftTriangleIcon"),p=f("RefreshIcon"),x=f("RightTriangleIcon");return r(),l("div",de,[a("div",ue,[a("div",me,[c(te,{title:"Previous date",preventClick:h(s).isLoadingData,increaseBy:-1,onIncreaseDate:n},{icon:y(()=>[c(i,{class:"py-1 px-2 w-10 h-8 border bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 hover:text-gray-600"})]),_:1},8,["preventClick"]),a("p",ge,[a("div",null,[a("div",null,[a("input",{class:"focus:outline-none",type:"date",name:"calendar",id:"calendar",value:h(t).fireStoreDate,onChange:d},null,40,pe)]),a("div",he,b(h(t).displayDate),1)]),a("span",{title:"Update data",onClick:m,class:C([o.value&&"prevent-click","sm:ml-4"])},[c(p,{class:"py-1 px-2 w-10 h-8 cursor-pointer hover:text-gray-600"})],2)]),c(te,{title:"Next date",preventClick:h(s).isLoadingData,increaseBy:1,onIncreaseDate:n},{icon:y(()=>[c(x,{class:"py-1 px-2 w-10 h-8 border bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 hover:text-gray-600"})]),_:1},8,["preventClick"])])])])}}},be={class:"min-w-0 overflow-hidden shadow-md bg-white border-t-4 border-blue-500"},fe={class:"p-4 flex items-center"},ve={"data-cy":"icon",class:"p-3 rounded-full text-blue-500 bg-blue-100 mr-4"},ke={"data-cy":"title",class:"mb-2 text-sm font-normal text-gray-600"},_e={"data-cy":"data",class:"text-base font-normal text-gray-700"},U={__name:"TopCard",props:["title"],setup(e){return(t,s)=>(r(),l("div",be,[a("div",fe,[a("div",ve,[V(t.$slots,"icon")]),a("div",null,[a("p",ke,b(e.title),1),a("p",_e,[V(t.$slots,"data")])])])]))}},xe={__name:"TopCards",props:["bookings"],setup(e){const t=e,s=k(()=>t.bookings?t.bookings.length:0),o=k(()=>t.bookings?t.bookings.filter(i=>i.status==="done"&&i.type==="whatsapp").length:0),n=k(()=>t.bookings?t.bookings.filter(i=>i.type==="whatsapp").length:0),d=k(()=>t.bookings?t.bookings.filter(i=>i.status==="done"&&i.type==="email").length:0),m=k(()=>t.bookings?t.bookings.filter(i=>i.type==="email").length:0),u=k(()=>t.bookings?t.bookings.filter(i=>i.status==="done").length:0),g=k(()=>m.value+n.value);return(i,p)=>{const x=f("GuestsIcon"),E=f("WhatsAppIcon"),L=f("EmailIcon"),T=f("ProgressionIcon");return r(),l(I,null,[c(U,{"data-cy":"guests",class:"col-span-12 sm:col-span-6 lg:col-span-3",title:"Guests"},{icon:y(()=>[c(x,{class:"w-5 h-5"})]),data:y(()=>[_(b(s.value),1)]),_:1}),c(U,{"data-cy":"whatsapp",class:"col-span-12 sm:col-span-6 lg:col-span-3",title:"WhatsApp"},{icon:y(()=>[c(E,{class:"w-5 h-5"})]),data:y(()=>[_(b(o.value)+" / "+b(n.value),1)]),_:1}),c(U,{"data-cy":"email",class:"col-span-12 sm:col-span-6 lg:col-span-3",title:"Email"},{icon:y(()=>[c(L,{class:"w-5 h-5"})]),data:y(()=>[_(b(d.value)+" / "+b(m.value),1)]),_:1}),c(U,{"data-cy":"progression",class:"col-span-12 sm:col-span-6 lg:col-span-3",title:"Progression"},{icon:y(()=>[c(T,{class:"w-5 h-5"})]),data:y(()=>[_(b(u.value)+" / "+b(g.value),1)]),_:1})],64)}}},we=a("option",{disabled:"",value:""},"Sender name",-1),Se=["value"],$e={__name:"SenderName",async setup(e){let t,s;const o=R(),n=B();let d=([t,s]=oe(()=>Y("senders","created_at")),t=await t,s(),t);return o.setSenders(d==null?void 0:d.map(m=>m.name)),o.$subscribe((m,u)=>{u.currentSender&&n.setSenderName(u.currentSender)}),(m,u)=>(r(),S(q,{class:"sm:my-4"},{default:y(()=>[N(a("select",{"onUpdate:modelValue":u[0]||(u[0]=g=>h(o).currentSender=g),class:"select",name:"senderName",id:"senderName"},[we,(r(!0),l(I,null,M(h(o).senders,g=>(r(),l("option",{value:g},b(g),9,Se))),256))],512),[[H,h(o).currentSender]])]),_:1}))}},Te=a("option",{disabled:""},"Type",-1),De=["value"],P=R();P.setCurrentTypeFilter(P.typeFilters[0].value);const Ie={__name:"Type",setup(e){return(t,s)=>(r(),S(q,{class:"sm:my-4"},{default:y(()=>[N(a("select",{"onUpdate:modelValue":s[0]||(s[0]=o=>h(P).currentTypeFilter=o),class:"select",name:"type",id:"type"},[Te,(r(!0),l(I,null,M(h(P).typeFilters,o=>(r(),l("option",{value:o.value},b(o.displayName),9,De))),256))],512),[[H,h(P).currentTypeFilter]])]),_:1}))}},Ce=a("option",{disabled:""},"Status",-1),Ne=["value"],W=R();W.setCurrentStatus(W.statuses[0].value);const Be={__name:"Status",setup(e){return(t,s)=>(r(),S(q,{class:"sm:my-4"},{default:y(()=>[N(a("select",{"onUpdate:modelValue":s[0]||(s[0]=o=>h(W).currentStatus=o),class:"select",name:"status",id:"status"},[Ce,(r(!0),l(I,null,M(h(W).statuses,o=>(r(),l("option",{value:o.value},b(o.displayName),9,Ne))),256))],512),[[H,h(W).currentStatus]])]),_:1}))}},Ee={class:"grid gap-6 my-8 sm:grid-cols-12"},Ae=a("div",null,"loading...",-1),Me={__name:"ArrivalsMenu",props:["bookings"],setup(e){return(t,s)=>(r(),l("div",Ee,[c(ye,{class:"col-span-12"}),c(xe,{bookings:e.bookings},null,8,["bookings"]),(r(),S(ae,null,{fallback:y(()=>[Ae]),default:y(()=>[c($e,{class:"col-span-12 sm:col-span-4"})]),_:1})),c(Ie,{class:"col-span-12 sm:col-span-4"}),c(Be,{class:"col-span-12 sm:col-span-4"})]))}},Oe={class:"flex flex-col mb-12 justify-center items-center text-gray-500"},Ge=a("span",{class:"my-8 text-xl font-semi-bold"},"NO DATA",-1),Pe={__name:"NoGuests",props:["preventClick"],setup(e){return(t,s)=>{const o=f("LoadIcon");return r(),l("div",Oe,[Ge,a("span",{onClick:s[0]||(s[0]=n=>t.$emit("writeData")),class:C(e.preventClick&&"prevent-click"),title:"Load data"},[c(o,{class:"my-2 py-9 px-4 w-24 h-24 border bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-600"})],2)])}}},We={class:"status-card lg:flex-none"},Le={class:"flex justify-end"},J={__name:"CardSkeleton",props:["bookId"],setup(e){return(t,s)=>{const o=f("CancelIcon");return r(),l("div",We,[a("div",Le,[c(o,{onClick:s[0]||(s[0]=n=>t.$emit("updateBooking",e.bookId,{status:"todo"})),title:"Cancel",class:"w-6 h-6 cursor-pointer"})]),V(t.$slots,"default")])}}},je={class:"flex-1 px-6 py-8 bg-white lg:p-12"},Fe={class:"text-2xl font-extrabold text-gray-900 sm:text-3xl"},Ue={class:"mt-6 text-base text-gray-500 truncate"},Ve={key:0},He=a("br",null,null,-1),Re={class:"flex items-center"},qe={key:0},Je={key:1},ze={key:2},Ke={"data-cy":"email"},Ye={class:"mt-8"},Qe=a("div",{class:"flex items-center"},[a("h4",{class:"flex-shrink-0 pr-4 text-sm font-semibold tracking-wider uppercase bg-white"}," Guest infos "),a("div",{class:"flex-1 border-t-2 border-gray-200"})],-1),Xe={class:"mt-8 space-y-5"},Ze={class:"lg:col-span-1"},et={class:"flex items-center"},tt=a("p",{class:"text-gray-900"},"Arrival time",-1),st={key:0},ot={key:0,"data-cy":"arrival-time",class:"text-sm text-gray-700"},at={key:1},nt={class:"lg:col-span-1"},rt=a("p",{class:"text-gray-900"},"Comments",-1),it=["innerHTML"],lt={__name:"CardInfos",props:["booking"],setup(e){const t=e,s=B(),o=O(!1),n=O(t.booking.arrivalTime),d=()=>{o.value=!0,n.value=t.booking.arrivalTime},m=()=>{o.value=!1,n.value=t.booking.arrivalTime},u=async()=>{try{await s.updateArrivalTimeSectionEdit(t.booking.bookId,n.value)}finally{o.value=!1}},g=O(!1),i=O(t.booking.phone),p=()=>{g.value=!0,i.value=t.booking.phone},x=()=>{g.value=!1,i.value=t.booking.phone},E=async()=>{try{await s.updateGuestPhone(t.booking.bookId,i.value)}finally{g.value=!1}};return(L,T)=>{const j=f("EditIcon");return r(),l("div",je,[a("h3",Fe,b(e.booking.name),1),a("p",Ue,[e.booking.groupReservation?(r(),l("span",Ve,[_("(group of "+b(e.booking.personsInGroup)+")",1),He])):G("",!0),a("div",Re,[g.value?G("",!0):(r(),l("div",qe,b(e.booking.phone?e.booking.phone:"No phone"),1)),g.value?(r(),l("div",ze,[N(a("input",{"onUpdate:modelValue":T[0]||(T[0]=D=>i.value=D),type:"text",spellcheck:"false",placeholder:"Update Guest phoe",class:"mt-2 text-sm px-4 py-1 border border-gray-200 rounded-sm focus:shadow-md focus:outline-none mb-2"},null,512),[[z,i.value]]),a("div",{class:"flex gap-4 mb-5"},[a("button",{onClick:E,class:"text-sm py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-sm w-20"}," Save "),a("button",{"data-cy":"cancel",onClick:x,class:"text-sm py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-sm w-20"}," Cancel ")])])):(r(),l("div",Je,[c(j,{onClick:p,class:"ml-2 h-3 w-3 cursor-pointer",title:"Edit Guest phone section in Beds24"})]))]),a("span",Ke,b(e.booking.email?e.booking.email:"No email"),1)]),a("div",Ye,[Qe,a("ul",Xe,[a("li",Ze,[a("div",et,[tt,o.value?G("",!0):(r(),l("div",st,[c(j,{"data-cy":"edit arrival time",onClick:d,class:"ml-2 h-3 w-3 cursor-pointer",title:"Edit Arrival time section in Beds24"})]))]),o.value?(r(),l("div",at,[N(a("input",{"data-cy":"input","onUpdate:modelValue":T[1]||(T[1]=D=>n.value=D),type:"text",spellcheck:"false",placeholder:"Update Arrival time text",class:"mt-2 text-sm px-4 py-1 border border-gray-200 rounded-sm focus:shadow-md focus:outline-none mb-2"},null,512),[[z,n.value]]),a("div",{class:"flex gap-4"},[a("button",{onClick:u,class:"text-sm py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-sm w-20"}," Save "),a("button",{"data-cy":"cancel",onClick:m,class:"text-sm py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-sm w-20"}," Cancel ")])])):(r(),l("p",ot,b(e.booking.arrivalTime?e.booking.arrivalTime:"No data"),1))]),a("li",nt,[rt,a("p",{"data-cy":"comments",class:"text-sm text-gray-700",innerHTML:`${e.booking.guestCommentsModified?e.booking.guestCommentsModified:"No data"}`},null,8,it)])])])])}}},ct=["name","id"],dt={label:"Premade"},ut=["value"],mt={label:"Custom"},gt=["value"],pt={__name:"MessageType",props:["bookId","messageType"],setup(e){const t=e,s=X(),o=B(),n=O();ne(async()=>{n.value=await Y("messages","created_at"),s.setCustomMessages(n.value)});const d=k({get(){return t.messageType},set(m){m.includes("custom-")?o.setCustomMessage(t.bookId,m.replace("custom-","")):o.setMessage(t.bookId,m)}});return(m,u)=>(r(),S(q,null,{default:y(()=>[N(a("select",{class:"select",name:"messages-"+e.bookId,id:"messages-"+e.bookId,"onUpdate:modelValue":u[0]||(u[0]=g=>d.value=g)},[a("optgroup",dt,[(r(!0),l(I,null,M(h(s).messages,g=>(r(),l("option",{value:g.messageType},b(g.name),9,ut))),256))]),a("optgroup",mt,[(r(!0),l(I,null,M(n.value,g=>(r(),l("option",{value:`custom-${g.messageType}`},b(g.name),9,gt))),256))])],8,ct),[[H,d.value]])]),_:1}))}};const ht={class:"border border-gray-300 rounded flex flex-col text-gray-800 bg-white shadow-md"},yt=a("div",{class:"bg-gray-200 px-3 py-2 border-b border-gray-300"},[a("h3",{class:"text-sm text-left font-medium"},"Output")],-1),bt={__name:"Text",props:["bookId","text"],setup(e){const t=e,s=B(),o=k({get(){return t.text},set(n){s.setCurrentText(t.bookId,n)}});return(n,d)=>(r(),l("div",ht,[yt,N(a("textarea",{"onUpdate:modelValue":d[0]||(d[0]=m=>o.value=m),rows:"6",spellcheck:"false",placeholder:"Text to be sent to the guest",class:"flex-1 p-2 m-1 focus:outline-none",name:"output"},null,512),[[z,o.value]])]))}};const ft={class:"pb-6"},vt={class:"shadow-md lg:flex"},kt={key:0,class:"status-card"},_t={class:"mt-8"},xt={key:0,class:"block sm:flex sm:justify-between"},wt=["href"],St={key:2,class:"action-button rounded-md shadow"},$t=["href"],Tt={class:"flex flex-1 flex-col justify-center"},Dt=a("div",{class:"m-16"},[a("h1",{class:"mb-4 text-lg font-medium leading-6 text-gray-900"}," Message successfully sent ? "),a("h2",{class:"text-sm text-gray-500"}," A successfull sending will update the Arrival time section. ")],-1),It={class:"flex justify-around flex-wrap mb-4"},Ct={class:"flex flex-1 m-12 justify-center items-center"},Nt=a("div",{class:"flex flex-1 m-12 justify-center items-center"},"Error",-1),Bt={key:4,class:"status-card"},Et=a("div",{class:"flex flex-1 m-12 justify-center items-center"},[_(" There is no way to contact the guest "),a("br"),_(" (no phone and no email) ")],-1),At=[Et],Mt={__name:"Card",props:["booking"],setup(e){const t=e,s=B(),o=X(),n=k(()=>{let i=encodeURI(t.booking.text);return`https://web.whatsapp.com/send?phone=${t.booking.phone}&text=${i}`}),d=i=>{s.sendEmail(i)},m=i=>{s.sendEmailSimple(i)},u=(i,p)=>{s.updateBooking(i,p)},g=(i,p)=>{s.updateBooking(i.bookId,p),s.updateArrivalTimeSection(i.bookId,i.type,i.arrivalTime)};return(i,p)=>{const x=f("WhatsAppIcon"),E=f("EmailLightIcon"),L=f("ThumbsDownIcon"),T=f("ThumbsUpIcon"),j=f("SentIcon");return r(),l("div",ft,[a("div",vt,[c(lt,{booking:e.booking},null,8,["booking"]),e.booking.status==="todo"?(r(),l("div",kt,[c(pt,{bookId:e.booking.bookId,messageType:e.booking.messageType},null,8,["bookId","messageType"]),c(bt,{bookId:e.booking.bookId,text:e.booking.text,class:"mt-6"},null,8,["bookId","text"]),a("div",_t,[e.booking.custom?(r(),l("div",xt,[a("a",{href:n.value,target:"_blank",class:C([!e.booking.phone&&"prevent-click","mb-4 sm:mb-0 flex justify-center w-full sm:w-1/3 border border-gray-400 rounded-md py-3 px-5 text-gray-700 bg-white cursor-pointer hover:bg-gray-100"])},[_(" Open in "),c(x,{class:"w-6 h-6 ml-2"})],10,wt),a("div",{onClick:p[0]||(p[0]=D=>m(e.booking)),class:C([!e.booking.email&&"prevent-click",h(s).isSendingMail?"prevent-click":"","flex justify-center w-full sm:w-1/3 border border-gray-400 rounded-md py-3 px-5 text-gray-700 bg-white cursor-pointer hover:bg-gray-100"])},[_(" Send email "),c(E,{class:"w-6 h-6 ml-2"})],2)])):e.booking.type==="email"?(r(),l("div",{key:1,class:C(["action-button rounded-md shadow cursor-pointer",[h(s).isSendingMail?"prevent-click":"","main-action-button text-red-600 border-red-600 hover:bg-red-200"]]),onClick:p[1]||(p[1]=D=>d(e.booking))},[_(" Send email "),c(E,{class:"w-6 h-6 ml-2"})],2)):e.booking.type==="whatsapp"?(r(),l("div",St,[a("a",{onClick:p[2]||(p[2]=D=>u(e.booking.bookId,{status:"inProgress"})),href:n.value,class:C(["main-action-button text-green-600 border-green-600  hover:bg-green-200"]),target:"_blank"},[_(" Open in "),c(x,{class:"w-6 h-6 ml-2"})],8,$t)])):G("",!0)])])):e.booking.status==="inProgress"?(r(),S(J,{key:1,bookId:e.booking.bookId,onUpdateBooking:u},{default:y(()=>[a("div",Tt,[Dt,a("div",It,[a("div",{onClick:p[3]||(p[3]=D=>u(e.booking.bookId,{status:"todo",type:"email",messageType:"emailMessage",text:h(s).replaceVariablesInText(e.booking,h(o).messages.find(se=>se.messageType==="emailMessage"))})),class:"progress-wrapper bg-white border-red-500 text-red-500 hover:bg-red-100",title:"Fail"},[c(L,{class:"w-6 h-6"})]),a("div",{onClick:p[4]||(p[4]=D=>g(e.booking,{status:"done"})),class:"progress-wrapper border-green-500 text-green-500 bg-white hover:bg-green-100",title:"Success"},[c(T,{class:"w-6 h-6"})])])])]),_:1},8,["bookId"])):e.booking.status==="done"?(r(),S(J,{key:2,bookId:e.booking.bookId,onUpdateBooking:u},{default:y(()=>[a("div",Ct,[c(j,{class:"w-12 h-12 text-green-500"})])]),_:1},8,["bookId"])):e.booking.status==="error"?(r(),S(J,{key:3,bookId:e.booking.bookId,onUpdateBooking:u},{default:y(()=>[Nt]),_:1},8,["bookId"])):e.booking.status==="other"?(r(),l("div",Bt,At)):G("",!0)])])}}};const Ot={},Gt={class:"pb-6"},Pt=ie('<div class="animate-pulse shadow-md lg:flex border border-slate-300"><div class="flex-1 px-6 py-8 bg-white lg:p-12"><div class="w-80 h-2 bg-slate-200 rounded"></div><div class="w-32 mt-6 h-2 bg-slate-200 rounded"></div><div class="w-40 mt-6 h-2 bg-slate-200 rounded"></div></div><div class="status-card"><div class="h-10"></div></div></div>',1),Wt=[Pt];function Lt(e,t){return r(),l("div",Gt,Wt)}const jt=re(Ot,[["render",Lt]]);const Ft={key:1},Ut={key:2},Vt=Q(),$=B();Vt.setCurrentDate();$.loadGuestsData();const qt={__name:"ArrivalsView",setup(e){const t=()=>{$.writeGuestsData().then(s=>{(s==null?void 0:s.length)>0&&$.loadGuestsData()})};return(s,o)=>(r(),l(I,null,[c(Me,{bookings:h($).getBookings},null,8,["bookings"]),h($).isWritingData?(r(),S(jt,{key:0})):!h($).getNumberOfGuests&&!h($).isLoadingData?(r(),l("div",Ft,[c(Pe,{onWriteData:t,preventClick:h($).isWritingData},null,8,["preventClick"])])):(r(),l("div",Ut,[c(le,{name:"cards"},{default:y(()=>[(r(!0),l(I,null,M(h($).filteredBookings,n=>(r(),S(Mt,{booking:n,key:n.bookId},null,8,["booking"]))),128))]),_:1})]))],64))}};export{qt as default};

import{d as q,s as te,f as O,i as V,q as X,u as re,a as ie,o as i,c as d,r as R,n as N,b as k,e as v,g as a,h as u,w as f,j as p,t as _,k as x,F as C,l as le,m as S,p as B,v as G,x as J,S as ce,y as L,z as W,A as Q,B as de,_ as ue,C as me,T as pe}from"./index-dc5b6e94.js";import{u as z,S as K}from"./SelectSkeleton-dc66f49b.js";const Z=q("date",{state:()=>({currentDate:null,displayOptions:{weekday:"long",year:"numeric",month:"long",day:"numeric"},dataOptions:{year:"numeric",month:"numeric",day:"numeric"}}),getters:{displayDate(e){if(e.currentDate)return e.currentDate.toLocaleDateString("en-GB",e.displayOptions)},apiDate(e){if(e.currentDate)return e.currentDate.toLocaleDateString("en-GB",e.dataOptions).split("/").reverse().join("")},fireStoreDate(e){if(e.currentDate)return e.currentDate.toLocaleDateString("en-GB",e.dataOptions).split("/").reverse().join("-")}},actions:{setCurrentDate(e=0){let t;if(this.currentDate)t=new Date(this.currentDate.setDate(this.currentDate.getDate()+e));else{let s=new Date;t=new Date(s.setDate(s.getDate()+2))}this.currentDate=t},setCurrentDateBis(e){this.currentDate=new Date(e)}}}),ee=q("messages",{state:()=>({customMessages:[],messages:[{custom:!1,messageType:"defaultWelcomeMessage",name:"Default welcome message",variables:["guestFirstName","senderName","dayOfWeek"],text:`Hi --guestFirstName--, this is --senderName-- from the Princes Street Hostel, I hope you are well and thanks again for booking with us. Could you please let us know what time you will be arriving on --dayOfWeek--?
Please bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`},{custom:!1,messageType:"withArrivalTime",name:"With arrival time",variables:["guestFirstName","senderName","dayOfWeek","checkinTime"],text:`Hi --guestFirstName--, this is --senderName-- from the Princes Street Hostel, I hope you are well and thanks again for booking with us. We look forward to welcoming you on --dayOfWeek-- --checkinTime--.
Please bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`},{custom:!1,messageType:"earlyCheckin",name:"Early Checkin",variables:["guestFirstName","senderName","dayOfWeek","checkinTime"],text:`Hi --guestFirstName--, this is --senderName-- from the Princes Street Hostel, I hope you are well and thanks again for booking with us. We look forward to welcoming you on --dayOfWeek-- --checkinTime--.
Our official check-in time is at 3pm, however you are very welcome to leave your luggage here at reception, then you are free to explore Edinburgh!
Please bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`},{custom:!1,messageType:"lateCheckin",name:"Late Checkin",variables:["guestFirstName","senderName","roomNumber"],text:`Hello --guestFirstName--, this is --senderName-- from the Princes Street Hostel.
As you are checking in at a time when the reception will be closed, I have put your key in an envelope with your name on it, next to the check out box which is located directly on your right as you walk through the front door.
The door code to enter the hostel is 3578. Your room number is --roomNumber--. Turn to your left as you walk in, go down the corridor and there you will find signs to your room.
There are bathrooms and showers on your floor as well as next to reception if yours are busy in the morning.
And please switch off any lights you switch on.
There is no one at reception just now (although staff is on site in case of emergency) until tomorrow morning 8.00am so just pop by to say hi!`},{custom:!1,messageType:"emailMessage",name:"Email Message",variables:["guestFirstName","senderName","dayOfWeek"],text:`Hi --guestFirstName--, this is --senderName--, I hope you are well and thanks again for booking with us.
Could you please let us know what time you will be arriving --dayOfWeek-- and also if you have a WhatsApp number?
Please bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`}]}),getters:{},actions:{setCustomMessages(e){this.customMessages=e}}}),b=Z(),se=ee(),w=z(),A=q("bookings",{state:()=>({bookings:null,isSendingMail:!1,isLoadingData:!1,isWritingData:!1}),getters:{getBookings(e){return e.bookings?e.bookings[b.apiDate]:null},getNumberOfGuests(){return this.getBookings?this.getBookings.length:0},filteredBookings(){const e=w.currentTypeFilter,t=w.currentStatus;let s=this.getBookings;return e!=="all"&&(s=s.filter(o=>o.type===e)),t!=="all"&&(t==="todo"?s=s.filter(o=>o.status==="todo"||o.status==="inProgress"):s=s.filter(o=>o.status===t)),s}},actions:{setCustomMessage(e,t){let s=this.bookings[b.apiDate].map(o=>{if(o.bookId===e){o.custom=!0,o.messageType=`custom-${t}`;const n=se.customMessages.find(r=>r.messageType===t),{text:c,variables:g}=n,y=w.currentSender?w.currentSender:"--senderName--";let l=JSON.parse(c);for(const r of g){let m=o[r]?o[r]:r==="senderName"?y:`--${r}--`;l=l.replace(`--${r}--`,m)}o.text=l}return o});this.bookings={...this.bookings,[b.apiDate]:s}},setMessage(e,t){let s="",o=this.bookings[b.apiDate].map(n=>{if(n.bookId===e){n.messageType=t,n.custom=!1,t==="emailMessage"?n.type="email":n.type="whatsapp";const c=se.messages.find(m=>m.messageType===t),{text:g,variables:y}=c,l=w.currentSender?w.currentSender:"--senderName--";let r=g;for(const m of y){let h=n[m]?n[m]:m==="senderName"?l:`--${m}--`;r=r.replace(`--${m}--`,h)}n.text=r,s=this.replaceVariablesInText(n,c)}return n});te(`guests/${b.apiDate}/bookings/${e}`,{messageType:t,type:t==="emailMessage"?"email":"whatsapp",text:s}),this.bookings={...this.bookings,[b.apiDate]:o}},setCurrentText(e,t){let s=this.bookings[b.apiDate].map(o=>(o.bookId===e&&(o.text=t),o));this.bookings={...this.bookings,[b.apiDate]:s}},setSenderName(e){let t=this.bookings[b.apiDate].map(s=>{const o=w.lastSender,{text:n}=s;let c=n.search("--senderName--"),g;return c!==-1?g=n.replace("--senderName--",e):g=n.replace(o,e),s.text=g,s});this.bookings={...this.bookings,[b.apiDate]:t},w.setLastSender(e)},replaceVariablesInText(e,t){const{text:s,variables:o}=t;let n=s;for(const c of o){let g=e[c]?e[c]:`--${c}--`;n=n.replace(`--${c}--`,g)}return n},async writeGuestsData(e=!1){try{this.isWritingData=!0;const t="getArrivals?date="+b.apiDate+(e?"&updateData=true":""),o=await(await fetch(O+t)).json();if(o.success)return o;V("Error while writing data",{position:V.POSITION.BOTTOM_RIGHT,autoClose:!1,type:"error"})}catch{}finally{this.isWritingData=!1}},async loadGuestsData(){try{this.isLoadingData=!0;const e=await X(`guests/${b.apiDate}/bookings`,"guestName");this.bookings={...this.bookings,[b.apiDate]:e},w.currentSender&&this.setSenderName(w.currentSender)}catch{V("Error while loading data",{position:V.POSITION.BOTTOM_RIGHT,autoClose:!1,type:"error"})}finally{this.isLoadingData=!1}},async updateBooking(e,t){try{await te(`guests/${b.apiDate}/bookings/${e}`,t),this.loadGuestsData()}catch(s){console.log("Error while updating booking: ",s)}},async updateGuestPhone(e,t){try{const s="updateGuestPhone?bookId="+e+"&guestPhone="+t,n=await(await fetch(O+s)).json();if(n.success)return await this.updateBooking(e,{phone:n.phone}),{success:!0};console.log("Error in updateGuestPhone: ",error)}catch(s){console.log("Error in updateGuestPhone: ",s)}},async updateArrivalTimeSectionEdit(e,t){try{const s="updateArrivalTimeSectionEdit?bookId="+e+"&arrivalTimeText="+t,n=await(await fetch(O+s)).json();if(n.success)return await this.updateBooking(e,{arrivalTime:n.text}),{success:!0}}catch(s){console.log("Error in updateArrivalTimeSectionEdit: ",s)}},async updateArrivalTimeSection(e,t,s){try{const o="updateBeds24ArrivalTimeSection?bookId="+e+"&previousArrivalTimeText="+s+"&type="+t,c=await(await fetch(O+o)).json();c.success&&this.updateBooking(e,{arrivalTime:c.text})}catch(o){console.log("Error in updateArrivalTimeSection: ",o)}},async sendEmail(e){try{this.isSendingMail=!0;const t="sendEmail?guestEmail="+e.email+"&text="+JSON.stringify(e.text),o=await(await fetch(O+t)).json();o.success?(this.updateBooking(e.bookId,{status:"done"}),this.updateArrivalTimeSection(e.bookId,e.type,e.arrivalTime)):(this.updateBooking(e.bookId,{status:"error"}),console.log("Error in sendEmail: ",o.error))}finally{this.isSendingMail=!1}},async sendEmailSimple(e){try{this.isSendingMail=!0;const t="sendEmail?guestEmail="+e.email+"&text="+JSON.stringify(e.text),o=await(await fetch(O+t)).json();o.success||console.log("Error in sendEmailSimple: ",o.error)}finally{this.isSendingMail=!1}}}}),ge=re(),I=q("click-counter",{state:()=>({logNames:{data_firstLoad:"data_firstLoad",data_mainLoad:"data_mainLoad",data_refreshData:"data_refreshData",date_previous:"date_previous",date_next:"date_next",date_calendar:"date_calendar",filter_name:"filter_name",filter_type:"filter_type",filter_status:"filter_status",card_phoneDisplayInput:"card_phoneDisplayInput",card_phoneCloseInput:"card_phoneCloseInput",card_phoneUpdate:"card_phoneUpdate",card_arrivalTimeDisplayInput:"card_arrivalTimeDisplayInput",card_arrivalTimeCloseInput:"card_arrivalTimeCloseInput",card_arrivalTimeUpdate:"card_arrivalTimeUpdate",card_messageType:"card_messageType",card_text:"card_text",card_customWhatsApp:"card_customWhatsApp",card_customMail:"card_customMail",card_mail:"card_Mail",card_whatsApp:"card_whatsApp"}}),actions:{async log(e){const t=new Date,s=t.toLocaleDateString().split("/").reverse().join(""),o=t.toLocaleTimeString();try{await ie(`logs/${s}/${this.logNames[e]}`,{user:ge.userEmail(),time:o,navigator:navigator.userAgent})}catch(n){console.log(n)}}}}),he=["title"],oe={__name:"DateItem",props:["title","preventClick","increaseBy"],setup(e){return(t,s)=>(i(),d("span",{title:e.title,onClick:s[0]||(s[0]=o=>t.$emit("increaseDate",e.increaseBy)),class:N([e.preventClick&&"prevent-click"])},[R(t.$slots,"icon")],10,he))}},ye={class:"min-w-0 overflow-hidden bg-white"},fe={class:"p-4 flex items-center h-full"},_e={class:"flex-1 flex items-center justify-center text-gray-500"},ve={class:"flex items-center justify-center text-sm sm:text-base text-center tracking-wider font-medium uppercase text-gray-500 px-2 sm:px-8 sm:w-96 select-none"},be=["value"],ke={class:"text-xs"},xe={__name:"Date",setup(e){const t=Z(),s=A(),o=I(),n=k(()=>!s.getNumberOfGuests||s.isWritingData),c=l=>{o.log(l>0?"date_next":"date_previous"),t.setCurrentDate(l),s.loadGuestsData()},g=l=>{o.log("date_calendar"),t.setCurrentDateBis(l.target.value),s.loadGuestsData()},y=()=>{o.log("date_updateData"),s.writeGuestsData(!0).then(l=>{(l==null?void 0:l.length)>0&&s.loadGuestsData()})};return(l,r)=>{const m=v("LeftTriangleIcon"),h=v("RefreshIcon"),D=v("RightTriangleIcon");return i(),d("div",ye,[a("div",fe,[a("div",_e,[u(oe,{title:"Previous date",preventClick:p(s).isLoadingData,increaseBy:-1,onIncreaseDate:c},{icon:f(()=>[u(m,{class:"py-1 px-2 w-10 h-8 border bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 hover:text-gray-600"})]),_:1},8,["preventClick"]),a("p",ve,[a("div",null,[a("div",null,[a("input",{class:"focus:outline-none",type:"date",name:"calendar",id:"calendar",value:p(t).fireStoreDate,onChange:g},null,40,be)]),a("div",ke,_(p(t).displayDate),1)]),a("span",{title:"Update data",onClick:y,class:N([n.value&&"prevent-click","sm:ml-4"])},[u(h,{class:"py-1 px-2 w-10 h-8 cursor-pointer hover:text-gray-600"})],2)]),u(oe,{title:"Next date",preventClick:p(s).isLoadingData,increaseBy:1,onIncreaseDate:c},{icon:f(()=>[u(D,{class:"py-1 px-2 w-10 h-8 border bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 hover:text-gray-600"})]),_:1},8,["preventClick"])])])])}}},we={class:"min-w-0 overflow-hidden shadow-md bg-white border-t-4 border-blue-500"},Se={class:"p-4 flex items-center"},Te={"data-cy":"icon",class:"p-3 rounded-full text-blue-500 bg-blue-100 mr-4"},$e={"data-cy":"title",class:"mb-2 text-sm font-normal text-gray-600"},Ie={"data-cy":"data",class:"text-base font-normal text-gray-700"},H={__name:"TopCard",props:["title"],setup(e){return(t,s)=>(i(),d("div",we,[a("div",Se,[a("div",Te,[R(t.$slots,"icon")]),a("div",null,[a("p",$e,_(e.title),1),a("p",Ie,[R(t.$slots,"data")])])])]))}},De={__name:"TopCards",props:["bookings"],setup(e){const t=e,s=k(()=>t.bookings?t.bookings.length:0),o=k(()=>t.bookings?t.bookings.filter(r=>r.status==="done"&&r.type==="whatsapp").length:0),n=k(()=>t.bookings?t.bookings.filter(r=>r.type==="whatsapp").length:0),c=k(()=>t.bookings?t.bookings.filter(r=>r.status==="done"&&r.type==="email").length:0),g=k(()=>t.bookings?t.bookings.filter(r=>r.type==="email").length:0),y=k(()=>t.bookings?t.bookings.filter(r=>r.status==="done").length:0),l=k(()=>g.value+n.value);return(r,m)=>{const h=v("GuestsIcon"),D=v("WhatsAppIcon"),E=v("EmailIcon"),j=v("ProgressionIcon");return i(),d(C,null,[u(H,{"data-cy":"guests",class:"col-span-12 sm:col-span-6 lg:col-span-3",title:"Guests"},{icon:f(()=>[u(h,{class:"w-5 h-5"})]),data:f(()=>[x(_(s.value),1)]),_:1}),u(H,{"data-cy":"whatsapp",class:"col-span-12 sm:col-span-6 lg:col-span-3",title:"WhatsApp"},{icon:f(()=>[u(D,{class:"w-5 h-5"})]),data:f(()=>[x(_(o.value)+" / "+_(n.value),1)]),_:1}),u(H,{"data-cy":"email",class:"col-span-12 sm:col-span-6 lg:col-span-3",title:"Email"},{icon:f(()=>[u(E,{class:"w-5 h-5"})]),data:f(()=>[x(_(c.value)+" / "+_(g.value),1)]),_:1}),u(H,{"data-cy":"progression",class:"col-span-12 sm:col-span-6 lg:col-span-3",title:"Progression"},{icon:f(()=>[u(j,{class:"w-5 h-5"})]),data:f(()=>[x(_(y.value)+" / "+_(l.value),1)]),_:1})],64)}}},Ce=a("option",{disabled:"",value:""},"Sender name",-1),Ne=["value"],Be={__name:"SenderName",async setup(e){let t,s;const o=z(),n=A(),c=I();let g=([t,s]=le(()=>X("senders","created_at")),t=await t,s(),t);return o.setSenders(g==null?void 0:g.map(y=>y.name)),o.$subscribe((y,l)=>{l.currentSender&&n.setSenderName(l.currentSender)}),(y,l)=>(i(),S(K,{class:"sm:my-4"},{default:f(()=>[B(a("select",{"onUpdate:modelValue":l[0]||(l[0]=r=>p(o).currentSender=r),class:"select",name:"senderName",id:"senderName",onClick:l[1]||(l[1]=r=>p(c).log("filter_name"))},[Ce,(i(!0),d(C,null,G(p(o).senders,r=>(i(),d("option",{value:r},_(r),9,Ne))),256))],512),[[J,p(o).currentSender]])]),_:1}))}},Ae=a("option",{disabled:""},"Type",-1),Ee=["value"],P=z();P.setCurrentTypeFilter(P.typeFilters[0].value);const Me=I(),Oe={__name:"Type",setup(e){return(t,s)=>(i(),S(K,{class:"sm:my-4"},{default:f(()=>[B(a("select",{"onUpdate:modelValue":s[0]||(s[0]=o=>p(P).currentTypeFilter=o),class:"select",name:"type",id:"type",onClick:s[1]||(s[1]=o=>p(Me).log("filter_type"))},[Ae,(i(!0),d(C,null,G(p(P).typeFilters,o=>(i(),d("option",{value:o.value},_(o.displayName),9,Ee))),256))],512),[[J,p(P).currentTypeFilter]])]),_:1}))}},Ge=a("option",{disabled:""},"Status",-1),Le=["value"],U=z();U.setCurrentStatus(U.statuses[0].value);const We=I(),Pe={__name:"Status",setup(e){return(t,s)=>(i(),S(K,{class:"sm:my-4"},{default:f(()=>[B(a("select",{"onUpdate:modelValue":s[0]||(s[0]=o=>p(U).currentStatus=o),class:"select",name:"status",id:"status",onClick:s[1]||(s[1]=o=>p(We).log("filter_status"))},[Ge,(i(!0),d(C,null,G(p(U).statuses,o=>(i(),d("option",{value:o.value},_(o.displayName),9,Le))),256))],512),[[J,p(U).currentStatus]])]),_:1}))}},Ue={class:"grid gap-6 my-8 sm:grid-cols-12"},je=a("div",null,"loading...",-1),Fe={__name:"ArrivalsMenu",props:["bookings"],setup(e){return(t,s)=>(i(),d("div",Ue,[u(xe,{class:"col-span-12"}),u(De,{bookings:e.bookings},null,8,["bookings"]),(i(),S(ce,null,{fallback:f(()=>[je]),default:f(()=>[u(Be,{class:"col-span-12 sm:col-span-4"})]),_:1})),u(Oe,{class:"col-span-12 sm:col-span-4"}),u(Pe,{class:"col-span-12 sm:col-span-4"})]))}},Ve={class:"flex flex-col mb-12 justify-center items-center text-gray-500"},He=a("span",{class:"my-8 text-xl font-semi-bold"},"NO DATA",-1),Re={__name:"NoGuests",props:["preventClick"],setup(e){return(t,s)=>{const o=v("LoadIcon");return i(),d("div",Ve,[He,a("span",{onClick:s[0]||(s[0]=n=>t.$emit("writeData")),class:N(e.preventClick&&"prevent-click"),title:"Load data"},[u(o,{class:"my-2 py-9 px-4 w-24 h-24 border bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-600"})],2)])}}},qe={class:"status-card lg:flex-none"},Je={class:"flex justify-end"},Y={__name:"CardSkeleton",props:["bookId"],setup(e){return(t,s)=>{const o=v("CancelIcon");return i(),d("div",qe,[a("div",Je,[u(o,{onClick:s[0]||(s[0]=n=>t.$emit("updateBooking",e.bookId,{status:"todo"})),title:"Cancel",class:"w-6 h-6 cursor-pointer"})]),R(t.$slots,"default")])}}},ze={class:"flex-1 px-6 py-8 bg-white lg:p-12"},Ke={class:"text-2xl font-extrabold text-gray-900 sm:text-3xl"},Ye={class:"mt-6 text-base text-gray-500 truncate"},Qe={key:0},Xe=a("br",null,null,-1),Ze={class:"flex items-center"},et={key:0},tt={key:1},st={key:2},ot={"data-cy":"email"},at={class:"mt-8"},nt=a("div",{class:"flex items-center"},[a("h4",{class:"flex-shrink-0 pr-4 text-sm font-semibold tracking-wider uppercase bg-white"}," Guest infos "),a("div",{class:"flex-1 border-t-2 border-gray-200"})],-1),rt={class:"mt-8 space-y-5"},it={class:"lg:col-span-1"},lt={class:"flex items-center"},ct=a("p",{class:"text-gray-900"},"Arrival time",-1),dt={key:0},ut={key:0,"data-cy":"arrival-time",class:"text-sm text-gray-700"},mt={key:1},pt={class:"lg:col-span-1"},gt=a("p",{class:"text-gray-900"},"Comments",-1),ht=["innerHTML"],yt={__name:"CardInfos",props:["booking"],setup(e){const t=e,s=A(),o=I(),n=L(!1),c=L(t.booking.arrivalTime),g=()=>{o.log("card_arrivalTimeDisplayInput"),n.value=!0,c.value=t.booking.arrivalTime},y=()=>{o.log("card_arrivalTimeCloseInput"),n.value=!1,c.value=t.booking.arrivalTime},l=async()=>{o.log("card_arrivalTimeUpdate");try{await s.updateArrivalTimeSectionEdit(t.booking.bookId,c.value)}finally{n.value=!1}},r=L(!1),m=L(t.booking.phone),h=()=>{o.log("card_phoneDisplayInput"),r.value=!0,m.value=t.booking.phone},D=()=>{o.log("card_phoneCloseInput"),r.value=!1,m.value=t.booking.phone},E=async()=>{o.log("card_phoneUpdate");try{await s.updateGuestPhone(t.booking.bookId,m.value)}finally{r.value=!1}};return(j,M)=>{const F=v("EditIcon");return i(),d("div",ze,[a("h3",Ke,_(e.booking.name),1),a("p",Ye,[e.booking.groupReservation?(i(),d("span",Qe,[x("(group of "+_(e.booking.personsInGroup)+")",1),Xe])):W("",!0),a("div",Ze,[r.value?W("",!0):(i(),d("div",et,_(e.booking.phone?e.booking.phone:"No phone"),1)),r.value?(i(),d("div",st,[B(a("input",{"onUpdate:modelValue":M[0]||(M[0]=T=>m.value=T),type:"text",spellcheck:"false",placeholder:"Update Guest phone",class:"mt-2 text-sm px-4 py-1 border border-gray-200 rounded-sm focus:shadow-md focus:outline-none mb-2"},null,512),[[Q,m.value]]),a("div",{class:"flex gap-4 mb-5"},[a("button",{onClick:E,class:"text-sm py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-sm w-20"}," Save "),a("button",{"data-cy":"cancel",onClick:D,class:"text-sm py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-sm w-20"}," Cancel ")])])):(i(),d("div",tt,[u(F,{onClick:h,class:"ml-2 h-3 w-3 cursor-pointer",title:"Edit Guest phone section in Beds24"})]))]),a("span",ot,_(e.booking.email?e.booking.email:"No email"),1)]),a("div",at,[nt,a("ul",rt,[a("li",it,[a("div",lt,[ct,n.value?W("",!0):(i(),d("div",dt,[u(F,{"data-cy":"edit arrival time",onClick:g,class:"ml-2 h-3 w-3 cursor-pointer",title:"Edit Arrival time section in Beds24"})]))]),n.value?(i(),d("div",mt,[B(a("input",{"data-cy":"input","onUpdate:modelValue":M[1]||(M[1]=T=>c.value=T),type:"text",spellcheck:"false",placeholder:"Update Arrival time text",class:"mt-2 text-sm px-4 py-1 border border-gray-200 rounded-sm focus:shadow-md focus:outline-none mb-2"},null,512),[[Q,c.value]]),a("div",{class:"flex gap-4"},[a("button",{onClick:l,class:"text-sm py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-sm w-20"}," Save "),a("button",{"data-cy":"cancel",onClick:y,class:"text-sm py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-sm w-20"}," Cancel ")])])):(i(),d("p",ut,_(e.booking.arrivalTime?e.booking.arrivalTime:"No data"),1))]),a("li",pt,[gt,a("p",{"data-cy":"comments",class:"text-sm text-gray-700",innerHTML:`${e.booking.guestCommentsModified?e.booking.guestCommentsModified:"No data"}`},null,8,ht)])])])])}}},ft=["name","id"],_t={label:"Premade"},vt=["value"],bt={label:"Custom"},kt=["value"],xt={__name:"MessageType",props:["bookId","messageType"],setup(e){const t=e,s=ee(),o=A(),n=I(),c=L();de(async()=>{c.value=await X("messages","created_at"),s.setCustomMessages(c.value)});const g=k({get(){return t.messageType},set(y){y.includes("custom-")?o.setCustomMessage(t.bookId,y.replace("custom-","")):o.setMessage(t.bookId,y)}});return(y,l)=>(i(),S(K,null,{default:f(()=>[B(a("select",{class:"select",name:"messages-"+e.bookId,id:"messages-"+e.bookId,"onUpdate:modelValue":l[0]||(l[0]=r=>g.value=r),onClick:l[1]||(l[1]=r=>p(n).log("card_messageType"))},[a("optgroup",_t,[(i(!0),d(C,null,G(p(s).messages,r=>(i(),d("option",{value:r.messageType},_(r.name),9,vt))),256))]),a("optgroup",bt,[(i(!0),d(C,null,G(c.value,r=>(i(),d("option",{value:`custom-${r.messageType}`},_(r.name),9,kt))),256))])],8,ft),[[J,g.value]])]),_:1}))}};const wt={class:"border border-gray-300 rounded flex flex-col text-gray-800 bg-white shadow-md"},St=a("div",{class:"bg-gray-200 px-3 py-2 border-b border-gray-300"},[a("h3",{class:"text-sm text-left font-medium"},"Output")],-1),Tt={__name:"Text",props:["bookId","text"],setup(e){const t=e,s=A(),o=I(),n=k({get(){return t.text},set(c){s.setCurrentText(t.bookId,c)}});return(c,g)=>(i(),d("div",wt,[St,B(a("textarea",{"onUpdate:modelValue":g[0]||(g[0]=y=>n.value=y),rows:"6",spellcheck:"false",placeholder:"Text to be sent to the guest",class:"flex-1 p-2 m-1 focus:outline-none",name:"output",onClick:g[1]||(g[1]=y=>p(o).log("card_text"))},null,512),[[Q,n.value]])]))}};const $t={class:"pb-6"},It={class:"shadow-md lg:flex"},Dt={key:0,class:"status-card"},Ct={class:"mt-8"},Nt={key:0,class:"block sm:flex sm:justify-between"},Bt=["href"],At={key:2,class:"action-button rounded-md shadow"},Et=["href"],Mt={class:"flex flex-1 flex-col justify-center"},Ot=a("div",{class:"m-16"},[a("h1",{class:"mb-4 text-lg font-medium leading-6 text-gray-900"}," Message successfully sent ? "),a("h2",{class:"text-sm text-gray-500"}," A successfull sending will update the Arrival time section. ")],-1),Gt={class:"flex justify-around flex-wrap mb-4"},Lt={class:"flex flex-1 m-12 justify-center items-center"},Wt=a("div",{class:"flex flex-1 m-12 justify-center items-center"},"Error",-1),Pt={key:4,class:"status-card"},Ut=a("div",{class:"flex flex-1 m-12 justify-center items-center"},[x(" There is no way to contact the guest "),a("br"),x(" (no phone and no email) ")],-1),jt=[Ut],Ft={__name:"Card",props:["booking"],setup(e){const t=e,s=A(),o=ee(),n=I(),c=k(()=>{let m=encodeURI(t.booking.text);return`https://web.whatsapp.com/send?phone=${t.booking.phone}&text=${m}`}),g=m=>{n.log("card_mail"),s.sendEmail(m)},y=m=>{n.log("card_customMail"),s.sendEmailSimple(m)},l=(m,h)=>{s.updateBooking(m,h)},r=(m,h)=>{s.updateBooking(m.bookId,h),s.updateArrivalTimeSection(m.bookId,m.type,m.arrivalTime)};return(m,h)=>{const D=v("WhatsAppIcon"),E=v("EmailLightIcon"),j=v("ThumbsDownIcon"),M=v("ThumbsUpIcon"),F=v("SentIcon");return i(),d("div",$t,[a("div",It,[u(yt,{booking:e.booking},null,8,["booking"]),e.booking.status==="todo"?(i(),d("div",Dt,[u(xt,{bookId:e.booking.bookId,messageType:e.booking.messageType},null,8,["bookId","messageType"]),u(Tt,{bookId:e.booking.bookId,text:e.booking.text,class:"mt-6"},null,8,["bookId","text"]),a("div",Ct,[e.booking.custom?(i(),d("div",Nt,[a("a",{href:c.value,target:"_blank",class:N([!e.booking.phone&&"prevent-click","mb-4 sm:mb-0 flex justify-center w-full sm:w-1/3 border border-gray-400 rounded-md py-3 px-5 text-gray-700 bg-white cursor-pointer hover:bg-gray-100"]),onClick:h[0]||(h[0]=T=>p(n).log("card_customWhatsApp"))},[x(" Open in "),u(D,{class:"w-6 h-6 ml-2"})],10,Bt),a("div",{onClick:h[1]||(h[1]=T=>y(e.booking)),class:N([!e.booking.email&&"prevent-click",p(s).isSendingMail?"prevent-click":"","flex justify-center w-full sm:w-1/3 border border-gray-400 rounded-md py-3 px-5 text-gray-700 bg-white cursor-pointer hover:bg-gray-100"])},[x(" Send email "),u(E,{class:"w-6 h-6 ml-2"})],2)])):e.booking.type==="email"?(i(),d("div",{key:1,class:N(["action-button rounded-md shadow cursor-pointer",[p(s).isSendingMail?"prevent-click":"","main-action-button text-red-600 border-red-600 hover:bg-red-200"]]),onClick:h[2]||(h[2]=T=>g(e.booking))},[x(" Send email "),u(E,{class:"w-6 h-6 ml-2"})],2)):e.booking.type==="whatsapp"?(i(),d("div",At,[a("a",{onClick:h[3]||(h[3]=T=>{l(e.booking.bookId,{status:"inProgress"}),p(n).log("card_whatsApp")}),href:c.value,class:N(["main-action-button text-green-600 border-green-600  hover:bg-green-200"]),target:"_blank"},[x(" Open in "),u(D,{class:"w-6 h-6 ml-2"})],8,Et)])):W("",!0)])])):e.booking.status==="inProgress"?(i(),S(Y,{key:1,bookId:e.booking.bookId,onUpdateBooking:l},{default:f(()=>[a("div",Mt,[Ot,a("div",Gt,[a("div",{onClick:h[4]||(h[4]=T=>l(e.booking.bookId,{status:"todo",type:"email",messageType:"emailMessage",text:p(s).replaceVariablesInText(e.booking,p(o).messages.find(ne=>ne.messageType==="emailMessage"))})),class:"progress-wrapper bg-white border-red-500 text-red-500 hover:bg-red-100",title:"Fail"},[u(j,{class:"w-6 h-6"})]),a("div",{onClick:h[5]||(h[5]=T=>r(e.booking,{status:"done"})),class:"progress-wrapper border-green-500 text-green-500 bg-white hover:bg-green-100",title:"Success"},[u(M,{class:"w-6 h-6"})])])])]),_:1},8,["bookId"])):e.booking.status==="done"?(i(),S(Y,{key:2,bookId:e.booking.bookId,onUpdateBooking:l},{default:f(()=>[a("div",Lt,[u(F,{class:"w-12 h-12 text-green-500"})])]),_:1},8,["bookId"])):e.booking.status==="error"?(i(),S(Y,{key:3,bookId:e.booking.bookId,onUpdateBooking:l},{default:f(()=>[Wt]),_:1},8,["bookId"])):e.booking.status==="other"?(i(),d("div",Pt,jt)):W("",!0)])])}}};const Vt={},Ht={class:"pb-6"},Rt=me('<div class="animate-pulse shadow-md lg:flex border border-slate-300"><div class="flex-1 px-6 py-8 bg-white lg:p-12"><div class="w-80 h-2 bg-slate-200 rounded"></div><div class="w-32 mt-6 h-2 bg-slate-200 rounded"></div><div class="w-40 mt-6 h-2 bg-slate-200 rounded"></div></div><div class="status-card"><div class="h-10"></div></div></div>',1),qt=[Rt];function Jt(e,t){return i(),d("div",Ht,qt)}const zt=ue(Vt,[["render",Jt]]);const Kt={key:1},Yt={key:2},Qt=Z(),$=A(),ae=I();Qt.setCurrentDate();$.loadGuestsData();ae.log("data_firstLoad");const es={__name:"ArrivalsView",setup(e){const t=()=>{ae.log("data_mainLoad"),$.writeGuestsData().then(s=>{(s==null?void 0:s.length)>0&&$.loadGuestsData()})};return(s,o)=>(i(),d(C,null,[u(Fe,{bookings:p($).getBookings},null,8,["bookings"]),p($).isWritingData?(i(),S(zt,{key:0})):!p($).getNumberOfGuests&&!p($).isLoadingData?(i(),d("div",Kt,[u(Re,{onWriteData:t,preventClick:p($).isWritingData},null,8,["preventClick"])])):(i(),d("div",Yt,[u(pe,{name:"cards"},{default:f(()=>[(i(!0),d(C,null,G(p($).filteredBookings,n=>(i(),S(Ft,{booking:n,key:n.bookId},null,8,["booking"]))),128))]),_:1})]))],64))}};export{es as default};

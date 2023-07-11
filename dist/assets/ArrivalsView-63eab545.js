import{d as O,s as G,f as M,q as P,r as S,o as r,c as i,a as e,n as w,t as m,u as p,b as H,_ as A,e as x,g as v,w as _,h as k,F as T,i as W,j as B,v as j,k as z,l as V,S as Y,m as U,p as q,x as C,y as Q}from"./index-5e1b5a29.js";import{u as E}from"./ArrivalsOptionsStore-8a75c92e.js";const R=O("date",{state:()=>({currentDate:null,options:{weekday:"long",year:"numeric",month:"long",day:"numeric"}}),getters:{displayDate(s){if(s.currentDate)return s.currentDate.toLocaleDateString("en-GB",s.options)},apiDate(s){const{currentDate:t}=s;if(t){let o=t.getTimezoneOffset();return new Date(t.setHours(t.getHours()+o/60)).toISOString().split("T")[0].replace(/-/g,"")}},fireStoreDate(s){const{currentDate:t}=s;if(t){let o=t.getTimezoneOffset();return new Date(t.setHours(t.getHours()+o/60)).toISOString().split("T")[0]}}},actions:{setCurrentDate(s){this.currentDate=s}}}),F=O("messages",{state:()=>({messages:[{messageType:"defaultWelcomeMessage",name:"Default welcome message",variables:["guestFirstName","senderName","dayOfWeek"],text:`Hi --guestFirstName--, this is --senderName-- from the Princes Street Hostel, I hope you are well and thanks again for booking with us. Could you please let us know what time you will be arriving on --dayOfWeek--?
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
Please bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`},{messageType:"other",name:"Custom",variables:[],text:"Write here custom message"}]}),getters:{},actions:{}}),y=R(),X=F(),D=E(),N=O("bookings",{state:()=>({bookings:null,isSendingMail:!1}),getters:{getBookings(s){return s.bookings?s.bookings[y.apiDate]:null},getNumberOfGuests(){return this.getBookings?this.getBookings.length:0},filteredBookings(){const s=D.currentTypeFilter,t=D.currentStatus;let o=this.getBookings;return s!=="all"&&(o=o.filter(n=>n.type===s)),t!=="all"&&(o=o.filter(n=>n.status===t)),o}},actions:{setMessage(s,t){let o=this.bookings[y.apiDate].map(n=>{if(n.bookId===s){n.messageType=t,t==="emailMessage"?n.type="email":t!=="other"&&(n.type="whatsapp");const a=X.messages.find(d=>d.messageType===t),{text:c,variables:l}=a,h=D.currentSender?D.currentSender:"--senderName--";let u=c;for(const d of l){let f=n[d]?n[d]:d==="senderName"?h:`--${d}--`;u=u.replace(`--${d}--`,f)}n.text=u}return n});G(`guests/${y.apiDate}/bookings/${s}`,{messageType:t,type:t==="emailMessage"?"email":t!=="other"?"whatsapp":"other"}),this.bookings={...this.bookings,[y.apiDate]:o}},setCurrentText(s,t){let o=this.bookings[y.apiDate].map(n=>(n.bookId===s&&(n.text=t),n));this.bookings={...this.bookings,[y.apiDate]:o}},setSenderName(s){let t=this.bookings[y.apiDate].map(o=>{const n=D.lastSender,{text:a}=o;let c=a.search("--senderName--"),l;return c!==-1?l=a.replace("--senderName--",s):l=a.replace(n,s),o.text=l,o});this.bookings={...this.bookings,[y.apiDate]:t},D.setLastSender(s)},replaceVariablesInText(s,t){const{text:o,variables:n}=t;let a=o;for(const c of n){let l=s[c]?s[c]:`--${c}--`;a=a.replace(`--${c}--`,l)}return a},async writeGuestsData(s=!1){try{const t="getArrivals?date="+y.apiDate+(s?"&updateData=true":""),n=await(await fetch(M+t)).json();if(n.success)return n}catch{console.log("Error in writeGuestsData: ",error)}},async loadGuestsData(){try{const s=await P(`guests/${y.apiDate}/bookings`,"guestName");this.bookings={...this.bookings,[y.apiDate]:s},D.currentSender&&this.setSenderName(D.currentSender)}catch(s){console.log("1 Error in loadGuestsData: ",s)}},async updateBooking(s,t){try{await G(`guests/${y.apiDate}/bookings/${s}`,t),this.loadGuestsData()}catch(o){console.log("Error while updating booking: ",o)}},async updateArrivalTimeSectionEdit(s,t){try{const o="updateArrivalTimeSectionEdit?bookId="+s+"&arrivalTimeText="+t,a=await(await fetch(M+o)).json();if(a.success)return await this.updateBooking(s,{arrivalTime:a.text}),{success:!0}}catch(o){console.log("Error in updateArrivalTimeSectionEdit: ",o)}},async updateArrivalTimeSection(s,t,o){try{const n="updateBeds24ArrivalTimeSection?bookId="+s+"&previousArrivalTimeText="+o+"&type="+t,c=await(await fetch(M+n)).json();c.success&&this.updateBooking(s,{arrivalTime:c.text})}catch(n){console.log("Error in updateArrivalTimeSection: ",n)}},async sendEmail(s){try{this.isSendingMail=!0;const t="sendEmail?guestEmail="+s.email+"&text="+JSON.stringify(s.text),n=await(await fetch(M+t)).json();n.success?(this.updateBooking(s.bookId,{status:"done"}),this.updateArrivalTimeSection(s.bookId,s.type,s.arrivalTime)):(this.updateBooking(s.bookId,{status:"error"}),console.log("Error in sendEmail: ",n.error))}finally{this.isSendingMail=!1}}}}),Z={class:"p-4 flex items-center h-full"},ee={class:"flex-1 flex items-center justify-center text-gray-500"},te=e("svg",{fill:"currentColor",class:"py-1 px-2 w-10 h-8 border bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 hover:text-gray-600",viewBox:"0 0 24 24"},[e("path",{d:"m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z"})],-1),se=[te],oe={class:"flex items-center justify-center text-sm sm:text-base text-center tracking-wider font-medium uppercase text-gray-500 px-2 sm:px-8 sm:w-96 select-none"},ne=e("svg",{fill:"currentColor",class:"py-1 px-2 w-10 h-8 cursor-pointer hover:text-gray-600",viewBox:"0 0 24 24"},[e("path",{d:"M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z"})],-1),ae=[ne],re=e("svg",{fill:"currentColor",class:"py-1 px-2 w-10 h-8 border bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 hover:text-gray-600",viewBox:"0 0 24 24"},[e("path",{d:"m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"})],-1),ie=[re],le=-10,ce=10,de={__name:"Date",props:["removeBorder"],setup(s){const t=R(),o=N(),n=S(0),a=S(!1),c=S(!1);let l=new Date;if(!t.currentDate){let f=new Date(l.setDate(l.getDate()+2));f.setHours(12),t.setCurrentDate(f)}const h=()=>{if(a.value)return;a.value=!0,n.value-=1,t.currentDate.setHours(12);let f=new Date(t.currentDate.setDate(t.currentDate.getDate()-1));t.setCurrentDate(f),o.loadGuestsData().finally(()=>a.value=!1)},u=()=>{if(a.value)return;a.value=!0,n.value+=1,t.currentDate.setHours(12);let f=new Date(t.currentDate.setDate(t.currentDate.getDate()+1));t.setCurrentDate(f),o.loadGuestsData().finally(()=>a.value=!1)},d=()=>{c.value||(c.value=!0,o.writeGuestsData(!0).then(f=>{f.length>0&&o.loadGuestsData()}).catch(f=>console.log("Error in handleLoadData function: ",f)),setTimeout(()=>c.value=!1,5e3))};return(f,L)=>(r(),i("div",{class:w(`min-w-0 overflow-hidden ${s.removeBorder?"":"border-2 border-gray-100"} bg-white`)},[e("div",Z,[e("div",ee,[e("span",{onClick:h,class:w([n.value>le?"":"pointer-events-none opacity-50",a.value?"pointer-events-none opacity-50":""])},se,2),e("p",oe,[e("span",null,m(p(t).displayDate),1),e("span",{title:"update Data",onClick:d,class:w([p(o).getNumberOfGuests?"":"pointer-events-none opacity-50",c.value?"pointer-events-none opacity-50":""])},ae,2)]),e("span",{onClick:u,class:w([n.value<ce?"":"pointer-events-none opacity-50",a.value?"pointer-events-none opacity-50":""])},ie,2)])])],2))}},ue={class:"min-w-0 overflow-hidden shadow-md bg-white border-t-4 border-blue-500"},ge={class:"p-4 flex items-center"},he={"data-cy":"icon",class:"p-3 rounded-full text-blue-500 bg-blue-100 mr-4"},me={"data-cy":"title",class:"mb-2 text-sm font-normal text-gray-600"},pe={"data-cy":"data",class:"text-base font-normal text-gray-700"},I={__name:"TopCard",props:["title"],setup(s){return(t,o)=>(r(),i("div",ue,[e("div",ge,[e("div",he,[H(t.$slots,"icon")]),e("div",null,[e("p",me,m(s.title),1),e("p",pe,[H(t.$slots,"data")])])])]))}},fe={},ve={fill:"currentColor",viewBox:"0 0 20 20"},ye=e("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"},null,-1),be=[ye];function _e(s,t){return r(),i("svg",ve,be)}const xe=A(fe,[["render",_e]]),we={},ke={fill:"currentColor",viewBox:"0 0 24 24"},$e=e("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"},null,-1),De=[$e];function Se(s,t){return r(),i("svg",ke,De)}const Te=A(we,[["render",Se]]),Ce={},Be={fill:"currentColor",viewBox:"0 0 24 24"},Ne=e("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"},null,-1),ze=[Ne];function Me(s,t){return r(),i("svg",Be,ze)}const Ie=A(Ce,[["render",Me]]),Ae={},je={fill:"currentColor",viewBox:"0 0 24 24"},Ee=e("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z"},null,-1),Oe=[Ee];function Fe(s,t){return r(),i("svg",je,Oe)}const Le=A(Ae,[["render",Fe]]),Ge={__name:"TopCards",props:["bookings"],setup(s){const t=s,o=x(()=>t.bookings?t.bookings.length:0),n=x(()=>t.bookings?t.bookings.filter(d=>d.status==="done"&&d.type==="whatsapp").length:0),a=x(()=>t.bookings?t.bookings.filter(d=>d.type==="whatsapp").length:0),c=x(()=>t.bookings?t.bookings.filter(d=>d.status==="done"&&d.type==="email").length:0),l=x(()=>t.bookings?t.bookings.filter(d=>d.type==="email").length:0),h=x(()=>t.bookings?t.bookings.filter(d=>d.status==="done").length:0),u=x(()=>l.value+a.value);return(d,f)=>(r(),i(T,null,[v(I,{"data-cy":"guests",class:"col-span-12 sm:col-span-6 lg:col-span-3",title:"Guests"},{icon:_(()=>[v(xe,{class:"w-5 h-5"})]),data:_(()=>[k(m(o.value),1)]),_:1}),v(I,{"data-cy":"whatsapp",class:"col-span-12 sm:col-span-6 lg:col-span-3",title:"WhatsApp"},{icon:_(()=>[v(Te,{class:"w-5 h-5"})]),data:_(()=>[k(m(n.value)+" / "+m(a.value),1)]),_:1}),v(I,{"data-cy":"email",class:"col-span-12 sm:col-span-6 lg:col-span-3",title:"Email"},{icon:_(()=>[v(Ie,{class:"w-5 h-5"})]),data:_(()=>[k(m(c.value)+" / "+m(l.value),1)]),_:1}),v(I,{"data-cy":"progression",class:"col-span-12 sm:col-span-6 lg:col-span-3",title:"Progression"},{icon:_(()=>[v(Le,{class:"w-5 h-5"})]),data:_(()=>[k(m(h.value)+" / "+m(u.value),1)]),_:1})],64))}},He={class:"min-w-0 overflow-hidden bg-white"},We={class:"w-full sm:py-4 flex items-center"},Pe=e("option",{disabled:"",value:""},"Sender name",-1),Ve=["value"],Ue=e("div",{class:"pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-3 text-gray-700"},[e("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),qe={__name:"SenderName",props:["removeBorder"],async setup(s){let t,o;const n=E(),a=N();let c=([t,o]=W(()=>P("senders","created_at")),t=await t,o(),t);return[t,o]=W(()=>n.setSenders(c.map(l=>l.name))),await t,o(),n.$subscribe((l,h)=>{h.currentSender&&a.setSenderName(h.currentSender)}),(l,h)=>(r(),i("div",He,[e("div",We,[e("div",{class:w(`relative flex flex-1 text-base font-normal text-gray-700 ${s.removeBorder?"":"border-2 border-gray-100"}`)},[B(e("select",{"onUpdate:modelValue":h[0]||(h[0]=u=>p(n).currentSender=u),class:"appearance-none w-full py-2 pl-3 pr-10 bg-white focus:outline-none",name:"senderName",id:"senderName"},[Pe,(r(!0),i(T,null,z(p(n).senders,u=>(r(),i("option",{value:u},m(u),9,Ve))),256))],512),[[j,p(n).currentSender]]),Ue],2)])]))}},Re={class:"min-w-0 overflow-hidden bg-white"},Je={class:"w-full sm:py-4 flex items-center"},Ke=e("option",{disabled:""},"Message type",-1),Ye=["value"],Qe=e("div",{class:"pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-3 text-gray-700"},[e("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),Xe={__name:"MessageTypes",props:["removeBorder"],setup(s){const t=E();return t.currentTypeFilter||t.setCurrentTypeFilter(t.typeFilters[0].value),(o,n)=>(r(),i("div",Re,[e("div",Je,[e("div",{class:w(`flex flex-1 relative text-gray-700 bg-white ${s.removeBorder?"":"border-2 border-gray-100"}`)},[B(e("select",{"onUpdate:modelValue":n[0]||(n[0]=a=>p(t).currentTypeFilter=a),class:"appearance-none w-full py-2 pl-3 pr-10 bg-white focus:outline-none",name:"type",id:"type"},[Ke,(r(!0),i(T,null,z(p(t).typeFilters,a=>(r(),i("option",{value:a.value},m(a.displayName),9,Ye))),256))],512),[[j,p(t).currentTypeFilter]]),Qe],2)])]))}},Ze={class:"min-w-0 overflow-hidden bg-white"},et={class:"w-full sm:py-4 flex items-center"},tt=e("option",{disabled:""},"Status",-1),st=["value"],ot=e("div",{class:"pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-3 text-gray-700"},[e("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),nt={__name:"Status",props:["removeBorder"],setup(s){const t=E();return t.currentStatus||t.setCurrentStatus(t.statuses[0].value),(o,n)=>(r(),i("div",Ze,[e("div",et,[e("div",{class:w(`flex flex-1 relative text-gray-700 bg-white ${s.removeBorder?"":"border-2 border-gray-100"}`)},[B(e("select",{"onUpdate:modelValue":n[0]||(n[0]=a=>p(t).currentStatus=a),class:"appearance-none w-full py-2 pl-3 pr-10 bg-white focus:outline-none",name:"status",id:"status"},[tt,(r(!0),i(T,null,z(p(t).statuses,a=>(r(),i("option",{value:a.value},m(a.displayName),9,st))),256))],512),[[j,p(t).currentStatus]]),ot],2)])]))}},at={class:"grid gap-6 my-8 sm:grid-cols-12"},rt=e("div",null,"loading...",-1),it={__name:"ArrivalsMenu",props:["bookings"],setup(s){return(t,o)=>(r(),i("div",at,[v(de,{class:"col-span-12",removeBorder:!0}),v(Ge,{bookings:s.bookings},null,8,["bookings"]),(r(),V(Y,null,{fallback:_(()=>[rt]),default:_(()=>[v(qe,{class:"col-span-12 sm:col-span-4",removeBorder:!1})]),_:1})),v(Xe,{class:"col-span-12 sm:col-span-4",removeBorder:!1}),v(nt,{class:"col-span-12 sm:col-span-4",removeBorder:!1})]))}},lt="/easy-reach/edit.svg";const ct={class:"relative border border-gray-300 text-gray-800 bg-white shadow-md"},dt=["name","id"],ut=["value"],gt=e("div",{class:"pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l border-gray-300"},[e("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),ht={__name:"SelectComponent",props:["bookId","messageType"],setup(s){const t=s,o=F(),n=N(),a=x({get(){return t.messageType},set(c){n.setMessage(t.bookId,c)}});return(c,l)=>(r(),i("div",ct,[B(e("select",{class:"appearance-none w-full py-1 px-2 bg-white focus:outline-none",name:"messages-"+s.bookId,id:"messages-"+s.bookId,"onUpdate:modelValue":l[0]||(l[0]=h=>a.value=h)},[(r(!0),i(T,null,z(p(o).messages,h=>(r(),i("option",{value:h.messageType},m(h.name),9,ut))),256))],8,dt),[[j,a.value]]),gt]))}};const mt={class:"border border-gray-300 rounded flex flex-col text-gray-800 bg-white shadow-md"},pt=e("div",{class:"bg-gray-200 px-3 py-2 border-b border-gray-300"},[e("h3",{class:"text-sm text-left font-medium"},"Output")],-1),ft={__name:"TextareaComponent",props:["bookId","text"],setup(s){const t=s,o=N(),n=x({get(){return t.text},set(a){o.setCurrentText(t.bookId,a)}});return(a,c)=>(r(),i("div",mt,[pt,B(e("textarea",{"onUpdate:modelValue":c[0]||(c[0]=l=>n.value=l),rows:"6",spellcheck:"false",placeholder:"Text to be sent to the guest",class:"flex-1 p-2 m-1 focus:outline-none",name:"output"},null,512),[[U,n.value]])]))}};const vt={class:"pb-6"},yt={class:"shadow-md lg:flex"},bt={class:"flex-1 px-6 py-8 bg-white lg:p-12"},_t={class:"text-2xl font-extrabold text-gray-900 sm:text-3xl"},xt={class:"mt-6 text-base text-gray-500 truncate"},wt={key:0},kt=e("br",null,null,-1),$t=e("br",null,null,-1),Dt={class:"mt-8"},St=e("div",{class:"flex items-center"},[e("h4",{class:"flex-shrink-0 pr-4 text-sm font-semibold tracking-wider uppercase bg-white"}," Guest infos "),e("div",{class:"flex-1 border-t-2 border-gray-200"})],-1),Tt={class:"mt-8 space-y-5"},Ct={class:"lg:col-span-1"},Bt={class:"flex items-center"},Nt=e("p",{class:"text-gray-900"},"Arrival time",-1),zt={key:0},Mt={key:0,class:"text-sm text-gray-700"},It={key:1},At={class:"lg:col-span-1"},jt=e("p",{class:"text-gray-900"},"Comments",-1),Et=["innerHTML"],Ot={key:0,class:"lg:w-3/5 px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"},Ft={class:"mt-8"},Lt=Q('<span class="w-6 h-6 ml-2"><svg viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-tabler"><rect width="18" height="14" x="3" y="5" rx="2"></rect><path d="m3 7 9 6 9-6"></path></g></svg></span>',1),Gt={key:1,class:"action-button rounded-md shadow"},Ht=["href"],Wt=e("span",{class:"w-6 h-6 ml-2"},[e("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[e("path",{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"})])],-1),Pt={key:1,class:"lg:w-3/5 px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"},Vt={class:"flex justify-end",title:"Cancel"},Ut=e("svg",{width:"24",height:"24","clip-rule":"evenodd","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 24 24"},[e("path",{d:"m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"})],-1),qt=[Ut],Rt={class:"flex flex-1 flex-col justify-center"},Jt=e("div",{class:"m-16"},[e("h1",{class:"mb-4 text-lg font-medium leading-6 text-gray-900"}," Message successfully sent ? "),e("h2",{class:"text-sm text-gray-500"}," A successfull sending will update the Arrival time section. ")],-1),Kt={class:"flex justify-around flex-wrap mb-4"},Yt=e("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M5 14h-5v-12h5v12zm18.875-4.809c0-.646-.555-1.32-1.688-1.41-.695-.055-.868-.623-.031-.812.701-.159 1.098-.652 1.098-1.181 0-.629-.559-1.309-1.826-1.543-.766-.141-.842-.891-.031-.953.688-.053.96-.291.96-.626-.001-.931-1.654-2.666-4.852-2.666-4.16 0-6.123 2.067-10.505 2.768v10.878c2.375.869 4.466 2.644 5.688 6.886.478 1.661.781 3.468 2.374 3.468 2.375 0 2.594-5.125 1.688-8.781 1.312-.688 3.751-.936 4.979-.885 1.771.072 2.271-.818 2.271-1.49 0-1.011-.833-1.35-1.354-1.51-.609-.188-.889-.807-.031-.922.836-.112 1.26-.656 1.26-1.221z"})],-1),Qt=[Yt],Xt=e("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z"})],-1),Zt=[Xt],es={key:2,class:"lg:w-3/5 px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"},ts={class:"flex justify-end",title:"Cancel"},ss=e("svg",{width:"24",height:"24","clip-rule":"evenodd","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 24 24"},[e("path",{d:"m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"})],-1),os=[ss],ns=e("div",{class:"flex flex-1 m-12 justify-center items-center"},[e("div",{class:"w-12 h-12 text-green-500"},[e("svg",{viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-8.698 6.825l-1.439-.507 5.701-5.215 1.436.396-5.698 5.326zm3.262 4.287l-1.323-.565 4.439-4.503 1.32.455-4.436 4.613zm-4.083.387l-1.481-.507 8-7.89 1.437.397-7.956 8z"})])])],-1),as={key:3,class:"lg:w-3/5 px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"},rs={class:"flex justify-end",title:"Cancel"},is=e("svg",{width:"24",height:"24","clip-rule":"evenodd","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 24 24"},[e("path",{d:"m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"})],-1),ls=[is],cs=e("div",{class:"flex flex-1 m-12 justify-center items-center"},[e("div",{class:"w-12 h-12 text-grey-500"},"Error")],-1),ds={key:4,class:"lg:w-3/5 px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"},us=e("div",null,"There is no way to contact the guest (no phone and no email)",-1),gs=[us],hs={__name:"Card",props:["booking"],setup(s){const t=s,o=N(),n=F();q(()=>{});const a=x(()=>{let b=encodeURI(t.booking.text);return`https://web.whatsapp.com/send?phone=${t.booking.phone}&text=${b}`}),c=b=>{o.sendEmail(b)},l=(b,g)=>{o.updateBooking(b,g)},h=(b,g)=>{o.updateBooking(b.bookId,g),o.updateArrivalTimeSection(b.bookId,b.type,b.arrivalTime)},u=S(!1),d=S(t.booking.arrivalTime),f=()=>{u.value=!0,d.value=t.booking.arrivalTime},L=()=>{u.value=!1,d.value=t.booking.arrivalTime},J=async()=>{try{await o.updateArrivalTimeSectionEdit(t.booking.bookId,d.value)}finally{u.value=!1}};return(b,g)=>(r(),i("div",vt,[e("div",yt,[e("div",bt,[e("h3",_t,m(s.booking.name),1),e("p",xt,[s.booking.groupReservation?(r(),i("span",wt,[k("(group of "+m(s.booking.personsInGroup)+")",1),kt])):C("",!0),k(" "+m(s.booking.phone?s.booking.phone:"No phone")+" ",1),$t,k(" "+m(s.booking.email?s.booking.email:"No email"),1)]),e("div",Dt,[St,e("ul",Tt,[e("li",Ct,[e("div",Bt,[Nt,u.value?C("",!0):(r(),i("div",zt,[e("img",{onClick:f,src:lt,alt:"Edit icon",class:"ml-2 h-3 w-3 cursor-pointer",title:"Edit Arrival time section in Beds24"})]))]),u.value?(r(),i("div",It,[B(e("input",{"onUpdate:modelValue":g[0]||(g[0]=$=>d.value=$),type:"text",spellcheck:"false",placeholder:"Update Arrival time text",class:"mt-2 text-sm px-4 py-1 border border-gray-200 rounded-sm focus:shadow-md focus:outline-none mb-2"},null,512),[[U,d.value]]),e("div",{class:"flex gap-4"},[e("button",{onClick:J,class:"text-sm py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-sm w-20"}," Save "),e("button",{onClick:L,class:"text-sm py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-sm w-20"}," Cancel ")])])):(r(),i("p",Mt,m(s.booking.arrivalTime?s.booking.arrivalTime:"No data"),1))]),e("li",At,[jt,e("p",{class:"text-sm text-gray-700",innerHTML:`${s.booking.guestCommentsModified?s.booking.guestCommentsModified:"No data"}`},null,8,Et)])])])]),s.booking.status==="todo"?(r(),i("div",Ot,[v(ht,{bookId:s.booking.bookId,messageType:s.booking.messageType},null,8,["bookId","messageType"]),v(ft,{bookId:s.booking.bookId,text:s.booking.text,class:"mt-6"},null,8,["bookId","text"]),e("div",Ft,[s.booking.type==="email"?(r(),i("div",{key:0,class:w(["action-button rounded-md shadow cursor-pointer",[p(o).isSendingMail?"pointer-events-none opacity-50":"","flex items-center justify-center w-full px-5 py-3 text-base font-medium text-red-600 border border-red-600 bg-white rounded-md hover:bg-red-200 transition-all"]]),onClick:g[1]||(g[1]=$=>c(s.booking))},[k(" Send email "),Lt],2)):C("",!0),s.booking.type==="whatsapp"?(r(),i("div",Gt,[e("a",{onClick:g[2]||(g[2]=$=>l(s.booking.bookId,{status:"inProgress"})),href:a.value,class:w(["flex items-center justify-center w-full px-5 py-3 text-base font-medium text-green-600 border border-green-600 bg-white rounded-md hover:bg-green-200 transition-all"]),target:"_blank"},[k(" Open in "),Wt],8,Ht)])):C("",!0)])])):s.booking.status==="inProgress"?(r(),i("div",Pt,[e("div",Vt,[e("span",{onClick:g[3]||(g[3]=$=>l(s.booking.bookId,{status:"todo"})),class:"cursor-pointer"},qt)]),e("div",Rt,[Jt,e("div",Kt,[e("div",{onClick:g[4]||(g[4]=$=>l(s.booking.bookId,{status:"todo",type:"email",messageType:"emailMessage",text:p(o).replaceVariablesInText(s.booking,p(n).messages.find(K=>K.messageType==="emailMessage"))})),class:"cursor-pointer flex items-center justify-center border border-red-500 text-red-500 bg-white hover:bg-red-100 rounded-full w-20 h-20",title:"Fail"},Qt),e("div",{onClick:g[5]||(g[5]=$=>h(s.booking,{status:"done"})),class:"cursor-pointer flex items-center justify-center text-green-500 border border-green-500 bg-white hover:bg-green-100 rounded-full w-20 h-20",title:"Success"},Zt)])])])):s.booking.status==="done"?(r(),i("div",es,[e("div",ts,[e("span",{onClick:g[6]||(g[6]=$=>l(s.booking.bookId,{status:"todo"})),class:"cursor-pointer"},os)]),ns])):s.booking.status==="error"?(r(),i("div",as,[e("div",rs,[e("span",{onClick:g[7]||(g[7]=$=>l(s.booking.bookId,{status:"todo"})),class:"cursor-pointer"},ls)]),cs])):C("",!0),s.booking.status==="other"?(r(),i("div",ds,gs)):C("",!0)])]))}},ms={key:0,class:"flex flex-col mb-12 justify-center items-center text-gray-500"},ps=e("span",{class:"my-8 text-xl font-semi-bold"},"NO DATA",-1),fs=e("svg",{fill:"currentColor",class:"my-2 py-9 px-4 w-24 h-24 border bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-600",viewBox:"0 0 24 24"},[e("path",{d:"M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"})],-1),vs=[fs],ys={key:1},xs={__name:"ArrivalsView",setup(s){const t=N();q(()=>{t.getBookings||c()});const o=S(!1),n=S(!1),a=()=>{o.value||(o.value=!0,t.writeGuestsData().then(l=>{l.length>0&&c()}).catch(l=>console.log("Error in writeData function: ",l)),setTimeout(()=>o.value=!1,5e3))},c=()=>{n.value||(n.value=!0,t.loadGuestsData().catch(l=>console.log("Error in loadData function: ",l)).finally(()=>n.value=!1))};return(l,h)=>(r(),i(T,null,[v(it,{bookings:p(t).getBookings},null,8,["bookings"]),p(t).getNumberOfGuests?(r(),i("div",ys,[(r(!0),i(T,null,z(p(t).filteredBookings,u=>(r(),V(hs,{booking:u},null,8,["booking"]))),256))])):(r(),i("div",ms,[ps,e("span",{onClick:a,class:w(o.value?"pointer-events-none opacity-50":""),title:"Upload data"},vs,2)]))],64))}};export{xs as default};

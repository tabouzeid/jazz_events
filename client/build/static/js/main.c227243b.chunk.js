(this.webpackJsonpjazz_events_client=this.webpackJsonpjazz_events_client||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/bones_final_large.564a1162.png"},16:function(e,a,t){e.exports=t.p+"static/media/brick_wall_copy.93f174de.jpg"},24:function(e,a,t){e.exports=t(37)},29:function(e,a,t){},30:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),c=t.n(r),m=(t(29),t(20)),s=t(1),i=(t(30),t(15)),o=t.n(i),u=t(16),d=t.n(u),E=t(17),v=t.n(E),p={color:"white",backgroundImage:"url(".concat(d.a,")"),boxShadow:"5px 10px 8px rgb(50, 50, 50, 0.2)"};function f(){return l.a.createElement("div",null,l.a.createElement("ul",{className:"nav justify-content-end",id:"navItems"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/login"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/signin"},"Signup")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/favorites"},"Favorites")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/addevent"},"Add Event")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/userprofile"},"User Profile"))),l.a.createElement(v.a,null,l.a.createElement("nav",{className:"navbar",style:p},l.a.createElement("img",{src:o.a,alt:"bones_logo",className:"my-2 ml-3"}),l.a.createElement("span",{className:"navbar-brand mx-auto"},"Welcome"))))}var h=t(18),w=t(19),b=t(23),N=t(22),g=function(e){Object(b.a)(t,e);var a=Object(N.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(w.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{color:"#1f60a7",backgroundColor:"#faf3f0",height:"100vh",display:"flex",justifyContent:"center",paddingTop:"5rem"}},l.a.createElement("h1",null,"TEST"))}}]),t}(l.a.Component);function y(){return l.a.createElement("div",null)}function x(){return l.a.createElement("div",null)}var k=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h2",null,e.date,": ",e.eventName," at ",e.venueName),l.a.createElement("h3",null,e.startTime," / ",e.address," / ",e.cover))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("ul",null,e.sets.map((function(e){return l.a.createElement("li",null,l.a.createElement("h1",null,e.startTime),l.a.createElement("h3",null,e.artists.join(", ")))}))))))};function j(){var e=[];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},"Saved"),l.a.createElement("div",{className:"card-body"},[].map((function(a,t){return l.a.createElement(k,{key:t,id:t,date:e.date,venueName:e.venueName,address:e.address,startTime:e.startTime,eventName:e.eventName,cover:e.cover,sets:e.sets})})))))))}var P=t(11);function S(e){console.log("The props = ",e);var a=Object(n.useState)(),t=Object(P.a)(a,2),r=(t[0],t[1]),c=Object(n.useState)(),m=Object(P.a)(c,2),s=(m[0],m[1]);return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",name:"username",onSubmit:function(e){r(e.target.value)}}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",onSubmit:function(e){s(e.target.value)}}),l.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault()}},"Submit")))}function C(){return l.a.createElement("div",null)}var T=function(e){};function _(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:T},l.a.createElement("h1",null,"User Settings"),l.a.createElement("h3",null,"Change email"),"Current email: ",l.a.createElement("b",null,"taher@taher.com"),l.a.createElement("br",null),l.a.createElement("label",{for:"oldPass"},"New email:"),l.a.createElement("input",{type:"text",id:"newEmail",name:"email",minlength:"8",required:!0}),l.a.createElement("br",null),l.a.createElement("h3",null,"Change username"),"Current username: ",l.a.createElement("b",null,"taher"),l.a.createElement("br",null),l.a.createElement("label",{for:"oldPass"},"New username:"),l.a.createElement("input",{type:"text",id:"newUsername",name:"username",minlength:"8",required:!0}),l.a.createElement("br",null),l.a.createElement("h3",null,"Change password"),l.a.createElement("label",{for:"currentPassword"},"Current password:"),l.a.createElement("input",{type:"password",id:"currentPassword",name:"currentPassword",minlength:"8",required:!0}),l.a.createElement("br",null),l.a.createElement("span",{id:"currentPasswordTest"}),l.a.createElement("label",{for:"newPassword"},"New password:"),l.a.createElement("input",{type:"password",id:"newPassword",name:"newPassword",minlength:"8",required:!0}),l.a.createElement("br",null),l.a.createElement("label",{for:"reenterNewPassword"},"Re-enter new password:"),l.a.createElement("input",{type:"password",id:"reenterNewPassword",name:"reenterNewPassword",minlength:"8",required:!0})))}var O=function(){return l.a.createElement(m.a,null,l.a.createElement(f,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement(g,null)),l.a.createElement(s.a,{exact:!0,path:"/addartist"},l.a.createElement(y,null)),l.a.createElement(s.a,{exact:!0,path:"/addevent"},l.a.createElement(x,null)),l.a.createElement(s.a,{exact:!0,path:"/favorites"},l.a.createElement(j,null)),l.a.createElement(s.a,{exact:!0,path:"/login"},l.a.createElement(S,null)),l.a.createElement(s.a,{exact:!0,path:"/signin"},l.a.createElement(C,null)),l.a.createElement(s.a,{exact:!0,path:"/userprofile"},l.a.createElement(_,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.c227243b.chunk.js.map
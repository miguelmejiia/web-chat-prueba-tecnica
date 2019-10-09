(this["webpackJsonpweb-chat"]=this["webpackJsonpweb-chat"]||[]).push([[0],{10:function(e,t){e.exports={COMMUNITY_CHAT:"COMMUNITY_CHAT",USER_CONNECTED:"USER_CONNECTED",MESSAGE_RECIEVED:"MESSAGE_RECIEVED",MESSAGE_SENT:"MESSAGE_SENT",USER_DISCONNECTED:"USER_DISCONNECTED",TYPING:"TYPING",VERIFY_USER:"VERIFY_USER",LOGOUT:"LOGOUT"}},49:function(e,t,n){e.exports=n(97)},82:function(e,t){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(42),c=n.n(r),i=n(5),o=n(6),l=n(9),u=n(7),m=n(8),d=n(43),h=n.n(d),p=n(10),f=n(14),E=(n(85),n(100)),v=n(101),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).setUser=function(e){var t=e.user;e.isUser?n.setError("El nombre de usuario ya existe"):(n.setError(""),n.props.setUser(t))},n.handleSubmit=function(e){e.preventDefault();var t=n.props.socket,a=n.state.nickname;t.emit(p.VERIFY_USER,a,n.setUser)},n.handleChange=function(e){n.setState({nickname:e.target.value})},n.setError=function(e){n.setState({error:e})},n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n.state={nickname:"",error:""},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.error;return s.a.createElement("div",{className:"login-container"},s.a.createElement("h2",{className:"header"},"Web-Chat: Bienvenido"),s.a.createElement(E.a,{onSubmit:this.handleSubmit,className:"login-form"},s.a.createElement(E.a.Group,{controlId:"formLogin"},s.a.createElement(E.a.Label,null,"Nombre de usuario"),s.a.createElement(E.a.Control,{type:"text",size:"lg",onChange:this.handleChange,id:"nickname",required:!0})),s.a.createElement("div",{className:"error"},e||null),s.a.createElement(v.a,{type:"submit",variant:"primary",className:"btn-login"},"Ingresar")))}}]),t}(a.Component),C=n(48),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.active;return s.a.createElement("div",{className:"user ".concat(n?"active":"")},s.a.createElement("div",{className:"user-photo"},t[0].toUpperCase()),s.a.createElement("div",{className:"user-info"},s.a.createElement("div",{className:"name"},t)))}}]),t}(a.Component);b.defaultProps={lastMessage:"",active:!1};var O=n(11),y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.chats,a=t.activeChat,r=t.user,c=t.setActiveChat,i=t.users;return s.a.createElement("div",{id:"side-bar"},s.a.createElement("div",{className:"heading"},s.a.createElement("div",{className:"app-name"},"Web-Chat")),s.a.createElement("div",{className:"users",ref:"users",onClick:function(t){t.target===e.refs.user&&c(null)}},n.map((function(e){return e.name?s.a.createElement(b,{key:e.id,name:e.name,lastMessage:Object(O.get)(Object(O.last)(e.messages),"message",""),active:a.id===e.id}):null})),Object(O.differenceBy)(i,[r],"name").map((function(t){return s.a.createElement(b,{key:t.id,name:t.name,onClick:function(){e.addChatForUser(t.name)}})}))))}}]),t}(a.Component),N=n(47),S=n.n(N),k=n(98),j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.logout;return s.a.createElement(k.a,{className:"chat-header"},s.a.createElement("div",{className:"user-info"},s.a.createElement("div",{className:"user-name"},t),s.a.createElement("div",{className:"status"},s.a.createElement("div",{className:"indicator"}))),s.a.createElement("div",{className:"logout",onClick:function(){n()},title:"Cerrar sesi\xf3n"},s.a.createElement("span",null,"Salir del chat")," ",s.a.createElement(S.a,null)))}}]),t}(a.Component),T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).scrollDown=n.scrollDown.bind(Object(f.a)(n)),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"scrollDown",value:function(){var e=this.refs.container;e.scrollTop=e.scrollHeight}},{key:"componentDidMount",value:function(){this.scrollDown()}},{key:"componentDidUpdate",value:function(e,t){this.scrollDown()}},{key:"render",value:function(){var e=this.props,t=e.messages,n=e.user,a=e.typingUsers;return s.a.createElement("div",{ref:"container",className:"thread-container"},s.a.createElement("div",{className:"thread"},t.map((function(e){return s.a.createElement("div",{key:e.id,className:"message-container ".concat(e.sender===n.name&&"right")},s.a.createElement("div",{className:"time"},e.time),s.a.createElement("div",{className:"data"},s.a.createElement("div",{className:"message"},e.message),s.a.createElement("div",{className:"name"},e.sender)))})),a.map((function(e){return s.a.createElement("div",{key:e,className:"typing-user"},"".concat(e," est\xe1 escribiendo..."))}))))}}]),t}(a.Component),U=n(99),I=n(46),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),n.sendMessage(),n.setState({message:""})},n.sendMessage=function(){n.props.sendMessage(n.state.message)},n.sendTyping=function(){n.lastUpdateTime=Date.now(),n.state.isTyping||(n.setState({isTyping:!0}),n.props.sendTyping(!0),n.startCheckingTyping())},n.startCheckingTyping=function(){console.log("Escribiendo..."),n.typingInterval=setInterval((function(){Date.now()-n.lastUpdateTime>300&&(n.setState({isTyping:!1}),n.stopCheckingTyping())}),300)},n.stopCheckingTyping=function(){n.typingInterval&&(clearInterval(n.typingInterval),n.props.sendTyping(!1))},n.state={message:"",isTyping:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.stopCheckingTyping()}},{key:"render",value:function(){var e=this,t=this.state.message;return s.a.createElement("div",{className:"message-input"},s.a.createElement(E.a,{onSubmit:this.handleSubmit},s.a.createElement(U.a,null,s.a.createElement(I.a,{xs:8,md:"10"},s.a.createElement(E.a.Control,{id:"message",ref:"messageinput",type:"text",size:"lg",value:t,autoComplete:"off",placeholder:"Mensaje",onKeyUp:function(t){13!==t.keyCode&&e.sendTyping()},onChange:function(t){var n=t.target;e.setState({message:n.value})}})),s.a.createElement(I.a,{xs:4,md:"1"},s.a.createElement(v.a,{disabled:t.length<1,type:"submit",variant:"success",size:"lg"}," Enviar ")))))}}]),t}(a.Component),D=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).resetChat=function(e){return n.addChat(e,!0)},n.addChat=function(e,t){var a=n.props.socket,s=n.state.chats,r=t?[e]:[].concat(Object(C.a)(s),[e]);n.setState({chats:r,activeChat:t?e:n.state.activeChat});var c="".concat(p.MESSAGE_RECIEVED,"-").concat(e.id),i="".concat(p.TYPING,"-").concat(e.id);a.on(i,n.updateTypingInChat(e.id)),a.on(c,n.addMessageToChat(e.id))},n.addMessageToChat=function(e){return function(t){var a=n.state.chats.map((function(n){return n.id===e&&n.messages.push(t),n}));n.setState({chats:a})}},n.updateTypingInChat=function(e){return function(t){var a=t.isTyping,s=t.user;if(s!==n.props.user.name){var r=n.state.chats.map((function(t){return t.id===e&&(a&&!t.typingUsers.includes(s)?t.typingUsers.push(s):!a&&t.typingUsers.includes(s)&&(t.typingUsers=t.typingUsers.filter((function(e){return e!==s})))),t}));n.setState({chats:r})}}},n.sendMessage=function(e,t){n.props.socket.emit(p.MESSAGE_SENT,{chatId:e,message:t})},n.sendTyping=function(e,t){n.props.socket.emit(p.TYPING,{chatId:e,isTyping:t})},n.setActiveChat=function(e){n.setState({activeChat:e})},n.state={chats:[],users:[],activeChat:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.socket;this.initSocket(e)}},{key:"componentWillUnount",value:function(){var e=this.props.socket;e.off(p.USER_CONNECTED),e.off(p.USER_DISCONNECTED)}},{key:"initSocket",value:function(e){var t=this;e.emit(p.COMMUNITY_CHAT,this.resetChat),e.on("connect",(function(){e.emit(p.COMMUNITY_CHAT,t.resetChat)})),e.on(p.USER_CONNECTED,(function(e){t.setState({users:Object(O.values)(e)})})),e.on(p.USER_DISCONNECTED,(function(e){t.setState({users:Object(O.values)(e)})}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.user,a=t.logout,r=this.state,c=r.chats,i=r.activeChat,o=r.users;return s.a.createElement("div",{className:"container"},s.a.createElement(y,{logout:a,chats:c,user:n,users:o,activeChat:i,setActiveChat:this.setActiveChat}),s.a.createElement("div",{className:"chat-room-container"},null!==i?s.a.createElement("div",{className:"chat-room"},s.a.createElement(j,{name:n.name,logout:a}),s.a.createElement(T,{messages:i.messages,user:n,typingUsers:i.typingUsers}),s.a.createElement(w,{sendMessage:function(t){e.sendMessage(i.id,t)},sendTyping:function(t){e.sendTyping(i.id,t)}})):s.a.createElement("div",{className:"chat-room choose"},s.a.createElement("h3",null,"Chat vac\xedo"))))}}]),t}(a.Component),M="/",_=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).initSocket=function(){var e=h()(M);e.on("connect",(function(){n.state.user?n.reconnect(e):console.log("Conectado")})),n.setState({socket:e})},n.reconnect=function(e){e.emit(p.VERIFY_USER,n.state.user.name,(function(e){var t=e.isUser,a=e.user;t?n.setState({user:null}):n.setUser(a)}))},n.setUser=function(e){n.state.socket.emit(p.USER_CONNECTED,e),n.setState({user:e})},n.logout=function(){n.state.socket.emit(p.LOGOUT),n.setState({user:null})},n.state={socket:null,user:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.initSocket()}},{key:"render",value:function(){var e=this.state,t=e.socket,n=e.user;return s.a.createElement("div",{className:"container"},n?s.a.createElement(D,{socket:t,user:n,logout:this.logout}):s.a.createElement(g,{socket:t,setUser:this.setUser}))}}]),t}(a.Component),R=(n(96),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(_,null)}}]),t}(a.Component)),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(s.a.createElement(R,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");A?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):G(e)}))}}()}},[[49,1,2]]]);
//# sourceMappingURL=main.e0d7f0f9.chunk.js.map
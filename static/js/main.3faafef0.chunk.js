(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(31)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(7),c=n.n(a),i=n(8),l=n(6),s=n(15),u=n(16),d=n(1),h={searchField:""},f={robots:[]},b=(n(27),n(2)),E=n(3),g=n(5),p=n(4),m=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},O=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},v=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("label",null," "),r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},C={CHANGE_SEARCH_FIELD:"CHANGE_SEARCH_FIELD",FETCH_ROBOTS_PENDING:"FETCH_ROBOTS_PENDING",FETCH_ROBOTS_SUCCESS:"FETCH_ROBOTS_SUCCESS",FETCH_ROBOTS_FAILED:"FETCH_ROBOTS_FAILED"},S=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},_=(n(28),function(e){Object(g.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).upgradeCount=function(){console.log("got clicked"),e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(E.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){return console.log("CountButton"),r.a.createElement("button",{color:this.props.color,onClick:this.upgradeCount},"Count ",this.state.count)}}]),n}(r.a.Component)),R=function(e){Object(g.a)(n,e);var t=Object(p.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("Header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),";",r.a.createElement(_,{color:"red"}))}}]),n}(r.a.Component),j=(n(29),function(e){Object(g.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[]},e}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=(e.error,e.isPending,e.searchField),o=e.onSearchChange,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement(R,null),r.a.createElement(v,{searchChange:o}),r.a.createElement(S,null,r.a.createElement(O,{robots:a}))):r.a.createElement("h1",null,"Loading")}}]),n}(o.Component)),w=Object(i.b)((function(e){return{searchField:e.searchFieldReducer.searchField,isPending:e.fetchRobotsReducer.isPending,robots:e.fetchRobotsReducer.robots,error:e.fetchRobotsReducer.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:C.CHANGE_SEARCH_FIELD,payload:n}));var n},fetchRobots:function(){return e((function(e){e({type:C.FETCH_ROBOTS_PENDING}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:C.FETCH_ROBOTS_SUCCESS,payload:t})})).catch((function(t){return e({type:C.FETCH_ROBOTS_FAILED,payload:t})}))}))}}}))(j),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(30);var T=Object(s.createLogger)(),H=Object(l.c)({searchFieldReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(d.a)(Object(d.a)({},e),{},{searchField:t.payload});default:return e}},fetchRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_ROBOTS_PENDING":return Object(d.a)(Object(d.a)({},e),{},{isPending:!0});case"FETCH_ROBOTS_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{isPending:!1,robots:t.payload});case"FETCH_ROBOTS_FAILED":return Object(d.a)(Object(d.a)({},e),{},{isPending:!1,error:t.payload});default:return e}}}),N=Object(l.d)(H,Object(l.a)(T,u.a));c.a.render(r.a.createElement(i.a,{store:N},r.a.createElement(w,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends","/service-worker.js");F?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.3faafef0.chunk.js.map
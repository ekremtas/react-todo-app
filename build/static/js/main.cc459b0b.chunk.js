(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(11),c=a.n(o),l=(a(29),a(12)),u=a(13),i=a(15),d=a(14),s=a(37),m=function(){return r.a.createElement(s.a,{className:"text-center h2 mt-3 mb-4"},"My Todos App")},p=a(6),E=a(38),f=a(39),O=a(40),v=a(41),b=a(42),h=a(43),y=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={value:""},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{onSubmit:function(t){t.preventDefault();var a=e.state.value;e.props.addTodo(a),e.setState({value:""})}},r.a.createElement(f.a,null,r.a.createElement(O.a,null,r.a.createElement(v.a,{className:"ml-4",xs:"8"},r.a.createElement(b.a,{type:"text",placeholder:"Entry Todo",value:this.state.value,onChange:function(t){e.setState({value:t.target.value})}})),r.a.createElement(v.a,{xs:"3"},r.a.createElement(h.a,{color:"success",type:"submit"},"Add Todo")))))}}]),a}(n.Component),T={addTodo:function(e){return function(t){t({type:"ADD_TODO",payload:e})}}},g=Object(p.b)(null,T)(y),j=function(e){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(g,null))},D={deleteTodo:function(e){return{type:"DELETE_TODO",payload:e}}},k=Object(p.b)(null,D)((function(e){var t=e.id,a=e.deleteTodo;return r.a.createElement(h.a,{onClick:function(){a(t)},color:"danger"},"Delete")})),w={toggleTodo:function(e){return function(t){t({type:"TOGGLE_TODO",payload:e})}}},x=Object(p.b)(null,w)((function(e){var t=e.content,a=e.id,n=e.completed,o=e.toggleTodo;return r.a.createElement("li",{class:"list-group-item"},r.a.createElement(O.a,null,r.a.createElement(v.a,{xs:"9"},r.a.createElement("div",{className:"border border-dark rounded",style:{padding:7,color:n?"red":"black",textDecoration:n?"line-through":"initial"},onClick:function(){return o(a)}},t)),r.a.createElement(v.a,{xs:"3"},r.a.createElement(k,{id:a}))))})),_=Object(p.b)((function(e){return{todos:e.todoReducer}}))((function(e){var t=e.todos;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement(x,e)})))})),A=a(44),C=a(45),N=a(46),G=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(A.a,null,r.a.createElement(C.a,null,r.a.createElement(j,null),r.a.createElement(N.a,null,r.a.createElement(_,null))))}}]),a}(r.a.Component);a(35);var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(19),M=a(23),B=a(9),J=a(22),R=Object(B.c)({todoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(M.a)(e),[{id:Math.random(),completed:!1,content:t.payload}]);case"TOGGLE_TODO":return e.map((function(e){return e.id===t.payload?Object(S.a)(Object(S.a)({},e),{},{completed:!e.completed}):e}));case"DELETE_TODO":return e.filter((function(e){return e.id!==t.payload}));default:return e}}}),W=Object(B.d)(R,Object(B.a)(J.a));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:W},r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.cc459b0b.chunk.js.map
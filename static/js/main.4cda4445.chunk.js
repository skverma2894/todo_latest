(this.webpackJsonptodo_latest=this.webpackJsonptodo_latest||[]).push([[0],{57:function(t,e,o){},58:function(t,e,o){},63:function(t,e,o){},65:function(t,e,o){},70:function(t,e,o){"use strict";o.r(e);var c=o(0),a=o.n(c),n=o(8),s=o.n(n),i=(o(57),o(58),o(28)),d=o(16),l=o(102),r=o(104),j=(o(63),o(7));var u=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),o=e[0],a=e[1],n=Object(d.b)(),s=function(t){if(t.preventDefault(),""!==o){console.log(o);var e={todoItem:o,id:Math.floor(100*Math.random()),completed:!1};n({type:"ADD_ITEM",payload:e}),a("")}else alert("Enter a task")};return Object(j.jsx)("div",{class:"inputItem",children:Object(j.jsxs)("form",{onSubmit:s,class:"inputItem__form",children:[Object(j.jsx)(r.a,{id:"standard-basic",placeholder:"Add todo item...",class:"inputItem__textfield",value:o,onChange:function(t){return a(t.target.value)}}),Object(j.jsx)(l.a,{onClick:s,class:"inputItem__btn"})]})})},b=o(46),O=o.n(b),m=o(103);o(65);var f=function(t){var e=Object(d.b)(),o=Object(c.useState)(!0),a=Object(i.a)(o,2),n=a[0],s=a[1],l=Object(c.useState)(""),u=Object(i.a)(l,2),b=u[0],f=u[1],p=Object(c.useState)(t.todoItem),I=Object(i.a)(p,2),_=I[0],g=I[1];return Object(j.jsxs)("div",{className:"listItem",children:[Object(j.jsx)(r.a,{className:"listItem__input ".concat(b),type:"text",multiline:!0,value:_,onChange:function(t){g(t.target.value)},onClick:function(){n&&f(b?"":"strike")},disabled:n}),Object(j.jsx)(m.a,{color:"primary",className:"listItem__edit",onClick:function(o){console.log(o),n?(s(!1),f("")):(e({type:"EDIT_ITEM",payload:[_,t.id]}),s(!0))}}),Object(j.jsx)(O.a,{style:{color:"#eb3434"},className:"listItem__delete",onClick:function(){console.log(t.id),e({type:"DELETE_ITEM",payload:t.id})}})]},t.id)};var p=function(){var t=Object(d.c)((function(t){return t})).TodoReducer.todos;return console.log("todos: ",t),t.map((function(t){return Object(j.jsx)(f,{todoItem:t.todoItem,id:t.id,completed:t.completed},t.id)}))};var I=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("h1",{children:"Todo List"}),Object(j.jsx)(u,{}),Object(j.jsx)(p,{})]})},_=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,106)).then((function(e){var o=e.getCLS,c=e.getFID,a=e.getFCP,n=e.getLCP,s=e.getTTFB;o(t),c(t),a(t),n(t),s(t)}))},g=o(40),v=o(20),E=o(15),h=JSON.parse(localStorage.getItem("state"))?JSON.parse(localStorage.getItem("state")):{todos:[]},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0,o=e.type,c=e.payload;switch(o){case"ADD_ITEM":var a=c.todoItem,n=c.id,s=c.completed;return localStorage.setItem("state",JSON.stringify(Object(E.a)(Object(E.a)({},t),{},{todos:[{todoItem:a,id:n,completed:s}].concat(Object(v.a)(t.todos))}))),Object(E.a)(Object(E.a)({},t),{},{todos:[{todoItem:a,id:n,completed:s}].concat(Object(v.a)(t.todos))});case"DELETE_ITEM":var i=t.todos.filter((function(t){return t.id!==c}));return localStorage.setItem("state",JSON.stringify({todos:Object(v.a)(i)})),{todos:Object(v.a)(i)};case"EDIT_ITEM":console.log(c[1]);var d=t.todos.map((function(t){return t.id===c[1]&&(console.log(t.todoItem),t.todoItem=c[0]),t}));return console.log(d),localStorage.setItem("state",JSON.stringify(Object(E.a)(Object(E.a)({},t),{},{todos:Object(v.a)(d)}))),Object(E.a)(Object(E.a)({},t),{},{todos:Object(v.a)(d)});default:return t}},T=Object(g.a)({TodoReducer:S}),x=Object(g.b)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d.a,{store:x,children:Object(j.jsx)(I,{})})}),document.getElementById("root")),_()}},[[70,1,2]]]);
//# sourceMappingURL=main.4cda4445.chunk.js.map
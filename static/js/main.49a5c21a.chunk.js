(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{132:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a.n(n),r=a(16),s=a.n(r),o=a(10),i=a(5),l=a.n(i),d=a(52),b=a.n(d),u=a(47),j=a.n(u),m=a(56),x=a(6),O=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(x.a)(Object(x.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(x.a)(Object(x.a)({},e),{},{transactions:[t.payload].concat(Object(m.a)(e.transactions))});case"GET_MONTH":return Object(x.a)(Object(x.a)({},e),{},{monthToFilter:t.payload});default:return e}},f=(a(25),a(2));l.a.locale("es-mx");var h={transactions:[{id:1,text:"Ropa",amount:-1300,created:l()().format("D MMM")},{id:2,text:"Salario",amount:12e3,created:l()().format("D MMM")},{id:3,text:"Comida",amount:-300,created:l()().format("D MMM")},{id:5,text:"Play",amount:-3e3,created:l()().subtract(1,"day").format("D MMM")},{id:6,text:"Xbox",amount:-5e3,created:l()().subtract(2,"day").format("D MMM")},{id:7,text:"Deposito Carlos",amount:12200,created:l()().subtract(5,"months").format("D MMM")},{id:8,text:"Salario",amount:12e3,created:l()().subtract(4,"months").format("D MMM")},{id:9,text:"Comida",amount:-300,created:l()().subtract(4,"months").format("D MMM")},{id:10,text:"Despensa",amount:-6e3,created:l()().subtract(12,"months").format("D MMM")}],monthToFilter:""},p=Object(n.createContext)(h),M=function(e){var t=e.children,a=Object(n.useReducer)(O,h),c=Object(o.a)(a,2),r=c[0],s=c[1];return Object(f.jsx)(p.Provider,{value:{transactions:r.transactions,monthToFilter:r.monthToFilter,addTransaction:function(e){s({type:"ADD_TRANSACTION",payload:e})},deleteTransaction:function(e){s({type:"DELETE_TRANSACTION",payload:e})},getMonthToFilter:function(e){s({type:"GET_MONTH",payload:e})}},children:t})},N=(a(75),a(55));Object(u.registerLocale)("es",N.a);var v=function(){var e=Object(n.useContext)(p),t=e.addTransaction,a=e.transactions,c=e.monthToFilter.substr(0,3).toLocaleLowerCase(),r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],d=s[1],u=Object(n.useState)(""),m=Object(o.a)(u,2),x=m[0],O=m[1],h=Object(n.useState)(new Date),M=Object(o.a)(h,2),N=M[0],v=M[1],g=Object(n.useState)(!1),y=Object(o.a)(g,2),D=y[0],T=y[1],w=Object(n.useState)(!1),C=Object(o.a)(w,2),F=C[0],S=C[1],A=Object(n.useState)(!1),L=Object(o.a)(A,2),E=L[0],_=L[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{className:" btn btn-float btn-purple",onClick:function(){_(!0)},children:"Agregar movimiento"}),Object(f.jsxs)(b.a,{isOpen:E,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},children:[Object(f.jsx)("h5",{children:"Agregar Movimiento"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={id:Math.floor(1e8*Math.random()),text:i,amount:parseInt(x),created:l()(N).format("D MMM")},r=a.find((function(e){return e.text===n.text&&n.created.includes(c)}));r?T(!0):0!==x?(t(n),v(new Date),d(""),O(0),_(!1)):S(!0)},children:[Object(f.jsx)("button",{className:"modal-close-btn",onClick:function(){_(!1)},children:Object(f.jsx)("i",{class:"fa-solid fa-x"})}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",children:"Fecha de transacci\xf3n"}),Object(f.jsx)(j.a,{selected:N,onChange:function(e){return v(e)},maxDate:new Date,locale:"es"})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"transaction",children:"Transacci\xf3n"}),Object(f.jsx)("input",{className:"form-control",id:"transaction",value:i,onFocus:function(){return T(!1)},onChange:function(e){return d(e.target.value)},type:"text",placeholder:"Ingresa transacci\xf3n"})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"amount",children:"Cantidad (negativa - gasto, positiva - ingreso)"}),Object(f.jsx)("input",{className:"form-control",id:"amount",value:x,onFocus:function(){return S(!1)},onChange:function(e){return O(e.target.value)},type:"number",placeholder:"Ingresa cantidad"})]}),D&&Object(f.jsx)("p",{className:"text-danger",children:"Transacci\xf3n ya agregada"}),F&&Object(f.jsx)("p",{className:"text-danger",children:"Ingresa una cantidad mayor a cero"}),Object(f.jsx)("button",{type:"submit",className:"btn btn-purple w-100",children:"Agregar transacci\xf3n"})]})]})]})},g=function(){var e=Object(n.useContext)(p),t=e.transactions,a=e.monthToFilter.substr(0,3).toLocaleLowerCase(),c=t.filter((function(e){return e.created.toLocaleLowerCase().includes(a)})).map((function(e){return e.amount})),r=c.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),s=(-1*c.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return Object(f.jsxs)("div",{className:"d-flex justify-content-evenly",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("small",{className:"d-block text-green fw-normal",children:"Ingresos"}),Object(f.jsxs)("span",{className:"text-green fs-4 fw-bolder",children:["+$",r]})]}),Object(f.jsx)("div",{className:"border-end"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("small",{className:"d-block text-red",children:"Gastos"}),Object(f.jsxs)("span",{className:"text-red fs-4 fw-bolder",children:["-$",s]})]})]})},y=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("a",{className:"text-muted text-decoration-none","data-bs-toggle":"collapse",href:"#analitics-collapse",role:"button","aria-expanded":"false","aria-controls":"analitics-collapse",children:"Ver anal\xedticas"}),Object(f.jsx)("div",{className:"collapse",id:"analitics-collapse",children:Object(f.jsx)("div",{class:"card card-body",children:"Funcionalidad disponible pronto"})})]})},D=function(){var e=Object(n.useContext)(p),t=e.transactions,a=e.monthToFilter.substr(0,3).toLocaleLowerCase(),c=t.filter((function(e){return e.created.toLocaleLowerCase().includes(a)})).map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(f.jsxs)("div",{className:"balance-container shadow-sm p-3 mb-5 bg-body",children:[Object(f.jsx)("p",{className:"fw-bold",children:"Balance del mes"}),Object(f.jsxs)("h1",{className:"primary-color fw-bolder mb-4",children:["$",c]}),Object(f.jsx)(g,{}),Object(f.jsx)(y,{})]})},T=a(54),w=a.n(T),C=function(){var e=Object(n.useContext)(p).getMonthToFilter,t=Object(n.useState)(0),a=Object(o.a)(t,2),c=a[0],r=a[1],s=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];Object(n.useEffect)((function(){e(s[c])}),[c]);var i={arrows:!1,focusOnSelect:!0,centerMode:!0,infinite:!0,slidesToShow:3,speed:500,afterChange:function(e){return r(e)}};return Object(f.jsx)(w.a,Object(x.a)(Object(x.a)({},i),{},{children:s.map((function(e){return Object(f.jsx)("div",{className:"slide-container",children:Object(f.jsx)("h3",{className:"slide-h3",children:e})},e)}))}))};l.a.locale("es-mx");var F=function(e){var t=Object(n.useContext)(p).deleteTransaction,a=e.title,c=e.data;return Object(f.jsxs)(f.Fragment,{children:[a===l()().format("D MMM")&&Object(f.jsxs)("p",{className:"fw-bold",children:["Hoy - ",a]}),l()(a).format("D MMM")===l()().subtract(1,"day").format("D MMM")&&Object(f.jsxs)("p",{className:"fw-bold",children:[" Ayer - ",a]}),l()(a).format("D MMM")!==l()().subtract(1,"day").format("D MMM")&&l()(a).format("D MMM")!==l()().format("D MMM")&&Object(f.jsx)("p",{className:"fw-bold",children:a}),c.map((function(e){var a=e.id,n=e.text,c=e.amount;return Object(f.jsxs)("div",{className:"accordion-item my-2",children:[Object(f.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(f.jsxs)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#".concat(n),"aria-expanded":"true","aria-controls":"collapseOne",children:[Object(f.jsx)("div",{className:" img-transaction rounded-circle mr-5",alt:n}),Object(f.jsx)("span",{className:"fw-bolder",children:n}),c>0?Object(f.jsxs)("span",{className:"transaction__amount text-green fw-bold",children:["+$",c]}):Object(f.jsxs)("span",{className:"transaction__amount text-red fw-bold",children:["-$",Math.abs(c)]})]})}),Object(f.jsx)("div",{id:n,class:"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(f.jsx)("div",{className:"d-flex justify-content-evenly accordion-body",children:Object(f.jsxs)("button",{onClick:function(){return t(a)},className:"btn btn-danger w-100",children:[Object(f.jsx)("i",{className:"far fa-trash-alt me-2"}),"Borrar"]})})})]},a)}))]})},S=function(){var e=Object(n.useContext)(p),t=e.transactions,a=e.monthToFilter,c=a.substr(0,3).toLocaleLowerCase(),r=Object.values(t.reduce((function(e,t){var a=l()(t.created).format("D MMM");return e[a]||(e[a]={title:t.created,data:[]}),e[a].data.push(t),e}),{})).filter((function(e){return e.title.includes(c)}));return Object(f.jsx)("div",{className:"transaction-list__container",children:Object(f.jsx)("div",{className:"accordion",id:"transaction",children:r.length>0?r.map((function(e,t){return Object(f.jsx)(F,Object(x.a)({},e),t)})):Object(f.jsxs)("div",{class:"alert alert-primary",role:"alert",children:["No cuentas con movimientos en el mes de ",a]})})})},A=function(){return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(C,{}),Object(f.jsx)(D,{}),Object(f.jsx)(S,{}),Object(f.jsx)(v,{})]})};a(132);l.a.locale("es-mx");var L=function(){return Object(f.jsx)(M,{children:Object(f.jsx)(A,{})})};l.a.locale("es-mx"),s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.49a5c21a.chunk.js.map
(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(7),r=n.n(a),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.categorias,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){o(t.target.value)}})})},j=n(10),l=n(6),d=n.n(l),p=n(8),b=function(){var t=Object(p.a)(d.a.mark((function t(e){var n,c,a,r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"suB9wE5gxPYIRMjjAJWhrzlj56J6RiX5",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=").concat("suB9wE5gxPYIRMjjAJWhrzlj56J6RiX5"),t.next=4,fetch(n);case 4:return c=t.sent,t.next=7,c.json();case 7:return a=t.sent,r=a.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){return console.log(t),Object(u.jsxs)("div",{className:"card animate__animated animate__bounce animate__delay-2s animate__fadeIn",children:[Object(u.jsx)("img",{src:t.url,alt:t.title}),Object(u.jsx)("p",{children:t.title})]})},h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){b(t).then((function(t){setTimeout((function(){console.log(t),r({data:t,loading:!1})}),3e3)}))}),[t]),a}(e),a=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),r&&Object(u.jsx)("p",{children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(u.jsx)(f,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(c.useState)(["One punch"]),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{categorias:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(h,{category:t},t)}))})]})};n(17);r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.80dfeb62.chunk.js.map
(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"appId":"5b70dfba","appKey":"0b280898aebc0dbe7ff96d5e76654ee6"}')},24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},30:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),o=a(9),i=a(2),s=(a(29),a(30),a(8)),m=a(19),u=a(21),p=a(13),h=a(23),d=function(e){var t=e.isLoading;return c.a.createElement("div",{className:"text-center my-3"},t?c.a.createElement(h.a,{animation:"grow",role:"status",variant:"info"}):"")},E=Object(i.f)((function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=(a[0],a[1]),l=Object(n.useState)(""),o=Object(s.a)(l,2),i=(o[0],o[1]),h=Object(n.useState)(""),E=Object(s.a)(h,2),f=E[0],b=E[1],v=Object(n.useState)(!1),g=Object(s.a)(v,2),y=(g[0],g[1]),N=Object(n.useState)(!1),j=Object(s.a)(N,2),w=j[0],O=j[1],k=p.appId,q=p.appKey;Object(n.useEffect)((function(){e.query&&e.query.length>0&&b(e.query)}),[]);var S=function(t){document.activeElement.blur(),O(!0),fetch("".concat("https://api.edamam.com/search","?q=").concat(t,"&app_id=").concat(k,"&app_key=").concat(q)).then((function(a){a.json().then((function(a){console.log(a.hits),r(a.hits),i(t),O(!1),y(!0),e.history.push({pathname:"/search",search:"?q=".concat(t),state:{recipes:a.hits,searched:!0,text:t}})}))}))};return c.a.createElement("div",{className:"my-5"},c.a.createElement("div",{className:"form-inline"},c.a.createElement("input",{className:"search-bar form-control mr-1 w-50",value:f,onChange:function(e){b(e.target.value)},type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&S(f)}}),c.a.createElement("button",{className:"search-btn btn btn-outline-info",type:"button",onClick:function(){return S(f)}},c.a.createElement(m.a,{icon:u.a}))),c.a.createElement(d,{isLoading:w}))})),f=function(){return Object(n.useEffect)((function(){console.log("mounted app.js")}),[]),c.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=function(e){console.log(e);var t=e.location.query?e.location.query.data:{};return c.a.createElement("div",{className:"recipe-view mt-10vh"},c.a.createElement("h1",null,t.label),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("ul",null,t.ingredientLines&&t.ingredientLines.length>0?t.ingredientLines.map((function(e,t){return c.a.createElement("li",{key:t},e)})):"")),c.a.createElement("div",{className:"col"},c.a.createElement("img",{src:t.image,alt:t.label}))))},v=function(e){var t=e.data;return c.a.createElement("div",{className:"col-md-4 my-4 recipeInList"},c.a.createElement(o.b,{to:{pathname:"/recipe/".concat(t.label.toLowerCase().replace(/ /g,"-")),query:{data:t}}},c.a.createElement("img",{className:"img img-thumbnail",src:t.image,alt:t.label}),c.a.createElement("h5",{className:"recipe-title"},t.label)))},g=function(e){var t=e.recipes,a=e.searched,n=e.text;return c.a.createElement("div",null,a?c.a.createElement("h4",{className:"mt-5"},"Search results for: ",n):"",c.a.createElement("div",{className:"my-3 row"},a&&t.length>0?t.map((function(e,t){return c.a.createElement(v,{data:e.recipe,key:t})})):a&&0===t.length?c.a.createElement("h5",null,"No results"):""))},y=function(e){console.log(e.location.state);var t=e.location.state.recipes,a=e.location.state.searched,n=e.location.state.text;return c.a.createElement("div",null,c.a.createElement(E,{query:n}),c.a.createElement(g,{recipes:t,searched:a,text:n}))},N=c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,null,c.a.createElement("div",{className:"main"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:f}),c.a.createElement(i.a,{path:"/search",component:y}),c.a.createElement(i.a,{path:"/recipe/:name",component:b})))));l.a.render(N,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.b68c1764.chunk.js.map
(this.webpackJsonpweebx=this.webpackJsonpweebx||[]).push([[0],{23:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(10),r=n.n(s),i=n(0);var o=n(5),l=n(3),u=n.n(l),j=n(6),h=(n(9),n(17),function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/search/anime?q=".concat(t,"$order_by=title&sort-asc&limit=15"));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,console.log(c.results),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=function(e){var t=e.inputText,n=e.setInputText,a=e.status,s=e.setStatus,r=(e.genreAnime,e.setGenreAnime),o={default:11,action:1,romance:22,ecchi:9,fantasy:10};Object(c.useEffect)((function(){!function(e){var t=o[e];console.log("num",t),fetch("https://api.jikan.moe/v3/genre/anime/".concat(t,"/1")).then((function(e){return e.json()})).then((function(e){console.log(e.anime),r(e.anime)})).catch((function(e){return console.log(e)}))}(a)}),[a]);return Object(i.jsxs)("div",{className:"header-wrapper",children:[Object(i.jsx)("header",{children:Object(i.jsx)("h1",{className:"logo",children:"WeebX"})}),Object(i.jsxs)("form",{action:"",className:"form",children:[Object(i.jsxs)("div",{className:"search-container",children:[Object(i.jsx)("input",{type:"text",name:"search",id:"",onChange:function(e){n(e.target.value)}}),Object(i.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log(t),h(t)},className:"search-btn",children:"Search"})]}),Object(i.jsx)("div",{className:"select",children:Object(i.jsxs)("select",{name:"genre",className:"filter-genre",onChange:function(e){"all"===e.target.value?s("default"):s(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"action",children:"Action"}),Object(i.jsx)("option",{value:"romance",children:"Romance"}),Object(i.jsx)("option",{value:"ecchi",children:"ecchi"}),Object(i.jsx)("option",{value:"fantasy",children:"Fantasy"})]})})]})]})},m=function(e){var t=e.anime;return Object(i.jsxs)("a",{href:t.url,className:"anime-card ",children:[Object(i.jsx)("h2",{className:"anime-title",children:t.title}),Object(i.jsx)("img",{src:t.image_url,alt:"",className:"anime-img"}),Object(i.jsxs)("p",{children:["Episode count : ",t.episodes]}),Object(i.jsxs)("p",{children:["Rating : ",t.score,"/10"]})]})};var d=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("default"),r=Object(o.a)(s,2),l=r[0],u=r[1],j=Object(c.useState)([]),h=Object(o.a)(j,2),d=h[0],p=h[1],x=Object(c.useState)([]),O=Object(o.a)(x,2);return O[0],O[1],Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(b,{inputText:n,setInputText:a,status:l,setStatus:u,genreAnime:d,setGenreAnime:p}),Object(i.jsx)("div",{className:"anime-container",children:d.map((function(e){return Object(i.jsx)(m,{anime:e})}))})]})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[23,1,2]]]);
//# sourceMappingURL=main.cee5d903.chunk.js.map
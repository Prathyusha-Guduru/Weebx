(this.webpackJsonpweebx=this.webpackJsonpweebx||[]).push([[0],{23:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(10),r=n.n(s),i=n(0);var o=n(5),l=n(3),u=n.n(l),h=n(6),j=(n(9),n(17),function(e){var t=e.inputText,n=e.setInputText,a=e.status,s=e.setStatus,r=(e.genreAnime,e.setGenreAnime),o={default:-1,action:1,romance:22,ecchi:9,fantasy:10},l=function(){var e=Object(h.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/search/anime?q=".concat(t,"$order_by=title&sort-asc&limit=15"));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,console.log(c.results),r(c.results),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){!function(e){var t=o[e];-1!==t?fetch("https://api.jikan.moe/v3/genre/anime/".concat(t,"/1")).then((function(e){return e.json()})).then((function(e){console.log(e.anime),r(e.anime)})).catch((function(e){return console.log(e)})):window.localStorage.getItem("searchAnimeName")?l(window.localStorage.getItem("searchAnimeName")):fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity").then((function(e){return e.json()})).then((function(e){console.log(e.top),r(e.top)})).catch((function(e){return console.log(e)}))}(a)}),[a]);return Object(i.jsxs)("div",{className:"header-wrapper",children:[Object(i.jsx)("header",{children:Object(i.jsx)("h1",{className:"logo",children:"WeebX"})}),Object(i.jsxs)("form",{action:"",className:"form",children:[Object(i.jsxs)("div",{className:"search-container",children:[Object(i.jsx)("input",{type:"text",name:"search",id:"",onChange:function(e){n(e.target.value)}}),Object(i.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log(t),window.localStorage.setItem("searchAnimeName",t),l(t)},className:"search-btn",children:"Search"})]}),Object(i.jsx)("div",{className:"select",children:Object(i.jsxs)("select",{name:"genre",className:"filter-genre",onChange:function(e){"all"===e.target.value?s("default"):s(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"action",children:"Action"}),Object(i.jsx)("option",{value:"romance",children:"Romance"}),Object(i.jsx)("option",{value:"ecchi",children:"ecchi"}),Object(i.jsx)("option",{value:"fantasy",children:"Fantasy"})]})})]})]})}),d=function(e){var t=e.anime;return Object(i.jsxs)("a",{href:t.url,className:"anime-card ",children:[Object(i.jsx)("h2",{className:"anime-title",children:t.title}),Object(i.jsx)("img",{src:t.image_url,alt:"",className:"anime-img"}),Object(i.jsxs)("p",{children:["Episode count : ",t.episodes]}),Object(i.jsxs)("p",{children:["Rating : ",t.score,"/10"]})]})},b=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("footer",{children:Object(i.jsxs)("div",{className:"footer-wrapper",children:[Object(i.jsxs)("h2",{children:["I honestly did not expect you to scroll down all the way, anyways since you made it here, why don't you give the ",Object(i.jsx)("a",{href:"https://github.com/Prathyusha-Guduru/Weebx",children:"GitHub repo"})," a \u2b50",Object(i.jsx)("i",{class:"fa fa-header","aria-hidden":"true"})]}),Object(i.jsxs)("h2",{children:["Made by ",Object(i.jsx)("a",{href:"https://github.com/Prathyusha-Guduru/",children:"Prathyusha Guduru"})," using \u6642\u9593 API"]})]})})})};var m=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("default"),r=Object(o.a)(s,2),l=r[0],u=r[1],h=Object(c.useState)([]),m=Object(o.a)(h,2),p=m[0],x=m[1],f=Object(c.useState)([]),O=Object(o.a)(f,2);return O[0],O[1],Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{inputText:n,setInputText:a,status:l,setStatus:u,genreAnime:p,setGenreAnime:x}),Object(i.jsx)("div",{className:"anime-container",children:void 0!==p?p.map((function(e){return Object(i.jsx)(d,{anime:e})})):"Sorry Something went wrong"}),Object(i.jsx)(b,{})]})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[23,1,2]]]);
//# sourceMappingURL=main.e4d04c0b.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{947:function(e,n,t){t.r(n);var r=t(861),c=t(439),i=t(757),s=t.n(i),o=t(791),a=t(689),l=t(87),u=t(184);n.default=function(){var e=(0,o.useState)(null),n=(0,c.Z)(e,2),t=n[0],i=n[1],h=(0,a.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(h,"?api_key=").concat("e6dcd31a9bcf35c6ea88f864789b7c2f"));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,i(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error fetching movie details:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]),t?(0,u.jsxs)("div",{children:[(0,u.jsx)(l.rU,{to:"/movies",children:"Go back"}),(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:""}),(0,u.jsxs)("h2",{children:[t.title," (",t.release_date.split("-")[0],")"]}),(0,u.jsxs)("p",{children:["User score: ",Math.round(10*t.vote_average),"%"]}),(0,u.jsx)("h2",{children:"Overview"}),(0,u.jsx)("p",{children:t.overview}),(0,u.jsx)("h2",{children:"Genres"}),(0,u.jsx)("p",{children:t.genres.map((function(e){return(0,u.jsxs)("span",{children:[e.name," "]},e.id)}))}),(0,u.jsx)("p",{children:"Additional information:"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(l.OL,{to:"/movies/".concat(h,"/cast"),children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.OL,{to:"/movies/".concat(h,"/reviews"),children:"Reviews"})})]}),(0,u.jsx)(a.j3,{})]}):(0,u.jsx)("div",{children:"Loading..."})}},861:function(e,n,t){function r(e,n,t,r,c,i,s){try{var o=e[i](s),a=o.value}catch(l){return void t(l)}o.done?n(a):Promise.resolve(a).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,i){var s=e.apply(n,t);function o(e){r(s,c,i,o,a,"next",e)}function a(e){r(s,c,i,o,a,"throw",e)}o(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=947.ef48559c.chunk.js.map
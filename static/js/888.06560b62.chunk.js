"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{888:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),i=n(757),s=n.n(i),o=n(791),c=n(689),l=n(87),d={movieImage:"MovieDetails_movieImage__8nQBH",movieWrapper:"MovieDetails_movieWrapper__kAr89",goBackBtn:"MovieDetails_goBackBtn__EIQ+S",addInfoTitle:"MovieDetails_addInfoTitle__Ob9NR",addInfoItem:"MovieDetails_addInfoItem__ArYHM"},u=n(184),v=function(){var e,t,n=(0,o.useState)(null),i=(0,a.Z)(n,2),v=i[0],f=i[1],h=(0,o.useState)(""),m=(0,a.Z)(h,2)[1],p=(0,c.UO)().movieId,x=null!==(e=null===(t=(0,c.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",j=(0,l.lr)(),_=(0,a.Z)(j,1)[0];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(p,"?api_key=").concat("e6dcd31a9bcf35c6ea88f864789b7c2f"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,f(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error fetching movie details:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[p]),(0,o.useEffect)((function(){var e=_.get("query")||"";m(e)}),[_]),v?(0,u.jsxs)("div",{children:[(0,u.jsx)(l.rU,{className:d.goBackBtn,to:x,children:"Go back"}),(0,u.jsxs)("div",{className:d.movieWrapper,children:[(0,u.jsx)("img",{className:d.movieImage,src:"https://image.tmdb.org/t/p/w500".concat(v.poster_path),alt:v.title}),(0,u.jsxs)("div",{className:d.movieDetailsWrapper,children:[(0,u.jsxs)("h2",{children:[v.title," (",v.release_date.split("-")[0],")"]}),(0,u.jsxs)("p",{children:["User score: ",Math.round(10*v.vote_average),"%"]}),(0,u.jsx)("h2",{children:"Overview"}),(0,u.jsx)("p",{children:v.overview}),(0,u.jsx)("h2",{children:"Genres"}),(0,u.jsx)("p",{children:v.genres.map((function(e){return(0,u.jsxs)("span",{children:[e.name," "]},e.id)}))})]})]}),(0,u.jsx)("p",{className:d.addInfoTitle,children:"Additional information:"}),(0,u.jsxs)("ul",{className:d.addInfoList,children:[(0,u.jsx)("li",{className:d.addInfoItem,children:(0,u.jsx)(l.rU,{to:"cast",state:{from:x},children:"Cast"})}),(0,u.jsx)("li",{className:d.addInfoItem,children:(0,u.jsx)(l.rU,{to:"reviews",state:{from:x},children:"Reviews"})})]}),(0,u.jsx)(o.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:(0,u.jsx)(c.j3,{})})]}):(0,u.jsx)("div",{children:"Loading..."})}},861:function(e,t,n){function r(e,t,n,r,a,i,s){try{var o=e[i](s),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var s=e.apply(t,n);function o(e){r(s,a,i,o,c,"next",e)}function c(e){r(s,a,i,o,c,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=888.06560b62.chunk.js.map
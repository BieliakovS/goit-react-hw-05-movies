"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(e,t,n){n.r(t);var r=n(861),c=n(439),a=n(757),s=n.n(a),u=n(791),o=n(87),i=n(689),l=n(184);t.default=function(){var e=(0,u.useState)(""),t=(0,c.Z)(e,2),n=t[0],a=t[1],f=(0,u.useState)([]),h=(0,c.Z)(f,2),v=h[0],p=h[1],d=(0,u.useState)([]),m=(0,c.Z)(d,2),x=m[0],k=m[1],b=(0,o.lr)(),j=(0,c.Z)(b,2),y=j[0],S=j[1],g=(0,i.TH)(),w=(0,i.s0)();(0,u.useEffect)((function(){var e=JSON.parse(localStorage.getItem("previousSearchResults"));k(e||[])}),[]);var C=(0,u.useCallback)((0,r.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.themoviedb.org/3","/search/movie?api_key=").concat("e6dcd31a9bcf35c6ea88f864789b7c2f","&query=").concat(n));case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,p(r.results),localStorage.setItem("previousSearchResults",JSON.stringify(r.results)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error search movies:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[n]);(0,u.useEffect)((function(){var e=y.get("query");e&&(a(e),C())}),[y,C]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S({query:n}),C()},children:[(0,l.jsx)("input",{type:"text",value:n,onChange:function(e){a(e.target.value)}}),(0,l.jsx)("button",{type:"submit",children:"\u041f\u043e\u0448\u0443\u043a"})]}),"/movies"!==g.pathname&&(0,l.jsx)("button",{onClick:function(){p(x),w(-1)},children:"\u041d\u0430\u0437\u0430\u0434"}),(0,l.jsx)("ul",{children:v.map((function(e){return(0,l.jsx)("div",{children:(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:{pathname:"/movies/".concat(e.id),state:{searchResults:v}},onClick:function(){return S({query:n})},children:e.title})})},e.id)}))})]})}},861:function(e,t,n){function r(e,t,n,r,c,a,s){try{var u=e[a](s),o=u.value}catch(i){return void n(i)}u.done?t(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var s=e.apply(t,n);function u(e){r(s,c,a,u,o,"next",e)}function o(e){r(s,c,a,u,o,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=115.c3a0211a.chunk.js.map
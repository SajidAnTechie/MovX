(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t);var a=n(81),r=n.n(a),c=n(82),o=n(35),l=n(1),i=n.n(l),u=n(77),m=n(74),s=n(15),d=n(70),b=n(136),f=n(49),p=n(86),v=function(e){var t=e.movieData,n=e.totalResults;return i.a.createElement(d.a,null,i.a.createElement(m.a,null,"Now Playing Movies"),i.a.createElement("p",null,n," Movies"),i.a.createElement(b.a,null,t.map((function(e,t){return i.a.createElement(f.a,{key:t,md:"3"},i.a.createElement(s.b,{exact:!0,to:"/view/movie/".concat(e.id)},i.a.createElement(p.a,null,i.a.createElement(p.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path)}),i.a.createElement(p.a.Body,null,i.a.createElement("h4",null,e.title),i.a.createElement("p",null,e.release_date)))))}))))},h=n(80),g=n(79),x=n(75),E=n(78),O=n(21);function j(){var e=Object(O.a)(["\n  h4 {\n    white-space: nowrap !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    font-size: 1rem;\n    font-weight: 600;\n    @media (max-width: 700px) {\n      font-size: 0.9rem;\n    }\n  }\n  p {\n    font-size: 0.9rem;\n    color: gray;\n    @media (max-width: 700px) {\n      font-size: 0.7rem;\n    }\n  }\n  .card {\n    border-radius: 7px;\n    margin-top: 30px;\n    img {\n      border-top-left-radius: 7px;\n      border-top-right-radius: 7px;\n    }\n  }\n  a {\n    text-decoration: none;\n    color: black;\n  }\n"]);return j=function(){return e},e}var w=n(22).a.div(j()),k=n(83),y=n.n(k);t.default=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],m=Object(l.useState)(!1),s=Object(o.a)(m,2),d=s[0],b=s[1],f=Object(l.useState)(null),p=Object(o.a)(f,2),O=p[0],j=p[1],k=Object(l.useState)(1),N=Object(o.a)(k,2),P=N[0],C=N[1],z=Object(l.useState)(""),S=Object(o.a)(z,2),_=S[0],I=S[1],R=Object(l.useState)(""),B=Object(o.a)(R,2),T=B[0],H=B[1];Object(l.useEffect)((function(){b(!0);var e=y.a.CancelToken.source();return function(){var t=Object(c.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(u.a,"&language=en-US&page=").concat(P),{cancelToken:e.token});case 3:n=t.sent,a(n.data.results),I(n.data.total_pages),H(n.data.total_results),b(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),y.a.isCancel(t.t0)||j(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}()(),function(){console.log("Component Unmount"),e.cancel()}}),[P]);return i.a.createElement(i.a.Fragment,null,O&&i.a.createElement(E.a,null),d&&i.a.createElement(h.a,null),!d&&i.a.createElement(w,null,i.a.createElement(v,{movieData:n,totalResults:T}),i.a.createElement(x.c,null,i.a.createElement("p",null,"Pages: ",P," / ",_),i.a.createElement(g.a,{click:function(){1!==P&&C(P-1)}},"Previous"),i.a.createElement(g.a,{click:function(){P<_&&C(P+1)}},"Next"))))}},74:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=n(75);t.a=function(e){return r.a.createElement(c.b,null,r.a.createElement("h2",null,e.children))}},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return m}));var a=n(21),r=n(22);function c(){var e=Object(a.a)(["\n  width: 100%;\n  text-align: center;\n  margin-bottom: 30px;\n  margin-top: 55px;\n  button {\n    margin-left: 12px;\n    width: 80px;\n    height: 31px;\n  }\n"]);return c=function(){return e},e}function o(){var e=Object(a.a)(["\n  width: 190px;\n  height: 50px;\n  border: 0;\n  background-color: rgb(255, 182, 53);\n  font-size: 12px;\n  border-radius: 6px;\n  color: rgb(23, 28, 32);\n  font-weight: bold;\n  :hover,\n  :focus {\n    background-color: rgb(232, 170, 60);\n    outline: none;\n  }\n  @media (max-width: 1000px) {\n    width: 177px;\n    height: 45px;\n    font-size: 11px;\n  }\n"]);return o=function(){return e},e}function l(){var e=Object(a.a)(["\n  width: 100%;\n  margin-top: 80px;\n  margin-bottom: 25px;\n  h2 {\n    font-weight: 600;\n    text-transform: uppercase;\n    @media (max-width: 1000px) {\n      font-size: 1.25rem;\n    }\n  }\n"]);return l=function(){return e},e}var i=r.a.div(l()),u=r.a.button(o()),m=r.a.div(c())},77:function(e,t,n){"use strict";t.a="9dc31ba314d7d80682e8c5180714a40e"},78:function(e,t,n){"use strict";var a=n(21),r=n(1),c=n.n(r),o=n(70),l=n(74),i=n(15),u=n(22);function m(){var e=Object(a.a)(["\n    width: 67px;\n    height: 33px;\n    border: 0;\n    background-color: rgb(255, 182, 53);\n    font-size: 12px;\n    border-radius: 6px;\n    color: rgb(23, 28, 32);\n    font-weight: bold;\n    :hover,\n    :focus {\n      background-color: rgb(232, 170, 60);\n      outline: none;\n    }\n  "]);return m=function(){return e},e}function s(){var e=Object(a.a)(["\n    width: 100%;\n    text-align: center;\n    p {\n      font-size: 15px;\n      color: rgb(98, 107, 114);\n    }\n  "]);return s=function(){return e},e}t.a=function(){var e=u.a.div(s()),t=u.a.button(m());return c.a.createElement(o.a,null,c.a.createElement(e,null,c.a.createElement(l.a,null,"Network Error"),c.a.createElement("p",null,"It seems like you don't have internet connection"),c.a.createElement(i.b,{exact:!0,to:"/"},c.a.createElement(t,null,"Home"))))}},79:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=n(75);t.a=function(e){return r.a.createElement(c.a,{onClick:e.click,type:"button"},e.children)}},80:function(e,t,n){"use strict";var a=n(21),r=n(1),c=n.n(r),o=n(70),l=n(136),i=n(49),u=n(86),m=n(74),s=n(22),d=n(84),b=n.n(d);function f(){var e=Object(a.a)(["\n  .card {\n    border: 0px;\n  }\n"]);return f=function(){return e},e}var p=s.a.div(f());t.a=function(){return c.a.createElement(p,null,c.a.createElement(o.a,null,c.a.createElement(m.a,null,c.a.createElement(b.a,{height:30,width:"100%"})),c.a.createElement(l.a,null,Array(8).fill().map((function(e,t){return c.a.createElement(i.a,{md:"3",key:t},c.a.createElement(u.a,null,c.a.createElement(u.a.Body,null,c.a.createElement(b.a,{height:180,width:"100%"}),c.a.createElement("br",null),c.a.createElement(b.a,{width:"60%"}),c.a.createElement("br",null),c.a.createElement(b.a,{width:"90%"}))))})))))}},86:function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(4),o=n.n(c),l=n(1),i=n.n(l),u=n(5),m=n(23),s=function(e){return i.a.forwardRef((function(t,n){return i.a.createElement("div",Object(a.a)({},t,{ref:n,className:o()(t.className,e)}))}))},d=n(36),b=i.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,l=e.variant,m=e.as,s=void 0===m?"img":m,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),b=Object(u.a)(n,"card-img");return i.a.createElement(s,Object(a.a)({ref:t,className:o()(l?b+"-"+l:b,c)},d))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,p=s("h5"),v=s("h6"),h=Object(m.a)("card-body"),g=i.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,m=e.bg,s=e.text,b=e.border,f=e.body,p=e.children,v=e.as,g=void 0===v?"div":v,x=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(u.a)(n,"card"),O=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return i.a.createElement(d.a.Provider,{value:O},i.a.createElement(g,Object(a.a)({ref:t},x,{className:o()(c,E,m&&"bg-"+m,s&&"text-"+s,b&&"border-"+b)}),f?i.a.createElement(h,null,p):p))}));g.displayName="Card",g.defaultProps={body:!1},g.Img=f,g.Title=Object(m.a)("card-title",{Component:p}),g.Subtitle=Object(m.a)("card-subtitle",{Component:v}),g.Body=h,g.Link=Object(m.a)("card-link",{Component:"a"}),g.Text=Object(m.a)("card-text",{Component:"p"}),g.Header=Object(m.a)("card-header"),g.Footer=Object(m.a)("card-footer"),g.ImgOverlay=Object(m.a)("card-img-overlay");t.a=g}}]);
//# sourceMappingURL=5.bb9d727c.chunk.js.map
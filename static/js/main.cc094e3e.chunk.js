(this["webpackJsonpquote-of-the-day"]=this["webpackJsonpquote-of-the-day"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/hero.34bccda5.svg"},33:function(e,t,a){e.exports=a(57)},38:function(e,t,a){},39:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),l=a.n(c),o=(a(38),a(12)),s=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("section",null,r.a.createElement("h3",null,"About this App"),r.a.createElement("p",null,"Developed with React.js"),r.a.createElement("p",null,r.a.createElement("span",null,"API:")," https://programming-quotes-api.herokuapp.com/"),r.a.createElement("address",null,r.a.createElement("p",null,r.a.createElement("span",null,"Developer:")," Dave Araya"),r.a.createElement("p",null,r.a.createElement("span",null,"Email:")," dave.webdeveloper@gmail.com"))),r.a.createElement("div",{className:"logos"},r.a.createElement(o.c,{size:48,color:"darkturquoise"})))},m=(a(39),a(8)),i=a(5),u=a.n(i),p=a(9),E=a(23),h=a(24),d=a(31),v=a(25),f=a(32),g=function(e){var t=e.title;return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"title"},t),r.a.createElement("small",{className:"designer"},"By Dave Araya"))},N=a(26),b=a.n(N),w=function(e){var t=e.data,a=t.en,n=t.author,c=t._id;return r.a.createElement("div",{className:"quote"},a?r.a.createElement(b.a,{transitionName:"anim",transitionAppear:!0,transitionAppearTimeout:3e3,transitionEnter:!1,transitionLeave:!1},r.a.createElement("cite",{className:"quote__cite"},r.a.createElement("span",{className:"quote__symbol"},'"'),a),r.a.createElement("p",{className:"quote__author"},"- ",n),r.a.createElement("span",{style:{display:"none"}},c)):"Thinking...")},y="https://programming-quotes-api.herokuapp.com",k=("".concat(y,"/quotes"),"".concat(y,"/quotes/random"));function _(){return q.apply(this,arguments)}function q(){return(q=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=a(27),A=a.n(j),x=function(){return r.a.createElement("picture",{className:"hero"},r.a.createElement("img",{src:A.a,alt:"programmer"}))},M=a(13),O=a(11),D=function(e){e.path;return r.a.createElement("nav",{className:"Menu"},r.a.createElement("ul",{className:"Menu-list"},r.a.createElement("li",{className:"Menu-item"},r.a.createElement(O.b,{to:"/"},r.a.createElement(o.b,{className:"svg",color:"white"})," Home")),r.a.createElement("li",{className:"Menu-item"},r.a.createElement(O.b,{to:"/favorites"},r.a.createElement(o.a,{className:"svg",color:"red"})," Favorites"))))},R=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(d.a)(this,Object(v.a)(t).call(this,e))).generateRandomQuote=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,a.setState({data:t});case 4:case"end":return e.stop()}}),e)}))),a.state={data:[]},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.generateRandomQuote()}},{key:"render",value:function(){console.log(this.props.match);var e=this.state.data;return r.a.createElement("main",{className:"Main"},r.a.createElement(D,{path:this.props.match.path}),r.a.createElement(x,null),r.a.createElement(g,{title:"Programming Quote"}),e?r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{data:e})):"Thinking...",r.a.createElement("div",{className:"actions"},r.a.createElement("button",{type:"button",className:"Main__button-generate",onClick:this.generateRandomQuote},r.a.createElement(M.a,{size:32})," Random quote")))}}]),t}(n.Component),F={en:"Something went wrong, try again... or restart.",author:"All IT professionals",id:12314},Q=function(){return r.a.createElement("section",{className:"favorites"},r.a.createElement(D,null),r.a.createElement("h1",{className:"favorites__title"},"Favorites"),r.a.createElement("div",{className:"favorites__panel"},r.a.createElement(w,{data:F}),r.a.createElement(w,{data:F})))},T=(a(30),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:R}),r.a.createElement(m.a,{path:"/favorites",component:Q})))});var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O.a,{basename:"/"},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.cc094e3e.chunk.js.map
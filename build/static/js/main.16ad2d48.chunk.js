(this.webpackJsonpreact_demo1=this.webpackJsonpreact_demo1||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(2),o=a.n(c),s=(a(13),a(14),a(3)),r=a(4),l=a(6),u=a(5),h=a(7),m=(a(15),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={active:!1,deltaX:0,deltaY:0},e.myRef=i.a.createRef(),e}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{className:"button2",onClick:this.x.bind(this),ref:this.myRef},this.state.active,!0===this.state.active?i.a.createElement("span",{className:"circle",style:{left:this.state.deltaX,top:this.state.deltaY},onAnimationEnd:this.y.bind(this)}):"",i.a.createElement("span",{className:"value"},this.props.value))}},{key:"x",value:function(e){var t=this.myRef.current.getBoundingClientRect(),a=t.x,n=t.y,i=e.clientX-a-7.5,c=e.clientY-n-7.5;console.log(i,c),this.setState({active:!this.state.active,deltaX:i,deltaY:c})}},{key:"y",value:function(){this.setState({active:!1})}}]),t}(i.a.Component));var v=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m,{value:"\u6309\u94ae"}),i.a.createElement(m,{value:"\u6309\u94ae"}),i.a.createElement(m,{value:"\u6309\u94ae"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.16ad2d48.chunk.js.map
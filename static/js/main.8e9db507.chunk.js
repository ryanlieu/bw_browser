(this.webpackJsonpbw_browser=this.webpackJsonpbw_browser||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),c=n.n(i),s=(n(14),n(8)),r=n(2),l=n(3),u=n(1),h=n(4),m=n(5),b=(n(15),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"site-option"},o.a.createElement("p",{onClick:function(){return e.props.removeSite(e.props.site)},className:"delete-button"},"x"),o.a.createElement("p",null,this.props.site))}}]),n}(o.a.Component)),d=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={sites:[],newSite:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.removeSite=a.removeSite.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;chrome.storage.sync.get((function(t){e.setState({sites:t.blockedSites}),console.log(t.blockedSites)}))}},{key:"componentWillUnmount",value:function(){}},{key:"handleChange",value:function(e){this.setState({newSite:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;chrome.storage.sync.get((function(e){var n=e.blockedSites;n.unshift(t.state.newSite),chrome.storage.sync.set({blockedSites:n},(function(){t.setState({sites:[t.state.newSite].concat(Object(s.a)(t.state.sites)),newSite:""})}))}))}},{key:"removeSite",value:function(e){var t=this.state.sites.filter((function(t){return t!==e}));chrome.storage.sync.get((function(t){var n=t.blockedSites;n.splice(n.indexOf(e),1),chrome.storage.sync.set({blockedSites:n})})),this.setState({sites:t})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",null,"BW_BROWSER"),o.a.createElement("h2",null,"BLOCKED SITES"),o.a.createElement("button",{onClick:this.handleSubmit},"+"),o.a.createElement("input",{type:"text",placeholder:"block site (ex. youtube.com)",value:this.state.newSite,onChange:this.handleChange}),this.state.sites.map((function(t){return o.a.createElement(b,{removeSite:e.removeSite,site:t})})))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.8e9db507.chunk.js.map
(this["webpackJsonpholiday-react-app"]=this["webpackJsonpholiday-react-app"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(3),l=t.n(c),r=(t(12),t(4)),i=t.n(r),s=(t(13),t(5)),d=t.n(s),m=t(6);t(16).config();var h=function(){var e=new Date,a=e.getFullYear(),t=e.getMonth()+1,c=e.getDate(),l=function(e){var a=Object(n.useState)({data:null,loading:!0}),t=Object(m.a)(a,2),o=t[0],c=t[1];return Object(n.useEffect)((function(){c((function(e){return{data:e.data,loading:!0}})),fetch(e).then((function(e){return e.json()})).then((function(e){c({data:e.response.holidays,loading:!1})}))}),[e,c]),o}("\n  https://cors-anywhere.herokuapp.com/calendarific.com/api/v2/holidays?&api_key=".concat("b47a1b0a9a500ee287ccc3c920d0ade4405afb43","&country=MY&year=").concat(a,"&month=").concat(t,"&day=").concat(c)),r=l.holidays,s=l.loading;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"Today's ",o.a.createElement("span",{style:{color:"#ca85fd"}},"Holiday")," in ",o.a.createElement("span",{role:"img","aria-labelledby":"checking holiday"},"\ud83c\uddf2\ud83c\uddfe")),o.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),o.a.createElement(d.a,{date:e,format:"DD  MMMM YYYY",style:{position:"relative",bottom:"30px",left:"60px"}}),s?o.a.createElement("h2",null,"Checking..",o.a.createElement("span",{role:"img","aria-labelledby":"checking holiday"},"\ud83d\udcad")):void 0===r?o.a.createElement("h2",null,"Today isn't a holiday."):o.a.createElement("div",null,o.a.createElement("h2",null,r[0].name),o.a.createElement("small",null,r[0].description))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports=t.p+"static/media/logo.b2e431c3.svg"},7:function(e,a,t){e.exports=t(19)}},[[7,1,2]]]);
//# sourceMappingURL=main.6113f05e.chunk.js.map
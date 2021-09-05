(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{20:function(t,e,a){},36:function(t,e,a){},37:function(t,e,a){},57:function(t,e,a){},58:function(t,e,a){},61:function(t,e,a){},62:function(t,e,a){},63:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(18),i=a.n(c),o=(a(36),a(4)),r=a(5),l=a(7),d=a(6),h=(a(22),a(37),a(9)),u=a.n(h),j=a(11),b=a(10),O=a(66),p=a(67),f=a(68),m=a(13),x=a.n(m),v=(a(57),a(2)),S=(a(58),a(12)),w=a.n(S);a(20);var y=function(t){var e=t.split(" ")[0].split("-");return[e[2],e[1],e[0]].join("-")},D=a(0),C=function(t){var e=t.handleClose,a=t.show,n=t.children,s=a?"modal display-block":"modal display-none";return Object(D.jsx)("div",{className:s,children:Object(D.jsxs)("section",{className:"modal-main",children:[Object(D.jsx)("div",{className:"nationalStatTitle",children:Object(D.jsx)("h3",{children:"National Statistics for UK"})}),Object(D.jsx)("br",{}),Object(D.jsxs)("p",{className:"nationalStat",children:["Total infections: ",Object(D.jsx)("span",{children:n.totalInfections})]}),Object(D.jsxs)("p",{className:"nationalStat",children:["Total deaths: ",Object(D.jsx)("span",{children:n.totalDeaths})]}),Object(D.jsxs)("p",{className:"nationalStat",children:["New infections: ",Object(D.jsx)("span",{children:n.newCases})]}),Object(D.jsxs)("p",{className:"nationalStat",children:["New deaths: ",Object(D.jsx)("span",{children:n.newDeaths})]}),Object(D.jsxs)("p",{className:"nationalStat",children:["Total first vaccinations: ",Object(D.jsx)("span",{children:n.cumFirstVaccinations})]}),Object(D.jsxs)("p",{className:"nationalStat",children:["Total second vaccinations: ",Object(D.jsx)("span",{children:n.cumSecondVaccinations})]}),Object(D.jsxs)("p",{className:"nationalStat",children:["First vaccinations received on ",y(new Date(Date.now()-864e5).toISOString().split("T")[0]),": ",Object(D.jsx)("span",{children:n.firstVaccinationsDaily})]}),Object(D.jsxs)("p",{className:"nationalStat",children:["Second vaccinations received on ",y(new Date(Date.now()-864e5).toISOString().split("T")[0]),": ",Object(D.jsx)("span",{children:n.secondVaccinationsDaily})]}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("button",{className:"btn btn-secondary btn-block",type:"button",onClick:e,children:"Close"})]})})},g=function(t){var e=t.handleClose,a=t.show,n=(t.children,a?"modal display-block":"modal display-none");return Object(D.jsx)("div",{className:n,children:Object(D.jsxs)("section",{className:"modal-main",children:[Object(D.jsx)("div",{className:"nationalStatTitle",children:Object(D.jsx)("h3",{children:"Info about UK Covid-19 Tracker"})}),Object(D.jsx)("br",{}),Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:"UK Covid-19 Tracker is an app designed, developed and maintained by Christopher Fynes"}),Object(D.jsx)("li",{children:"All data rendered in this app is received from the UK Government Coronavirus app"}),Object(D.jsx)("li",{children:"All latest statistics are recorded from the previous day"}),Object(D.jsx)("li",{children:"No data available for deaths within Welsh Local Authorities"})]}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("button",{className:"btn btn-secondary btn-block",type:"button",onClick:e,children:"Close"})]})})},T=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={show:!1,infoShow:!1},n.showModal=n.showModal.bind(Object(v.a)(n)),n.hideModal=n.hideModal.bind(Object(v.a)(n)),n.showInfo=n.showInfo.bind(Object(v.a)(n)),n.hideInfo=n.hideInfo.bind(Object(v.a)(n)),n}return Object(r.a)(a,[{key:"componentWillUnmount",value:function(){if(void 0===this.props.currentInfections)return alert("Sorry, unable to access current statistics. Please try again later"),null}},{key:"showModal",value:function(){this.setState({show:!0})}},{key:"hideModal",value:function(){this.setState({show:!1})}},{key:"showInfo",value:function(){this.setState({infoShow:!0})}},{key:"hideInfo",value:function(){this.setState({infoShow:!1})}},{key:"render",value:function(){return Object(D.jsxs)("div",{id:"modalButton",className:"d-inline",children:[Object(D.jsx)(C,{show:this.state.show,handleClose:this.hideModal,children:{totalInfections:this.props.totalInfections.toLocaleString(),totalDeaths:this.props.totalDeaths.toLocaleString(),newCases:this.props.newCases.toLocaleString(),newDeaths:this.props.newDeaths.toLocaleString(),cumFirstVaccinations:this.props.cumFirstVaccinations.toLocaleString(),cumSecondVaccinations:this.props.cumSecondVaccinations.toLocaleString(),firstVaccinationsDaily:this.props.firstVaccinationsDaily.toLocaleString(),secondVaccinationsDaily:this.props.secondVaccinationsDaily.toLocaleString()}}),Object(D.jsx)(g,{show:this.state.infoShow,handleClose:this.hideInfo}),Object(D.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:this.showModal,children:"More national info"}),Object(D.jsx)("button",{className:"btn btn-secondary ml-4",type:"button",onClick:this.showInfo,children:"App info"})]})}}]),a}(s.a.Component),N=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).findTotal=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("http://localhost:".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT,"/national"));case 2:if(e=t.sent,console.log(e.status),200===e.status){t.next=9;break}return alert("Sorry, currently able to access national information. Please try again later."),t.abrupt("return");case 9:console.log(e),n.setState({totalDeaths:e.data.data[0].deathsCumulative,totalInfections:e.data.data[0].casesCumulative,newCases:e.data.data[0].casesDaily,newDeaths:e.data.data[0].deathsDaily,cumFirstVaccinations:e.data.data[1].firstVaccinationsCumulative,cumSecondVaccinations:e.data.data[1].secondVaccinationsCumulative,firstVaccinationsDaily:e.data.data[1].firstVaccinationsDaily,secondVaccinationsDaily:e.data.data[1].secondVaccinationsDaily});case 11:case"end":return t.stop()}}),t)}))),n.state={totalInfections:0,totalDeaths:0,newCases:0,newDeaths:0,cumFirstVaccinations:0,cumSecondVaccinations:0,firstVaccinationsDaily:0,secondVaccinationsDaily:0,countup:0},n.findTotal=n.findTotal.bind(Object(v.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){window.onload=this.findTotal()}},{key:"render",value:function(){return Object(D.jsxs)("div",{className:"pr-4 pt-2",children:[Object(D.jsxs)("p",{className:"headlineInfo mb-0 d-inline",children:["Total infections in UK: ",Object(D.jsx)("span",{children:Object(D.jsx)(w.a,{end:this.state.totalInfections,duration:.5,separator:","})})]}),Object(D.jsxs)("p",{className:"headlineInfo mb-0 d-inline",children:["Total deaths in UK: ",Object(D.jsx)("span",{children:Object(D.jsx)(w.a,{end:this.state.totalDeaths,duration:.5,separator:","})})]}),Object(D.jsx)(T,{totalInfections:this.state.totalInfections,totalDeaths:this.state.totalDeaths,newCases:this.state.newCases,newDeaths:this.state.newDeaths,cumFirstVaccinations:this.state.cumFirstVaccinations,cumSecondVaccinations:this.state.cumSecondVaccinations,firstVaccinationsDaily:this.state.firstVaccinationsDaily,secondVaccinationsDaily:this.state.secondVaccinationsDaily})]})}}]),a}(s.a.Component),k=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={data:null},t}return Object(r.a)(a,[{key:"render",value:function(){return Object(D.jsxs)("div",{id:"header",className:"w-100% bg",children:[Object(D.jsx)("h3",{className:"display-5 float-left",children:"UK Covid-19 Tracker"}),Object(D.jsx)(N,{})]})}}]),a}(s.a.Component),I=(a(61),function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).obtainNames=Object(j.a)(u.a.mark((function t(){var e,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/localAuthorities");case 2:return e=t.sent,t.next=5,e.json();case 5:if(a=t.sent,200===e.status){t.next=8;break}throw Error(a.message);case 8:return t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)}))),n.state={names:[],area:""},n.handleLocationChange=n.handleLocationChange.bind(Object(v.a)(n)),n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.obtainNames().then((function(e){return t.setState({names:e})})).catch((function(t){console.log(t),alert("Sorry, unable to communicate with the server. Please try again later.")}))}},{key:"handleLocationChange",value:function(){this.props.searchLocation(this.state.area)}},{key:"handleGetLAInformation",value:function(){this.props.findInfo(this.state.area)}},{key:"handleChange",value:function(t){var e=this;this.setState({area:t.target.value},(function(){e.handleLocationChange(),e.handleGetLAInformation()}))}},{key:"render",value:function(){var t=this.state.names.map((function(t){return Object(D.jsx)("option",{id:t.id,value:t.value,children:t.value})}));return Object(D.jsx)("div",{children:Object(D.jsx)("label",{for:"searchBar",children:Object(D.jsxs)("select",{className:"form-control",name:"localAuthority",onChange:this.handleChange,children:[Object(D.jsx)("option",{children:"Select an area"}),t]})})})}}]),a}(s.a.Component)),V=(a(62),function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).findInfo=function(){var t=Object(j.a)(u.a.mark((function t(e){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("http://localhost/".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT,"/getLAdata"),{params:{location:e}});case 2:if(200===(a=t.sent).status){t.next=7;break}throw Error(a.message);case 7:n.setState({cumCases:a.data.data[0].cumCasesByPublishDate,cumDeaths:a.data.data[0].cumDeaths28DaysByPublishDate,newCases:a.data.data[0].newCasesByPublishDate,newDeaths:a.data.data[0].newDeaths28DaysByPublishDate});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.state={cumCases:0,cumDeaths:0,newCases:0,newDeaths:0},n.findInfo=n.findInfo.bind(Object(v.a)(n)),n}return Object(r.a)(a,[{key:"render",value:function(){return Object(D.jsx)("div",{id:"card1",className:"card w-25 z-index-3 m-5 border border-info shadow p-3 rounded",children:Object(D.jsxs)("div",{className:"card-body",children:[Object(D.jsx)(I,{searchLocation:this.props.searchLocation,findInfo:this.findInfo}),Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"textInfo",children:[Object(D.jsxs)("p",{className:"cardInfo",children:["Total infections: ",Object(D.jsx)("span",{children:Object(D.jsx)(w.a,{end:this.state.cumCases,duration:.5,separator:","})})]}),Object(D.jsxs)("p",{className:"cardInfo",children:["Total deaths: ",Object(D.jsx)("span",{children:Object(D.jsx)(w.a,{end:this.state.cumDeaths,duration:.5,separator:","})})]}),Object(D.jsxs)("p",{className:"cardInfo",children:["New cases on ",y(new Date(Date.now()-864e5).toISOString().split("T")[0]),": ",Object(D.jsx)("span",{children:Object(D.jsx)(w.a,{end:this.state.newCases,duration:.5,separator:","})})]}),Object(D.jsxs)("p",{className:"cardInfo",children:["New deaths on ",y(new Date(Date.now()-864e5).toISOString().split("T")[0]),": ",Object(D.jsx)("span",{children:Object(D.jsx)(w.a,{end:this.state.newDeaths,duration:.5,separator:","})})]})]})})]})})}}]),a}(s.a.Component));var _=function(){var t=Object(n.useState)(null),e=Object(b.a)(t,2),a=e[0],s=e[1],c=Object(n.useState)(""),i=Object(b.a)(c,2),o=i[0],r=i[1],l=Object(n.useState)(null),d=Object(b.a)(l,2),h=d[0],m=d[1],v=Object(n.useState)(0),S=Object(b.a)(v,2),w=S[0],y=S[1],C=function(){var t=Object(j.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(e),t.next=3,x.a.get("http://localhost:".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT,"/location"),{params:{location:e}});case 3:if(200===(n=t.sent).status){t.next=8;break}throw Error(n.message);case 8:console.log(n.data.coordinates),m(n.data.geoJson),y(n.data.key),a.setView(n.data.coordinates,9);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(D.jsxs)("div",{children:[Object(D.jsx)(k,{}),Object(D.jsxs)(p.a,{id:"mapContainer",zoomControl:!1,center:[51.5074,.1278],zoom:6.5,whenCreated:s,children:[Object(D.jsx)(V,{searchLocation:C,location:o}),Object(D.jsx)(f.a,{url:"https://api.maptiler.com/maps/uk-openzoomstack-road/256/{z}/{x}/{y}.png?key=X7qpq0iR5R376h5yMZXo",attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">\xa9 MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">\xa9 OpenStreetMap contributors</a>'}),h&&Object(D.jsx)(O.a,{data:h},w)]})]})},L=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(D.jsx)("div",{children:Object(D.jsx)(_,{})})}}]),a}(s.a.Component),E=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))};i.a.render(Object(D.jsx)(L,{}),document.getElementById("root")),E()}},[[63,1,2]]]);
//# sourceMappingURL=main.969d3a69.chunk.js.map
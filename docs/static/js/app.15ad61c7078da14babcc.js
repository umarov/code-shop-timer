webpackJsonp([4],[,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),i=n(7),o=n.n(i),r=n(8),s=(n.n(r),n(10)),c=n(14);a.a.config.productionTip=!1,a.a.use(o.a),new a.a({el:"#app",router:c.a,template:"<App/>",components:{App:s.a}})},,,,,function(t,e){},,function(t,e,n){"use strict";function a(t){n(11)}var i=n(12),o=n(13),r=n(2),s=a,c=r(i.a,o.a,!1,s,"data-v-0294e237",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";e.a={name:"app",data:function(){return{activeTab:null}},methods:{navigate:function(t){this.$router.push(t)}},mounted:function(){var t=this;this.$router.onReady(function(e){t.activeTab=e.name})}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-toolbar",{staticClass:"green",attrs:{dark:""}},[n("v-toolbar-title",{staticClass:"white--text"},[t._v("Code Shop Timer")]),t._v(" "),n("v-spacer")],1),t._v(" "),n("div",{staticClass:"app-content"},[n("router-view")],1),t._v(" "),n("v-tabs",{staticClass:"bottom-tabs",attrs:{light:"",fixed:"",icons:"",centered:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[n("v-tabs-bar",{staticClass:"green"},[n("v-tabs-slider",{attrs:{color:"yellow"}}),t._v(" "),n("v-tabs-item",{key:"home",attrs:{href:"home"},on:{click:function(e){t.navigate("/")}}},[n("v-icon",{attrs:{color:"white"}},[t._v("home")]),t._v(" "),n("span",{staticClass:"white--text"},[t._v("Home")])],1),t._v(" "),n("v-tabs-item",{key:"timer",attrs:{href:"timer"},on:{click:function(e){t.navigate("/timer")}}},[n("v-icon",{attrs:{color:"white"}},[t._v("timelapse ")]),t._v(" "),n("span",{staticClass:"white--text"},[t._v("Set Timer")])],1)],1)],1)],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},function(t,e,n){"use strict";var a=n(0),i=n(15),o=function(){return n.e(0).then(n.bind(null,18))},r=function(){return n.e(0).then(n.bind(null,19))},s=function(){return n.e(2).then(n.bind(null,20))},c=function(){return n.e(1).then(n.bind(null,21))};a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"home",component:r},{path:"/timer",component:o,children:[{path:"/",name:"timer",component:s},{path:"/display/:timerAmount",name:"timer-display",component:c,props:!0}]}]})}],[3]);
//# sourceMappingURL=app.15ad61c7078da14babcc.js.map
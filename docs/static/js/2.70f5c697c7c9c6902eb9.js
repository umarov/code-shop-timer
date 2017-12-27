webpackJsonp([2],{177:function(s,t,e){"use strict";function n(s){e(188)}Object.defineProperty(t,"__esModule",{value:!0});var i=e(181),o=e(190),c=e(82),a=n,r=c(i.a,o.a,!1,a,"data-v-3dc079b2",null);t.default=r.exports},181:function(s,t,e){"use strict";t.a={name:"timer-input",data:function(){return{milliseconds:0,seconds:0,minutes:0,longPressed:!1,longPressTimeout:0}},watch:{milliseconds:function(s){s>99?(this.seconds+=1,this.milliseconds=s%100):this.milliseconds=s},seconds:function(s){s>59?(this.minutes+=1,this.seconds=s%60):this.seconds=s}},mounted:function(){},destroyed:function(){this.resetValues()},methods:{resetValues:function(){this.minutes=0,this.seconds=0,this.milliseconds=0},startLongpress:function(s,t){var e=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;this.longPressed=!0,this.longPressTimeout=setTimeout(function(){e.longPressed&&(s(t),e.startLongpress(s,t,.81*n))},.81*n)},stopLongpress:function(){clearTimeout(this.longPressTimeout),this.longPressed=!1},increment:function(s){switch(s){case"minute":this.minutes+=1;break;case"second":this.seconds+=1;break;case"millisecond":this.milliseconds+=1}},decrement:function(s){switch(s){case"minute":this.minutes<1?this.minutes=0:this.minutes-=1;break;case"second":this.seconds<1?this.seconds=0:this.seconds-=1;break;case"millisecond":this.milliseconds<1?this.milliseconds=0:this.milliseconds-=1}},onTimerAmountSet:function(){var s=this.milliseconds;this.seconds>0&&(s+=100*this.seconds),this.minutes>0&&(s+=6e3*this.minutes),s>0&&this.$router.push({name:"timer-display",params:{timerAmount:s}})}}}},188:function(s,t,e){var n=e(189);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);e(174)("0e480a18",n,!0)},189:function(s,t,e){t=s.exports=e(173)(!0),t.push([s.i,".time-values[data-v-3dc079b2]{font-size:30px}#timer-input[data-v-3dc079b2]{display:grid;grid-template-rows:30% 30% 30%;grid-row-gap:15px}","",{version:3,sources:["/home/mumarov/code/code-shop-timer/src/components/TimerInput/TimerInput.vue"],names:[],mappings:"AACA,8BACE,cAAgB,CACjB,AACD,8BACE,aAAc,AACd,+BAAgC,AAChC,iBAAmB,CACpB",file:"TimerInput.vue",sourcesContent:["\n.time-values[data-v-3dc079b2] {\n  font-size: 30px;\n}\n#timer-input[data-v-3dc079b2] {\n  display: grid;\n  grid-template-rows: 30% 30% 30%;\n  grid-row-gap: 15px;\n}\n"],sourceRoot:""}])},190:function(s,t,e){"use strict";var n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"timer-input"}},[e("div",{staticClass:"time-values"},[e("v-container",{attrs:{fluid:""}},[e("v-layout",{staticClass:"text-xs-center",attrs:{row:"","justify-space-around":""}},[e("v-flex",{attrs:{xs4:""}},[e("span",{staticClass:"time-values__minutes"},[s._v(s._s(s.minutes))]),s._v(" "),e("p",{staticClass:"body-1"},[s._v("Minutes")])]),s._v(" "),e("v-flex",{attrs:{xs4:""}},[e("span",{staticClass:"time-values__seconds"},[s._v(s._s(s.seconds))]),s._v(" "),e("p",{staticClass:"body-1"},[s._v("Seconds")])]),s._v(" "),e("v-flex",{attrs:{xs4:""}},[e("span",{staticClass:"time-values__milliseconds"},[s._v(s._s(s.milliseconds))]),s._v(" "),e("p",{staticClass:"body-1"},[s._v("Milliseconds")])])],1)],1)],1),s._v(" "),e("div",{staticClass:"time-adjusters"},[e("v-container",{attrs:{fluid:""}},[e("v-layout",{staticClass:"text-xs-center",attrs:{row:"","justify-space-around":""}},[e("div",{staticClass:"time-adjusters_minutes"},[e("v-btn",{staticClass:"green white--text mb-4",attrs:{fab:""},nativeOn:{click:function(t){s.increment("minute")},mousedown:function(t){s.startLongpress(s.increment,"minute")},mouseup:function(t){s.stopLongpress()}}},[e("v-icon",[s._v("add")])],1),s._v(" "),e("v-btn",{staticClass:"red--text mb-4",attrs:{outline:"",fab:""},nativeOn:{click:function(t){s.decrement("minute")},mousedown:function(t){s.startLongpress(s.decrement,"minute")},mouseup:function(t){s.stopLongpress()}}},[e("v-icon",[s._v("remove")])],1)],1),s._v(" "),e("div",{staticClass:"time-adjusters_seconds"},[e("v-btn",{staticClass:"green white--text mb-4",attrs:{fab:""},nativeOn:{click:function(t){s.increment("second")},mousedown:function(t){s.startLongpress(s.increment,"second")},mouseup:function(t){s.stopLongpress()}}},[e("v-icon",[s._v("add")])],1),s._v(" "),e("v-btn",{staticClass:"red--text mb-4",attrs:{outline:"",fab:""},nativeOn:{click:function(t){s.decrement("second")},mousedown:function(t){s.startLongpress(s.decrement,"second")},mouseup:function(t){s.stopLongpress()}}},[e("v-icon",[s._v("remove")])],1)],1),s._v(" "),e("div",{staticClass:"time-adjusters_milliseconds"},[e("v-btn",{staticClass:"green white--text mb-4",attrs:{fab:""},nativeOn:{click:function(t){s.increment("millisecond")},mousedown:function(t){s.startLongpress(s.increment,"millisecond")},mouseup:function(t){s.stopLongpress()}}},[e("v-icon",[s._v("add")])],1),s._v(" "),e("v-btn",{staticClass:"red--text mb-4",attrs:{outline:"",fab:""},nativeOn:{click:function(t){s.decrement("millisecond")},mousedown:function(t){s.startLongpress(s.decrement,"millisecond")},mouseup:function(t){s.stopLongpress()}}},[e("v-icon",[s._v("remove")])],1)],1)])],1)],1),s._v(" "),e("div",{staticClass:"time-submitter"},[e("v-container",{attrs:{fluid:""}},[e("v-layout",{staticClass:"text-xs-center",attrs:{row:"","justify-space-around":""}},[e("v-flex",{attrs:{xs6:""}},[e("v-btn",{staticClass:"red--text",attrs:{flat:""},nativeOn:{click:function(t){s.resetValues()}}},[s._v("Reset")])],1),s._v(" "),e("v-flex",{attrs:{xs6:""}},[e("v-btn",{staticClass:"white--text",attrs:{raised:"",color:"green"},nativeOn:{click:function(t){s.onTimerAmountSet()}}},[s._v("Prepare timer")])],1)],1)],1)],1)])},i=[],o={render:n,staticRenderFns:i};t.a=o}});
//# sourceMappingURL=2.70f5c697c7c9c6902eb9.js.map
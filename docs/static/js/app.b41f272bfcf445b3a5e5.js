webpackJsonp([1],{E7Lk:function(e,t){e.exports=[{Title:"Choose your brand",Answers:[{ID:0,Answer:"Samsung",Selected:!1},{ID:0,Answer:"Iphone",Selected:!1},{ID:0,Answer:"Huawei",Selected:!1}]},{Title:"Color",Answers:[{ID:1,Answer:"Grey",Selected:!1},{ID:1,Answer:"Black",Selected:!1},{ID:1,Answer:"White",Selected:!1}]}]},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),r=s("BO1k"),i=s.n(r),a=s("Dd8w"),o=s.n(a),u=s("NYxO"),c={name:"Navigation",data:function(){return{}},computed:o()({},Object(u.b)(["Questions","Page","selectedAnswers","Products"])),methods:{nextPage:function(){this.Questions[this.Page].Answers.some(function(e){return!0===e.Selected})&&this.Page<this.Questions.length-1&&this.$store.commit("nextPage")},prevPage:function(){0!==this.Page&&this.$store.commit("prevPage")},goToResults:function(){var e=this.Questions[this.Page].Answers.some(function(e){return!0===e.Selected}),t=this.selectedAnswers[0].Answer,s=this.selectedAnswers[1].Answer,n=this.Products.filter(function(e){return e.Name.includes(t)&&e.Color===s});e&&this.$store.commit("setMatches",n),this.$router.push({path:"/results"}).catch(function(e){return e})},resetQuiz:function(){var e=this.Questions.map(function(e){return e.Answers}),t=Array.prototype.concat.apply([],e),s=!0,n=!1,r=void 0;try{for(var a,o=i()(t);!(s=(a=o.next()).done);s=!0){a.value.Selected=!1}}catch(e){n=!0,r=e}finally{try{!s&&o.return&&o.return()}finally{if(n)throw r}}this.$store.commit("prevPage"),this.$router.push({path:"/"}).catch(function(e){return e})}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"Navigation"},["/"===e.$route.path?s("button",{staticClass:"navigationButton",on:{click:e.prevPage}},[s("i",{staticClass:"fas fa-arrow-left"})]):e._e(),e._v(" "),"/results"===e.$route.path?s("button",{staticClass:"navigationButton",on:{click:e.resetQuiz}},[e._v("Reset")]):e._e(),e._v(" "),e.Page<e.Questions.length-1?s("button",{staticClass:"navigationButton",on:{click:e.nextPage}},[s("i",{staticClass:"fas fa-arrow-right"})]):s("button",{staticClass:"navigationButton",on:{click:e.goToResults}},[e._v("Results")])])},staticRenderFns:[]},h={name:"App",components:{Navigation:s("VU/8")(c,l,!1,null,null,null).exports}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view"),this._v(" "),t("Navigation")],1)},staticRenderFns:[]},f=s("VU/8")(h,d,!1,null,null,null).exports,v=s("/ocq"),p={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"Question"},[this._v(this._s(this.Title))])},staticRenderFns:[]},m=s("VU/8")({name:"Question",props:["Title"],data:function(){return{}}},p,!1,null,null,null).exports,w={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"Answer"},[this._v(this._s(this.Answer.Answer))])},staticRenderFns:[]},g={name:"Quiz",components:{Answer:s("VU/8")({name:"Answer",props:["Answer"],data:function(){return{}}},w,!1,null,null,null).exports,Question:m},data:function(){return{}},computed:o()({},Object(u.b)(["Questions","Page","selectedAnswers","Products"])),methods:{selectAnswer:function(e){var t=!0,s=!1,n=void 0;try{for(var r,a=i()(this.Questions[this.Page].Answers);!(t=(r=a.next()).done);t=!0){r.value.Selected=!1}}catch(e){s=!0,n=e}finally{try{!t&&a.return&&a.return()}finally{if(s)throw n}}e.Selected=!0;var o=!0,u=!1,c=void 0;try{for(var l,h=i()(this.selectedAnswers);!(o=(l=h.next()).done);o=!0){var d=l.value;d.ID===e.ID&&this.selectedAnswers.splice(this.selectedAnswers.indexOf(d),1)}}catch(e){u=!0,c=e}finally{try{!o&&h.return&&h.return()}finally{if(u)throw c}}this.selectedAnswers.push(e),this.$store.commit("orderSelected")},checkIfAnswerIsEmpty:function(e){if(0===this.Page){var t=!0,s=!1,n=void 0;try{for(var r,a=i()(this.Products);!(t=(r=a.next()).done);t=!0){if(r.value.Name.includes(e.Answer))return!0}}catch(e){s=!0,n=e}finally{try{!t&&a.return&&a.return()}finally{if(s)throw n}}}if(1===this.Page){var o=!0,u=!1,c=void 0;try{for(var l,h=i()(this.Products);!(o=(l=h.next()).done);o=!0){var d=l.value;if(d.Name.includes(this.selectedAnswers[0].Answer)&&d.Color===e.Answer)return!0}}catch(e){u=!0,c=e}finally{try{!o&&h.return&&h.return()}finally{if(u)throw c}}}}}},A={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"Quiz"},[s("Question",{attrs:{Title:e.Questions[e.Page].Title}}),e._v(" "),e._l(e.Questions[e.Page].Answers,function(t,n){return s("Answer",{key:t+n,class:{answerSelected:t.Selected,answerDisabled:!e.checkIfAnswerIsEmpty(t)},attrs:{Answer:t},nativeOn:{click:function(s){return e.selectAnswer(t)}}})})],2)},staticRenderFns:[]},P=s("VU/8")(g,A,!1,null,null,null).exports,y={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"Result"},[this._v(this._s(this.Match.Name)+" - "+this._s(this.Match.Color))])},staticRenderFns:[]},_={name:"Results",components:{Result:s("VU/8")({name:"Result",props:["Match"]},y,!1,null,null,null).exports},computed:o()({},Object(u.b)(["Matches"]))},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"Results"},this._l(this.Matches,function(e,s){return t("Result",{key:e+s,attrs:{Match:e}})}),1)},staticRenderFns:[]},Q=s("VU/8")(_,C,!1,null,null,null).exports;n.a.use(v.a);var S=new v.a({routes:[{path:"/",name:"Quiz",component:P},{path:"/results",name:"Results",component:Q}]}),x=s("E7Lk"),N=s.n(x),R=s("ivQL"),I=s.n(R);n.a.use(u.a);var k=new u.a.Store({state:{Questions:N.a,Products:I.a,Page:0,selectedAnswers:[],Matches:[]},getters:{Questions:function(e){return e.Questions},Products:function(e){return e.Products},Page:function(e){return e.Page},selectedAnswers:function(e){return e.selectedAnswers},Matches:function(e){return e.Matches}},mutations:{nextPage:function(e){e.Page++},prevPage:function(e){e.Page--},orderSelected:function(e){e.selectedAnswers=e.selectedAnswers.sort(function(e,t){return e.ID-t.ID})},setMatches:function(e,t){e.Matches=t}}});s("jD+D");n.a.config.productionTip=!1,new n.a({el:"#app",store:k,router:S,components:{App:f},template:"<App/>"})},ivQL:function(e,t){e.exports=[{Name:"Samsung",Color:"Grey"},{Name:"Iphone",Color:"White"},{Name:"Samsung",Color:"Grey"},{Name:"Samsung",Color:"Grey"},{Name:"Samsung",Color:"Grey"},{Name:"Iphone",Color:"Black"},{Name:"Samsung",Color:"White"},{Name:"Samsung",Color:"Black"}]},"jD+D":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b41f272bfcf445b3a5e5.js.map
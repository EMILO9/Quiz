webpackJsonp([1],{E7Lk:function(e,t){e.exports=[{Title:"Choose your brand",Answers:[{ID:0,Answer:"Samsung",Selected:!1},{ID:0,Answer:"Iphone",Selected:!1},{ID:0,Answer:"Huawei",Selected:!1}]},{Title:"Color",Answers:[{ID:1,Answer:"Grey",Selected:!1},{ID:1,Answer:"Black",Selected:!1},{ID:1,Answer:"White",Selected:!1}]}]},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),r=s("Dd8w"),i=s.n(r),o=s("NYxO"),a={name:"Navigation",data:function(){return{}},computed:i()({},Object(o.b)(["Questions","Page","selectedAnswers","Products"])),methods:{nextPage:function(){this.Questions[this.Page].Answers.some(function(e){return!0===e.Selected})&&this.Page<this.Questions.length-1&&this.$store.commit("nextPage"),console.log(this.Page+1)},prevPage:function(){0!==this.Page&&this.$store.commit("prevPage")},goToResults:function(){var e=this.Questions[this.Page].Answers.some(function(e){return!0===e.Selected}),t=this.selectedAnswers[0].Answer,s=this.selectedAnswers[1].Answer,n=this.Products.filter(function(e){return e.Name.includes(t)&&e.Color===s});e&&console.log(n),console.log("Should route to the results page to show all the products.")}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"Navigation"},[t("button",{staticClass:"navigationButton",on:{click:this.prevPage}},[t("i",{staticClass:"fas fa-arrow-left"})]),this._v(" "),this.Page<this.Questions.length-1?t("button",{staticClass:"navigationButton",on:{click:this.nextPage}},[t("i",{staticClass:"fas fa-arrow-right"})]):t("button",{staticClass:"navigationButton",on:{click:this.goToResults}},[this._v("Results")])])},staticRenderFns:[]},c={name:"App",components:{Navigation:s("VU/8")(a,l,!1,null,null,null).exports},created:function(){alert("Check the console to see that all works well! :)")}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view"),this._v(" "),t("Navigation")],1)},staticRenderFns:[]},d=s("VU/8")(c,u,!1,null,null,null).exports,h=s("/ocq"),f=s("BO1k"),w=s.n(f),v={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"Question"},[this._v(this._s(this.Title))])},staticRenderFns:[]},g=s("VU/8")({name:"Question",props:["Title"],data:function(){return{}}},v,!1,null,null,null).exports,m={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"Answer"},[this._v(this._s(this.Answer.Answer))])},staticRenderFns:[]},p={name:"Quiz",components:{Answer:s("VU/8")({name:"Answer",props:["Answer"],data:function(){return{}}},m,!1,null,null,null).exports,Question:g},data:function(){return{}},computed:i()({},Object(o.b)(["Questions","Page","selectedAnswers","Products"])),methods:{selectAnswer:function(e){var t=!0,s=!1,n=void 0;try{for(var r,i=w()(this.Questions[this.Page].Answers);!(t=(r=i.next()).done);t=!0){r.value.Selected=!1}}catch(e){s=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(s)throw n}}e.Selected=!0;var o=!0,a=!1,l=void 0;try{for(var c,u=w()(this.selectedAnswers);!(o=(c=u.next()).done);o=!0){var d=c.value;d.ID===e.ID&&this.selectedAnswers.splice(this.selectedAnswers.indexOf(d),1)}}catch(e){a=!0,l=e}finally{try{!o&&u.return&&u.return()}finally{if(a)throw l}}this.selectedAnswers.push(e),this.$store.commit("orderSelected"),console.log(this.selectedAnswers)},checkIfAnswerIsEmpty:function(e){if(0===this.Page){var t=!0,s=!1,n=void 0;try{for(var r,i=w()(this.Products);!(t=(r=i.next()).done);t=!0){if(r.value.Name.includes(e.Answer))return!0}}catch(e){s=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(s)throw n}}}if(1===this.Page){var o=!0,a=!1,l=void 0;try{for(var c,u=w()(this.Products);!(o=(c=u.next()).done);o=!0){var d=c.value;if(d.Name.includes(this.selectedAnswers[0].Answer)&&d.Color===e.Answer)return!0}}catch(e){a=!0,l=e}finally{try{!o&&u.return&&u.return()}finally{if(a)throw l}}}}}},A={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"Quiz"},[s("Question",{attrs:{Title:e.Questions[e.Page].Title}}),e._v(" "),e._l(e.Questions[e.Page].Answers,function(t,n){return s("Answer",{key:t+n,class:{answerSelected:t.Selected,answerDisabled:!e.checkIfAnswerIsEmpty(t)},attrs:{Answer:t},nativeOn:{click:function(s){return e.selectAnswer(t)}}})})],2)},staticRenderFns:[]},P=s("VU/8")(p,A,!1,null,null,null).exports;n.a.use(h.a);var y=new h.a({routes:[{path:"/",name:"Quiz",component:P}]}),S=s("E7Lk"),C=s.n(S),Q=s("ivQL"),_=s.n(Q);n.a.use(o.a);var N=new o.a.Store({state:{Questions:C.a,Products:_.a,Page:0,selectedAnswers:[]},getters:{Questions:function(e){return e.Questions},Products:function(e){return e.Products},Page:function(e){return e.Page},selectedAnswers:function(e){return e.selectedAnswers}},mutations:{nextPage:function(e){e.Page++},prevPage:function(e){e.Page--},orderSelected:function(e){e.selectedAnswers=e.selectedAnswers.sort(function(e,t){return e.ID-t.ID})}}});s("jD+D");n.a.config.productionTip=!1,new n.a({el:"#app",store:N,router:y,components:{App:d},template:"<App/>"})},ivQL:function(e,t){e.exports=[{Name:"Samsung",Color:"Grey"},{Name:"Iphone",Color:"White"},{Name:"Samsung",Color:"Grey"},{Name:"Samsung",Color:"Grey"},{Name:"Samsung",Color:"Grey"},{Name:"Iphone",Color:"Black"},{Name:"Samsung",Color:"White"},{Name:"Samsung",Color:"Black"}]},"jD+D":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ddba8e77afe0e8ad370b.js.map
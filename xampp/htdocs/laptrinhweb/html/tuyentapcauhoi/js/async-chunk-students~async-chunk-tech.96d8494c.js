(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["async-chunk-students~async-chunk-tech"],{"021e":function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"FAQ"},[e("h3",{staticClass:"main-title"},[t._v(t._s(t.$t("title_FAQ")))]),e("div",{staticClass:"FAQ-list"},t._l(t.showList,(function(s){return e("collapse",{key:s.question,scopedSlots:t._u([{key:"cover",fn:function(){return[e("h5",{staticClass:"FAQ-title"},[t._v(t._s(t.$t(s.question)))])]},proxy:!0}],null,!0)},[t._l(s.answers,(function(s){return e("p",{key:s,staticClass:"FAQ-answer",domProps:{innerHTML:t._s(t.$t(s))}})}))],2)})),1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isMobile&&t.showList.length<t.list.length&&!t.openAll,expression:"$store.state.isMobile && showList.length < list.length && !openAll"}],staticClass:"more-wrapper"},[e("p",{staticClass:"more",on:{click:t.handleMore}},[t._v(t._s(t.$t("footer_group_more")))]),e("svg-icon",{staticClass:"arrow",attrs:{iconName:"triangluar-top-arrow"}})],1)])},i=[],a=(e("fb6a"),e("6633")),r={components:{Collapse:a["a"]},props:{list:{type:Array,default:Array}},perSize:8,data:function(){return{openAll:!1,page:1}},computed:{showList:function(){return this.$store.state.isMobile?this.list.slice(0,this.page*this.$options.perSize):this.list}},methods:{handleMore:function(){this.page+=1}}},o=r,c=(e("f535"),e("2877")),u=Object(c["a"])(o,n,i,!1,null,"5bbafe27",null);s["a"]=u.exports},"08c8":function(t,s,e){},"0d56":function(t,s,e){"use strict";var n=e("dcd3"),i=e.n(n);i.a},3591:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},[t._t("content")],2),t.pagination?e("div",{staticClass:"swiper-pagination"}):t._e(),e("span",{staticClass:"arrow arrow-prev"},[t._t("leftArrow",[e("svg-icon",{attrs:{iconName:"left-arrow"}})])],2),e("span",{staticClass:"arrow arrow-next"},[t._t("rightArrow",[e("svg-icon",{attrs:{iconName:"right-arrow"}})])],2)])},i=[],a=(e("dfa4"),e("41d6")),r={props:{container:{type:String,default:"swiper-container"},config:{type:Object,defualt:{}},pagination:{type:Boolean,default:!0}},mounted:function(){this.swiper=new a["a"](".".concat(this.container),Object.assign({},{slidesPerView:1,spaceBetween:this.$store.state.isMobile?8:100,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:this.pagination?".swiper-pagination":"",clickable:!0},navigation:{nextEl:".arrow-next",prevEl:".arrow-prev"}},this.config))}},o=r,c=(e("62db"),e("2877")),u=Object(c["a"])(o,n,i,!1,null,"a89e7c9e",null);s["a"]=u.exports},"444d":function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"process-list"},t._l(t.processList,(function(s,n){return e("div",{key:s.icon,staticClass:"process-wrapper"},[e("div",{staticClass:"process-card",on:{click:function(e){return t.handleClick(s,n)}}},[e("svg-icon",{attrs:{iconName:s.icon}}),e("div",{staticClass:"process-text"},[e("div",{staticClass:"index"},[t._v(t._s(n+1))]),e("p",{staticClass:"text"},[t._v(t._s(t.$t(s.text)))])])],1),s.desc.length||t.$store.state.isMobile?e("div",{class:"desc-wrapper "+(s.isActive?"active":"")},t._l(s.desc,(function(s){return e("p",{key:s.text,class:{highlight:s.highlight}},[t._v(t._s(t.$t(s.text)))])})),0):t._e()])})),0)},i=[],a=(e("d81d"),e("a434"),e("5530")),r={props:{process:{type:Array,default:Array}},data:function(){return{processList:this.process}},watch:{"$store.state.isMobile":function(){this.processList=this.processList.map((function(t){return Object.assign({},t,{isActive:!1})}))}},methods:{handleClick:function(t,s){this.processList.splice(s,1,Object(a["a"])({},t,{isActive:!t.isActive}))}}},o=r,c=(e("0d56"),e("2877")),u=Object(c["a"])(o,n,i,!1,null,"4c1b2f3a",null);s["a"]=u.exports},"45cd":function(t,s,e){"use strict";var n=e("08c8"),i=e.n(n);i.a},"4c2e":function(t,s,e){},6198:function(t,s,e){},6225:function(t,s,e){"use strict";var n=e("f42a"),i=e.n(n);i.a},"62db":function(t,s,e){"use strict";var n=e("6198"),i=e.n(n);i.a},6633:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"collapse",class:{"bottom-border":t.bottomBorder}},[e("div",{staticClass:"collapse-item"},[e("div",{staticClass:"cover-wrapper",on:{click:t.toggleOpen}},[t._t("cover"),e("div",{class:{close:!t.open}},[t._t("arrow",[e("svg-icon",{staticClass:"arrow",attrs:{iconName:"triangluar-top-arrow"}})])],2)],2),e("div",{staticClass:"content",class:{close:!t.open}},[t._t("default")],2)])])},i=[],a={props:{defaultOpen:{type:Boolean,default:!1},bottomBorder:{type:Boolean,default:!0}},data:function(){return{open:this.defaultOpen}},methods:{toggleOpen:function(){this.open=!this.open}}},r=a,o=(e("45cd"),e("2877")),c=Object(o["a"])(r,n,i,!1,null,"7d14a5be",null);s["a"]=c.exports},"68da":function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("swiper-carousel",{scopedSlots:t._u([{key:"content",fn:function(){return t._l(t.list,(function(t,s){return e("hear-card",{key:t.images[0]+s,staticClass:"swiper-slide",attrs:{text:t.text,name:t.name,explain:t.position,image:t.images[0]}})}))},proxy:!0}])})},i=[],a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hear-card-item"},[e("div",{staticClass:"item content"},[e("div",[e("svg-icon",{attrs:{iconName:"quotation"}}),e("p",{staticClass:"text"},[t._v(t._s(t.$t(t.text)))])],1),e("div",[e("p",{staticClass:"name"},[t._v(t._s(t.$t(t.name)))]),e("p",{staticClass:"explain"},[t._v(t._s(t.$t(t.explain)))])])]),e("div",{staticClass:"item image",style:"background-image: url("+t.image+")"})])},r=[],o={props:{text:{type:String},name:{type:String},explain:{type:String},image:{type:String}}},c=o,u=(e("6225"),e("2877")),l=Object(u["a"])(c,a,r,!1,null,"78599856",null),_=l.exports,p=e("3591"),d={components:{HearCard:_,SwiperCarousel:p["a"]},props:{list:{type:Array}}},w=d,f=Object(u["a"])(w,n,i,!1,null,null,null);s["a"]=f.exports},"6fd0":function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"img-introduce-card",class:t.direction?t.direction:"left"},[e("div",{staticClass:"img-introduce__img"},[e("img",{attrs:{src:t.src}})]),e("div",{staticClass:"img-introduce__text"},[e("h4",{staticClass:"img-introduce__title"},[t._v(t._s(t.$t(t.title)))]),e("p",{ref:"para",staticClass:"img-introduce__paragraph",domProps:{innerHTML:t._s(t.$t(t.text))}}),t.btnText?e("a",{attrs:{target:t.blank?"_blank":"",href:t.href}},[e("Button",{attrs:{text:t.$t(t.btnText)}})],1):t._e()])])},i=[],a=(e("ac1f"),e("5319"),e("13dc")),r={props:{src:String,title:String,text:String,href:String,btnText:String,blank:Boolean,direction:String},components:{Button:a["a"]},mounted:function(){var t=this.$refs.para.innerHTML;this.$refs.para.innerHTML=t.replace(/(<br>){3,}/g,"<br><br>")}},o=r,c=(e("ff12"),e("2877")),u=Object(c["a"])(o,n,i,!1,null,null,null);s["a"]=u.exports},"76b7":function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"topic-container"},[e("div",{staticClass:"topic-content"},[e("h3",{staticClass:"main-title"},[t._v(t._s(t.title))]),t._l(t.descriptions,(function(s){return e("p",{key:s,staticClass:"topic-intro-parag"},[t._v(t._s(s))])})),t._t("default")],2)])},i=[],a={props:{title:{type:String,default:""},descriptions:{type:Array,default:Array}},data:function(){return{}},methods:{}},r=a,o=(e("9eec"),e("2877")),c=Object(o["a"])(r,n,i,!1,null,null,null);s["a"]=c.exports},"9eec":function(t,s,e){"use strict";var n=e("4c2e"),i=e.n(n);i.a},ac3a:function(t,s,e){},c22c:function(t,s,e){},dcd3:function(t,s,e){},e799:function(t,s,e){"use strict";e.d(s,"a",(function(){return n})),e.d(s,"c",(function(){return i})),e.d(s,"b",(function(){return a}));var n=[{question:"jobs_question_1",answers:["jobs_answer_1_1","jobs_answer_1_2"]},{question:"jobs_question_2",answers:["jobs_answer_2"]},{question:"jobs_question_3",answers:["jobs_answer_3"]},{question:"jobs_question_4",answers:["jobs_answer_4"]},{question:"jobs_question_5",answers:["jobs_answer_5"]},{question:"jobs_question_6",answers:["jobs_answer_6"]},{question:"jobs_question_7",answers:["jobs_answer_7"]},{question:"jobs_question_8",answers:["jobs_answer_8"]},{question:"jobs_question_9",answers:["jobs_answer_9"]},{question:"jobs_question_10",answers:["jobs_answer_10"]},{question:"jobs_question_11",answers:["jobs_answer_11","jobs_answer_12"]}],i=[{question:"tech_question_1",answers:["tech_answer_1_1","tech_answer_1_2"]},{question:"tech_question_2",answers:["tech_answer_2_1","tech_answer_2_2"]},{question:"tech_question_3",answers:["tech_answer_3"]},{question:"tech_question_4",answers:["tech_answer_4"]},{question:"tech_question_5",answers:["tech_answer_5"]},{question:"tech_question_6",answers:["tech_answer_6"]},{question:"tech_question_7",answers:["tech_answer_7_1","tech_answer_7_2"]},{question:"tech_question_8",answers:["tech_answer_8"]}],a=[{question:"student_question_1",answers:["student_answer_1"]},{question:"student_question_2",answers:["student_answer_2"]},{question:"student_question_3",answers:["student_answer_3"]},{question:"student_question_4",answers:["student_answer_4"]},{question:"student_question_5",answers:["student_answer_5"]},{question:"student_question_6",answers:["student_answer_6"]},{question:"student_question_7",answers:["student_answer_7"]}]},f42a:function(t,s,e){},f535:function(t,s,e){"use strict";var n=e("ac3a"),i=e.n(n);i.a},ff12:function(t,s,e){"use strict";var n=e("c22c"),i=e.n(n);i.a}}]);
//# sourceMappingURL=async-chunk-students~async-chunk-tech.96d8494c.js.map
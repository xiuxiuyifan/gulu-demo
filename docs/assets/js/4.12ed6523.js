(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{262:function(t,e,n){},263:function(t,e,n){"use strict";e.a={data:function(){return{codeParent:[],codeHeightArr:[],isShow:[],columns:[{title:"参数",dataIndex:"params",key:"params"},{title:"说明",dataIndex:"description",key:"description"},{title:"类型",dataIndex:"type",key:"type"},{title:"默认值",dataIndex:"default",key:"default"},{title:"版本",dataIndex:"version",key:"version"}]}},methods:{showCode:function(t){var e=this;this.$set(this.isShow,t,!this.isShow[t]),this.$nextTick(function(){!0===e.isShow[t]?e.codeParent[t].style.height=e.codeHeightArr[t]+"px":e.codeParent[t].style.height=0})},getCodesHeight:function(){var t=document.getElementsByClassName("code-content-height");this.codeParent=document.getElementsByClassName("code-content");for(var e=t.length,n=0;n<e;n++)this.codeHeightArr.push(t[n].getBoundingClientRect().height),this.isShow.push(!1)}},mounted:function(){var t=this;this.$nextTick(function(){t.getCodesHeight()})}}},264:function(t,e,n){},265:function(t,e,n){"use strict";var a=n(262);n.n(a).a},266:function(t,e,n){"use strict";var a={name:"g-table",props:{columns:{type:Array,required:!0},dataTable:{type:Array,required:!0}}},i=(n(265),n(1)),s=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-table"},[n("table",[n("thead",[n("tr",t._l(t.columns,function(e,a){return n("th",{key:e.key},[t._v(t._s(e.title))])}),0)]),t._v(" "),n("tbody",t._l(t.dataTable,function(e,a){return n("tr",{key:e.id},t._l(t.columns,function(a,i){return n("td",{key:a.key},[t._v(t._s(e[a.dataIndex]))])}),0)}),0)])])},[],!1,null,"194681e5",null);e.a=s.exports},267:function(t,e,n){var a=n(44),i=n(28);n(268)("keys",function(){return function(t){return i(a(t))}})},268:function(t,e,n){var a=n(27),i=n(17),s=n(8);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),a(a.S+a.F*s(function(){n(1)}),"Object",o)}},273:function(t,e,n){var a=n(9).f,i=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in i||n(3)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},278:function(t,e,n){"use strict";var a=n(264);n.n(a).a},280:function(t,e,n){"use strict";n(43),n(267);var a=n(26),i={name:"g-button",props:{icon:{type:String},lodding:{type:Boolean,default:!1},position:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t||(console.error("position属性只接受left或者right"),!1)}},ripples:{type:Boolean,default:!1},type:{type:String},round:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},components:{"g-icon":a.a},mounted:function(){this.ripples&&this.$el.classList.add("ripples")},methods:{verify:function(t){if(void 0!==this[t]&&!1!==this[t])return"i-".concat(t,"-").concat(this[t])},compatible:function(){return 0===Object.keys(this.$slots).length?void 0:"i-".concat(this.position)}}},s=(n(278),n(1)),o=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"g-button",class:[t.compatible(),t.verify("type"),t.verify("round"),t.verify("plain"),t.verify("disabled")],on:{click:function(e){return t.$emit("click")}}},[t.lodding?t._e():n("g-icon",{attrs:{icon:t.icon}}),t._v(" "),t.lodding?n("g-icon",{class:{rotate:t.lodding},attrs:{icon:"lodding"}}):t._e(),t._v(" "),n("span",{staticClass:"g-word"},[t._t("default")],2)],1)},[],!1,null,"55738bb1",null);e.a=o.exports},346:function(t,e,n){},347:function(t,e,n){},348:function(t,e,n){},349:function(t,e,n){},350:function(t,e,n){},351:function(t,e,n){},365:function(t,e,n){t.exports=n.p+"assets/img/tabs1.dd6f74e1.png"},366:function(t,e,n){t.exports=n.p+"assets/img/tabs2.df3f2507.jpg"},367:function(t,e,n){t.exports=n.p+"assets/img/tabs3.e4be3f5d.jpg"},368:function(t,e,n){t.exports=n.p+"assets/img/tabs4.d1d2a08a.png"},455:function(t,e,n){"use strict";var a=n(346);n.n(a).a},456:function(t,e,n){"use strict";var a=n(347);n.n(a).a},457:function(t,e,n){"use strict";var a=n(348);n.n(a).a},458:function(t,e,n){"use strict";var a=n(349);n.n(a).a},459:function(t,e,n){"use strict";var a=n(350);n.n(a).a},460:function(t,e,n){"use strict";var a=n(351);n.n(a).a},463:function(t,e,n){"use strict";n.r(e);var a=n(26),i=n(263),s=n(0),o={name:"g-tab",data:function(){return{eventBus:new s.a,render:!0}},props:{selected:{type:String},beforChange:{type:Function},position:{type:String,default:"top",validator:function(t){if(["top","right","bottom","left"].indexOf(t)>=0)return t;console.log("position的值只能是'top','right','bottom','left'请检查")}}},watch:{position:function(t,e){this.$el.appendChild(this.$children[1].$el),this.eventBus.$emit("update:label",{positioned:this.position,selected:this.$children[0].activeCourrent})}},created:function(){var t=this;this.eventBus.$on("contentMounted",function(e){t.$el.appendChild(e)})},mounted:function(){this.eventBus.$emit("update:label",{selected:this.selected})},provide:function(){return{tabEventBus:this.eventBus}}},c=(n(455),n(1)),r=Object(c.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"g-tab"},[this._t("default")],2)},[],!1,null,"7cfb83a5",null).exports,l=(n(273),n(43),function(t,e){for(var n=0,a=0;a<=e;a++)n+=t[a];return n}),d={name:"g-tab-header",inject:["tabEventBus"],data:function(){return{activeCourrent:this.$parent.selected,labelArr:[],widthArr:[],heightArr:[],isshowbtns:!0}},computed:{tabHeaderPosition:function(){return this.$parent.position}},created:function(){var t=this;this.tabEventBus.$on("update:label",function(e){if(e.positioned){t.widthArr=[],t.heightArr=[],t.$refs.activebar.style="",t.$refs.activebar.style.display="none","bottom"===e.positioned&&t.tabEventBus.$emit("contentMounted",t.$el),clearTimeout(n);var n=setTimeout(function(){t.$refs.activebar.style.display="block"},300);t.$nextTick(function(){t.computedBar(),t.changeStyle(e.selected)})}else t.changeStyle(e.selected)})},mounted:function(){this.computedBar(),this.$refs.headerbtns.childNodes.length<=0&&(this.isshowbtns=!1),"left"!==this.tabHeaderPosition&&"right"!==this.tabHeaderPosition||(this.isshowbtns=!1)},methods:{changeStyle:function(t){var e;this.activeCourrent=t,e=this.labelArr.indexOf(t),"top"===this.tabHeaderPosition||"bottom"===this.tabHeaderPosition?(this.$refs.activebar.style.transform="translateX(".concat(l(this.widthArr,e-1)+"px",")"),this.$refs.activebar.style.width=this.widthArr[e]+"px"):(this.$refs.activebar.style.transform="translateY(".concat(l(this.heightArr,e-1)+"px",")"),this.$refs.activebar.style.height=this.heightArr[e]+"px")},computedBar:function(){var t=this;this.$children.forEach(function(e,n){"tab-header-item"===e.$options.name&&(t.widthArr.push(parseInt(getComputedStyle(e.$el).width)),t.heightArr.push(parseInt(getComputedStyle(e.$el).height)),t.labelArr.push(e.label))})}}},h=(n(456),Object(c.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"g-tab-header",class:"tab-position-"+this.tabHeaderPosition},[e("div",{ref:"activebar",staticClass:"acitve-bar"}),this._v(" "),this.isshowbtns?e("div",{ref:"headerbtns",staticClass:"tab-header-button"},[this._t("button")],2):this._e(),this._v(" "),this._t("default")],2)},[],!1,null,"23f3daff",null).exports),u={data:function(){return{active:!1}},inject:["tabEventBus"],name:"tab-header-item",props:{label:{type:[String]}},computed:{classes:function(){return{active:this.active}}},created:function(){var t=this;this.tabEventBus.$on("update:label",function(e){t.active=t.label===e.selected})},methods:{changeTab:function(t){this.$parent.$parent.beforChange&&(this.$parent.$parent.beforChange(),this.tabEventBus.$emit("update:label",{selected:this.label}))}}},b=(n(457),Object(c.a)(u,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tab-header-item",class:t.classes,on:{click:function(e){return t.changeTab(e)}}},[t._t("default")],2)},[],!1,null,"2ef60ba2",null).exports),g={inject:["tabEventBus"],name:"g-tab-content",data:function(){return{tabPosition:this.$parent.position}},watch:{tabPosition:function(t,e){if(console.log(t),"bottom"===this.$parent.position){console.log("下边被触发了");var n=this.$el.previousElementSibling;this.tabEventBus.$emit("contentMounted",n)}}},mounted:function(){if("bottom"===this.$parent.position){console.log("下边被触发了");var t=this.$el.previousElementSibling;this.tabEventBus.$emit("contentMounted",t)}}},p=(n(458),Object(c.a)(g,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"g-tab-content"},[this._t("default")],2)},[],!1,null,"ed8517d6",null).exports),v={name:"tab-content-item",inject:["tabEventBus"],data:function(){return{active:!1}},props:{label:{type:[String]}},computed:{classes:function(){return{active:this.active}}},created:function(){var t=this;this.tabEventBus.$on("update:label",function(e){t.active=t.label===e.selected})}},f=(n(459),Object(c.a)(v,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.active,expression:"active"}],staticClass:"tab-content-item",class:this.classes},[this._t("default")],2)},[],!1,null,"4cd6ea31",null).exports),m=n(266),_=n(280),y={name:"tabsDocs",mixins:[i.a],components:{GIcon:a.a,GTabs:r,GTabsHeader:h,GTabsHeaderItem:b,GTabsContent:p,GTabsContentItem:f,GTable:m.a,GButtton:_.a},data:function(){return{selected:"1",selected1:"1",position:"top",str:'\n<g-tabs :beforChange="beforChange" :selected.sync="selected" position="top">\n  <g-tabs-header>\n    <g-tabs-header-item label="1">墨家</g-tabs-header-item>\n    <g-tabs-header-item label="2">农家</g-tabs-header-item>\n    <g-tabs-header-item label="3">阴阳家</g-tabs-header-item>\n    <g-tabs-header-item label="4">纵横</g-tabs-header-item>\n  </g-tabs-header>\n  <g-tabs-content>\n    <g-tabs-content-item label="1">\n      <img align="right" alt="" hspace="5" src="../public/tabs1.png" vspace="5" width="120">\n      墨家，中国3D武侠动画《秦时明月》系列中的门派。\n      “天下皆白，唯我独黑。非攻墨门，兼爱平生”，墨家始创于墨子，历代掌门都称为“墨家巨子”。历代巨子携弟子于绝岭雄峰间，历时三百余年筑起墨家机关城，成为最后的“人间乐土”。\n      墨家与儒家并称当世两大显学，墨家弟子中精于武艺者称为“墨侠”，奉守“兼爱，非攻”的要旨，擅长机关构造之术。墨家弟子行侠仗义，常以墨门绝学非攻机关术助他国守城为世人称道，是侠义精神的代表。 [1]\n    </g-tabs-content-item>\n    <g-tabs-content-item label="2">\n      <img align="right" alt="" hspace="5" src="../public/tabs2.jpg" vspace="5" width="120">\n      农家，中国3D武侠动画《秦时明月》系列中的门派，历代首领均被称为农家侠魁。\n      燕国豪侠田光曾作为农家侠魁，与楚国昌平君、燕国燕丹、项氏一族项燕共同策划过“青龙计划”。\n      以田氏一族为主，后主要分裂为以烈山堂田氏一族和神农堂朱家为主的两派。 [1]\n    </g-tabs-content-item>\n    <g-tabs-content-item label="3">\n      <img align="right" alt="" hspace="5" src="../public/tabs3.jpg" vspace="5" width="120">\n      阴阳家，中国3D武侠动画《秦时明月》系列中的门派。\n      “太极玄一，阴阳两气”。（距故事开始）五百年前，阴阳家脱离道家，剑走偏锋，自成一派，追求天人极限，创出了很多威力巨大的招术，世代也有俊杰辈出。但其高深莫测的阴阳咒印却又在上百年前失传了，而这时，正因为其失传了百年，所以能够诊断和解开阴阳咒术的人也已经几乎找不到了。\n    </g-tabs-content-item>\n    <g-tabs-content-item label="4">\n      <img align="right" alt="" hspace="5" src="../public/tabs4.png" vspace="5" width="120">\n      纵横家（鬼谷派），中国3D武侠动画《秦时明月》系列中的门派。\n    </g-tabs-content-item>\n  </g-tabs-content>\n</g-tabs>'.trim(),str1:'\n<div style="margin: 10px;">\n  <g-buttton @click="position=\'top\'">上方</g-buttton>\n  <g-buttton @click="position=\'right\'">右方</g-buttton>\n  <g-buttton @click="position=\'left\'">左方</g-buttton>\n  <g-buttton @click="position=\'bottom\'">下方</g-buttton>\n</div>\n<g-tabs :beforChange="beforChange" :selected.sync="selected" position="top">\n  <g-tabs-header>\n    <g-tabs-header-item label="1">墨家</g-tabs-header-item>\n    <g-tabs-header-item label="2">农家</g-tabs-header-item>\n    <g-tabs-header-item label="3">阴阳家</g-tabs-header-item>\n    <g-tabs-header-item label="4">纵横</g-tabs-header-item>\n  </g-tabs-header>\n  <g-tabs-content>\n    <g-tabs-content-item label="1">\n      <img align="right" alt="" hspace="5" src="../public/tabs1.png" vspace="5" width="120">\n      墨家，中国3D武侠动画《秦时明月》系列中的门派。\n      “天下皆白，唯我独黑。非攻墨门，兼爱平生”，墨家始创于墨子，历代掌门都称为“墨家巨子”。历代巨子携弟子于绝岭雄峰间，历时三百余年筑起墨家机关城，成为最后的“人间乐土”。\n      墨家与儒家并称当世两大显学，墨家弟子中精于武艺者称为“墨侠”，奉守“兼爱，非攻”的要旨，擅长机关构造之术。墨家弟子行侠仗义，常以墨门绝学非攻机关术助他国守城为世人称道，是侠义精神的代表。 [1]\n    </g-tabs-content-item>\n    <g-tabs-content-item label="2">\n      <img align="right" alt="" hspace="5" src="../public/tabs2.jpg" vspace="5" width="120">\n      农家，中国3D武侠动画《秦时明月》系列中的门派，历代首领均被称为农家侠魁。\n      燕国豪侠田光曾作为农家侠魁，与楚国昌平君、燕国燕丹、项氏一族项燕共同策划过“青龙计划”。\n      以田氏一族为主，后主要分裂为以烈山堂田氏一族和神农堂朱家为主的两派。 [1]\n    </g-tabs-content-item>\n    <g-tabs-content-item label="3">\n      <img align="right" alt="" hspace="5" src="../public/tabs3.jpg" vspace="5" width="120">\n      阴阳家，中国3D武侠动画《秦时明月》系列中的门派。\n      “太极玄一，阴阳两气”。（距故事开始）五百年前，阴阳家脱离道家，剑走偏锋，自成一派，追求天人极限，创出了很多威力巨大的招术，世代也有俊杰辈出。但其高深莫测的阴阳咒印却又在上百年前失传了，而这时，正因为其失传了百年，所以能够诊断和解开阴阳咒术的人也已经几乎找不到了。\n    </g-tabs-content-item>\n    <g-tabs-content-item label="4">\n      <img align="right" alt="" hspace="5" src="../public/tabs4.png" vspace="5" width="120">\n      纵横家（鬼谷派），中国3D武侠动画《秦时明月》系列中的门派。\n    </g-tabs-content-item>\n  </g-tabs-content>\n</g-tabs>\n        ',dataTable:[{id:"1",params:"position",description:"不同形态选项卡的几种",type:"string| top bottom left right",default:"top",version:""},{id:"2",params:"selected",description:"当前选中的那一个选项卡",type:"在tabs-header里面定义的name 中",default:"-",version:""},{id:"3",params:"beforChange",description:"在选项卡切换之前",type:"function",default:"()=>({})",version:""}]}},methods:{beforChange:function(){console.log("hi")}}},w=(n(460),Object(c.a)(y,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabsDocs"},[a("h2",[t._v("切换的选项卡")]),t._v(" "),a("p",[t._v("用在一些页面上用户通过选项卡，看见选项卡下面对应的这一类内容")]),t._v(" "),a("h3",[t._v("切换按钮在上方")]),t._v(" "),a("p",[t._v("用户点击上方tab查看不同的内容")]),t._v(" "),a("div",{staticClass:"component-wrapper"},[a("div",{staticClass:"component-wrapper-demo"},[a("g-tabs",{attrs:{beforChange:t.beforChange,selected:t.selected,position:"top"},on:{"update:selected":function(e){t.selected=e}}},[a("g-tabs-header",[a("g-tabs-header-item",{attrs:{label:"1"}},[t._v("墨家")]),t._v(" "),a("g-tabs-header-item",{attrs:{label:"2"}},[t._v("农家")]),t._v(" "),a("g-tabs-header-item",{attrs:{label:"3"}},[t._v("阴阳家")]),t._v(" "),a("g-tabs-header-item",{attrs:{label:"4"}},[t._v("纵横")])],1),t._v(" "),a("g-tabs-content",[a("g-tabs-content-item",{attrs:{label:"1"}},[a("img",{attrs:{align:"right",alt:"",hspace:"5",src:n(365),vspace:"5",width:"120"}}),t._v("\n            墨家，中国3D武侠动画《秦时明月》系列中的门派。\n            “天下皆白，唯我独黑。非攻墨门，兼爱平生”，墨家始创于墨子，历代掌门都称为“墨家巨子”。历代巨子携弟子于绝岭雄峰间，历时三百余年筑起墨家机关城，成为最后的“人间乐土”。\n            墨家与儒家并称当世两大显学，墨家弟子中精于武艺者称为“墨侠”，奉守“兼爱，非攻”的要旨，擅长机关构造之术。墨家弟子行侠仗义，常以墨门绝学非攻机关术助他国守城为世人称道，是侠义精神的代表。 [1]\n          ")]),t._v(" "),a("g-tabs-content-item",{attrs:{label:"2"}},[a("img",{attrs:{align:"right",alt:"",hspace:"5",src:n(366),vspace:"5",width:"120"}}),t._v("\n            农家，中国3D武侠动画《秦时明月》系列中的门派，历代首领均被称为农家侠魁。\n            燕国豪侠田光曾作为农家侠魁，与楚国昌平君、燕国燕丹、项氏一族项燕共同策划过“青龙计划”。\n            以田氏一族为主，后主要分裂为以烈山堂田氏一族和神农堂朱家为主的两派。 [1]\n          ")]),t._v(" "),a("g-tabs-content-item",{attrs:{label:"3"}},[a("img",{attrs:{align:"right",alt:"",hspace:"5",src:n(367),vspace:"5",width:"120"}}),t._v("\n            阴阳家，中国3D武侠动画《秦时明月》系列中的门派。\n            “太极玄一，阴阳两气”。（距故事开始）五百年前，阴阳家脱离道家，剑走偏锋，自成一派，追求天人极限，创出了很多威力巨大的招术，世代也有俊杰辈出。但其高深莫测的阴阳咒印却又在上百年前失传了，而这时，正因为其失传了百年，所以能够诊断和解开阴阳咒术的人也已经几乎找不到了。\n          ")]),t._v(" "),a("g-tabs-content-item",{attrs:{label:"4"}},[a("img",{attrs:{align:"right",alt:"",hspace:"5",src:n(368),vspace:"5",width:"120"}}),t._v("\n            纵横家（鬼谷派），中国3D武侠动画《秦时明月》系列中的门派。\n          ")])],1)],1)],1),t._v(" "),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[a("div",{staticClass:"code-content-height"},[a("div",{staticClass:"code-user-desc"},[t._v("\n          组件描述说明\n        ")]),t._v(" "),a("pre",[a("code",[t._v(t._s(t.str))])])])]),t._v(" "),a("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(0)}}},[a("g-icon",{staticClass:"icon-down",attrs:{icon:!1===t.isShow[0]?"codedown":"codeup"}}),t._v(" "),a("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),a("h3",[t._v("切换区域可以在不同的方位")]),t._v(" "),a("p",[t._v("支持四种不同的tabs状态")]),t._v(" "),a("div",{staticStyle:{margin:"10px"}},[a("g-buttton",{on:{click:function(e){t.position="top"}}},[t._v("上方")]),t._v(" "),a("g-buttton",{on:{click:function(e){t.position="right"}}},[t._v("右方")]),t._v(" "),a("g-buttton",{on:{click:function(e){t.position="left"}}},[t._v("左方")]),t._v(" "),a("g-buttton",{on:{click:function(e){t.position="bottom"}}},[t._v("下方")])],1),t._v(" "),a("div",{staticClass:"component-wrapper"},[a("div",{staticClass:"component-wrapper-demo"},[a("g-tabs",{attrs:{beforChange:t.beforChange,position:t.position,selected:t.selected1},on:{"update:selected":function(e){t.selected1=e}}},[a("g-tabs-header",[a("g-tabs-header-item",{attrs:{label:"1"}},[t._v("墨家")]),t._v(" "),a("g-tabs-header-item",{attrs:{label:"2"}},[t._v("农家")]),t._v(" "),a("g-tabs-header-item",{attrs:{label:"3"}},[t._v("阴阳家")]),t._v(" "),a("g-tabs-header-item",{attrs:{label:"4"}},[t._v("纵横")])],1),t._v(" "),a("g-tabs-content",[a("g-tabs-content-item",{attrs:{label:"1"}},[a("img",{attrs:{align:"right",alt:"",hspace:"5",src:n(365),vspace:"5",width:"120"}}),t._v("\n            墨家，中国3D武侠动画《秦时明月》系列中的门派。\n            “天下皆白，唯我独黑。非攻墨门，兼爱平生”，墨家始创于墨子，历代掌门都称为“墨家巨子”。历代巨子携弟子于绝岭雄峰间，历时三百余年筑起墨家机关城，成为最后的“人间乐土”。\n            墨家与儒家并称当世两大显学，墨家弟子中精于武艺者称为“墨侠”，奉守“兼爱，非攻”的要旨，擅长机关构造之术。墨家弟子行侠仗义，常以墨门绝学非攻机关术助他国守城为世人称道，是侠义精神的代表。 [1]\n          ")]),t._v(" "),a("g-tabs-content-item",{attrs:{label:"2"}},[a("img",{attrs:{align:"right",alt:"",hspace:"5",src:n(366),vspace:"5",width:"120"}}),t._v("\n            农家，中国3D武侠动画《秦时明月》系列中的门派，历代首领均被称为农家侠魁。\n            燕国豪侠田光曾作为农家侠魁，与楚国昌平君、燕国燕丹、项氏一族项燕共同策划过“青龙计划”。\n            以田氏一族为主，后主要分裂为以烈山堂田氏一族和神农堂朱家为主的两派。 [1]\n          ")]),t._v(" "),a("g-tabs-content-item",{attrs:{label:"3"}},[a("img",{attrs:{align:"right",alt:"",hspace:"5",src:n(367),vspace:"5",width:"120"}}),t._v("\n            阴阳家，中国3D武侠动画《秦时明月》系列中的门派。\n            “太极玄一，阴阳两气”。（距故事开始）五百年前，阴阳家脱离道家，剑走偏锋，自成一派，追求天人极限，创出了很多威力巨大的招术，世代也有俊杰辈出。但其高深莫测的阴阳咒印却又在上百年前失传了，而这时，正因为其失传了百年，所以能够诊断和解开阴阳咒术的人也已经几乎找不到了。\n          ")]),t._v(" "),a("g-tabs-content-item",{attrs:{label:"4"}},[a("img",{attrs:{align:"right",alt:"",hspace:"5",src:n(368),vspace:"5",width:"120"}}),t._v("\n            纵横家（鬼谷派），中国3D武侠动画《秦时明月》系列中的门派。\n          ")])],1)],1)],1),t._v(" "),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[a("div",{staticClass:"code-content-height"},[a("div",{staticClass:"code-user-desc"},[t._v("\n          组件描述说明\n        ")]),t._v(" "),a("pre",[a("code",[t._v(t._s(t.str1))])])])]),t._v(" "),a("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(1)}}},[a("g-icon",{staticClass:"icon-down",attrs:{icon:!1===t.isShow[1]?"codedown":"codeup"}}),t._v(" "),a("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[1]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),a("h3",[t._v("attributes")]),t._v(" "),a("g-table",{attrs:{columns:t.columns,"data-table":t.dataTable}})],1)},[],!1,null,"d5ea94b8",null));e.default=w.exports}}]);
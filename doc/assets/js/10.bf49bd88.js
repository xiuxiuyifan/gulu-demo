(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{338:function(t,e,s){},339:function(t,e,s){},340:function(t,e,s){},341:function(t,e,s){},342:function(t,e,s){},447:function(t,e,s){"use strict";var i=s(338);s.n(i).a},448:function(t,e,s){"use strict";var i=s(339);s.n(i).a},449:function(t,e,s){"use strict";var i=s(340);s.n(i).a},450:function(t,e,s){"use strict";var i=s(341);s.n(i).a},451:function(t,e,s){"use strict";var i=s(342);s.n(i).a},464:function(t,e,s){"use strict";s.r(e);var i=s(26),n={name:"g-container",props:{position:{type:String,default:"verticale",validator:function(t){if(["level","verticale"].indexOf(t)>=0)return t;console.error("你输入的必须是 level or verticale")}}},computed:{flexdir:function(){var t=null;return"level"===this.position?t={flexDirection:"row"}:"verticale"===this.position&&(t={flexDirection:"column"}),t}}},o=(s(447),s(1)),c=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"g-container",style:this.flexdir},[this._t("default")],2)},[],!1,null,"89d8caa4",null).exports,a={name:"g-footer"},r=(s(448),Object(o.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"g-footer"},[this._t("default")],2)},[],!1,null,"74415367",null).exports),l={name:"g-header"},d=(s(449),Object(o.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"g-header"},[this._t("default")],2)},[],!1,null,"56f6b40b",null).exports),v={name:"g-main"},h=(s(450),Object(o.a)(v,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"g-main"},[this._t("default")],2)},[],!1,null,"f802e6cc",null).exports),u={name:"g-aside",components:{GIcon:i.a},data:function(){return{hide:!0}}},_=(s(451),Object(o.a)(u,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"movelist"}},[s("div",{staticClass:"aside-wapper"},[s("div",{staticClass:"aside-list-wapper"},[s("g-icon",{staticClass:"icon-list",staticStyle:{"font-size":"35px"},attrs:{icon:"list"},on:{click:function(e){t.hide=!t.hide}}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.hide,expression:"hide"}],staticClass:"g-aside"},[t._t("default")],2)])])},[],!1,null,"055db1f9",null).exports),p={name:"containerDocs",components:{GIcon:i.a,GContainer:c,GMain:h,GHeader:d,GFooter:r,GAside:_},data:function(){return{codeParent:[],codeHeightArr:[],isShow:[],str:"组件代码 code"}},methods:{showCode:function(t){var e=this;this.$set(this.isShow,t,!this.isShow[t]),this.$nextTick(function(){!0===e.isShow[t]?e.codeParent[t].style.height=e.codeHeightArr[t]+"px":e.codeParent[t].style.height=0})},getCodesHeight:function(){var t=document.getElementsByClassName("code-content-height");this.codeParent=document.getElementsByClassName("code-content");for(var e=t.length,s=0;s<e;s++)this.codeHeightArr.push(t[s].getBoundingClientRect().height),this.isShow.push(!1);console.log(this.codeParent)}},mounted:function(){var t=this;this.$nextTick(function(){t.getCodesHeight()})}},f=Object(o.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"containerDocs"},[s("h2",[t._v("基本布局")]),t._v(" "),s("p",[t._v("常见网站的布局方式")]),t._v(" "),s("div",{staticClass:"component-wrapper"},[s("div",{staticClass:"component-wrapper-demo"},[s("g-container",[s("g-header",[t._v("头部")]),t._v(" "),s("g-main",{staticStyle:{"line-height":"200px"}},[t._v("主要内容")])],1)],1),t._v(" "),s("div",{staticClass:"code-content",staticStyle:{height:"0"}},[s("div",{staticClass:"code-content-height"},[s("div",{staticClass:"code-user-desc"},[t._v("\n          组件描述说明\n        ")]),t._v(" "),s("pre",[s("code",[t._v(t._s(t.str))])])])]),t._v(" "),s("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(0)}}},[s("g-icon",{staticClass:"icon-down",attrs:{icon:!1===t.isShow[0]?"codedown":"codeup"}}),t._v(" "),s("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),s("div",{staticClass:"component-wrapper"},[s("div",{staticClass:"component-wrapper-demo"},[s("g-container",[s("g-header",[t._v("头部")]),t._v(" "),s("g-container",{attrs:{position:"level"}},[s("g-aside",[t._v("侧边栏")]),t._v(" "),s("g-main",{staticStyle:{"line-height":"200px"}},[t._v("主要内容")])],1),t._v(" "),s("g-footer",[t._v("尾部")])],1)],1),t._v(" "),s("div",{staticClass:"code-content",staticStyle:{height:"0"}},[s("div",{staticClass:"code-content-height"},[s("div",{staticClass:"code-user-desc"},[t._v("\n          组件描述说明\n        ")]),t._v(" "),s("pre",[s("code",[t._v(t._s(t.str))])])])]),t._v(" "),s("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(1)}}},[s("g-icon",{staticClass:"icon-down",attrs:{icon:!1===t.isShow[1]?"codedown":"codeup"}}),t._v(" "),s("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[1]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),s("div",{staticClass:"component-wrapper"},[s("div",{staticClass:"component-wrapper-demo"},[s("g-container",{attrs:{position:"level"}},[s("g-aside",[t._v("\n          侧边栏\n        ")]),t._v(" "),s("g-container",[s("g-header",[t._v("头部")]),t._v(" "),s("g-main",{staticStyle:{"line-height":"200px"}},[t._v("内容区域")]),t._v(" "),s("g-footer",[t._v("尾部")])],1)],1)],1),t._v(" "),s("div",{staticClass:"code-content",staticStyle:{height:"0"}},[s("div",{staticClass:"code-content-height"},[s("div",{staticClass:"code-user-desc"},[t._v("\n          组件描述说明\n        ")]),t._v(" "),s("pre",[s("code",[t._v(t._s(t.str))])])])]),t._v(" "),s("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(2)}}},[s("g-icon",{staticClass:"icon-down",attrs:{icon:!1===t.isShow[2]?"codedown":"codeup"}}),t._v(" "),s("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[2]?"显示代码":"隐藏代码"))])],1)])])},[],!1,null,"5ca1167c",null);e.default=f.exports}}]);
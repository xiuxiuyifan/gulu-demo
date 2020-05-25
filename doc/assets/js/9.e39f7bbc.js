(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{263:function(t,n,o){"use strict";n.a={data:function(){return{codeParent:[],codeHeightArr:[],isShow:[],columns:[{title:"参数",dataIndex:"params",key:"params"},{title:"说明",dataIndex:"description",key:"description"},{title:"类型",dataIndex:"type",key:"type"},{title:"默认值",dataIndex:"default",key:"default"},{title:"版本",dataIndex:"version",key:"version"}]}},methods:{showCode:function(t){var n=this;this.$set(this.isShow,t,!this.isShow[t]),this.$nextTick(function(){!0===n.isShow[t]?n.codeParent[t].style.height=n.codeHeightArr[t]+"px":n.codeParent[t].style.height=0})},getCodesHeight:function(){var t=document.getElementsByClassName("code-content-height");this.codeParent=document.getElementsByClassName("code-content");for(var n=t.length,o=0;o<n;o++)this.codeHeightArr.push(t[o].getBoundingClientRect().height),this.isShow.push(!1)}},mounted:function(){var t=this;this.$nextTick(function(){t.getCodesHeight()})}}},264:function(t,n,o){},267:function(t,n,o){var i=o(44),e=o(28);o(268)("keys",function(){return function(t){return e(i(t))}})},268:function(t,n,o){var i=o(27),e=o(17),s=o(8);t.exports=function(t,n){var o=(e.Object||{})[t]||Object[t],a={};a[t]=n(o),i(i.S+i.F*s(function(){o(1)}),"Object",a)}},278:function(t,n,o){"use strict";var i=o(264);o.n(i).a},280:function(t,n,o){"use strict";o(43),o(267);var i=o(26),e={name:"g-button",props:{icon:{type:String},lodding:{type:Boolean,default:!1},position:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t||(console.error("position属性只接受left或者right"),!1)}},ripples:{type:Boolean,default:!1},type:{type:String},round:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},components:{"g-icon":i.a},mounted:function(){this.ripples&&this.$el.classList.add("ripples")},methods:{verify:function(t){if(void 0!==this[t]&&!1!==this[t])return"i-".concat(t,"-").concat(this[t])},compatible:function(){return 0===Object.keys(this.$slots).length?void 0:"i-".concat(this.position)}}},s=(o(278),o(1)),a=Object(s.a)(e,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("button",{staticClass:"g-button",class:[t.compatible(),t.verify("type"),t.verify("round"),t.verify("plain"),t.verify("disabled")],on:{click:function(n){return t.$emit("click")}}},[t.lodding?t._e():o("g-icon",{attrs:{icon:t.icon}}),t._v(" "),t.lodding?o("g-icon",{class:{rotate:t.lodding},attrs:{icon:"lodding"}}):t._e(),t._v(" "),o("span",{staticClass:"g-word"},[t._t("default")],2)],1)},[],!1,null,"55738bb1",null);n.a=a.exports},318:function(t,n,o){},319:function(t,n,o){},419:function(t,n,o){"use strict";var i=o(318);o.n(i).a},420:function(t,n,o){"use strict";var i=o(319);o.n(i).a},469:function(t,n,o){"use strict";o.r(n);var i={name:"g-button-group"},e=(o(419),o(1)),s=Object(e.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"g-button-group"},[this._t("default")],2)},[],!1,null,"321d84a4",null).exports,a=o(280),c=o(26),r={name:"buttonDocs",mixins:[o(263).a],components:{"g-button":a.a,"g-icon":c.a,"g-button-group":s},data:function(){return{lodding:!1,lodding1:!1,lodding2:!1,str:'\n<div>\n  <g-button>默认按钮</g-button>\n  <g-button type="primary">主要按钮</g-button>\n  <g-button type="success">成功按钮</g-button>\n  <g-button type="info">信息按钮</g-button>\n  <g-button type="warning">警告按钮</g-button>\n  <g-button type="danger">危险按钮</g-button>\n</div>\n<div style="margin: 20px 0">\n  <g-button plain>朴素按钮</g-button>\n  <g-button plain type="primary">主要按钮</g-button>\n  <g-button plain type="success">成功按钮</g-button>\n  <g-button plain type="info">信息按钮</g-button>\n  <g-button plain type="warning">警告按钮</g-button>\n  <g-button plain type="danger">危险按钮</g-button>\n</div>\n<div style="margin: 20px 0">\n  <g-button round>圆形按钮</g-button>\n  <g-button round type="primary">主要按钮</g-button>\n  <g-button round type="success">成功按钮</g-button>\n  <g-button round type="info">信息按钮</g-button>\n  <g-button round type="warning">警告按钮</g-button>\n  <g-button round type="danger">危险按钮</g-button>\n</div>\n        '.trim(),str1:"<g-button disabled>禁用按钮</g-button>",str2:'\n<div>\n  <g-button>默认按钮</g-button>\n  <g-button type="primary" icon="setting" position="right">主要按钮</g-button>\n  <g-button type="success" icon="good">成功按钮</g-button>\n  <g-button type="info" icon="del">删除</g-button>\n  <g-button type="warning" icon="information">警告按钮</g-button>\n  <g-button type="danger" icon="error">危险按钮</g-button>\n</div>\n<div style="margin: 20px 0">\n  <g-button>朴素按钮</g-button>\n  <g-button plain type="primary" icon="setting">主要按钮</g-button>\n  <g-button plain type="success" icon="good">成功按钮</g-button>\n  <g-button plain type="info" icon="del">删除</g-button>\n  <g-button plain type="warning" icon="information">警告按钮</g-button>\n  <g-button plain type="danger" icon="error">危险按钮</g-button>\n</div>\n<div style="margin: 20px 0">\n  <g-button round>圆形按钮</g-button>\n  <g-button round type="primary" icon="setting">主要按钮</g-button>\n  <g-button round type="success" icon="good">成功按钮</g-button>\n  <g-button round type="info" icon="del">删除</g-button>\n  <g-button round type="warning" icon="information">警告按钮</g-button>\n  <g-button round type="danger" icon="error">危险按钮</g-button>\n</div>'.trim(),str3:'\n<g-button>默认按钮</g-button>\n<g-button-group>\n  <g-button icon="left">上一页</g-button>\n  <g-button icon="right" position="right">下一页</g-button>\n</g-button-group>\n<g-button-group>\n  <g-button icon="good"></g-button>\n  <g-button icon="help"></g-button>\n  <g-button icon="download"></g-button>\n</g-button-group>'.trim(),str4:'\n<g-button :lodding="true">默认按钮</g-button>\n<g-button type="primary" :lodding="lodding" @click="lodding = !lodding">点我加载</g-button>'.trim(),str5:"<g-button ripples>涟漪按钮</g-button>"}}},d=(o(420),Object(e.a)(r,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"button-docs"},[t._m(0),t._v(" "),o("h3",[t._v("基础用法")]),t._v(" "),o("p",[t._v("基础的按钮用法")]),t._v(" "),o("div",{staticClass:"component-wrapper"},[o("div",{staticClass:"component-wrapper-demo"},[o("div",[o("g-button",[t._v("默认按钮")]),t._v(" "),o("g-button",{attrs:{type:"primary"}},[t._v("主要按钮")]),t._v(" "),o("g-button",{attrs:{type:"success"}},[t._v("成功按钮")]),t._v(" "),o("g-button",{attrs:{type:"info"}},[t._v("信息按钮")]),t._v(" "),o("g-button",{attrs:{type:"warning"}},[t._v("警告按钮")]),t._v(" "),o("g-button",{attrs:{type:"danger"}},[t._v("危险按钮")])],1),t._v(" "),o("div",{staticStyle:{margin:"20px 0"}},[o("g-button",{attrs:{plain:""}},[t._v("朴素按钮")]),t._v(" "),o("g-button",{attrs:{plain:"",type:"primary"}},[t._v("主要按钮")]),t._v(" "),o("g-button",{attrs:{plain:"",type:"success"}},[t._v("成功按钮")]),t._v(" "),o("g-button",{attrs:{plain:"",type:"info"}},[t._v("信息按钮")]),t._v(" "),o("g-button",{attrs:{plain:"",type:"warning"}},[t._v("警告按钮")]),t._v(" "),o("g-button",{attrs:{plain:"",type:"danger"}},[t._v("危险按钮")])],1),t._v(" "),o("div",{staticStyle:{margin:"20px 0"}},[o("g-button",{attrs:{round:""}},[t._v("圆形按钮")]),t._v(" "),o("g-button",{attrs:{round:"",type:"primary"}},[t._v("主要按钮")]),t._v(" "),o("g-button",{attrs:{round:"",type:"success"}},[t._v("成功按钮")]),t._v(" "),o("g-button",{attrs:{round:"",type:"info"}},[t._v("信息按钮")]),t._v(" "),o("g-button",{attrs:{round:"",type:"warning"}},[t._v("警告按钮")]),t._v(" "),o("g-button",{attrs:{round:"",type:"danger"}},[t._v("危险按钮")])],1)]),t._v(" "),o("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[o("div",{staticClass:"code-content-height"},[o("div",{staticClass:"code-user-desc"},[t._v('按钮通过"type" "plain" "round"属性控制其常用的按钮的几种状态状态 对应默认 朴素 圆角三种按钮')]),t._v(" "),o("pre",[o("code",[t._v(t._s(t.str))])])])]),t._v(" "),o("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(n){return t.showCode(0)}}},[o("g-icon",{staticClass:"icon-down",attrs:{icon:!1===t.isShow[0]?"codedown":"codeup"}}),t._v(" "),o("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),o("h3",[t._v("禁用状态")]),t._v(" "),o("p",[t._v("按钮不可用")]),t._v(" "),o("div",{staticClass:"component-wrapper"},[o("div",{staticClass:"component-wrapper-demo"},[o("div",[o("g-button",{attrs:{disabled:""}},[t._v("禁用按钮")])],1)]),t._v(" "),o("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[o("div",{staticClass:"code-content-height"},[o("div",{staticClass:"code-user-desc"},[t._v('"disabled"属性可以让网页上的鼠标变成是一个红色的圈加一个斜杠，表示禁止的意思')]),t._v(" "),o("pre",[o("code",[t._v(t._s(t.str1))])])])]),t._v(" "),o("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(n){return t.showCode(1)}}},[o("g-icon",{staticClass:"icon-down",attrs:{icon:!1===t.isShow[1]?"codedown":"codeup"}}),t._v(" "),o("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[1]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),o("h3",[t._v("图标按钮")]),t._v(" "),o("p",[t._v("可以给按钮添加不同的图标")]),t._v(" "),o("div",{staticClass:"component-wrapper"},[o("div",{staticClass:"component-wrapper-demo"},[o("div",[o("g-button",[t._v("默认按钮")]),t._v(" "),o("g-button",{attrs:{icon:"setting",position:"right",type:"primary"}},[t._v("主要按钮")]),t._v(" "),o("g-button",{attrs:{icon:"good",type:"success"}},[t._v("成功按钮")]),t._v(" "),o("g-button",{attrs:{icon:"del",type:"info"}},[t._v("删除")]),t._v(" "),o("g-button",{attrs:{icon:"information",type:"warning"}},[t._v("警告按钮")]),t._v(" "),o("g-button",{attrs:{icon:"error",type:"danger"}},[t._v("危险按钮")])],1),t._v(" "),o("div",{staticStyle:{margin:"20px 0"}},[o("g-button",[t._v("朴素按钮")]),t._v(" "),o("g-button",{attrs:{icon:"setting",plain:"",type:"primary"}},[t._v("主要按钮")]),t._v(" "),o("g-button",{attrs:{icon:"good",plain:"",type:"success"}},[t._v("成功按钮")]),t._v(" "),o("g-button",{attrs:{icon:"del",plain:"",type:"info"}},[t._v("删除")]),t._v(" "),o("g-button",{attrs:{icon:"information",plain:"",type:"warning"}},[t._v("警告按钮")]),t._v(" "),o("g-button",{attrs:{icon:"error",plain:"",type:"danger"}},[t._v("危险按钮")])],1),t._v(" "),o("div",{staticStyle:{margin:"20px 0"}},[o("g-button",{attrs:{round:""}},[t._v("圆形按钮")]),t._v(" "),o("g-button",{attrs:{icon:"setting",round:"",type:"primary"}},[t._v("主要按钮")]),t._v(" "),o("g-button",{attrs:{icon:"good",round:"",type:"success"}},[t._v("成功按钮")]),t._v(" "),o("g-button",{attrs:{icon:"del",round:"",type:"info"}},[t._v("删除")]),t._v(" "),o("g-button",{attrs:{icon:"information",round:"",type:"warning"}},[t._v("警告按钮")]),t._v(" "),o("g-button",{attrs:{icon:"error",round:"",type:"danger"}},[t._v("危险按钮")])],1)]),t._v(" "),o("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[o("div",{staticClass:"code-content-height"},[o("div",{staticClass:"code-user-desc"},[t._v('"icon"属性可以显示自己想要的图标 "position"设置图标色位置')]),t._v(" "),o("pre",[o("code",[t._v(t._s(t.str2))])])])]),t._v(" "),o("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(n){return t.showCode(2)}}},[o("g-icon",{staticClass:"icon-down",attrs:{icon:!1===t.isShow[2]?"codedown":"codeup"}}),t._v(" "),o("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[2]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),o("h3",[t._v("按钮组")]),t._v(" "),o("p",[t._v("可以将按钮合并在一起使用")]),t._v(" "),o("div",{staticClass:"component-wrapper"},[o("div",{staticClass:"component-wrapper-demo"},[o("div",[o("g-button",[t._v("默认按钮")]),t._v(" "),o("g-button-group",[o("g-button",{attrs:{icon:"left"}},[t._v("上一页")]),t._v(" "),o("g-button",{attrs:{icon:"right",position:"right"}},[t._v("下一页")])],1),t._v(" "),o("g-button-group",[o("g-button",{attrs:{icon:"good"}}),t._v(" "),o("g-button",{attrs:{icon:"help"}}),t._v(" "),o("g-button",{attrs:{icon:"download"}})],1)],1)]),t._v(" "),o("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[o("div",{staticClass:"code-content-height"},[o("div",{staticClass:"code-user-desc"},[t._v("在button组件外面包一层button-group组件就可以实现按钮组啦，这边icon在左边的时候有点小bug如果没有文字就不给svg添加右边的margin\n        ")]),t._v(" "),o("pre",[o("code",[t._v(t._s(t.str3))])])])]),t._v(" "),o("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(n){return t.showCode(3)}}},[o("g-icon",{staticClass:"icon-down",attrs:{icon:!1===t.isShow[3]?"codedown":"codeup"}}),t._v(" "),o("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[3]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),o("h3",[t._v("加载中按钮")]),t._v(" "),o("p",[t._v("获取数据的时候可以使用的按钮")]),t._v(" "),o("div",{staticClass:"component-wrapper"},[o("div",{staticClass:"component-wrapper-demo"},[o("div",[o("g-button",{attrs:{lodding:!0}},[t._v("默认按钮")]),t._v(" "),o("g-button",{attrs:{lodding:t.lodding,type:"primary"},on:{click:function(n){t.lodding=!t.lodding}}},[t._v("点我加载")])],1)]),t._v(" "),o("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[o("div",{staticClass:"code-content-height"},[o("div",{staticClass:"code-user-desc"},[t._v('"lodding"属性控制按是否显示lodding图标')]),t._v(" "),o("pre",[o("code",[t._v(t._s(t.str4))])])])]),t._v(" "),o("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(n){return t.showCode(4)}}},[o("g-icon",{staticClass:"icon-down",attrs:{icon:!1===t.isShow[4]?"codedown":"codeup"}}),t._v(" "),o("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[4]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),o("h3",[t._v("涟漪按钮")]),t._v(" "),o("p",[t._v("点击按钮可以实现涟漪效果")]),t._v(" "),o("div",{staticClass:"component-wrapper"},[o("div",{staticClass:"component-wrapper-demo"},[o("div",[o("g-button",{attrs:{ripples:""}},[t._v("涟漪按钮")])],1)]),t._v(" "),o("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[o("div",{staticClass:"code-content-height"},[o("div",{staticClass:"code-user-desc"},[t._v('点击按钮的时候出现涟漪的效果 "ripples"属性既可以控制')]),t._v(" "),o("pre",[o("code",[t._v(t._s(t.str5))])])])]),t._v(" "),o("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(n){return t.showCode(5)}}},[o("g-icon",{staticClass:"icon-down",attrs:{icon:!1===t.isShow[5]?"codedown":"codeup"}}),t._v(" "),o("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[5]?"显示代码":"隐藏代码"))])],1)])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h2",[this._v("button按钮")]),this._v(" "),n("p",[this._v("常用的操作按钮")])])}],!1,null,"33c97000",null));n.default=d.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{263:function(t,e,s){"use strict";e.a={data:function(){return{codeParent:[],codeHeightArr:[],isShow:[],columns:[{title:"参数",dataIndex:"params",key:"params"},{title:"说明",dataIndex:"description",key:"description"},{title:"类型",dataIndex:"type",key:"type"},{title:"默认值",dataIndex:"default",key:"default"},{title:"版本",dataIndex:"version",key:"version"}]}},methods:{showCode:function(t){var e=this;this.$set(this.isShow,t,!this.isShow[t]),this.$nextTick(function(){!0===e.isShow[t]?e.codeParent[t].style.height=e.codeHeightArr[t]+"px":e.codeParent[t].style.height=0})},getCodesHeight:function(){var t=document.getElementsByClassName("code-content-height");this.codeParent=document.getElementsByClassName("code-content");for(var e=t.length,s=0;s<e;s++)this.codeHeightArr.push(t[s].getBoundingClientRect().height),this.isShow.push(!1)}},mounted:function(){var t=this;this.$nextTick(function(){t.getCodesHeight()})}}},474:function(t,e,s){"use strict";s.r(e);var i=s(26),n={name:"demo",mixins:[s(263).a],components:{GIcon:i.a},data:function(){return{str:"",dataTable:[{id:"1",params:"message",description:"提示消息要显示的内容",type:"string",default:"-",version:""}]}}},o=s(1),a=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"demo"},[s("h2",[t._v("创建组件文档模板")]),t._v(" "),s("p",[t._v("组件描述")]),t._v(" "),s("h3",[t._v("组件功能名字")]),t._v(" "),s("p",[t._v("组件功能描述")]),t._v(" "),s("div",{staticClass:"component-wrapper"},[s("div",{staticClass:"component-wrapper-demo"},[t._v("\n      组件展示位置\n    ")]),t._v(" "),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[s("div",{staticClass:"code-content-height"},[s("div",{staticClass:"code-user-desc"},[t._v("\n          组件描述说明\n        ")]),t._v(" "),s("pre",[s("code",[t._v(t._s(t.str))])])])]),t._v(" "),s("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(0)}}},[s("g-icon",{staticClass:"icon-down",attrs:{icon:!1===t.isShow[0]?"codedown":"codeup"}}),t._v(" "),s("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),s("h3",[t._v("attributes")]),t._v(" "),s("p",[t._v("组件参数说明后期扩展")])])},[],!1,null,"79eadbf1",null);e.default=a.exports}}]);
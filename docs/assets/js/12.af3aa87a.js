(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{262:function(t,e,n){},263:function(t,e,n){"use strict";e.a={data:function(){return{codeParent:[],codeHeightArr:[],isShow:[],columns:[{title:"参数",dataIndex:"params",key:"params"},{title:"说明",dataIndex:"description",key:"description"},{title:"类型",dataIndex:"type",key:"type"},{title:"默认值",dataIndex:"default",key:"default"},{title:"版本",dataIndex:"version",key:"version"}]}},methods:{showCode:function(t){var e=this;this.$set(this.isShow,t,!this.isShow[t]),this.$nextTick(function(){!0===e.isShow[t]?e.codeParent[t].style.height=e.codeHeightArr[t]+"px":e.codeParent[t].style.height=0})},getCodesHeight:function(){var t=document.getElementsByClassName("code-content-height");this.codeParent=document.getElementsByClassName("code-content");for(var e=t.length,n=0;n<e;n++)this.codeHeightArr.push(t[n].getBoundingClientRect().height),this.isShow.push(!1)}},mounted:function(){var t=this;this.$nextTick(function(){t.getCodesHeight()})}}},265:function(t,e,n){"use strict";var i=n(262);n.n(i).a},266:function(t,e,n){"use strict";var i={name:"g-table",props:{columns:{type:Array,required:!0},dataTable:{type:Array,required:!0}}},o=(n(265),n(1)),c=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-table"},[n("table",[n("thead",[n("tr",t._l(t.columns,function(e,i){return n("th",{key:e.key},[t._v(t._s(e.title))])}),0)]),t._v(" "),n("tbody",t._l(t.dataTable,function(e,i){return n("tr",{key:e.id},t._l(t.columns,function(i,o){return n("td",{key:i.key},[t._v(t._s(e[i.dataIndex]))])}),0)}),0)])])},[],!1,null,"194681e5",null);e.a=c.exports},335:function(t,e,n){},444:function(t,e,n){"use strict";var i=n(335);n.n(i).a},477:function(t,e,n){"use strict";n.r(e);var i=n(26),o=n(263),c=n(266),s={name:"g-icon-docs",mixins:[o.a],components:{GIcon:i.a,GTable:c.a},data:function(){return{iconArr:[{icon:"codedown"},{icon:"codeup"},{icon:"setting"},{icon:"list"},{icon:"del"},{icon:"good"},{icon:"information"},{icon:"error"},{icon:"left"},{icon:"right"},{icon:"down"},{icon:"up"},{icon:"help"},{icon:"download"},{icon:"lodding"},{icon:"setting"},{icon:"add"},{icon:"jd",classes:"jd"},{icon:"food"},{icon:"time"},{icon:"iphone",classes:"iphone"},{icon:"serch"},{icon:"phone"},{icon:"video"},{icon:"mobile"},{icon:"reduce"},{icon:"zhifubao",classes:"zhifubao"},{icon:"code"},{icon:"weixin",classes:"wechart"},{icon:"star"}],str:'<g-icon icon="setting"></g-icon>',dataTable:[{id:"1",params:"icon",description:"传入你想要展示的icon的名字",type:"string",default:"-",version:""}]}},methods:{}},a=(n(444),n(1)),r=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-icon-docs"},[n("h2",[t._v("Icon图标组件")]),t._v(" "),n("p",[t._v("常用的图标")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("div",{staticClass:"icon-box-wrapper"},t._l(t.iconArr,function(e,i){return n("div",{key:i,staticClass:"icon-wrapper",class:e.classes},[n("g-icon",{attrs:{icon:e.icon}}),t._v(" "),n("span",{staticClass:"desc"},[t._v(t._s(e.icon))])],1)}),0)]),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.str))])])])]),t._v(" "),n("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(0)}}},[n("g-icon",{staticClass:"icon-down",attrs:{icon:!1===t.isShow[0]?"codedown":"codeup"}}),t._v(" "),n("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),n("h3",[t._v("attributes")]),t._v(" "),n("g-table",{attrs:{"data-table":t.dataTable,columns:t.columns}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("可以引入iconfont上面所有的图标请参照"),e("a",{attrs:{href:"https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.16&helptype=code",target:"_blank"}},[this._v("iconfont")]),this._v("上面代码使用\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"code-user-desc"},[this._v('\n          "icon"可以设置自己想要的图标，也可以自己引入iconfont的图标但是前缀要以"i-"开头就可以使用本组件引入所有的iconfont上的图标在自己的项目中了'),e("br"),this._v("\n          如果想要改变图标的颜色请给组件设置color属性即可,自己引入的图标需要批量去色后就可以随便更换颜色了，以便于在代码中更好地复用\n        ")])}],!1,null,"fa79d2c0",null);e.default=r.exports}}]);
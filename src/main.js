import Vue from 'vue'
import App from './App.vue'

import Button from './components/button/g-button'
import Icon from './components/icon/icon'
import GButtonGroup from './components/button/g-button-group'
import Ginput from './g-input'
import Grow from './components/layout/g-row'
import Gcol from './components/layout/g-col'
import Gcontainer from './g-container'
import Gheader from './g-header'
import Gmain from './g-main'
import Gfooter from './g-footer'
import Gaside from './g-aside'
import plugin from './plugin'
import Gtab from './g-tab'
import GtabHeader from './g-tab-header'
import GtabContent from './g-tab-content'
import GtabHeaderItem from './tab-header-item'
import GtabContentItem from './tab-content-item'

// components 下面的的组件
import Gpopover from './components/popover/g-popover'
import GCascader from './components/cascader/g-cascader'

// collapse 级联选择器组件
import GCollapse from './components/collapse/g-collapse'
import GCollapseItem from './components/collapse/g-collapse-Item'

//  carousel 轮播图组件
import GCarousel from './components/carousel/g-carousel'
import GCarouselItem from './components/carousel/g-carousel-item'

Vue.config.productionTip = false

Vue.use(plugin)
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', GButtonGroup)
Vue.component('g-input', Ginput)
Vue.component('g-row', Grow)
Vue.component('g-col', Gcol)
/* container */

Vue.component('g-container', Gcontainer)
Vue.component('g-header', Gheader)
Vue.component('g-main', Gmain)
Vue.component('g-footer', Gfooter)
Vue.component('g-aside', Gaside) // 侧边栏

/* tab */
Vue.component('g-tab', Gtab)
Vue.component('g-tab-header', GtabHeader)
Vue.component('tab-header-item', GtabHeaderItem)
Vue.component('g-tab-content', GtabContent)
Vue.component('tab-content-item', GtabContentItem)
/* popover */
Vue.component('g-popover', Gpopover)

Vue.component('g-collapse', GCollapse)
Vue.component('g-collapse-item', GCollapseItem)

Vue.component('g-cascader', GCascader)

Vue.component('g-carousel', GCarousel)
Vue.component('g-carouse-item'.GCarouselItem)

//css
import './asset/css/reset.css'
import './asset/css/common.css'
new Vue({
  render: h => h(App)
}).$mount('#app')

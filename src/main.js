import Vue from 'vue'
import App from './App.vue'

import Button from './components/button/g-button'
import Icon from './components/icon/icon'
import GButtonGroup from './components/button/g-button-group'
import Ginput from './components/input/g-input'
import Grow from './components/grid/g-row'
import Gcol from './components/grid/g-col'
import Gcontainer from './components/layout/g-container'
import Gheader from './components/layout/g-header'
import Gmain from './components/layout/g-main'
import Gfooter from './components/layout/g-footer'
import Gaside from './components/layout/g-aside'
import plugin from './plugin'
import Gtab from './components/tabs/g-tab'
import GtabHeader from './components/tabs/g-tab-header'
import GtabContent from './components/tabs/g-tab-content'
import GtabHeaderItem from './components/tabs/tab-header-item'
import GtabContentItem from './components/tabs/tab-content-item'
import GCheckBox from './components/checkbox/g-checkbox'
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

Vue.component('g-ckeckbox', GCheckBox)
//css
import './asset/css/reset.css'
import './asset/css/common.css'
new Vue({
  render: h => h(App)
}).$mount('#app')

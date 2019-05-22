import Vue from 'vue'
import App from './App.vue'

import Button from './button'
import Icon from './icon'
import GButtonGroup from './g-button-group'
import Ginput from './g-input'
import Grow from './g-row'
import Gcol from './g-col'
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
import Gpopover from './components/g-popover'

// collapse 组件
import GCollapse from './components/g-collapse'
import GCollapseItem from './components/g-collapseItem'
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

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import GButtonGroup from './g-button-group';
import Ginput from './g-input';
import Grow from './g-row';
import Gcol from './g-col';
import Gcontainer from './g-container';
import Gheader from './g-header';
import Gmain from './g-main';
import Gfooter from './g-footer';
import Gaside from './g-aside';
import plugin from './plugin';
import Gtab from './g-tab';
import GtabHeader from './g-tab-header';
import GtabContent from './g-tab-content';
import GtabHeaderItem from './tab-header-item';
import GtabContentItem from './tab-content-item';

//components 下面的的组件
import Gpopover from './components/g-popover'

// collapse 组件
import GCollapse from './components/g-collapse'
import GCollapseItem from './components/g-collapseItem'
Vue.use(plugin);
Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', GButtonGroup);
Vue.component('g-input', Ginput);
Vue.component('g-row', Grow);
Vue.component('g-col', Gcol);
/*container*/

Vue.component('g-container', Gcontainer);
Vue.component('g-header', Gheader);
Vue.component('g-main', Gmain);
Vue.component('g-footer', Gfooter);
Vue.component('g-aside', Gaside);   //侧边栏

/*tab*/
Vue.component('g-tab', Gtab);
Vue.component('g-tab-header', GtabHeader);
Vue.component('tab-header-item', GtabHeaderItem);
Vue.component('g-tab-content', GtabContent);
Vue.component('tab-content-item', GtabContentItem);
/*popover*/
Vue.component('g-popover',Gpopover)


Vue.component('g-collapse',GCollapse)
Vue.component('g-collapse-item',GCollapseItem)
new Vue({
	el: '#app',
	watch: {
		selectedTab: function(newValue, oldValue) {
			console.log('我被子组件里面的东西改变了' + newValue);
		},
	},
	data() {
		return {
			lodding1: false,
			err: false,
			message: 'hello wold',
			selectedTab: '0',
			tabPosition: 'left',
			selectedCollapse:["1","2"]
		};
	},
	methods: {
		ccc(value) {
			console.log('我被触发了');
			this.selectedTab = value;
		},
		xxx() {
			console.log(999);
		},
		checkUserName(value) {
			console.log(value.toString().length);
			if (value.toString().length >= 10) {
				return false;
			} else {
				return true;
			}
		},
		changeErr(val) {
			this.err = val;
		},
		vvv(val) {
			console.log('清空错误消息');
			this.message = val;
			this.err = false;
		},
		/*   toast组件*/
		activateToast(location) {
			this.$toast({
				message: '恭喜您,这是一套成功的消息',
				btnMsg: '知道了',
				// closeTimer:3,
				position: location,
				// autoClose: false,
				showClose: false,
				callBack: function(value) {
					console.log(value);
					console.log('我是关闭之后的代码');
				},
			});
		},
		
		/*tab组件*/
		tabBeforChange(event) {
			return true;
		},
		mmm() {
			console.log();
		},
		tabChangePosition(dir){
			// let constructor = Vue.extend(Gtab);
			// let vm = new constructor({
			// 	position: dir
			// })
			// vm.$mount("#app")
			this.tabPosition = dir;
		}
	},
	mounted() {
	},
});

































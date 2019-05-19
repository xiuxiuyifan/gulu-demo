const expect = chai.expect;
import Vue from 'vue';
import Popover from '../src/components/g-popover';
import sinon from 'sinon';

Vue.config.productionTip = false;
Vue.config.devtools = false;
describe('Popover', () => {
	it('存在.', () => {
		expect(Popover).to.be.ok;
	});
	//可以设置 position
	// it('可以设置icon.', () => {
	// 	const Constructor = Vue.extend(Button);
	// 	const vm = new Constructor({
	// 		propsData: {
	// 			icon: 'settings',
	// 		},
	// 	}).$mount();
	// 	const useElement = vm.$el.querySelector('use');
	// 	expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings');
	// 	vm.$destroy();
	// });
	// //测试可以设置lodding
});

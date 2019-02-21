const expect = chai.expect;
import Vue from 'vue';
import Button from '../src/button';

Vue.config.productionTip = false;
Vue.config.devtools = false;
describe('Button', () => {
	it('存在.', () => {
		expect(Button).to.be.ok;
	});
	it('可以设置icon.', () => {
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: 'settings',
			},
		}).$mount();
		const useElement = vm.$el.querySelector('use');
		expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings');
		vm.$destroy();
	});
	//测试可以设置lodding
	it('可以设置lodding', function() {
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: 'setting',
				lodding: true,
			},
		}).$mount();
		const useElement = vm.$el.querySelector('use');
		expect(useElement.getAttribute('xlink:href')).to.equal('#i-lodding');
		vm.$destroy();
	});
	
	//测试默认order 是 1
	it('测试默认order是1', function() {
		const Constructor = Vue.extend(Button);
		const div = document.createElement('div');
		document.body.appendChild(div);
		const vm = new Constructor({
			propsData: {
				icon: 'setting',
			},
		}).$mount(div);
		let svg = vm.$el.querySelector('svg');
		var {order} = getComputedStyle(svg);
		expect(order).to.eq('1');
		
	});

//测试position的位置是可以变的
	
	it('测试position的位置是可以改变的', () => {
		let Constructor = Vue.extend(Button);
		let div = document.createElement('div');
		document.body.appendChild(div);
		let vm = new Constructor({
			propsData: {
				icon: 'setting',
				position: 'right',
			},
		}).$mount(div);
		//现在我期待 order的位置是2
		let svg = vm.$el.querySelector('svg');
		let {order} = getComputedStyle(svg);
		expect(order).to.eq('2');
		vm.$el.remove();
		vm.$destroy();
	});

//测试button是可以点击的
	it('测试button是可以点击的', () => {
		let Constructor = Vue.extend(Button);
		let div = document.createElement('div');
		document.body.appendChild(div);
		let vm = new Constructor({
			propsData: {
				icon: 'setting',
				position: 'right',
			},
		}).$mount(div);
		let callback = () => {
			console.log('点击时间的函数执行了');
		};
		//现在我期待 order的位置是2
		vm.$on('click', callback);
		vm.$el.click();
		vm.$el.remove();
		vm.$destroy();
	});
});

import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import GButtonGroup from './g-button-group';
import Ginput from './g-input';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', GButtonGroup);
Vue.component('g-input', Ginput);

new Vue({
	el: '#app',
	data() {
		return {
			lodding1: false,
			err: false,
			message: 'hello wold',
		};
	},
	methods: {
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
	},
});

import chai from 'chai';

const expect = chai.expect;
//测试用例
//测试默认的order 是1
// {
// 	let div = document.createElement('div');
// 	let body = document.body;
// 	body.appendChild(div);
// 	const Constructor = Vue.extend(Button);
// 	const vm = new Constructor({
// 		propsData: {
// 			icon: 'setting',
// 		},
// 	}).$mount(div);
// 	const svg = vm.$el.querySelector('svg');
// 	let {order} = window.getComputedStyle(svg);
// 	expect(order).to.eq('1');
// 	vm.$el.remove();
// 	vm.$destroy();
// }
//
// //测试position的位置是可以变的
//
// {
// 	let Constructor = Vue.extend(Button);
// 	let div = document.createElement('div');
// 	document.body.appendChild(div);
// 	let vm = new Constructor({
// 		propsData: {
// 			icon: 'setting',
// 			position: 'right',
// 		},
// 	}).$mount(div);
// 	//现在我期待 order的位置是2
// 	let svg = vm.$el.querySelector('svg');
// 	let {order} = window.getComputedStyle(svg);
// 	expect(order).to.eq('2');
// 	vm.$el.remove();
// 	vm.$destroy();
// }
//
// //测试button是可以点击的
// {
// 	let Constructor = Vue.extend(Button);
// 	let div = document.createElement('div');
// 	document.body.appendChild(div);
// 	let vm = new Constructor({
// 		propsData: {
// 			icon: 'setting',
// 			position: 'right',
// 		},
// 	}).$mount(div);
// 	let callback = () => {
// 		console.log('点击时间的函数执行了');
// 	};
// 	//现在我期待 order的位置是2
// 	vm.$on('click', callback);
// 	vm.$el.click();
// 	// vm.$el.remove()
// 	// vm.$destroy()
// }


































import Gtoast from './g-toast';

export default {
	install(Vue, methodOptions) {
		// 1. 添加全局方法或属性
		// Vue.myGlobalMethod = function() {
		// 	// 逻辑...
		// };
		//
		// // 2. 添加全局资源
		// Vue.directive('my-directive', {
		// 	bind(el, binding, vnode, oldVnode) {
		// 		// 逻辑...
		// 	}
		// });
		//
		// // 3. 注入组件
		// Vue.mixin({
		// 	created: function() {
		// 		// 逻辑...
		// 	}
		// });
		
		// 4. 添加实例方法
		Vue.prototype.$toast = function(options) {
			// 逻辑...
			console.log('我是插件里面的东西');
			let constructor = Vue.extend(Gtoast);
			let vm = new constructor({
				propsData: {
					message: '恭喜您,这是一套成功的消息',
				},
			});
			vm.$mount();
			document.body.appendChild(vm.$el);
			console.log(vm);
		};
	},
};

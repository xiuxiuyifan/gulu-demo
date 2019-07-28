import Gtoast from './components/toast/g-toast'
import GIcon from './components/icon/icon'
let toast // 记录当前页面是否存在toast
/*eslint spaced-comment:0*/
export default {
/*eslint no-tabs:0*/
  install (Vue, methodOptions) {
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
    Vue.prototype.$toast = function (options) {
      // 逻辑...
      console.log('我是插件里面的东西')
      let constructor = Vue.extend(Gtoast)
      let vm = new constructor({
        components: {
          GIcon,
        },
        propsData: options
      })
      vm.$on('close', (value) => {
        toast = null
      })
      vm.$mount()
      if (toast) {
        console.log(toast)
        // toast.remove()
      } else {
        toast = document.body.appendChild(vm.$el)
      }
      console.log(vm)
    }
  }
}

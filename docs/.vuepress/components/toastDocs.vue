<template>
  <div class="toastDocs">
    <h2>消息提示组件</h2>
    <p>当用户操作了某个按钮之后，需要提示用户操作的结果如何</p>
    <h3>toast消息提示</h3>
    <p>调用组件的公共方法，传入相应的参数即可</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-button @click="showToast('top')">上面</g-button>
        <g-button @click="showToast('bottom')">下面</g-button>
        <g-button @click="showToast('left')">左边</g-button>
        <g-button @click="showToast('right')">右边</g-button>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            在创建vue对象之前使用Vue.use(plugin)
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div @click="showCode(0)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[0] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>


    <h3>attributes</h3>
    <g-table :columns="columns" :data-table="dataTable"></g-table>
  </div>
</template>

<script>
  import GIcon from '../../../src/components/icon/icon'
  import mixin from '../mixin'
  import GToast from '../../../src/components/toast/g-toast'
  import GTable from '../../../src/components/table/g-table'
  import GButton from '../../../src/components/button/g-button'
  import '../../../src/plugin'

  export default {
    name: 'toastDocs',
    mixins: [mixin],
    components: {
      GIcon,
      GToast,
      GTable,
      GButton,
    },
    data () {
      return {
        str: `
<g-button @click="showToast('top')">上面</g-button>
<g-button @click="showToast('bottom')">下面</g-button>
<g-button @click="showToast('left')">左边</g-button>
<g-button @click="showToast('right')">右边</g-button>

showToast (position) {
  this.$toast({
    position,
    message: '您好',
  })
}`.trim(),
        dataTable: [
          {
            id: '1',
            params: 'message',
            description: '提示消息要显示的内容',
            type: 'string',
            default: '-',
            version: '',
          },
          {
            id: '2',
            params: 'position',
            description: '提示消息要出现的位置',
            type: 'string | top bottom left right',
            default: 'top',
            version: '',
          },
          {
            id: '3',
            params: 'showClose',
            description: '显示关闭按钮',
            type: 'Boolean',
            default: 'false',
            version: '',
          },
          {
            id: '4',
            params: 'callBack',
            description: '关闭成功之后的回调',
            type: 'Function',
            default: '()=>({})',
            version: '',
          },
          {
            id: '5',
            params: 'autoClose',
            description: '是否自动关闭',
            type: 'Boolean',
            default: 'true',
            version: '',
          },
          {
            id: '6',
            params: 'btnMsg',
            description: '关闭按钮上面要显示的字',
            type: 'String',
            default: '-',
            version: '',
          },
          {
            id: '7',
            params: 'closeTimer',
            description: '提示消息框自动消失的时间秒',
            type: 'Number',
            default: '3',
            version: '',
          },
        ],
      }
    },
    methods: {
      showToast (position) {
        this.$toast({
          position,
          message: '您好',
        })
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>

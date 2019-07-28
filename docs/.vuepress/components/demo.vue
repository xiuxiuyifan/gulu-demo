<template>
  <div class="demo">
    <h2>创建组件文档模板</h2>
    <p>组件描述</p>
    <h3>组件功能名字</h3>
    <p>组件功能描述</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        组件展示位置
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            组件描述说明
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
    <p>组件参数说明后期扩展</p>
  </div>
</template>

<script>
  import GIcon from '../../../src/components/icon/icon'
  import mixin from '../mixin'

  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      GIcon,
    },
    data () {
      return {
        str: ``,
        dataTable: [
          {
            id: '1',
            params: 'message',
            description: '提示消息要显示的内容',
            type: 'string',
            default: '-',
            version: '',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>

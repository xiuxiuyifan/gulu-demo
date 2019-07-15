<template>
  <div class="inputDocs">
    <h2>Input输入框组件</h2>
    <p>网页上面让用户提交信息的组件</p>
    <h3>双向绑定</h3>
    <p>用户输入的值变化的同时，数据也发生了变化</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-input v-model="value" placeholder="请输入内容"></g-input>
        <span style="margin-left: 10px">结果是{{value}}</span>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            组件描述说明
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow[0] === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>


    <h3>attributes</h3>
    <p>组件参数说明后期扩展</p>
  </div>
</template>

<script>
  import GIcon from '../../../src/components/icon/icon'
  import GInput from '../../../src/components/input/g-input'
  import mixin from '../mixin'

  export default {
    name: 'inputDocs',
    mixins: [mixin],
    components: {
      GIcon,
      GInput,
    },
    data () {
      return {
        value: '',
        str: ``,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .inputDocs {
  }
</style>

<template>
  <div class="popoverDocs">
    <h2>popover组件</h2>
    <p>用于在用户做某些动作之前的提示信息</p>
    <h3>支持四个方位</h3>
    <p>可以让提示内容根据用户想要出现的位置进行显示(默认出现在上面)</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo" style="display: flex;justify-content: space-around">
        <g-popover position="left">
          <g-button>左方</g-button>
          <div slot="content">
            上传内容大小不超过4m,图片建议像素1920*1080
          </div>
        </g-popover>
        <g-popover>
          <g-button>上方</g-button>
          <div slot="content">
            上传内容大小不超过4m,图片建议像素1920*1080
          </div>
        </g-popover>
        <g-popover position="bottom">
          <g-button>下方</g-button>
          <div slot="content">
            上传内容大小不超过4m,图片建议像素1920*1080
          </div>
        </g-popover>
        <g-popover position="right">
          <g-button>右方</g-button>
          <div slot="content">
            上传内容大小不超过4m,图片建议像素1920*1080
          </div>
        </g-popover>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            通过设置position属性可以调整提示框出现的位置
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div @click="showCode(0)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[0] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>

    <h3>支持两种不同的触发方式</h3>
    <p>可以支持hove 或者click 的方式触发</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo" style="display: flex;justify-content: space-around">
        <g-popover trigger="hover">
          <g-button>hove显示</g-button>
          <div slot="content">
            上传内容大小不超过4m,图片建议像素1920*1080
          </div>
        </g-popover>
        <g-popover trigger="click">
          <g-button>click显示</g-button>
          <div slot="content">
            上传内容大小不超过4m,图片建议像素1920*1080
          </div>
        </g-popover>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            通过设置trigger可以变换提示框触发的方式
          </div>
          <pre><code>{{str1}}</code></pre>
        </div>
      </div>
      <div @click="showCode(1)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[1] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>

    <h3>attributes</h3>
    <g-table :columns="columns" :data-table="dataTable"></g-table>
  </div>
</template>

<script>
  import GIcon from '../../../src/components/icon/icon'
  import GPopover from '../../../src/components/popover/g-popover'
  import GButton from '../../../src/components/button/g-button'
  import GTable from '../../../src/components/table/g-table'
  import mixin from '../mixin'

  export default {
    name: 'popoverDocs',
    mixins: [mixin],
    components: {
      GIcon,
      GPopover,
      GButton,
      GTable,
    },
    data () {
      return {
        str: `
<g-popover position="left">
  <g-button>上传</g-button>
  <div slot="content">
    上传内容大小不超过4m,图片建议像素1920*1080
  </div>
</g-popover>

<g-popover>
  <g-button>上传</g-button>
  <div slot="content">
    上传内容大小不超过4m,图片建议像素1920*1080
  </div>
</g-popover>

<g-popover position="bottom">
  <g-button>上传</g-button>
  <div slot="content">
    上传内容大小不超过4m,图片建议像素1920*1080
  </div>
</g-popover>

<g-popover position="right">
  <g-button>上传</g-button>
  <div slot="content">
    上传内容大小不超过4m,图片建议像素1920*1080
  </div>
</g-popover>
        `.trim(),
        str1: `
<g-popover trigger="hover">
  <g-button>hove显示</g-button>
  <div slot="content">
    上传内容大小不超过4m,图片建议像素1920*1080
  </div>
</g-popover>

<g-popover trigger="click">
  <g-button>click显示</g-button>
  <div slot="content">
    上传内容大小不超过4m,图片建议像素1920*1080
  </div>
</g-popover>
        `.trim(),
        dataTable: [
          {
            id: '1',
            params: 'position',
            description: '提示框出现的方位',
            type: 'string',
            default: 'top -- buttom,left,right',
            version: '',
          },
          {
            id: '2',
            params: 'trigger',
            description: '提示框触发的方式',
            type: 'string',
            default: 'click -- hover',
            version: '',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>

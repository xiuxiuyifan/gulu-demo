<template>
  <div class="containerDocs">
    <h2>基本布局</h2>
    <p>常见网站的布局方式</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-container>
          <g-header>头部</g-header>
          <g-main style="line-height: 200px">主要内容</g-main>
        </g-container>
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
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-container>
          <g-header>头部</g-header>
          <g-container position="level">
            <g-aside>侧边栏</g-aside>
            <g-main style="line-height: 200px">主要内容</g-main>
          </g-container>
          <g-footer>尾部</g-footer>
        </g-container>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            组件描述说明
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow[1] === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-container position="level">
          <g-aside>
            侧边栏
          </g-aside>
          <g-container>
            <g-header>头部</g-header>
            <g-main style="line-height: 200px">内容区域</g-main>
            <g-footer>尾部</g-footer>
          </g-container>
        </g-container>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            组件描述说明
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow[2] === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import GIcon from '../../../src/icon'
  import GContainer from '../../../src/g-container'
  import GFooter from '../../../src/g-footer'
  import GHeader from '../../../src/g-header'
  import GMain from '../../../src/g-main'
  import GAside from '../../../src/g-aside'

  export default {
    name: 'containerDocs',
    components: {
      GIcon,
      GContainer,
      GMain,
      GHeader,
      GFooter,
      GAside,
    },
    data () {
      return {
        //每一个区域的高度
        codeParent: [],
        codeHeightArr: [],
        //每个区域的显示状态
        isShow: [],
        str: `组件代码 code`,
      }
    },
    methods: {
      //根据子元素的高度 设置代码区域父元素的高度
      showCode (index) {
        this.$set(this.isShow, index, !this.isShow[index])
        this.$nextTick(() => {
          if (this.isShow[index] === true) {
            this.codeParent[index].style.height = this.codeHeightArr[index] + 'px'
          } else {
            this.codeParent[index].style.height = 0
          }
        })
      },
      //得到所有代码区域的高度
      getCodesHeight () {
        const arr = document.getElementsByClassName('code-content-height')
        this.codeParent = document.getElementsByClassName('code-content')
        const arrLength = arr.length
        for (let i = 0; i < arrLength; i++) {
          this.codeHeightArr.push(arr[i].getBoundingClientRect().height)
          this.isShow.push(false)
        }
        console.log(this.codeParent)
      },
    },
    mounted () {
      //异步获取当前组件内部 code区域的高度 以便于给点击的时候使用
      this.$nextTick(() => {
        this.getCodesHeight()
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>

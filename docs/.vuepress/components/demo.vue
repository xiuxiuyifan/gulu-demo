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
  import GIcon from '../../../src/icon'

  export default {
    name: 'demo',
    components: {
      GIcon,
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

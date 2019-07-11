<template>
  <div class="collapse-docs">
    <h2>collapse折叠面板组件按钮</h2>
    <p>用于查看列表详细数据</p>
    <h3>可同时展开多个</h3>
    <p>多个list同时查看详细内容</p>
    <p>选中结果{{selected}}</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-collapse :selected.sync="selected">
          <g-collapse-item name="1" title="天明">
            非攻
          </g-collapse-item>
          <g-collapse-item name="2" title="月儿">
            幻音宝盒
          </g-collapse-item>
          <g-collapse-item name="3" title="少羽">
            项氏一族
          </g-collapse-item>
          <g-collapse-item name="4" title="月儿">
            虞姬
          </g-collapse-item>
        </g-collapse>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            "selected表示要选中的项"
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow[0] === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>

    <h3>只可以同时查看一个</h3>
    <p>点击下一个的同时关闭上一个和默认展开</p>
    <p>选中结果{{selected1}}</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-collapse :selected.sync="selected1" onlyone>
          <g-collapse-item name="1" title="天明">
            非攻
          </g-collapse-item>
          <g-collapse-item name="2" title="月儿">
            幻音宝盒
          </g-collapse-item>
          <g-collapse-item name="3" title="少羽">
            项氏一族
          </g-collapse-item>
          <g-collapse-item name="4" title="月儿">
            虞姬
          </g-collapse-item>
        </g-collapse>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            "onlyone"属性可以控制同时值出现一个详情
          </div>
          <pre><code>{{str1}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow[1] === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import GCollapse from '../../../src/components/collapse/g-collapse'
  import GCollapseItem from '../../../src/components/collapse/g-collapse-Item'
  import GIcon from '../../../src/components/icon/icon'

  export default {
    name: 'collapseDocs',
    components: {
      GCollapse,
      GCollapseItem,
      GIcon,
    },
    data () {
      return {
        //每一个区域的高度
        codeParent: [],
        codeHeightArr: [],
        //每个区域的显示状态
        isShow: [],

        selected: ['3'],
        selected1: ['3'],
        str: `
<g-collapse :selected="selected">
  <g-collapse-item name="1" title="天明">
    非攻
  </g-collapse-item>
  <g-collapse-item name="2" title="月儿">
    幻音宝盒
  </g-collapse-item>
  <g-collapse-item name="3" title="少羽">
    项氏一族
  </g-collapse-item>
  <g-collapse-item name="4" title="月儿">
    虞姬
  </g-collapse-item>
</g-collapse>`.trim(),
        str1: `
<g-collapse :selected="selected" onlyone>
  <g-collapse-item name="1" title="天明">
    非攻
  </g-collapse-item>
  <g-collapse-item name="2" title="月儿">
    幻音宝盒
  </g-collapse-item>
  <g-collapse-item name="3" title="少羽">
    项氏一族
  </g-collapse-item>
  <g-collapse-item name="4" title="月儿">
    虞姬
  </g-collapse-item>
</g-collapse>`.trim(),
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

<template>
  <div class="button-docs">
    <div>
      <h2>button按钮</h2>
      <p>常用的操作按钮</p>
    </div>
    <!--第一个-->
    <h3>
      基础用法
    </h3>
    <p>基础的按钮用法</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <g-button>默认按钮</g-button>
          <g-button type="primary">主要按钮</g-button>
          <g-button type="success">成功按钮</g-button>
          <g-button type="info">信息按钮</g-button>
          <g-button type="warning">警告按钮</g-button>
          <g-button type="danger">危险按钮</g-button>
        </div>
        <div style="margin: 20px 0">
          <g-button plain>朴素按钮</g-button>
          <g-button plain type="primary">主要按钮</g-button>
          <g-button plain type="success">成功按钮</g-button>
          <g-button plain type="info">信息按钮</g-button>
          <g-button plain type="warning">警告按钮</g-button>
          <g-button plain type="danger">危险按钮</g-button>
        </div>
        <div style="margin: 20px 0">
          <g-button round>圆形按钮</g-button>
          <g-button round type="primary">主要按钮</g-button>
          <g-button round type="success">成功按钮</g-button>
          <g-button round type="info">信息按钮</g-button>
          <g-button round type="warning">警告按钮</g-button>
          <g-button round type="danger">危险按钮</g-button>
        </div>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            这里是组件重要属性的解释
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow[0] === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <!--2-->
    <h3>
      禁用状态
    </h3>
    <p>按钮不可用</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <g-button>默认按钮</g-button>
          <g-button type="primary">主要按钮</g-button>
          <g-button type="success">成功按钮</g-button>
          <g-button type="info">信息按钮</g-button>
          <g-button type="warning">警告按钮</g-button>
          <g-button type="danger">危险按钮</g-button>
        </div>
        <div style="margin: 20px 0">
          <g-button>朴素按钮</g-button>
          <g-button type="primary">主要按钮</g-button>
          <g-button type="success">成功按钮</g-button>
          <g-button type="info">信息按钮</g-button>
          <g-button type="warning">警告按钮</g-button>
          <g-button type="danger">危险按钮</g-button>
        </div>
        <div style="margin: 20px 0">
          <g-button>圆形按钮</g-button>
          <g-button type="primary">主要按钮</g-button>
          <g-button type="success">成功按钮</g-button>
          <g-button type="info">信息按钮</g-button>
          <g-button type="warning">警告按钮</g-button>
          <g-button type="danger">危险按钮</g-button>
        </div>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            这里是组件重要属性的解释
          </div>
          <pre><code>{{str1}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow[1] === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <!--3-->
    <h3>
      图标按钮
    </h3>
    <p>可以给按钮添加不同的图标</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <g-button>默认按钮</g-button>
          <g-button type="primary">主要按钮</g-button>
          <g-button type="success">成功按钮</g-button>
          <g-button type="info">信息按钮</g-button>
          <g-button type="warning">警告按钮</g-button>
          <g-button type="danger">危险按钮</g-button>
        </div>
        <div style="margin: 20px 0">
          <g-button>朴素按钮</g-button>
          <g-button type="primary">主要按钮</g-button>
          <g-button type="success">成功按钮</g-button>
          <g-button type="info">信息按钮</g-button>
          <g-button type="warning">警告按钮</g-button>
          <g-button type="danger">危险按钮</g-button>
        </div>
        <div style="margin: 20px 0">
          <g-button>圆形按钮</g-button>
          <g-button type="primary">主要按钮</g-button>
          <g-button type="success">成功按钮</g-button>
          <g-button type="info">信息按钮</g-button>
          <g-button type="warning">警告按钮</g-button>
          <g-button type="danger">危险按钮</g-button>
        </div>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            这里是组件重要属性的解释
          </div>
          <pre><code>{{str1}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow[2] === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <!--4-->
    <h3>
      按钮组
    </h3>
    <p>可以将按钮合并在一起使用</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <g-button>默认按钮</g-button>
          <g-button type="primary">主要按钮</g-button>
          <g-button type="success">成功按钮</g-button>
          <g-button type="info">信息按钮</g-button>
          <g-button type="warning">警告按钮</g-button>
          <g-button type="danger">危险按钮</g-button>
        </div>
        <div style="margin: 20px 0">
          <g-button>朴素按钮</g-button>
          <g-button type="primary">主要按钮</g-button>
          <g-button type="success">成功按钮</g-button>
          <g-button type="info">信息按钮</g-button>
          <g-button type="warning">警告按钮</g-button>
          <g-button type="danger">危险按钮</g-button>
        </div>
        <div style="margin: 20px 0">
          <g-button>圆形按钮</g-button>
          <g-button type="primary">主要按钮</g-button>
          <g-button type="success">成功按钮</g-button>
          <g-button type="info">信息按钮</g-button>
          <g-button type="warning">警告按钮</g-button>
          <g-button type="danger">危险按钮</g-button>
        </div>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            这里是组件重要属性的解释
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(3)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow[3] === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow[3] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <!--5-->
    <h3>
      加载中按钮
    </h3>
    <p>获取数据的时候可以使用的按钮</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <g-button :lodding="true">默认按钮</g-button>
          <g-button type="primary" :lodding="lodding" @click="lodding = !lodding">点我加载</g-button>
        </div>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            这里是组件重要属性的解释
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(4)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow[4] === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow[4] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <!--6-->
    <h3>
      涟漪按钮
    </h3>
    <p>点击按钮可以实现涟漪效果</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <g-button :ripples="true">默认按钮</g-button>
        </div>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            这里是组件重要属性的解释
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(5)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow[5] === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow[5] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import GButton from '../../../src/button'
  import GIcon from '../../../src/icon'
  export default {
    name: 'buttonDocs',
    components:{
      'g-button': GButton,
      'g-icon': GIcon
    },
    data(){
      return {
        //每一个区域的高度
        codeParent: [],
        codeHeightArr: [],
        //每个区域的显示状态
        isShow: [],

        //组件里面用到的状态
        lodding: false,
        lodding1: false,
        lodding2: false,
        str:`<g-button>默认按钮</g-button>
             <g-button type="primary">主要按钮</g-button>
             <g-button type="success">成功按钮</g-button>`.replace(/\t+| +/g, '').trim(),
        str1: `<g-button>默认按钮</g-button>
             <g-button type="primary">主要按钮</g-button>
             <g-button type="primary">主要按钮</g-button>
             <g-button type="primary">主要按钮</g-button>
             <g-button type="primary">主要按钮</g-button>
             <g-button type="primary">主要按钮</g-button>
             <g-button type="primary">主要按钮</g-button>
             <g-button type="success">成功按钮</g-button>`.replace(/\t+| +/g, '').trim(),
      }
    },
    methods:{
      //根据子元素的高度 设置代码区域父元素的高度
      showCode (index) {
        this.$set(this.isShow, index, !this.isShow[index])
        this.$nextTick(()=>{
          if (this.isShow[index] === true) {
            this.codeParent[index].style.height = this.codeHeightArr[index] + 'px'
          }else {
            this.codeParent[index].style.height = 0
          }
        });
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
      }
    },
    mounted () {
      //异步获取当前组件内部 code区域的高度 以便于给点击的时候使用
      this.$nextTick(() => {
        this.getCodesHeight()
      })
    }
  }
</script>
<style>
</style>
<style lang="scss" scoped>
  @import "common";

  .button-docs {

}
</style>

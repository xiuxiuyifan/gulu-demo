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
        <pre class="code-content-height"><code>{{str}}</code>
        </pre>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow === false ? '显示代码' : '隐藏代码'}}</span>
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
        <pre class="code-content-height"><code>{{str1}}</code>
        </pre>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow === false ? '显示代码' : '隐藏代码'}}</span>
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
        <pre class="code-content-height"><code>{{str1}}</code>
        </pre>
      </div>
      <div class="lock-code" @click="showCode(2)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow === false ? '显示代码' : '隐藏代码'}}</span>
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
        <pre class="code-content-height"><code>{{str1}}</code>
        </pre>
      </div>
      <div class="lock-code" @click="showCode(3)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow === false ? '显示代码' : '隐藏代码'}}</span>
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
        <pre class="code-content-height"><code>{{str1}}</code>
        </pre>
      </div>
      <div class="lock-code" @click="showCode(4)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow === false ? '显示代码' : '隐藏代码'}}</span>
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
        <pre class="code-content-height"><code>{{str1}}</code>
        </pre>
      </div>
      <div class="lock-code" @click="showCode(5)" ref="xxx">
        <g-icon class="icon-down" :icon="isShow === false ? 'codedown' : 'codeup'"></g-icon>
        <span class="lock-code-word">{{isShow === false ? '显示代码' : '隐藏代码'}}</span>
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
.button-docs{
  .component-wrapper{
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;

    .component-wrapper-demo {
      padding: 24px 24px 0 24px;
    }
    h4{
      margin: 55px 0 20px;
    }
    &:hover{
      .lock-code .lock-code-word{
        font-size: 14px;
        transform: translateX(-40px);
        opacity: 1;
      }
      .lock-code .icon-down{
        transform: translateX(-40px);
      }
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    }
    .code-content{
      background-color: #fafafa;
      border-top: 1px solid #eaeefb;
      overflow: hidden;
      transition: height .2s;
      >pre{
        background: none;
        >code{
          color: #3182bd;
        }
      }
    }
    .lock-code{
      border-top: 1px solid #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
      line-height: 44px;
      color: #d3dce6;
      &:hover{
        background-color: #f9fafc;
        .lock-code-word{
          color: #409eff;
        }
        .icon-down{
          fill:#409eff;
        }
      }
      .icon-down{
        transform: translateX(0px);
        transition: all .1s;
      }
      text-align: center;
      .lock-code-word{
        font-size: 0px;
        margin-left: 15px;
        display: inline-block;
        transition: all .1s;
        opacity: 0;
      }
    }
  }
}
</style>

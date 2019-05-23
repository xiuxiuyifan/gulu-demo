<template>
  <div class="button-docs">
    <div>
      <h2>button按钮</h2>
      <p>常用的操作按钮</p>
    </div>
    <h3>
      基础用法
    </h3>
    <p>基础的按钮用法</p>
    <div class="component-wrapper">
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
      <div class="code-content" style="height: 0;">
        <pre><code>{{str}}</code>
        </pre>
      </div>
      <div class="lock-code" @click="showCode" ref="xxx"><g-icon class="icon-down" :class="{'rotare-icon':isShow}" icon="codedown"></g-icon><span class="lock-code-word">{{hoverWorld}}</span>
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
        isShow: false,
        hoverWorld:'显示代码',
        str:`<g-button>默认按钮</g-button>
             <g-button type="primary">主要按钮</g-button>
             <g-button type="success">成功按钮</g-button>`.replace(/\t+| +/g,"").trim()
      }
    },
    methods:{
      showCode(){
        this.isShow = !this.isShow;
        this.$nextTick(()=>{
          if(this.isShow === true){
            this.hoverWorld = '隐藏代码';
            const {height} = this.$refs.xxx.previousElementSibling.firstElementChild.getBoundingClientRect();
            this.$refs.xxx.previousElementSibling.style.height = height + 'px';
          }else {
            this.hoverWorld = '显示代码';
            this.$refs.xxx.previousElementSibling.style.height = 0;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.button-docs{
  .component-wrapper{
    border: 1px solid #ebebeb;
    border-radius: 3px;
    padding: 24px 24px 0 24px;
    transition: .2s;
    h4{
      margin: 55px 0 20px;
    }
    &:hover{
      .lock-code .lock-code-word{
        font-size: 14px;
        transform: translateX(-40px);
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
      .rotare-icon{
        transform: rotate(180deg);
      }
      text-align: center;
      .lock-code-word{
        font-size: 0px;
        margin-left: 15px;
        display: inline-block;
        transition: all .1s;
      }
    }
  }
}
</style>

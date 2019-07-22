<template>
  <div class="overview">
    <div>
      <h2>项目概览</h2>
    </div>
    <p>文件目录</p>
    <div class="component-wrapper" v-highlight>
      <div class="component-wrapper-demo">
        <pre><code>{{str}}</code></pre>
      </div>
    </div>
    <p>组件风格参考element 和 ant design</p>
    <p>文档样式主要参考element的文档官网样式</p>
  </div>
</template>

<script>
  export default {
    name: 'overview',
    data () {
      return {
        str: `
        .
        |-- LICENSE               //开源协议
        |-- README.md
        |-- api                   //有关数据请求的api
        |-- babel.config.js
        |-- deploy.sh
        |-- dist
        |-- docs                  //文档代码位置
        |-- karma.conf.js
        |-- node_modules
        |-- package.json
        |-- public
        |-- src                   //源文件位置
        |-- tests                 //单元测试代码
        |-- validate
        |-- vue.config.js         //项目配置文件
        |-- xiuxiuyifan
        |-- xiuxiuyifan.pub
        \`-- yarn.lock`.replace(/^\s*/gm, '').trim(),
      }
    },
  }
</script>

<style lang="scss" scoped>
  .overview {
    .component-wrapper {
      border: 1px solid #ebebeb;

      &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
      }
    }

    pre {
      background: none;

      > code {
        color: #3182bd;
      }
    }
  }
</style>

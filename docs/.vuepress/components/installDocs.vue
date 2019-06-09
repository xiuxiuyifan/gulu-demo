<template>
  <div class="installDocs">
    <div>
      <h2>安装</h2>
      <p>npm 安装 npm install -S gulu-demo</p>
      <p>npm 安装 yarn add gulu-demo</p>
      <p>yarn add &lt;package...&gt;</p>
      <p>这将安装您的dependencies中的一个或多个包。这是所谓的常规依赖，确切地说，是代码运行时所需要的（比如 React 和 immutableJS）</p>
      <p>yarn add &lt;package...&gt;[--dev/-D]</p>
      <p>用 --dev 或 -D 会在 devDependencies 里安装一个或多个包。这是开发依赖，就是那些只在开发过程中需要，而运行时不需要的依赖（比如 Babel 和 Flow）。</p>
    </div>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <pre><code>
            完整引入
            在 main.js 中写入以下内容：

            import Vue from 'vue';
            import GuluDemo from 'gulu-demo';
            import 'gulu-demo/lib/css/index.css';
            import App from './App.vue';

            Vue.use(GuluDemo);

            new Vue({
            el: '#app',
            render: h => h(App)
            });
          </code></pre>
      </div>
    </div>
    <p>目前在测试版本1.0之前的版本属于测试版本</p>
    <p>--version 0.1.4(开发测试版)</p>
  </div>
</template>

<script>
  export default {
    name: 'installDocs',
  }
</script>

<style lang="scss" scoped>
  .installDocs {
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

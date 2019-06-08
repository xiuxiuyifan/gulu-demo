<template>
  <div class="installDocs">
    <div>
      <h2>安装</h2>
      <p>npm 安装 npm install -S gulu-demo</p>
    </div>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <pre><code>
            完整引入
            在 main.js 中写入以下内容：

            import Vue from 'vue';
            import ElementUI from 'element-ui';
            import 'element-ui/lib/theme-chalk/index.css';
            import App from './App.vue';

            Vue.use(ElementUI);

            new Vue({
            el: '#app',
            render: h => h(App)
            });
          </code></pre>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'installDocs',
  }
</script>

<style lang="scss" scoped>

</style>

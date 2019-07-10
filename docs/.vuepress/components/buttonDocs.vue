<template>
  <div class="button-docs">
    <div>
      <h2>button按钮</h2>
      <p>常用的操作按钮</p>
    </div>
    <!--第一个-->
    <h3>基础用法</h3>
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
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">按钮通过"type" "plain" "round"属性控制其常用的按钮的几种状态状态 对应默认 朴素 圆角三种按钮</div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div @click="showCode(0)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[0] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <!--2-->
    <h3>禁用状态</h3>
    <p>按钮不可用</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <g-button disabled>禁用按钮</g-button>
        </div>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">"disabled"属性可以让网页上的鼠标变成是一个红色的圈加一个斜杠，表示禁止的意思</div>
          <pre><code>{{str1}}</code></pre>
        </div>
      </div>
      <div @click="showCode(1)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[1] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <!--3-->
    <h3>图标按钮</h3>
    <p>可以给按钮添加不同的图标</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <g-button>默认按钮</g-button>
          <g-button icon="setting" position="right" type="primary">主要按钮</g-button>
          <g-button icon="good" type="success">成功按钮</g-button>
          <g-button icon="del" type="info">删除</g-button>
          <g-button icon="information" type="warning">警告按钮</g-button>
          <g-button icon="error" type="danger">危险按钮</g-button>
        </div>
        <div style="margin: 20px 0">
          <g-button>朴素按钮</g-button>
          <g-button icon="setting" plain type="primary">主要按钮</g-button>
          <g-button icon="good" plain type="success">成功按钮</g-button>
          <g-button icon="del" plain type="info">删除</g-button>
          <g-button icon="information" plain type="warning">警告按钮</g-button>
          <g-button icon="error" plain type="danger">危险按钮</g-button>
        </div>
        <div style="margin: 20px 0">
          <g-button round>圆形按钮</g-button>
          <g-button icon="setting" round type="primary">主要按钮</g-button>
          <g-button icon="good" round type="success">成功按钮</g-button>
          <g-button icon="del" round type="info">删除</g-button>
          <g-button icon="information" round type="warning">警告按钮</g-button>
          <g-button icon="error" round type="danger">危险按钮</g-button>
        </div>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">"icon"属性可以显示自己想要的图标 "position"设置图标色位置</div>
          <pre><code>{{str2}}</code></pre>
        </div>
      </div>
      <div @click="showCode(2)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[2] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <!--4-->
    <h3>按钮组</h3>
    <p>可以将按钮合并在一起使用</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <g-button>默认按钮</g-button>
          <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button icon="right" position="right">下一页</g-button>
          </g-button-group>
          <g-button-group>
            <g-button icon="good"></g-button>
            <g-button icon="help"></g-button>
            <g-button icon="download"></g-button>
          </g-button-group>
        </div>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div
            class="code-user-desc"
          >在button组件外面包一层button-group组件就可以实现按钮组啦，这边icon在左边的时候有点小bug如果没有文字就不给svg添加右边的margin</div>
          <pre><code>{{str3}}</code></pre>
        </div>
      </div>
      <div @click="showCode(3)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[3] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[3] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <!--5-->
    <h3>加载中按钮</h3>
    <p>获取数据的时候可以使用的按钮</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <g-button :lodding="true">默认按钮</g-button>
          <g-button :lodding="lodding" @click="lodding = !lodding" type="primary">点我加载</g-button>
        </div>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">"lodding"属性控制按是否显示lodding图标</div>
          <pre><code>{{str4}}</code></pre>
        </div>
      </div>
      <div @click="showCode(4)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[4] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[4] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <!--6-->
    <h3>涟漪按钮</h3>
    <p>点击按钮可以实现涟漪效果</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <g-button ripples>涟漪按钮</g-button>
        </div>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">点击按钮的时候出现涟漪的效果 "ripples"属性既可以控制</div>
          <pre><code>{{str5}}</code></pre>
        </div>
      </div>
      <div @click="showCode(5)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[5] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[5] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import GButtonGroup from "../../../src/g-button-group";
import GButton from "../../../src/button";
import GIcon from "../../../src/icon";
import mixin from "../mixin";

export default {
  name: "buttonDocs",
  mixins: [mixin],
  components: {
    "g-button": GButton,
    "g-icon": GIcon,
    "g-button-group": GButtonGroup
  },
  data() {
    return {
      //组件里面用到的状态
      lodding: false,
      lodding1: false,
      lodding2: false,
      str: `
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
</div>`.trim(),
      str1: `<g-button disabled>禁用按钮</g-button>`,
      str2: `
<div>
  <g-button>默认按钮</g-button>
  <g-button type="primary" icon="setting" position="right">主要按钮</g-button>
  <g-button type="success" icon="good">成功按钮</g-button>
  <g-button type="info" icon="del">删除</g-button>
  <g-button type="warning" icon="information">警告按钮</g-button>
  <g-button type="danger" icon="error">危险按钮</g-button>
</div>
<div style="margin: 20px 0">
  <g-button>朴素按钮</g-button>
  <g-button plain type="primary" icon="setting">主要按钮</g-button>
  <g-button plain type="success" icon="good">成功按钮</g-button>
  <g-button plain type="info" icon="del">删除</g-button>
  <g-button plain type="warning" icon="information">警告按钮</g-button>
  <g-button plain type="danger" icon="error">危险按钮</g-button>
</div>
<div style="margin: 20px 0">
  <g-button round>圆形按钮</g-button>
  <g-button round type="primary" icon="setting">主要按钮</g-button>
  <g-button round type="success" icon="good">成功按钮</g-button>
  <g-button round type="info" icon="del">删除</g-button>
  <g-button round type="warning" icon="information">警告按钮</g-button>
  <g-button round type="danger" icon="error">危险按钮</g-button>
</div>`.trim(),
      str3: `
<g-button>默认按钮</g-button>
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button icon="right" position="right">下一页</g-button>
</g-button-group>
<g-button-group>
  <g-button icon="good"></g-button>
  <g-button icon="help"></g-button>
  <g-button icon="download"></g-button>
</g-button-group>`.trim(),
      str4: `
<g-button :lodding="true">默认按钮</g-button>
<g-button type="primary" :lodding="lodding" @click="lodding = !lodding">点我加载</g-button>`.trim(),
      str5: `<g-button ripples>涟漪按钮</g-button>`
    };
  }
};
</script>
<style>
</style>
<style lang="scss" scoped>
.button-docs {
}
</style>

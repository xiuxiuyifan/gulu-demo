<template>
  <div class="g-icon-docs">
    <h2>Icon图标组件</h2>
    <p>常用的图标</p>
    <p>可以引入iconfont上面所有的图标请参照<a href="https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.16&helptype=code"
                                target="_blank">iconfont</a>上面代码使用
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div class="icon-box-wrapper">
          <div :class="item.classes" class="icon-wrapper" v-for="(item,index) in iconArr" :key="index">
            <g-icon :icon="item.icon"></g-icon>
            <span class="desc">{{item.icon}}</span>
          </div>
        </div>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            "icon"可以设置自己想要的图标，也可以自己引入iconfont的图标但是前缀要以"i-"开头就可以使用本组件引入所有的iconfont上的图标在自己的项目中了<br>
            如果想要改变图标的颜色请给组件设置color属性即可,自己引入的图标需要批量去色后就可以随便更换颜色了，以便于在代码中更好地复用
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div @click="showCode(0)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[0] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>


    <h3>attributes</h3>
    <p>组件参数说明后期扩展</p>
  </div>
</template>

<script>
  import GIcon from '../../../src/components/icon/icon'
  import mixin from '../mixin'

  export default {
    name: 'g-icon-docs',
    mixins: [mixin],
    components: {
      GIcon,
    },
    data () {
      return {
        iconArr: [
          {
            icon: 'codedown',
          },
          {
            icon: 'codeup',
          },
          {
            icon: 'setting',
          },
          {
            icon: 'list',
          },
          {
            icon: 'del',
          },
          {
            icon: 'good',
          },
          {
            icon: 'information',
          },
          {
            icon: 'error',
          },
          {
            icon: 'left',
          },
          {
            icon: 'right',
          },
          {
            icon: 'down',
          },
          {
            icon: 'up',
          },
          {
            icon: 'help',
          },
          {
            icon: 'download',
          },
          {
            icon: 'lodding',
          },
          {
            icon: 'setting',
          },
          {
            icon: 'add',
          },
          {
            icon: 'jd',
            classes: 'jd',
          },
          {
            icon: 'food',
          },
          {
            icon: 'time',
          },
          {
            icon: 'iphone',
            classes: 'iphone',
          },
          {
            icon: 'serch',
          },
          {
            icon: 'phone',
          },
          {
            icon: 'video',
          },
          {
            icon: 'mobile',
          },
          {
            icon: 'reduce',
          },
          {
            icon: 'zhifubao',
            classes: 'zhifubao',
          },
          {
            icon: 'code',
          },
          {
            icon: 'weixin',
            classes: 'wechart',
          },
          {
            icon: 'star',
          },
        ],
        str: `<g-icon icon="setting"></g-icon>`,
      }
    },
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .g-icon-docs {
    .wechart {
      color: green;
    }

    .zhifubao {
      color: rgb(6, 180, 253);
    }

    .iphone {
      color: gray;
    }

    .jd {
      color: #f10215;
    }
    .icon-box-wrapper {
      display: flex;
      flex-wrap: wrap;

      .icon-wrapper {
        display: flex;
        width: 16.66%;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;

        &:nth-child(odd) {
          border-top: 1px solid #000;
          border-left: 1px solid #000;
        }

        &:nth-child(even) {
          border-top: 1px solid #000;
          border-left: 1px solid #000;
        }

        &:nth-child(6n) {
          border-right: 1px solid #000;
        }

        &:nth-last-child(1), &:nth-last-child(2), &:nth-last-child(3), &:nth-last-child(4), &:nth-last-child(5), &:nth-last-child(6) {
          border-bottom: 1px solid #000;
        }

        > svg {
          font-size: 30px;
        }

        .desc {
          margin-top: 25px;
        }
      }
    }
  }
</style>

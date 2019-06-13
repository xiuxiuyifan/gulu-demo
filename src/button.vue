<template>
  <button :class="[compatible(), verify('type'), verify('round'), verify('plain'),verify('disabled')]"
          @click="$emit('click')"
          class="g-button">
        <g-icon :icon="icon" v-if="!lodding"></g-icon>
        <g-icon :class="{rotate:lodding}" icon="lodding" v-if="lodding"></g-icon>
    <span class="g-word">
            <slot></slot>
        </span>
    </button>
</template>
<script>
import Icon from './icon'
export default {
  name: 'g-button',
  props: {
    // icon的名字
    icon: {
      type: String
    },
    // 是否lodding
    lodding: {
      type: Boolean,
      default: false
    },
    // icon 的位置
    position: {
      type: String,
      default: 'left', // 校验只能是left或者right
      validator: function (value) {
        if (value === 'left' || value === 'right') {
          return true
        } else {
          console.error('position属性只接受left或者right')
          return false
        }
      }
    },
    //涟漪效果
    ripples: {
      type: Boolean,
      default: false
    },
    //按钮类型
    type: {
      type: String,
    },
    //圆角按钮
    round: {
      type: Boolean,
      default: false,
    },
    //朴素按钮
    plain: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    'g-icon': Icon
  },
  mounted () {
    if (this.ripples) {
      this.$el.classList.add('ripples')
    }
  },
  methods: {
    //检验props 用来控制class
    verify (props) {
      if (this[props] === undefined) {
        return undefined
      }
      if (this[props] === false) {
        return undefined
      }
      return `i-${props}-${this[props]}`
    },
    compatible () {
      if (Object.keys(this.$slots).length === 0) {
        return
      } else {
        return `i-${this.position}`
      }
    },
  },
}
</script>
<style lang="scss" scoped>
  @import "asset/scss/index";

  .i-right {
    > svg {
      order: 2;
      margin-left: 0.5em;
    }

    .g-word {
      order: 1;
    }
  }

  .i-left {
    > svg {
      order: 1;
      margin-right: 0.5em;
    }
    .g-word {
      order: 2;
    }

  }

  .g-button {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    background-color: $button-bg;
    font-size: $font-size;
    border-radius: $border-radius;
    padding: 0.8em 1.4em;
    border: 1px solid $border-color;
    box-sizing: border-box;
    line-height: 1;
    &.ripples {
      overflow: hidden;
      position: relative;
      transition: background-color 0.3s linear, border 0.3s linear;
      text-align: center;
      white-space: nowrap;
      cursor: pointer;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.87);
    }

    &.ripples:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #000 10%, rgba(0, 0, 0, 0) 10.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10);
      opacity: 0;
      transition: transform 0.5s, opacity 1s;
    }

    &.ripples:active:after {
      transform: scale(0);
      opacity: 0.2;
      transition: 0s;
    }

    & .g-word {
      font-size: 14px;
      position: relative;
      z-index: 1000;
    }

    &:hover, &:focus {
      background-color: $button-active-bg;
      border: 1px solid #409eff;
      cursor: pointer;
    }

    &:focus {
      outline: none;
      border: 1px solid #409eff;
    }

    & .rotate {
      animation: lodding 1s linear infinite;
    }

    @keyframes lodding {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .i-type-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover, &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }

    &.i-plain-true {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;

      &:hover, &:focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
        transition: all .2s;
      }
    }
  }

  .i-type-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;

    &:hover, &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }

    &.i-plain-true {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;

      &:hover, &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
        transition: all .2s;
      }
    }
  }

  .i-type-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:hover, &:focus {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff
    }

    &.i-plain-true {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;

      &:hover, &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
        transition: all .2s;
      }
    }
  }

  .i-type-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:hover, &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }

    &.i-plain-true {
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;

      &:hover, &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
        transition: all .2s;
      }
    }
  }

  .i-type-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover, &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }

    &.i-plain-true {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;

      &:hover, &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
        transition: all .2s;
      }
    }
  }

  .i-round-true {
    border-radius: 20px;
  }

  .i-disabled-true {
    cursor: no-drop !important;
  }
</style>

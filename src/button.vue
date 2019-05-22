<template>
    <button :class="`i-${position}`" @click="$emit('click')" class="g-button">
        <g-icon :icon="icon" v-if="!lodding"></g-icon>
        <g-icon :class="{rotate:lodding}" icon="lodding" v-if="lodding"></g-icon>
        <div class="g-word">
            <slot></slot>
        </div>
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
    repples: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'g-icon': Icon
  },
  mounted () {
    if (this.repples) {
      this.$el.classList.add('repples')
    }
  },
  methods: {}
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
        padding: 0.5em 1em;
        border: 1px solid $border-color;
        box-sizing: border-box;

        &.repples {
            overflow: hidden;
            position: relative;
            transition: background-color 0.3s linear, border 0.3s linear;
            text-align: center;
            white-space: nowrap;
            cursor: pointer;
            text-transform: uppercase;
            color: rgba(0, 0, 0, 0.87);
        }

        &.repples:after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            heightsss: 100%;
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

        &.repples:active:after {
            transform: scale(0);
            opacity: 0.2;
            transition: 0s;
        }

        & .g-word {
            font-size: 14px;
            position: relative;
            z-index: 1000;
        }

        &:hover {
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
</style>

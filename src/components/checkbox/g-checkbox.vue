<template>
  <div class="g-checkbox">
    <label class="g-checkbox-label">
      <span class="g-checkbox-wrapper">
        <input @change="onChange($event)" class="g-checkbox-checkbox" type="checkbox">
        <transition name="checked">
          <span class="correct" v-show="checked"></span>
        </transition>
      </span>
      <span class="g-checkbox-desc">描述</span>
    </label>
  </div>
</template>

<script>
  /*
  *     1.选中和不选中
  *     2.禁用
  *     3.全选
  *     4.自动选中
  * */
  export default {
    name: 'g-checkbox',
    props: {
      //改变之前
      beforeChecked: {
        type: Function,
      },
      //选择之后的结果
      checked: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {}
    },
    methods: {
      onChange (e) {
        console.log(e.target.checked)
        this.beforeChecked && this.beforeChecked()
        this.$emit('update:checked', e.target.checked)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .g-checkbox {
    .checked-enter, .checked-leave-to {
      opacity: 0;
    }

    .checked-enter-active, .checked-leave-active {
      transition: all .2s;
    }

    .checked-enter-to, .checked-leave {
      opacity: 1;
    }

    font-size: $font-size;
    display: inline-block;
    line-height: 1;
    cursor: pointer;

    .g-checkbox-label {
      display: inline-flex;
      align-items: center;
      vertical-align: top;

      .g-checkbox-wrapper {
        display: inline-flex;
        align-items: center;
        position: relative;

        .g-checkbox-checkbox {
          cursor: pointer;
          width: 16px;
          height: 16px;
          margin: 0;

          &::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            background: #ffffff;
            border: 1px solid $theme;
            border-radius: 2px;
          }
        }

        .correct {
          width: 16px;
          height: 16px;
          background: #ffffff;
          border: 1px solid $theme;
          border-radius: 2px;
          position: absolute;
          top: 0;
          left: 0;
          background: $theme;

          &:after {
            content: "";
            position: absolute;
            display: table;
            width: 5.71428571px;
            height: 9.14285714px;
            border: 2px solid #fff;
            border-top: 0;
            border-left: 0;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%) rotate(45deg);
          }
        }
      }

      .g-checkbox-desc {
        padding-left: 6px;
        cursor: pointer;
        user-select: none;
      }
    }
  }
</style>

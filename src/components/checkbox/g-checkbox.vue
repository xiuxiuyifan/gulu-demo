<template>
  <!--  <div :class="{'disabled-checkbox': disabled}" @click="$emit('click')" class="g-checkbox">-->
  <!--    <label class="g-checkbox-label">-->
  <!--      <span class="g-checkbox-wrapper">-->
  <!--        <input :class="{'disabled-checkbox': disabled}" :disabled="disabled"-->
  <!--               class="g-checkbox-checkbox" type="checkbox">-->
  <!--        <transition name="checked">-->
  <!--          <span :class="checkAll && checkAll ? 'check-all': 'check-no'" class="correct" v-show="checked"></span>-->
  <!--        </transition>-->
  <!--      </span>-->
  <!--      <span :class="{'disabled-checkbox': disabled}" class="g-checkbox-desc">-->
  <!--        <slot></slot>-->
  <!--      </span>-->
  <!--    </label>-->
  <!--  </div>-->
  <input @click="$emit('click')" value="您好">
</template>

<script>
  import eventBus from '../../asset/js/eventbus'
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
      //不可用
      disabled: {
        type: Boolean,
        default: false,
      },
      //全选的时候样式与其他平时选中的状态不同
      checkAll: {
        type: Boolean,
        default: false,
      },
      //关联的checkboxgroup
      contantCheckboxGroup: {
        type: String,
      },
    },
    data () {
      return {}
    },
    mounted () {
      if (this.checkAll) {
        if (!this.contantCheckboxGroup) {
          console.error('全选的时候必须有contantCheckboxGroup参数')
        } else {
          eventBus.$on('xxx', (value) => {
            console.log(value)
          })
        }
      }
    },
    methods: {
      // onChange (e) {
      //   this.onChange(e)
      // let checked = e.target.checked
      // console.log("是否选中"+ checked)
      // let data = ''
      // if (this.checkAll && checked === true) {
      //   data = 'all'
      // } else if (this.checkAll && checked === false) {
      //   data = 'noall'
      // } else if (!this.checkAll && checked === true) {
      //   data = this.$slots.default[0].text.trim()
      //   console.log(data)
      // } else if (!this.checkAll && checked === false) {
      //   data = ''
      //   console.log(data)
      // }
      // eventBus.$emit(this.contantCheckboxGroup, data)
      // this.beforeChecked && this.beforeChecked()
      // this.$emit('update:checked', checked)
      // },
    },
  }
</script>

<style lang="scss" scoped>
  .disabled-checkbox {
    cursor: not-allowed !important;
  }

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

        .check-all {
          background: #ffffff;

          &:after {
            content: "";
            display: table;
            position: absolute;
            width: 5px;
            height: 5px;
            left: 50%;
            top: 50%;
            background: $theme;
            border: 0;
            transform: translateX(-50%) translateY(-50%);
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

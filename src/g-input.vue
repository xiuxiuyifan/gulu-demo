<template>
    <div class="g-input">
        <div class="g-input-content">
            <input :class="{'disabled':disabled,'error':err}" :disabled="disabled"
                   :placeholder="placeholder" :readonly="readonly"
                   :rule="rule"
                   :type="type"
                   :value="value"
                   class="input">
            <g-icon :class="{fillerr:err}" class="blurafter" @click="clearValue()" icon="del" v-if="err"></g-icon>
        </div>
        <div v-if="err">
            <g-icon :class="{fillerr:err}" icon="error"></g-icon>
            <span :class="{worderr:err}" class="ib">{{this.rule[0].msg}}</span>
        </div>
    </div>
</template>

<script>
import Icon from './icon'
/*
    * 1.hover 状态
    * 2.focus 状态
    * 3.只读状态
    * 4.禁止输入状态
    * 5.错误提示 ，成功提示
    * 6.可以清空
    *
    * */
export default {
  name: 'g-input',
  data () {
    //对不同的事件进行切换
    // @blur="watchblur()"
    // @focus="watchfocus()"
    // @input="$emit('input',$event.target.value)"
    return {}
  },
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    readonly: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    },
    err: {
      type: Boolean
    },
    type: {
      type: String,
      default: 'text'
    },
    rule: {
      type: Array
    }
  },
  computed: {},
  components: {
    'g-icon': Icon
  },
  methods: {
    watchblur () {
      if (this.rule[0].target === 'blur') {
        let result = this.rule[0].validate(this.value)
        this.$emit('computederr', result)
      }
    },
    watchinput () {

    },
    watchfocus () {

    },
    clearValue () {
      console.log(this.value)
      this.$emit('ccc', '')
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  $height: 35px;
    $border-radius: 4px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-shadow-color: rgba(0, 0, 0, 0.5);
    $border-color-focus: #409eff;
    $font-size: 14px;
    .g-input {
        display: inline-block;
        vertical-align: middle;

        .g-input-content {
            .blurafter {
                position: absolute;
                right: 5px;
                top: 50%;
                transform: translateY(-50%);;
            }

            display: inline-block;
            vertical-align: middle;
            position: relative;

            > .input {
                font-size: $font-size;
                padding-left: 8px;
              height: $height;
                border-radius: $border-radius;
                border: 1px solid $border-color;
                transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
                background: #fff;
                color: #606266;

                &[disabled], &[readonly] {
                    background-color: #f5f7fa !important;
                    border-color: #e4e7ed !important;
                    color: #c0c4cc !important;
                }

                &[disabled] {
                    cursor: not-allowed;
                }

                &.error {
                    border: 1px solid #f04134 !important;
                }

                &:hover {
                    border: 1px solid $border-color-hover;
                }

                &:focus {
                    outline: none;
                    border: 1px solid $border-color-focus;
                }
            }
        }

        .fillerr {
            fill: #f04134;
            cursor: pointer;
        }

        .worderr {
            color: #f04134;
        }
    }
</style>

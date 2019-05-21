<template>
    <div class="collapse-item">
        <div class="title" @click="toggle">
            {{onlyone}}
            {{title}}<g-icon icon="right" :class="{'rotate-icon':open}"></g-icon>
        </div>
        <div class="content" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'collapseItem',
  inject: ['eventBus'],
  props: {
    title: {
      type: String,
      validator (value) {
        if (value) {
          return value
        } else {
          console.log('title不能为空')
        }
      }
    },
    name: {
      type: String,
      validator (value) {
        if (!value) {
          console.log('name 不能为空')
        } else {
          return value
        }
      }
    }
  },
  data () {
    return {
      open: false,
      onlyone: false
    }
  },
  mounted () {
    // 不要在mounted  的时候直接用 父组件里面直接修改的data
    // 因为 父组件的mounted钩子 是在子组件钩子之后执行的
    // 监听自己有没有被选中
    this.eventBus.$on('update:selected', (vm) => {
            	// 只有在父组件开启  onlyone 自己的时候才关闭其他的
      if (vm !== this && this.onlyone === true) {
        this.open = false
      }
    })
    // 监听通知过来的数据里面有没有自己
    this.eventBus.$on('update:checked', (arr) => {
            	if (this.onlyone === true) {
            		if (arr.length > 1) {
            			console.error('只能选中一个的时候不可以设置默认选中两个值')
        }
      } else {
        if (arr.indexOf(this.name) >= 0) {
          this.open = true
        }
      }
    })
  },
  methods: {
    toggle () {
      if (this.open === true) {
                	this.open = false
        this.eventBus.$emit('update:selected', this)
      } else {
                	this.open = true
        this.eventBus.$emit('update:selected', this)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .collapse-item{
        &:last-child{
            margin-bottom: -1px;
        }
        >.title{
            height: 48px;
            line-height: 48px;
            background-color: #fff;
            color: #303133;
            cursor: pointer;
            border-bottom: 1px solid #ebeef5;
            font-size: 13px;
            font-weight: 500;
            transition: border-bottom-color .3s;
            outline: none;
            position: relative;
            .rotate-icon{
                transform: translateY(-50%) rotate(90deg);
                transform-origin: center center ;
            }
            >svg{
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                transition: all .3s;
            }
        }
        >.content{
            border-bottom: 1px solid #ebeef5;
            padding-bottom: 25px;
            line-height: 1.769230769230769;
        }
    }
</style>

<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'collapse',
    props: {
      selected: {
        type: Array,
      },
      onlyone: {
        type: Boolean,
        default: false,
      },
    },
    provide () {
      return { eventBus: this.eventBus }
    },
    data () {
      return {
        eventBus: new Vue(),
      }
    },
    mounted () {
      console.log(this.onlyone)
      if (this.onlyone) {
        // 就让子组件也知道需要选中多个的时候就不关闭 其他的了
        this.$children.forEach((vm, index) => {
          console.log(vm)
          vm.onlyone = this.onlyone
        })
      }
      // 监听选择之后的结果
      this.eventBus.$on('update:selected', (vm) => {
        // 打开就添加
        let arr = JSON.parse(JSON.stringify(this.selected))
        if (vm.open) {
          arr.push(vm.name)
        } else { // 关闭就删除
          arr.splice(arr.indexOf(vm.name), 1)
        }
        this.$emit('update:selected', arr)
      })

      // 告诉大家那个被选中了
      this.eventBus.$emit('update:useChecked', this.selected)
    },
  }
</script>

<style lang="scss" scoped>
  .collapse {
    border-top: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
  }
</style>

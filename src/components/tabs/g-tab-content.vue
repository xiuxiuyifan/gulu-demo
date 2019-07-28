<template>
  <div class="g-tab-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    inject: ['tabEventBus'],
    name: 'g-tab-content',
    data () {
      return {
        tabPosition: this.$parent.position,
      }
    },
    watch: {
      tabPosition (newValue, oldValue) {
        console.log(newValue)
        if (this.$parent.position === 'bottom') {
          // let header = document.createElement('div');
          // header.innerHTML = "慢慢跑"
          // console.log(header);
          console.log('下边被触发了')
          let header = this.$el.previousElementSibling
          // let newEl = header.cloneNode(true)
          // console.log(this.$el.previousElementSibling)
          this.tabEventBus.$emit('contentMounted', header)
        }
      },
    },
    mounted () {
      if (this.$parent.position === 'bottom') {
        // let header = document.createElement('div');
        // header.innerHTML = "慢慢跑"
        // console.log(header);
        console.log('下边被触发了')
        let header = this.$el.previousElementSibling
        // let newEl = header.cloneNode(true)
        // console.log(this.$el.previousElementSibling)
        this.tabEventBus.$emit('contentMounted', header)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .g-tab-content {
    font-size: 16px;
    padding: 20px 0;
  }
</style>

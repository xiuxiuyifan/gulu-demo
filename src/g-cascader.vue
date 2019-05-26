<template>
  <div class="g-cascader">
    <div class="top-wrapper">
      <slot></slot>
    </div>
    <div class="down-wrapper">
      <div>
        <g-cascader-item :options="options"></g-cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
  //右边展示的就是当前点击元素的子元素而已
  import GCascaderItem from './g-cascader-item'

  export default {
    name: 'g-cascader',
    components: {
      GCascaderItem,
    },
    props: {
      options: {
        type: Array,
      },
    },
    data () {
      return {
        //当前选中的内容
        leftSelected: null,
        //当前选中的index
        selectedIndex: 0,
        rightContent: null,
      }
    },
    mounted () {
      console.log(this.options)
    },
    methods: {
      clickSelect (item) {
        if (item) {
          this.rightContent = item
          console.log(this.rightContent)
        }
    }
  }
  };
</script>

<style lang="scss" scoped>
  .g-cascader {
    .top-wrapper {
    }

    .down-wrapper {
      border: 2px solid green;
      display: inline-block;
      vertical-align: top;
      position: relative;
    }
  }
</style>

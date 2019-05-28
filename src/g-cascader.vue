<template>
  <div class="g-cascader">
    <div class="top-wrapper" @click="showCascader()">
      <slot></slot>
    </div>
    <div class="down-wrapper" v-if="isShow">
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
        //控制 cascader 是否显示出来
        isShow: false,
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
      },
      showCascader () {
        this.isShow = !this.isShow
      },
    }
  };
</script>

<style lang="scss" scoped>
  .g-cascader {
    .top-wrapper {
    }

    .down-wrapper {
      display: inline-block;
      vertical-align: top;
      white-space: nowrap;
      background: #fff;
      position: absolute;
      margin: 5px 0;
      z-index: 2;
      border: 1px solid #e4e7ed;
      border-radius: 2px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      margin-top: 12px;
    }
  }
</style>

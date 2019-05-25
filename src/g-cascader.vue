<template>
    <div class="g-cascader">
      <div class="top-wrapper">
        <slot></slot>
      </div>
      <div class="down-wrapper">
        <div class="left">
          <div class="item" v-for="(item,index) in options" :key="index" @click="clickSelect(item.children)">
            {{item.value}}
          </div>
        </div>
        <div class="right" v-show="">

        </div>
        <div class="item-parent">
          <!--          <div class="item" v-for="(item,index) in options" :key="index">{{item.value}}-->

          <!--          </div>-->

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
    props:{
      options:{
        type:Array
      }
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
      },
    }
  }
</script>

<style lang="scss" scoped>
  .g-cascader {
    .top-wrapper {

    }

    .down-wrapper {
      border: 2px solid green;
      display: inline-block;
      vertical-align: top;

      .left {
        display: inline-block;
        vertical-align: top;

        .item {
          border: 1px solid red;
          padding: 10px;
          margin: 10px;
        }
      }

      .right {
        display: inline-block;
        vertical-align: top;

        .item {
          border: 1px solid red;
          padding: 10px;
          margin: 10px;
        }
      }
    }
  }
</style>

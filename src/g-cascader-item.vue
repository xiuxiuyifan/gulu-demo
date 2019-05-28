<template>
  <div class="g-cascader-item">
    <div class="left">
      <div class="item-world" @click="clickSelected(item)" v-for="(item,index) in options" :key="index">
        {{item.value}}
        <g-icon icon="right" class="down-icon"></g-icon>
      </div>
    </div>
    <div class="right" v-if="rightSelected && noGrandChild">
      <g-cascader-item :options="rightSelected"></g-cascader-item>
    </div>
    <!--死数据想法-->
    <!--    <div class="box">-->
    <!--      <div v-for="(item,index) in options" :key="index" @click="arr = item.children">{{item.value}}</div>-->
    <!--    </div>-->
    <!--    <div class="box">-->
    <!--      <div v-for="(item,index) in arr" :key="index" @click="arr1 = item.children">{{item.value}}</div>-->
    <!--    </div>-->
    <!--    <div class="box">-->
    <!--      <div v-for="(item,index) in arr1" :key="index">{{item.value}}</div>-->
    <!--    </div>-->
    <!--    <div class="box">-->
    <!--      <div v-for="(item,index) in arr2" :key="index">{{item.value}}</div>-->
    <!--    </div>-->
  </div>
</template>

<script>
  const component = {
    name: 'g-cascader-item',
    components: {
      // 'g-cascader-item': component,
      // ''
    },
    props: {
      options: {
        type: Array,
      },
    },
    data () {
      return {
        arr: null,
        arr1: null,
        arr2: null,
        leftSelected: null,
        //是否有孙子
        noGrandChild: true,
      }
    },
    computed: {
      rightSelected: {
        get () {
          //如果左边选中了右边的值就是
          if (this.leftSelected && this.leftSelected.children) {
            console.log(this.leftSelected.children)
            return this.leftSelected.children
          } else {
            return
          }
        },
        set (value) {
          this.rightSelected = value
        }
      },
    },
    methods: {
      clickSelected (item) {
        this.leftSelected = item
        // this.rightSelected = null;
        //点击的时候进行判断  如果这个item 有孙子
      },
    },
  }
  export default component
</script>

<style lang="scss" scoped>
  .g-cascader-item {
    height: 200px;
    .left {
      display: inline-block;
      vertical-align: top;
      height: 100%;
      padding: 6px 0;

      > .item-world {
        &:hover {
          background-color: #f5f7fa;
        }

        font-size: 14px;
        padding: 8px 20px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #606266;
        line-height: 1.5;
        box-sizing: border-box;
        cursor: pointer;
        outline: none;
        padding-right: 70px;

        .down-icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 15px;
          fill: #bfcbd9;
          width: 0.8em;
        }
      }
    }
    .right {
      display: inline-block;
      border-left: 1px solid #c0c4cc;
      vertical-align: top;
    }
  }
</style>

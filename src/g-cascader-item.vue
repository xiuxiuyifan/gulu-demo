<template>
  <div class="g-cascader-item">
    <div class="left">
      <div @click="clickSelected(item)" v-for="(item,index) in options" :key="index">
        {{item.value}}
      </div>
    </div>
    <div class="right" v-if="rightSelected">
      <g-cascader-item :options="rightSelected"></g-cascader-item>
    </div>
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
      'g-cascader-item': component,
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
      }
    },
    computed: {
      rightSelected () {
        //如果左边选中了右边的值就是
        if (this.leftSelected && this.leftSelected.children) {
          console.log(this.leftSelected.children)
          return this.leftSelected.children
        } else {
          return
        }
      },
    },
    methods: {
      clickSelected (item) {
        this.leftSelected = item
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

      > div {
        padding: 10px;
      }
    }
    .right {
      display: inline-block;
      border-left: 1px solid #c0c4cc;
      vertical-align: top;
    }
  }
</style>

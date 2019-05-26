<template>
  <div class="g-cascader-item">
    <div class="left">
      <div @click="clickSelected(item)">
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
      }
    },
    computed: {
      rightSelected () {
        //如果左边选中了右边的值就是
      },
    },
    methods: {
      clickSelected (item) {
        this.leftSelected = null
      },
    },
  }
  export default component
</script>

<style lang="scss" scoped>
  .g-cascader-item {
    .box {
      display: inline-block;
      vertical-align: top;

      > div {
        padding: 10px;
        border: 1px solid blue;
      }
    }

    > div {
      &:after {
        content: "";
        display: table;
        clear: both;
      }
    }

    .left {
      border: 1px solid red;
      padding: 10px;
      display: inline-block;
      vertical-align: top;
    }

    .right {
      border: 1px solid blue;
      display: inline-block;
      vertical-align: top;
    }
  }
</style>

<template>
  <div class="g-cascader-item">
    <!--      <div class="left">-->
    <!--        <div @click="clickSelected(item.children)">-->
    <!--          {{item.value}}-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="right" v-if="selectedItem">-->
    <!--        <g-cascader-item :options="selectedItem"></g-cascader-item>-->
    <!--      </div>-->
    <div class="box">
      <div v-for="(item,index) in options" :key="index" @click="arr = item.children">{{item.value}}</div>
    </div>
    <div class="box">
      <div v-for="(item,index) in arr" :key="index" @click="arr1 = item.children">{{item.value}}</div>
    </div>
    <div class="box">
      <div v-for="(item,index) in arr1" :key="index">{{item.value}}</div>
    </div>
    <div class="box">
      <div v-for="(item,index) in arr2" :key="index">{{item.value}}</div>
    </div>
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
        selectedItem: null,
        arr: null,
        arr1: null,
        arr2: null,
      }
    },
    methods: {
      clickSelected (item) {
        this.selectedItem = null
        this.selectedItem = Object.assign([], item)
        console.log(item)
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

<template>
  <div class="g-cascader-item">
    <div class="" v-for="(item,index) in options" :key="index">
      {{item.value}}
      <g-cascader-item :options="item.children" v-if="item.children"></g-cascader-item>
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
  }
  export default component
</script>

<style lang="scss" scoped>
  .g-cascader-item {
    border: 1px solid red;
    padding: 10px;
    margin: 10px;
  }
</style>

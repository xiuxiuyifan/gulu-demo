<template>
    <div class="g-cascader">
      <div>
        <slot></slot>
      </div>
      <div class="wrapper"></div>
    </div>
</template>

<script>
  export default {
    name: 'g-cascader',
    props:{
      options:{
        type:Array
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

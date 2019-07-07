<template>
  <div class="g-carousel-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'g-carousel-item',
    mounted () {

    },
  }
</script>

<style lang="scss" scoped>
  .g-carousel-item {
    width: 100%;
    height: 100%;
    /*position: absolute;*/
    left: 0;
    top: 0;
    text-align: center;
    background: #d3dce6;
    transition: all 0.5s;
  }
</style>

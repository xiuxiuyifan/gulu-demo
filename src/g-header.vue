<template>
  <div class="g-header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-header'
}
</script>

<style lang="scss" scoped>
  .g-header {
    height: 60px;
    background-color: #b3c0d1;
    line-height: 60px;
  }
</style>

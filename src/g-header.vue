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
      height: 100px;
        background-color: #b3c0d1;
    }
</style>

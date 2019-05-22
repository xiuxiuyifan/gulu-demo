<template>
    <div class="button-docs">
      button组件
      <g-button icon="setting">设置</g-button>
    </div>
</template>

<script>
  import GButton from '../../../src/button'
  export default {
    name: 'buttonDocs',
    components:{
      'g-button': GButton
    }
  }
</script>

<style lang="scss" scoped>

</style>

<template>
  <svg @click="$emit('click')" aria-hidden="true" class="g-icon" v-if="icon">
    <use :xlink:href="`#i-${icon}`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'g-icon',
    props: {
      icon: {
        type: String,
      },
    },
    methods: {
      ccc () {
        this.$emit('click')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .g-icon {
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
  }
</style>

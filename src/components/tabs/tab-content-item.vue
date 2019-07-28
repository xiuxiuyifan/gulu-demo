<template>
  <div :class="classes" class="tab-content-item" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tab-content-item',
    inject: ['tabEventBus'],
    data () {
      return {
        active: false,
      }
    },
    props: {
      label: {
        type: [String],
      },
    },
    computed: {
      classes () {
        return { 'active': this.active }
      },
    },
    created () {
      this.tabEventBus.$on('update:label', (value) => {
        this.active = this.label === value.selected
      })
    },
  }
</script>

<style lang="scss" scoped>
  .tab-content-item {
    font-size: 14px;

    &:after {
      content: "";
      display: table;
      clear: both;
    }

    &.active {
    }
  }
</style>

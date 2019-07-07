<template>
  <transition name="carousel">
    <div class="g-carousel-item" v-if="selected === currentKey">
      <div class="g-carousel-item-wrapper">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'g-carousel-item',
    inject: ['eventBus'],
    data () {
      return {
        selected: 0,
        currentKey: 0,
      }
    },
    mounted () {
      this.currentKey = this.$vnode.key
      console.log(this.selected === this.currentKey)
      this.eventBus.$on('update:selected', (data) => {
        console.log('接受到了')
        this.selected = data
      })
    },
  }
</script>

<style lang="scss" scoped>
  .g-carousel-item {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    background: #d3dce6;
    transition: all 0.5s;

    .carousel-enter {
      opacity: 0;
    }

    .carousel-enter-active {
      transition: all 100s;
    }

    .carousel-enter-to {
      opacity: 1;
    }

    .carousel-leave {
      opacity: 1;
    }

    .carousel-leave-active {
      transition: all 100s;
    }

    .carousel-leave-to {
      opacity: 0;
    }

    &-wrapper {
      width: 100%;
      height: 100%;
    }
  }
</style>

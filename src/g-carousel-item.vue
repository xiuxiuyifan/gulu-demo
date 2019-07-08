<template>
  <transition :name="carousel" mode="in-out">
    <div :class="{'z-index': zIndex}" class="g-carousel-item" v-show="selected === currentKey">
      <slot></slot>
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
        zIndex: false,          //控制选中的z-index层级
        lastIndex: 0,           //上一次选中的
        carousel: undefined,    //动画的方向
      }
    },
    mounted () {
      this.currentKey = this.$vnode.key
      console.log(this.selected === this.currentKey)
      this.eventBus.$on('update:selected', (data) => {
        console.log(data)
        const { selected, direction } = data
        console.log('当前选中的' + selected)
        //根据传递过来的data 可以判断是向左还是向右
        if (direction === 'next') {
          this.carousel = 'carousel-next'
        } else {
          this.carousel = 'carousel-previous'
        }
        this.zIndex = selected === this.currentKey
        this.selected = selected
      })
    },
  }
</script>

<style lang="scss" scoped>
  .carousel-next-enter {
    transform: translateX(100%);
  }

  .carousel-next-enter-active {
    transition: all 0.4s ease-in-out;
  }

  .carousel-next-enter-to {
    transform: translateX(0%);
  }

  .carousel-next-leave {
    transform: translateX(0%);
  }

  .carousel-next-leave-active {
    transition: all 0.4s ease-in-out;
  }

  .carousel-next-leave-to {
    transform: translateX(-100%);
  }

  /*
    previous
  */
  .carousel-previous-enter {
    transform: translateX(-100%);
  }

  .carousel-previous-enter-active {
    transition: all .4s ease-in-out;
  }

  .carousel-previous-enter-to {
    transform: translateX(0%);
  }

  .carousel-previous-leave {
    transform: translateX(0%);
  }

  .carousel-previous-leave-active {
    transition: all .4s ease-in-out;
  }

  .carousel-previous-leave-to {
    transform: translateX(100%);
  }

  .g-carousel-item {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;

    &-wrapper {
      width: 100%;
      height: 100%;
    }
  }

  .z-index {
    z-index: 1;
  }
</style>

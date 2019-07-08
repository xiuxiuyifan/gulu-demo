<template>
  <transition name="carousel" mode="out-in">
    <div class="g-carousel-item" :class="{'z-index': zIndex}" v-show="selected === currentKey">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "g-carousel-item",
  inject: ["eventBus"],
  data() {
    return {
      selected: 0,
      currentKey: 0,
      zIndex: false //控制选中的z-index层级
    };
  },
  mounted() {
    this.currentKey = this.$vnode.key;
    console.log(this.selected === this.currentKey);
    this.eventBus.$on("update:selected", data => {
      console.log("当前选中的" + data);
      //根据传递过来的data 可以判断是向左还是向右
      // console.log("原来是" + this.currentKey);
      //如果是当前选中的再看左右，忽略其他改变状态的通知
      // if (data === this.currentKey) {
      //   if (data > this.currentKey) {
      //     console.log("向右");
      //   } else {
      //     console.log("向左");
      //   }
      // }
      if (data === this.currentKey) {
        this.zIndex = true;
      } else {
        this.zIndex = false;
      }
      this.selected = data;
    });
  }
};
</script>

<style lang="scss" scoped>
.carousel-enter {
  transform: translateX(100%);
}

.carousel-enter-active {
  transition: all 1s ease;
}

.carousel-enter-to {
  transform: translateX(0%);
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

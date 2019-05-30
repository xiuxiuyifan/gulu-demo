<template>
  <div class="g-carousel" :style="`height:${height}px`">
    <slot></slot>
    <div class="g-carousel-flag">
      <div class="item" v-for="item in  childrens">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'g-carousel',
    props: {
      height: {
        type: Number,
      },
    },
    data () {
      return {
        childrens: 0,
      }
    },
    mounted () {
      this.childrens = this.$children.length
    },
  }
</script>

<style lang="scss" scoped>
  .g-carousel {
    position: relative;

    .g-carousel-flag {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;

      > .item {
        display: inline-block;
        padding: 12px 4px;

        > div {
          background: rebeccapurple;
          height: 100%;
          display: block;
          opacity: .48;
          width: 30px;
          height: 2px;
          border: none;
          outline: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
          transition: .3s;
        }
      }
    }
  }
</style>

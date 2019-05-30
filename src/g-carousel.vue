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
      let arr = []
      let { width } = this.$el.getBoundingClientRect()
      for (let i = 0; i < this.childrens; i++) {
        console.log(i)
        arr.push(i * width)
        this.$children[i].$el.style.transform = `translateX(${i * width}px)`
      }
      var ccc = arr.slice(0)
      let index = 0
      setInterval(() => {
        let xxx = ccc.slice(0, ccc.length - 1)
        xxx.unshift(ccc[ccc.length - 1])
        ccc = xxx.slice(0)  //复制一份
        //每次把数组最前面的放在数组最后面就可以了
        console.log(xxx)
        for (let i = this.childrens - 1; i >= 0; i--) {
          if (xxx[i] === 400) {
            this.$children[i].$el.style.transition = `all 0.5s`
          } else {
            var bbb = setTimeout(() => {
              this.$children[i].$el.style.transition = `unset`
            }, 500)
          }
          this.$children[i].$el.style.transform = `translateX(${xxx[i]}px)`
        }
      }, 3000)
    },
  }
</script>

<style lang="scss" scoped>
  .g-carousel {
    position: relative;
    overflow: hidden;
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

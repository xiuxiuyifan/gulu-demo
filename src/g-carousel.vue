<template>
  <div @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" class="g-carousel">
    <slot></slot>
    <!--按钮-->
    <div @click="change('previous')" class="switch-button previous">
      <g-icon icon="left"></g-icon>
    </div>
    <div @click="change('next')" class="switch-button next">
      <g-icon icon="right"></g-icon>
    </div>
    <!--指标-->
    <div class="g-carousel-flag">
      <div :key="index" @click="clickTrigger(index)" class="item" v-for="(item,index) in  childrens">
        <div :class="{'current-bg':index === selected}"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import GIcon from './icon'
  import Vue from 'vue'

  export default {
    name: 'g-carousel',
    components: {
      GIcon,
    },
    props: {
      selected: {
        type: Number,
        default: 0,
      },
      autoPlay: {
        type: Boolean,
        default: true,
      },
    },
    data () {
      return {
        childrens: 0,
        eventBus: new Vue(),
        timerId: undefined,
      }
    },
    provide () {
      return {
        eventBus: this.eventBus,
      }
    },
    mounted () {
      //拿到当前传进来的 items 的个数生成下面的
      this.childrens = this.$slots.default.length
      //通知子组件当前要选中哪一个
      this.eventBus.$emit('update:selected', { selected: this.selected, direction: 'next' })
      if (this.autoPlay) {
        this.playAuto()
      }
      console.log(this.selected)
    },
    'methods': {
      'change' (type) {
        //prevoius 减
        //next 加
        const action = {
          previous: this.selected - 1,
          next: this.selected + 1,
        }
        if (action.previous === -1) {
          action.previous = this.childrens - 1
        }
        if (action.next === this.childrens) {
          action.next = 0
        }
        this.$emit('update:selected', action[type])
        this.eventBus.$emit('update:selected', { selected: action.next, direction: type })
      },
      playAuto () {
        let fn = () => {
          const action = {
            next: this.selected + 1,
          }
          if (action.next === this.childrens) {
            action.next = 0
          }
          this.$emit('update:selected', action.next)
          this.eventBus.$emit('update:selected', { selected: action.next, direction: 'next' })
          if (this.autoPlay) {
            this.timerId = setTimeout(fn, 3000)
          }
        }
        this.timerId = setTimeout(fn, 3000)
      },
      clickTrigger (index) {
        if (index > this.selected) {
          this.eventBus.$emit('update:selected', { selected: index, direction: 'next' })
        } else {
          this.eventBus.$emit('update:selected', { selected: index, direction: 'previous' })
        }
        this.$emit('update:selected', index)
      },
      pause () {
        window.clearTimeout(this.timerId)
        this.timerId = undefined
      },
      onMouseEnter () {
        this.pause()
      },
      onMouseLeave () {
        this.playAuto()
      },
    },
  }
</script>

<style lang="scss" scoped>
  .g-carousel {
    position: relative;
    overflow: hidden;
    width: 590px;
    height: 470px;
    margin: 0 auto;

    &:hover {
      .previous {
        opacity: 1;
        transform: translateX(15px) translateY(-50%);
      }

      .next {
        opacity: 1;
        transform: translateX(-15px) translateY(-50%);
      }
    }

    > div.g-carousel-item:nth-child(even) {
      background: #d3dce6;
    }

    > div.g-carousel-item:nth-child(odd) {
      background: #99a9bf;
    }

    .switch-button {
      display: flex;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(31, 45, 61, 0.11);
      border-radius: 50%;
      width: 36px;
      height: 36px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 10;
      transition: all .5s;
      opacity: 0;

      &:hover {
        background: rgba(31, 45, 61, .23);
      }
    }

    .previous {
      left: 10px;
    }

    .next {
      right: 10px;
    }

    .g-carousel-flag {
      position: absolute;
      z-index: 10;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      text-align: center;
      cursor: pointer;

      > .item {
        display: inline-block;
        padding: 12px 4px;

        .current-bg {
          background: #00adb5;
        }

        > div {
          height: 100%;
          background: #eeeeee;
          display: block;
          opacity: 0.48;
          width: 30px;
          height: 2px;
          border: none;
          outline: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
          transition: 0.3s;
        }
      }
    }
  }
</style>

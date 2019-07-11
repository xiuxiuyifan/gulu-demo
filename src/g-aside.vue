<template>
    <transition name="movelist">
        <div class="aside-wapper">
            <div class="aside-list-wapper">
                <g-icon @click="hide=!hide" class="icon-list" icon="list" style="font-size: 35px"></g-icon>
            </div>
            <div class="g-aside" v-show="hide">
                <slot></slot>
            </div>
        </div>

    </transition>
</template>

<script>
  import GIcon from './components/icon/icon'
export default {
  name: 'g-aside',
  components: {
    GIcon,
  },
  data () {
    return {
      hide: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .aside-wapper {
    position: relative;
    background-color: #d3dce6;

    .aside-list-wapper {
      text-align: right;
    }

    .g-aside {
      width: 200px;
    }

    .icon-list {
      /*position: absolute;*/
      /*right: 0;*/
      cursor: pointer;
    }

    .movelist-enter-active, .movelist-leave-active {
      transition: all .5s;
    }

    .movelist-enter, .movelist-leave-to /* .fade-leave-active below version 2.1.8 */
    {
      margin-left: -200px;
    }
  }
</style>

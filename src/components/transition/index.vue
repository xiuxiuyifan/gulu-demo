<template>
  <div class="transition">
    <h2>进入/离开&列表过度</h2>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <h2>css过度</h2>
    <index1></index1>
  </div>
</template>

<script>
  import Index1 from './index1'

  export default {
    name: 'index',
    components: {
      Index1,
    },
    data () {
      return {
        show: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
  h2 {
    font-size: 28px;
  }

  .transition {
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
      transition: all 1s;
    }

    .fade-enter-to, .fade-leave {
      opacity: 1;
    }
  }
</style>

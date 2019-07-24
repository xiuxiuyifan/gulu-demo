<template>
  <div class="g-checkbox-group">
    <g-checkbox :key="index+new Date().getTime()"
                @change="$emit('change')" v-for="(item , index) in plainOption">{{item}}
    </g-checkbox>
  </div>
</template>

<script>
  import GCheckbox from './g-checkbox'
  import eventBus from '../../asset/js/eventbus'

  export default {
    name: 'g-checkbox-group',
    components: {
      GCheckbox,
    },
    props: {
      //原始的全部数据
      plainOption: {
        type: Array,
        default: () => [],
      },
      //默认选中
      defaultSelected: {
        type: Array,
        default: () => [],
      },
    },
    data () {
      return {
        selected: [],
      }
    },
    mounted () {
      //对两组数据进行对比，看默认选中的在不在所有的数据里面
      for (let i = 0; i < this.plainOption.length; i++) {
        console.log(this.plainOption[i])

        let isChecked = this.defaultSelected.indexOf(this.plainOption[i]) >= 0
        if (isChecked) {
          console.log(this.$children[i].checked = true)
          console.log(i)
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>

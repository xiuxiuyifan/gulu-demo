<template>
  <div class="g-checkbox-group">
    <g-checkbox :checked.sync="selectedArr[index]" :contantCheckboxGroup="contantCheckboxGroup"
                :key="index+new Date().getTime()"
                v-for="(item , index) in plainOption">{{item}}
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
      contantCheckboxGroup: {
        type: String,
      },
    },
    data () {
      return {
        selected: [],
        plainOptionLength: this.plainOption.length,
        changeLength: 0,
        selectedArr: [false, false, false, false],
      }
    },
    mounted () {
      if (this.contantCheckboxGroup) {
        eventBus.$on(this.contantCheckboxGroup, (value) => {
          console.log(value)
          if (value === 'all') {
            this.selected = this.plainOption
          } else if (value === 'noall') {
            this.selected = []
          } else {
            //选中的肯定是在原始数组里面的
            if (value) {
              this.$set(this.selected, this.plainOption.indexOf(value), value)
              this.changeLength++
              if (this.changeLength === this.plainOptionLength) {
                console.log(this.selected.length)
                console.log(this.plainOptionLength)
                eventBus.$emit('xxx', '全部选中了')
              }
            } else {
              this.selected.splice(this.plainOption.indexOf(value), 1)
            }

          }
          console.log(this.selectedArr)
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>

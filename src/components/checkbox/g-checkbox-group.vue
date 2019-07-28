<template>
  <div class="g-checkbox-group">
    <g-checkbox :key="index+new Date().getTime()"
                @change="onChange($event)" v-for="(item , index) in plainOption">{{item}}
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
    watch: {
      defaultSelected: {
        handler: function (newValue, oldVal) {
          console.log('有变化  ')
          console.log(newValue)
          if (newValue.length > 0) {
            this.$children.forEach((item, index) => {
              item.checked = true
            })
          } else {
            this.$children.forEach((item, index) => {
              item.checked = false
            })
          }

        },
        deep: true,
      },
    },
    mounted () {
      //对两组数据进行对比，看默认选中的在不在所有的数据里面
      for (let i = 0; i < this.plainOption.length; i++) {
        let isChecked = this.defaultSelected.indexOf(this.plainOption[i]) >= 0
        if (isChecked) {
          this.$children[i].checked = true
        }
      }
    },
    methods: {
      onChange (e) {
        //每一个变的时候遍历一下自己的儿子如果
        //都选中
        //选中一部分
        //都没有选中
        let checkedList = []
        this.$children.forEach((item, index) => {
          if (item.checked) {
            checkedList.push(item.$el.innerText)
          }
        })
        this.$emit('change', checkedList)
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="g-cascader">
    <div class="top-wrapper" @click="showCascader()">
      <slot></slot>
    </div>
    <div class="down-wrapper" v-if="isShow">
      <div>
        <g-cascader-item
          :options="options"
          :selected="selected"
          :load-data="loadData"
          :item="options"
          :after-get-data="afterGetData"
          @update:selected="xxxx">
        </g-cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
  //右边展示的就是当前点击元素的子元素而已
  import GCascaderItem from './g-cascader-item'
  export default {
    name: 'g-cascader',
    components: {
      GCascaderItem,
    },
    props: {
      options: {
        type: Array,
      },
      //采用单向数据流的方式让最外层组件管理选中的数据
      selected: {
        type: Array,
        default: () => ([]),
      },
      loadData: {
        type: Boolean,
        default: false,
      },
      afterGetData: {
        type: Function,
      },
    },
    data () {
      return {
        //控制 cascader 是否显示出来
        isShow: false,
        //当前选中的内容
        leftSelected: null,
        //当前选中的index
        selectedIndex: 0,
        rightContent: null,
      }
    },
    methods: {
      clickSelect (item) {
        if (item) {
          this.rightContent = item
          console.log(this.rightContent)
        }
      },
      showCascader () {
        this.isShow = !this.isShow
      },
      xxxx (newSelected) {
        this.$emit('update:selected', newSelected)
        //让父组件来更改数据
        //选中数组的最后一个 就是当前选中的那个数据
        let node = newSelected[newSelected.length - 1]
        //要找到点的这个node 在总节点里面的层级找到了就可以造出新的options 然后Emit出去
        let callBack = (result) => {
          console.log('选择结果')
          console.log(result)
          let options = JSON.parse(JSON.stringify(this.options))
          //简单的先找一下
          let index = 0
          for (let i = 0; i < this.options.length; i++) {
            if (options[i].id === node.id) {
              index = options[i].id === node.id ? i : undefined
              break
            }
          }
          options[index].children = JSON.parse(JSON.stringify(result))
          this.$emit('update:options', options)
          setTimeout(() => {
            console.log('查找结果')
            console.log(JSON.stringify(this.options))
          }, 0)
        }
        if (this.loadData) {
          this.afterGetData(node, callBack)
        }
      },
    }
  };
</script>

<style lang="scss" scoped>
  .g-cascader {
    .top-wrapper {
    }
    .down-wrapper {
      display: inline-block;
      vertical-align: top;
      white-space: nowrap;
      background: #fff;
      position: absolute;
      margin: 5px 0;
      z-index: 2;
      border: 1px solid #e4e7ed;
      border-radius: 2px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      margin-top: 12px;
    }
  }
</style>

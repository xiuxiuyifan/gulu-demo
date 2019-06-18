<template>
  <div class="g-cascader">
    <div @click="showCascader()" class="top-wrapper">
      <slot></slot>
    </div>
    <div class="down-wrapper" v-if="isShow">
      <div>
        <g-cascader-item
          :after-get-data="afterGetData"
          :item="options"
          :load-data="loadData"
          :options="options"
          :selected="selected"
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
          let options = JSON.parse(JSON.stringify(this.options))
          let currentselect = null
          //既然是找东西，找到了就return 找不到就不要管，继续找
          //深度优先 如果发现有儿子就马上去搜索儿子里面有没有符合的情况
          //结束的条件是当前这一项没有儿子的时候就停止了

          //有儿子就搜素儿子，没有儿子也得把自己遍历完
          const findOptions = (id, data) => {
            for (let i = 0; i < data.length; i++) {
              if (id === data[i].id) {
                currentselect = data[i]
                return
              }
              if (data[i].children && data[i].children.length > 0) {
                findOptions(id, data[i].children)
              }
            }
          }
          findOptions(node.id, options)
          currentselect.children = result
          this.$emit('update:options', options)
        }
        if (this.loadData) {
          this.afterGetData(node, callBack)
        }
      },
    },
  }
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

<template>
  <div class="g-cascader-item">
    <div class="left">
      <div :key="index" @click="clickSelected(item,index)" class="item-world" v-for="(item,index) in options">
        <span class="world-style">{{item.name}}</span>
        <!--分两种情况loadData和静态加载-->
        <template v-if="loadItem.name===item.name">
          <g-icon class="down-icon lodding-icon" icon="lodding"
                  v-if="loadData ? item.isLeaves : item.children"></g-icon>
        </template>
        <template v-else>
          <g-icon class="down-icon" icon="right"
                  v-if="loadData ? item.isLeaves : (item.children && item.children.length>0)"></g-icon>
        </template>
      </div>
    </div>
    <div class="right" v-if="rightSelected">
      <g-cascader-item
        :item="rightSelected"
        :level="level + 1"
        :load-data="loadData"
        :load-item="loadItem"
        :options="rightSelected"
        :selected="selected"
        @update:selected="$emit('update:selected',$event)">
      </g-cascader-item>
    </div>
  </div>
</template>

<script>
  import http from './http'
  import db from './db'

  export default {
    name: 'g-cascader-item',
    props: {
      item: {
        type: Array,
      },
      options: {
        type: Array,
      },
      selected: {
        type: Array,
        default: () => ([]),
      },
      //记录当前层级
      level: {
        type: Number,
        default: 0,
      },
      //动态获取数据并且插入到当前选中的children 里面
      loadData: {
        type: Boolean,
        default: false,
      },
      loadItem: {
        type: Object,
        default: () => ({}),
      },
    },
    data () {
      return {}
    },
    mounted () {

    },
    computed: {
      rightSelected () {
        //如果左边选中了右边的值就是
        if (this.selected && this.selected[this.level]) {
          //再依赖当前的item 进行计算
          let result = this.item.filter((item) => (item.id === this.selected[this.level].id))[0]
          return result.children && result.children.length > 0 ? result.children : undefined
        } else {
          return
        }
      },
    },
    beforeUpdate () {
      // console.log(this.item)
    },
    methods: {
      clickSelected (item, index) {
        //深拷贝一下
        let obj = JSON.parse(JSON.stringify(this.selected))
        let next
        if (item.isLeaves) {
          next = item.isLeaves
        } else {
          next = (item.children && item.children.length > 0) ? true : false
        }
        obj[this.level] = Object.assign({}, { id: item.id, name: item.name, next })
        //把当前 选中的下一层元素全部删除掉
        obj.splice(this.level + 1)
        this.$emit('update:selected', obj)
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "./asset/scss/index";

  .g-cascader-item {
    height: 200px;

    .left {
      display: inline-block;
      vertical-align: top;
      height: 100%;
      padding: 6px 0;
      overflow: auto;

      > .item-world {
        &:hover {
          background-color: #f5f7fa;
        }

        font-size: 14px;
        padding: 8px 20px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #606266;
        line-height: 1.5;
        box-sizing: border-box;
        cursor: pointer;
        outline: none;
        display: flex;
        align-items: center;

        .world-style {
          margin-right: 30px;
        }

        .down-icon {
          fill: #bfcbd9;
          width: 0.8em;
          margin-left: auto;
        }

        .lodding-icon {
          width: 1em;
          animation: spin 1s linear infinite;
        }
      }
    }

    .right {
      display: inline-block;
      border-left: 1px solid #c0c4cc;
      vertical-align: top;
    }
  }
</style>

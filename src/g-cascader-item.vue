<template>
  <div class="g-cascader-item">
    <div class="left">
      <div class="item-world" @click="clickSelected(item)" v-for="(item,index) in options" :key="index">
        {{item.name}}
        <g-icon icon="right" class="down-icon"></g-icon>
      </div>
    </div>
    <div class="right" v-if="rightSelected">
      <g-cascader-item
        :options="rightSelected"
        :level="level + 1" :selected="selected"
        v-on:update:selected="$emit('update:selected',$event)">
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
    },
    data () {
      return {
        arr: null,
        arr1: null,
        arr2: null,
        leftSelected: null,
      }
    },
    mounted () {
      const arr = db.filter((value, index) => {
        return value.parent_id == 0
      })
      console.log(JSON.stringify(arr))
    },
    computed: {
      rightSelected: {
        get () {
          //如果左边选中了右边的值就是
          if (this.selected[this.level] && this.selected[this.level].children &&
            this.selected[this.level].children.length > 0) {
            return this.selected[this.level].children
          } else {
            return
          }
        },
        set (value) {
          this.leftSelected = value
        }
      },
    },
    methods: {
      clickSelected (item) {
        console.log(item)
        //深拷贝一下
        let obj = JSON.parse(JSON.stringify(this.selected))
        obj[this.level] = item
        //把当前 选中的下一层元素全部删除掉
        obj.splice(this.level + 1)
        //让父组件来更改数据
        const arr = db.filter((value, index) => {
          return item.id == value.parent_id
        })
        console.log(this.level)
        obj[this.level].children = arr
        this.$emit('update:selected', obj)
        console.log(arr)
      },
    },
  }
</script>

<style lang="scss" scoped>
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
        padding-right: 70px;

        .down-icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 15px;
          fill: #bfcbd9;
          width: 0.8em;
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

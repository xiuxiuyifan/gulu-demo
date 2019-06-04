<template>
  <div class="g-cascader-item">
    {{level}}
    <div class="left">
      <div class="item-world" @click="clickSelected(item)" v-for="(item,index) in options" :key="index">
        {{item.value}}
        <g-icon icon="right" class="down-icon"></g-icon>
      </div>
    </div>
    <div class="right" v-if="rightSelected">
      <g-cascader-item :options="rightSelected" :level="level + 1" :selected="selected"
                       v-on:update:selected="$emit('update:selected',$event)"></g-cascader-item>
    </div>
  </div>
</template>

<script>
  const component = {
    name: 'g-cascader-item',
    components: {
      // 'g-cascader-item': component,
      // ''
    },
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
    },
    data () {
      return {
        arr: null,
        arr1: null,
        arr2: null,
        leftSelected: null,
      }
    },
    computed: {
      rightSelected: {
        get () {
          //如果左边选中了右边的值就是
          if (this.selected[this.level] && this.selected[this.level].children) {
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
        //深拷贝一下
        let obj = JSON.parse(JSON.stringify(this.selected))
        obj[this.level] = item
        //把当前 选中的下一层元素全部删除掉
        console.log(this.level)
        console.log(obj)
        obj.splice(this.level + 1)
        //让父组件来更改数据
        this.$emit('update:selected', obj)
      },
    },
  }
  export default component
</script>

<style lang="scss" scoped>
  .g-cascader-item {
    height: 200px;
    .left {
      display: inline-block;
      vertical-align: top;
      height: 100%;
      padding: 6px 0;

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

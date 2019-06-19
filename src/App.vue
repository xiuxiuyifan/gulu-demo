<template>
  <div class="demo" id="app">
    <!--    <g-button icon="setting"></g-button>-->
    <!--    <g-collapse :selected.sync="selectedCollapse">-->
    <!--      <g-collapse-item title="标题1" name="1">-->
    <!--        内容1-->
    <!--        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>-->
    <!--        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>-->
    <!--        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>-->
    <!--      </g-collapse-item>-->
    <!--      <g-collapse-item title="标题2" name="2">-->
    <!--        内容2-->
    <!--        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>-->
    <!--        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>-->
    <!--        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>-->
    <!--      </g-collapse-item>-->
    <!--      <g-collapse-item title="标题3" name="3">-->
    <!--        内容3-->
    <!--        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>-->
    <!--        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>-->
    <!--        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>-->
    <!--      </g-collapse-item>-->
    <!--    </g-collapse>-->
    <!--    result:  {{selectedCollapse}}-->
    {{options}}
    <g-cascader
      :after-get-data="getNextLevelData"
      :load-data="true"
      :options.sync="options"
      :selected.sync="selectData">
    </g-cascader>

    <!--    <div>下面的东西</div>-->
    <!--    <div style="width: 400px;">-->
    <!--      <g-carousel :height="200">-->
    <!--        <g-carousel-item v-for="item in 4">{{item}}</g-carousel-item>-->
    <!--      </g-carousel>-->
    <!--    </div>-->
  </div>
</template>

<script>
  //回调的形式
  // const nextLevelData =  (node,callBack)=>{
  //   setTimeout(()=>{
  //     let result = db.filter((value, index)=>{
  //       return node.id === value.parent_id
  //     })
  //     callBack(result)
  //   },3000)
  // }

  const nextLevelData = (node) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let isLeaves = false
        let result = []
        //再去数据库查询一下看当前的这个id 有没有子节点
        for (let i = 0; i < db.length; i++) {
          //找到当前的
          if (node.id === db[i].parent_id) {
            //再去数据库查询一下看当前的这个id 有没有子节点
            for (let j = 0; j < db.length; j++) {
              if (db[i].id === db[j].parent_id) {
                isLeaves = true
                break
              }
            }
            result.push({ id: db[i].id, name: db[i].name, isLeaves })
          }
        }
        resolve(result)
      }, 3000)
    })
  }
  import db from './db'
  import GCarouselItem from './g-carousel-item'

  export default {
    name: 'demo',
    components: { GCarouselItem },
    data () {
      return {
        selectedCollapse: ['1'],
        selectData: [],
        options: this.getOptions(),
      }
    },
    methods: {
      getOptions () {
        let arr = []
        let isLeaves = false
        for (let i = 0; i < db.length; i++) {
          //找到当前的
          if (0 === db[i].parent_id) {
            //再去数据库查询一下看当前的这个id 有没有子节点
            for (let j = 0; j < db.length; j++) {
              if (db[i].id === db[j].parent_id) {
                isLeaves = true
                break
              }
            }
            arr.push({ id: db[i].id, name: db[i].name, isLeaves })
          }
        }
        console.log(arr)
        return arr
      },
      //告诉用户当前
      getNextLevelData (node, callBack) {
        //
        nextLevelData(node).then((result) => {
          //框架主动帮用户把当前节点的子节点插入在这一级的children下面
          callBack(result)
        })
          .catch((error) => {
            console.log(error)
          })
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>

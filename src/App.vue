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
    {{selectData && selectData[0] && selectData[0].name || '空'}}
    {{selectData && selectData[1] && selectData[1].name || '空'}}
    {{selectData && selectData[2] && selectData[2].name || '空'}}
    {{options}}
    <g-cascader
      :options="options"
      @update:options="xxxxx"
      :load-data="true"
      :after-get-data="getNextLevelData"
      :selected.sync="selectData">
      <g-input placeholder="请选择住址"></g-input>
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
      // setTimeout(() => {
        let result = db.filter((value, index) => {
          return node.id === value.parent_id
        })
        resolve(result)
      // }, 300)
    })
  }
  import db from './db'
  import GCarouselItem from './g-carousel-item'
export default {
  name: 'demo',
  components: { GCarouselItem },
  data() {
    return {
      selectedCollapse: ['1'],
      selectData: [],
      options: [
        { 'id': 1, 'name': '北京' },
        { 'id': 2, 'name': '天津' },
        { 'id': 3, 'name': '上海' },
        { 'id': 4, 'name': '重庆' },
        { 'id': 5, 'name': '河北' },
        { 'id': 6, 'name': '山西' },
        { 'id': 7, 'name': '内蒙古' },
        { 'id': 8, 'name': '辽宁' },
        { 'id': 9, 'name': '吉林' },
        { 'id': 10, 'name': '黑龙江' },
        { 'id': 11, 'name': '江苏' },
        { 'id': 12, 'name': '浙江' },
        { 'id': 13, 'name': '安徽' },
        { 'id': 14, 'name': '福建' },
        { 'id': 15, 'name': '江西' },
        { 'id': 16, 'name': '山东' },
        { 'id': 17, 'name': '河南' },
        { 'id': 18, 'name': '湖北' },
        { 'id': 19, 'name': '湖南' },
        { 'id': 20, 'name': '广东' },
        { 'id': 21, 'name': '广西' },
        { 'id': 22, 'name': '海南' },
        { 'id': 23, 'name': '四川' },
        { 'id': 24, 'name': '贵州' },
        { 'id': 25, 'name': '云南' },
        { 'id': 26, 'name': '西藏' },
        { 'id': 27, 'name': '陕西' },
        { 'id': 28, 'name': '甘肃' },
        { 'id': 29, 'name': '青海' },
        { 'id': 30, 'name': '宁夏' },
        { 'id': 31, 'name': '新疆' },
        { 'id': 32, 'name': '台湾' },
        { 'id': 33, 'name': '香港' },
        { 'id': 34, 'name': '澳门' },
        { 'id': 35, 'name': '海外' }],
    }
  },
  methods: {
    xxxxx (value) {
      this.options = value
      console.log('收到更新')
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
  }
}
</script>

<style lang="scss" scoped>

</style>

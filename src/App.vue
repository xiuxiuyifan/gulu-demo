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
    <!--    <g-cascader-->
    <!--      :after-get-data="getNextLevelData"-->
    <!--      :load-data="true"-->
    <!--      :options.sync="options"-->
    <!--      :selected.sync="selectData">-->
    <!--    </g-cascader>-->


    <!--    <div>下面的东西</div>-->
    <!--    <div>-->
    <!--      <g-carousel :selected.sync="selected">-->
    <!--        <g-carousel-item :key="index" v-for="(item,index) in imgArr">-->
    <!--          <img :src="item" alt class="carousel-img"/>-->
    <!--          &lt;!&ndash;          {{index}}&ndash;&gt;-->
    <!--        </g-carousel-item>-->
    <!--      </g-carousel>-->
    <!--      <div>{{selected}}</div>-->
    <!--    </div>-->
    <!--    <GTransition></GTransition>-->
    <g-checkbox :checked.sync="checked"></g-checkbox>
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

  import GCheckbox from './components/checkbox/g-checkbox'

  const nextLevelData = node => {
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
      }, 30)
    })
  }
  import db from './db'
  import GCarouselItem from './components/carousel/g-carousel-item'
  import GPropover from './components/popover/g-popover'
  import GTransition from './components/transition'

  export default {
    name: 'demo',
    components: { GCheckbox, GCarouselItem, GPropover, GTransition },
    data () {
      return {
        imgArr: [
          require('../src/asset/img/1.webp'),
          require('../src/asset/img/2.jpg'),
          require('../src/asset/img/3.webp'),
          require('../src/asset/img/4.webp'),
        ],
        selectedCollapse: ['1'],
        selectData: [],
        selected: 0,
        checked: false,
        options: this.getOptions(),
        // options: [
        //   { 'id': 1, 'name': '北京', 'isLeaves': true },
        //   { 'id': 2, 'name': '天津', 'isLeaves': true },
        //   { 'id': 3, 'name': '上海', 'isLeaves': true },
        //   { 'id': 4, 'name': '重庆', 'isLeaves': true },
        //   { 'id': 5, 'name': '河北', 'isLeaves': true },
        //   { 'id': 6, 'name': '山西', 'isLeaves': true },
        //   { 'id': 7, 'name': '内蒙古', 'isLeaves': true },
        //   { 'id': 8, 'name': '辽宁', 'isLeaves': true },
        //   { 'id': 9, 'name': '吉林', 'isLeaves': true },
        //   { 'id': 10, 'name': '黑龙江', 'isLeaves': true },
        //   { 'id': 11, 'name': '江苏', 'isLeaves': true },
        //   { 'id': 12, 'name': '浙江', 'isLeaves': true },
        //   { 'id': 13, 'name': '安徽', 'isLeaves': true },
        //   { 'id': 14, 'name': '福建', 'isLeaves': true },
        //   { 'id': 15, 'name': '江西', 'isLeaves': true },
        //   { 'id': 16, 'name': '山东', 'isLeaves': true },
        //   { 'id': 17, 'name': '河南', 'isLeaves': true },
        //   { 'id': 18, 'name': '湖北', 'isLeaves': true },
        //   { 'id': 19, 'name': '湖南', 'isLeaves': true },
        //   { 'id': 20, 'name': '广东', 'isLeaves': true },
        //   { 'id': 21, 'name': '广西', 'isLeaves': true },
        //   { 'id': 22, 'name': '海南', 'isLeaves': true },
        //   { 'id': 23, 'name': '四川', 'isLeaves': true },
        //   { 'id': 24, 'name': '贵州', 'isLeaves': true },
        //   { 'id': 25, 'name': '云南', 'isLeaves': true },
        //   { 'id': 26, 'name': '西藏', 'isLeaves': true },
        //   {
        //     'id': 27,
        //     'name': '陕西',
        //     'isLeaves': true,
        //     'children': [
        //       {
        //         'id': 428,
        //         'name': '西安',
        //         'isLeaves': true,
        //         'children': [
        //           { 'id': 2919, 'name': '新城', 'isLeaves': false, 'children': [] },
        //           { 'id': 2920, 'name': '碑林', 'isLeaves': false, 'children': [] },
        //           { 'id': 2921, 'name': '莲湖', 'isLeaves': false },
        //           { 'id': 2922, 'name': '灞桥', 'isLeaves': false },
        //           { 'id': 2923, 'name': '未央', 'isLeaves': false },
        //           { 'id': 2924, 'name': '雁塔', 'isLeaves': false },
        //           { 'id': 2925, 'name': '阎良', 'isLeaves': false },
        //           { 'id': 2926, 'name': '临潼', 'isLeaves': false },
        //           { 'id': 2927, 'name': '长安', 'isLeaves': false },
        //           { 'id': 2928, 'name': '蓝田', 'isLeaves': false },
        //           { 'id': 2929, 'name': '周至', 'isLeaves': false },
        //           { 'id': 2930, 'name': '鄠邑', 'isLeaves': false },
        //           { 'id': 2931, 'name': '高陵', 'isLeaves': false }],
        //       },
        //       { 'id': 429, 'name': '铜川', 'isLeaves': true },
        //       { 'id': 430, 'name': '宝鸡', 'isLeaves': true },
        //       { 'id': 431, 'name': '咸阳', 'isLeaves': true },
        //       { 'id': 432, 'name': '渭南', 'isLeaves': true },
        //       { 'id': 433, 'name': '延安', 'isLeaves': true },
        //       { 'id': 434, 'name': '汉中', 'isLeaves': true },
        //       { 'id': 435, 'name': '榆林', 'isLeaves': true },
        //       { 'id': 436, 'name': '安康', 'isLeaves': true },
        //       { 'id': 437, 'name': '商洛', 'isLeaves': true }],
        //   },
        //   { 'id': 28, 'name': '甘肃', 'isLeaves': true },
        //   { 'id': 29, 'name': '青海', 'isLeaves': true },
        //   { 'id': 30, 'name': '宁夏', 'isLeaves': true },
        //   { 'id': 31, 'name': '新疆', 'isLeaves': true },
        //   { 'id': 32, 'name': '台湾', 'isLeaves': true },
        //   { 'id': 33, 'name': '香港', 'isLeaves': true },
        //   { 'id': 34, 'name': '澳门', 'isLeaves': true },
        //   { 'id': 35, 'name': '海外', 'isLeaves': true }],
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
        return arr
      },
      //告诉用户当前
      getNextLevelData (node, callBack) {
        //
        nextLevelData(node)
          .then(result => {
            //框架主动帮用户把当前节点的子节点插入在这一级的children下面
            callBack(result)
          })
          .catch(error => {
            console.log(error)
          })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .carousel-img {
    width: 100%;
    height: 100%;
  }
</style>

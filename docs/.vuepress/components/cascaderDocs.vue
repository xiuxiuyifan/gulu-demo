<template>
  <div class="cascaderDocs">
    <h2>级联选择器组件</h2>
    <p>用于在pc选择带有层级关系的数据</p>
    <h3>静态的级联选择器组件</h3>
    <p>一开始就获取到全部的数据</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-cascader
          :options.sync="options"
          :selected.sync="selectData">
        </g-cascader>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            一开始加载完所有数据，并展示级联选择器组件
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div @click="showCode(0)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[0] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>


    <h3>动态的级联选择器组件</h3>
    <p>异步的根据上一次的id获取下一级的数据</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-cascader
          :after-get-data="getNextLevelData"
          :load-data="true"
          :options.sync="options1"
          :selected.sync="selectData1">
        </g-cascader>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            loadData设置为true的时候再调用对应的钩子函数就可以实现动态加载级联选择器里面的数据内容
          </div>
          <pre><code>{{str1}}</code></pre>
        </div>
      </div>
      <div @click="showCode(1)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[1] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <h3>attributes</h3>
    <g-table :columns="columns" :data-table="dataTable"></g-table>
  </div>
</template>

<script>
  import GIcon from '../../../src/components/icon/icon'
  import mixin from '../mixin'
  import GCascader from '../../../src/components/cascader/g-cascader'
  import GCascaderItem from '../../../src/components/cascader/g-cascader-item'
  import db from '../../../src/db'
  import GTable from '../../../src/components/table/g-table'

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
  export default {
    name: 'cascaderDocs',
    mixins: [mixin],
    components: {
      GIcon,
      GCascader,
      GCascaderItem,
      GTable,
    },
    data () {
      return {
        str: `
<template>
  <g-cascader
    :options.sync="options"
    :selected.sync="selectData">
  </g-cascader>
</template>
data() {
    retutn {
        options:  [
          { 'id': 1, 'name': '北京', 'isLeaves': true },
          { 'id': 2, 'name': '天津', 'isLeaves': true },
          { 'id': 3, 'name': '上海', 'isLeaves': true },
          { 'id': 4, 'name': '重庆', 'isLeaves': true },
          { 'id': 5, 'name': '河北', 'isLeaves': true },
          { 'id': 6, 'name': '山西', 'isLeaves': true },
          { 'id': 7, 'name': '内蒙古', 'isLeaves': true },
          { 'id': 8, 'name': '辽宁', 'isLeaves': true },
          { 'id': 9, 'name': '吉林', 'isLeaves': true },
          { 'id': 10, 'name': '黑龙江', 'isLeaves': true },
          { 'id': 11, 'name': '江苏', 'isLeaves': true },
          { 'id': 12, 'name': '浙江', 'isLeaves': true },
          { 'id': 13, 'name': '安徽', 'isLeaves': true },
          { 'id': 14, 'name': '福建', 'isLeaves': true },
          { 'id': 15, 'name': '江西', 'isLeaves': true },
          { 'id': 16, 'name': '山东', 'isLeaves': true },
          { 'id': 17, 'name': '河南', 'isLeaves': true },
          { 'id': 18, 'name': '湖北', 'isLeaves': true },
          { 'id': 19, 'name': '湖南', 'isLeaves': true },
          { 'id': 20, 'name': '广东', 'isLeaves': true },
          { 'id': 21, 'name': '广西', 'isLeaves': true },
          { 'id': 22, 'name': '海南', 'isLeaves': true },
          { 'id': 23, 'name': '四川', 'isLeaves': true },
          { 'id': 24, 'name': '贵州', 'isLeaves': true },
          { 'id': 25, 'name': '云南', 'isLeaves': true },
          { 'id': 26, 'name': '西藏', 'isLeaves': true },
          {
            'id': 27,
            'name': '陕西',
            'isLeaves': true,
            'children': [
              {
                'id': 428,
                'name': '西安',
                'isLeaves': true,
                'children': [
                  { 'id': 2919, 'name': '新城', 'isLeaves': false, 'children': [] },
                  { 'id': 2920, 'name': '碑林', 'isLeaves': false, 'children': [] },
                  { 'id': 2921, 'name': '莲湖', 'isLeaves': false },
                  { 'id': 2922, 'name': '灞桥', 'isLeaves': false },
                  { 'id': 2923, 'name': '未央', 'isLeaves': false },
                  { 'id': 2924, 'name': '雁塔', 'isLeaves': false },
                  { 'id': 2925, 'name': '阎良', 'isLeaves': false },
                  { 'id': 2926, 'name': '临潼', 'isLeaves': false },
                  { 'id': 2927, 'name': '长安', 'isLeaves': false },
                  { 'id': 2928, 'name': '蓝田', 'isLeaves': false },
                  { 'id': 2929, 'name': '周至', 'isLeaves': false },
                  { 'id': 2930, 'name': '鄠邑', 'isLeaves': false },
                  { 'id': 2931, 'name': '高陵', 'isLeaves': false }],
              },
              { 'id': 429, 'name': '铜川', 'isLeaves': true },
              { 'id': 430, 'name': '宝鸡', 'isLeaves': true },
              { 'id': 431, 'name': '咸阳', 'isLeaves': true },
              { 'id': 432, 'name': '渭南', 'isLeaves': true },
              { 'id': 433, 'name': '延安', 'isLeaves': true },
              { 'id': 434, 'name': '汉中', 'isLeaves': true },
              { 'id': 435, 'name': '榆林', 'isLeaves': true },
              { 'id': 436, 'name': '安康', 'isLeaves': true },
              { 'id': 437, 'name': '商洛', 'isLeaves': true }],
          },
          { 'id': 28, 'name': '甘肃', 'isLeaves': true },
          { 'id': 29, 'name': '青海', 'isLeaves': true },
          { 'id': 30, 'name': '宁夏', 'isLeaves': true },
          { 'id': 31, 'name': '新疆', 'isLeaves': true },
          { 'id': 32, 'name': '台湾', 'isLeaves': true },
          { 'id': 33, 'name': '香港', 'isLeaves': true },
          { 'id': 34, 'name': '澳门', 'isLeaves': true },
          { 'id': 35, 'name': '海外', 'isLeaves': true },
        ],
        selected: []
    }
}
        `,
        str1: `
<template>
   <g-cascader
    :after-get-data="getNextLevelData"
    :load-data="true"
    :options.sync="options1"
    :selected.sync="selectData1">
  </g-cascader>
<template>
data() {
  return {
    options1: this.getOptions(),
    selected: []
  }
},
methods: {
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
}
        `,
        dataTable: [
          {
            id: '1',
            params: 'options',
            description: '为静态数据的时候的初始值',
            type: 'Array [{ \'id\': 1, \'name\': \'北京\', \'isLeaves\': true }]',
            default: '[]',
            version: '',
          },
          {
            id: '2',
            params: 'loadData',
            description: '是否为动态加载数据',
            type: 'Boolean',
            default: 'false',
            version: '',
          },
          {
            id: '3',
            params: 'afterGetData',
            description: '获取数据之前，在这个钩子里面可以拿到',
            type: 'function(node,callback)  当前选中的节点,根据当前选中的节点获取这个节点的下一级,并自动插入到下一级的数据里面',
            default: '()=>({})',
            version: '',
          },
          {
            id: '4',
            params: 'selected',
            description: '当前选中的数据项',
            type: 'Array',
            default: '[]',
            version: '',
          },
        ],
        options: [
          { 'id': 1, 'name': '北京', 'isLeaves': true },
          { 'id': 2, 'name': '天津', 'isLeaves': true },
          { 'id': 3, 'name': '上海', 'isLeaves': true },
          { 'id': 4, 'name': '重庆', 'isLeaves': true },
          { 'id': 5, 'name': '河北', 'isLeaves': true },
          { 'id': 6, 'name': '山西', 'isLeaves': true },
          { 'id': 7, 'name': '内蒙古', 'isLeaves': true },
          { 'id': 8, 'name': '辽宁', 'isLeaves': true },
          { 'id': 9, 'name': '吉林', 'isLeaves': true },
          { 'id': 10, 'name': '黑龙江', 'isLeaves': true },
          { 'id': 11, 'name': '江苏', 'isLeaves': true },
          { 'id': 12, 'name': '浙江', 'isLeaves': true },
          { 'id': 13, 'name': '安徽', 'isLeaves': true },
          { 'id': 14, 'name': '福建', 'isLeaves': true },
          { 'id': 15, 'name': '江西', 'isLeaves': true },
          { 'id': 16, 'name': '山东', 'isLeaves': true },
          { 'id': 17, 'name': '河南', 'isLeaves': true },
          { 'id': 18, 'name': '湖北', 'isLeaves': true },
          { 'id': 19, 'name': '湖南', 'isLeaves': true },
          { 'id': 20, 'name': '广东', 'isLeaves': true },
          { 'id': 21, 'name': '广西', 'isLeaves': true },
          { 'id': 22, 'name': '海南', 'isLeaves': true },
          { 'id': 23, 'name': '四川', 'isLeaves': true },
          { 'id': 24, 'name': '贵州', 'isLeaves': true },
          { 'id': 25, 'name': '云南', 'isLeaves': true },
          { 'id': 26, 'name': '西藏', 'isLeaves': true },
          {
            'id': 27,
            'name': '陕西',
            'isLeaves': true,
            'children': [
              {
                'id': 428,
                'name': '西安',
                'isLeaves': true,
                'children': [
                  { 'id': 2919, 'name': '新城', 'isLeaves': false, 'children': [] },
                  { 'id': 2920, 'name': '碑林', 'isLeaves': false, 'children': [] },
                  { 'id': 2921, 'name': '莲湖', 'isLeaves': false },
                  { 'id': 2922, 'name': '灞桥', 'isLeaves': false },
                  { 'id': 2923, 'name': '未央', 'isLeaves': false },
                  { 'id': 2924, 'name': '雁塔', 'isLeaves': false },
                  { 'id': 2925, 'name': '阎良', 'isLeaves': false },
                  { 'id': 2926, 'name': '临潼', 'isLeaves': false },
                  { 'id': 2927, 'name': '长安', 'isLeaves': false },
                  { 'id': 2928, 'name': '蓝田', 'isLeaves': false },
                  { 'id': 2929, 'name': '周至', 'isLeaves': false },
                  { 'id': 2930, 'name': '鄠邑', 'isLeaves': false },
                  { 'id': 2931, 'name': '高陵', 'isLeaves': false }],
              },
              { 'id': 429, 'name': '铜川', 'isLeaves': true },
              { 'id': 430, 'name': '宝鸡', 'isLeaves': true },
              { 'id': 431, 'name': '咸阳', 'isLeaves': true },
              { 'id': 432, 'name': '渭南', 'isLeaves': true },
              { 'id': 433, 'name': '延安', 'isLeaves': true },
              { 'id': 434, 'name': '汉中', 'isLeaves': true },
              { 'id': 435, 'name': '榆林', 'isLeaves': true },
              { 'id': 436, 'name': '安康', 'isLeaves': true },
              { 'id': 437, 'name': '商洛', 'isLeaves': true }],
          },
          { 'id': 28, 'name': '甘肃', 'isLeaves': true },
          { 'id': 29, 'name': '青海', 'isLeaves': true },
          { 'id': 30, 'name': '宁夏', 'isLeaves': true },
          { 'id': 31, 'name': '新疆', 'isLeaves': true },
          { 'id': 32, 'name': '台湾', 'isLeaves': true },
          { 'id': 33, 'name': '香港', 'isLeaves': true },
          { 'id': 34, 'name': '澳门', 'isLeaves': true },
          { 'id': 35, 'name': '海外', 'isLeaves': true },
        ],
        options1: this.getOptions(),
        selectData: [],
        selectData1: [],
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
<style type="text/css">
  .cascaderDocs * {
    box-sizing: border-box;
  }
</style>
<style lang="scss" scoped>
  .cascaderDocs {
  }
</style>

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
        <!--          <g-cascader-->
        <!--            :after-get-data="getNextLevelData"-->
        <!--            :load-data="true"-->
        <!--            :options.sync="options"-->
        <!--            :selected.sync="selectData">-->
        <!--          </g-cascader>-->
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            组件描述说明
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div @click="showCode(0)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[0] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>


    <h3>attributes</h3>
    <p>组件参数说明后期扩展</p>
  </div>
</template>

<script>
  import GIcon from '../../../src/components/icon/icon'
  import mixin from '../mixin'
  import GCascader from '../../../src/components/cascader/g-cascader'
  import GCascaderItem from '../../../src/components/cascader/g-cascader-item'

  export default {
    name: 'cascaderDocs',
    mixin: [mixin],
    components: {
      GIcon,
      GCascader,
      GCascaderItem,
    },
    data () {
      return {
        str: ``,
        dataTable: [
          {
            id: '1',
            params: 'message',
            description: '提示消息要显示的内容',
            type: 'string',
            default: '-',
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
        selectData: [],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>

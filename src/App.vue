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
    {{selectData && selectData[0] && selectData[0].value || '空'}}
    {{selectData && selectData[1] && selectData[1].value || '空'}}
    {{selectData && selectData[2] && selectData[2].value || '空'}}
    <g-cascader :options="options" :selected.sync="selectData">
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
  import GCarouselItem from './g-carousel-item'
export default {
  name: 'demo',
  components: { GCarouselItem },
  data() {
    return {
      selectedCollapse: ['1'],
      selectData: [],
      options: [
        {
          value: '浙江',
          label: 'Zhejiang',
          children: [
            {
              value: '宁波',
              label: 'NingBo',
            },
            {
              value: '江西',
              label: 'Jiang Xi',
            },
            {
              value: '无锡',
              label: 'Wu Xi',
            },
            {
              value: '杭州',
              label: 'Hangzhou',
              children: [
                {
                  value: '西湖',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: '江苏',
          label: 'Jiangsu',
          children: [
            {
              value: '南京',
              label: 'Nanjing',
              children: [
                {
                  value: '中华门',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

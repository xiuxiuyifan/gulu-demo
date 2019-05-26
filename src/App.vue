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
    <g-cascader :options="options">
      <g-input placeholder="请选择住址"></g-input>
    </g-cascader>

  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      selectedCollapse: ['1'],
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

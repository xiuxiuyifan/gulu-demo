<template>
  <div class="demo" id="app">
    <g-button icon="setting"></g-button>
    <g-collapse :selected.sync="selectedCollapse">
      <g-collapse-item title="标题1" name="1">
        内容1
        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>
        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>
        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>
      </g-collapse-item>
      <g-collapse-item title="标题2" name="2">
        内容2
        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>
        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>
        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>
      </g-collapse-item>
      <g-collapse-item title="标题3" name="3">
        内容3
        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>
        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>
        <div>海底閥發大水發空間啊發順豐卡發生的回復</div>
      </g-collapse-item>
    </g-collapse>
    result:  {{selectedCollapse}}
  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      selectedCollapse: ['1']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

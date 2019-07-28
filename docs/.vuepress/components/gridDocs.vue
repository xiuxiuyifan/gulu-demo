<template>
  <div class="grid">
    <h2>Grid栅格</h2>
    <h3>24栅格系统</h3>
    <p>由于现在网页的响应式布局需要在不同的分辨率下面搜显示正常，所以就出现了这种设计百分比的设计理念</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-row>
          <g-col :span="6">
            <div>6</div>
          </g-col>
          <g-col :span="6">
            <div>6</div>
          </g-col>
          <g-col :span="6">
            <div>6</div>
          </g-col>
          <g-col :span="6">
            <div>6</div>
          </g-col>
        </g-row>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            通过span属性可以控制col所占的宽度比例，一个row占24
          </div>
          <pre><code>{{str}}</code></pre>
        </div>
      </div>
      <div @click="showCode(0)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[0] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>

    <h3>区块间隔</h3>
    <p>每个固定的col中间隔开一定的距离</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-row :gutter="20">
          <g-col :span="6">
            <div>6</div>
          </g-col>
          <g-col :span="6">
            <div>6</div>
          </g-col>
          <g-col :span="6">
            <div>6</div>
          </g-col>
          <g-col :span="6">
            <div>6</div>
          </g-col>
        </g-row>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            通过gutter属性在row上面设置默认单位px
          </div>
          <pre><code>{{str1}}</code></pre>
        </div>
      </div>
      <div @click="showCode(1)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[1] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>


    <h3>响应式</h3>
    <p>当屏幕大小在所设置的区域内的时候就会显示对应的比例</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-row :gutter="20">
          <g-col :sm="24" :xl="12">
            <div>12</div>
          </g-col>
          <g-col :sm="24" :xl="12">
            <div>12</div>
          </g-col>
        </g-row>
        <g-row style="margin-top: 20px;">
          <g-col :sm="12" :xxl="4">
            <div>hi</div>
          </g-col>
          <g-col :sm="12" :xxl="4">
            <div>hi</div>
          </g-col>
          <g-col :sm="12" :xxl="4">
            <div>hi</div>
          </g-col>
          <g-col :sm="12" :xxl="4">
            <div>hi</div>
          </g-col>
          <g-col :sm="12" :xxl="4">
            <div>hi</div>
          </g-col>
          <g-col :sm="12" :xxl="4">
            <div>hi</div>
          </g-col>
        </g-row>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            可以使用"sm","xs","md","xl"等参数,设置在不同分辨率范围内的col宽所占的比例,具体参数如下
          </div>
          <pre><code>{{str2}}</code></pre>
        </div>
      </div>
      <div @click="showCode(2)" class="lock-code" ref="xxx">
        <g-icon :icon="isShow[2] === false ? 'codedown' : 'codeup'" class="icon-down"></g-icon>
        <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>


    <h3>attributes</h3>
    <g-table :columns="columns" :data-table="dataTable"></g-table>
  </div>
</template>

<script>
  import GIcon from '../../../src/components/icon/icon'
  import GRow from '../../../src/components/grid/g-row'
  import GCol from '../../../src/components/grid/g-col'
  import mixin from '../mixin'
  import GTable from '../../../src/components/table/g-table'

  export default {
    name: 'gridDocs',
    mixins: [mixin],
    components: {
      GIcon,
      GRow,
      GCol,
      GTable,
    },
    data () {
      return {
        str: `
<g-row>
  <g-col :span="6"></g-col>
  <g-col :span="6"></g-col>
  <g-col :span="6"></g-col>
  <g-col :span="6"></g-col>
</g-row>
        `.trim(),
        str1: `
<g-row :gutter="20">
  <g-col :span="6"><div>6</div></g-col>
  <g-col :span="6"><div>6</div></g-col>
  <g-col :span="6"><div>6</div></g-col>
  <g-col :span="6"><div>6</div></g-col>
</g-row>
        `.trim(),
        str2: `
<g-row :gutter="20">
  <g-col :sm="24" :xl="12">
    <div>12</div>
  </g-col>
  <g-col :sm="24" :xl="12">
    <div>12</div>
  </g-col>
</g-row>

<g-row style="margin-top: 20px;">
  <g-col :sm="12" :xxl="4"><div>hi</div></g-col>
  <g-col :sm="12" :xxl="4"><div>hi</div></g-col>
  <g-col :sm="12" :xxl="4"><div>hi</div></g-col>
  <g-col :sm="12" :xxl="4"><div>hi</div></g-col>
  <g-col :sm="12" :xxl="4"><div>hi</div></g-col>
  <g-col :sm="12" :xxl="4"><div>hi</div></g-col>
</g-row>
        `.trim(),
        dataTable: [
          {
            id: '1',
            params: 'span',
            description: '栅格占位格数，为 0 时相当于 display: none',
            type: 'number',
            default: '-',
            version: '',
          },
          {
            id: '2',
            params: 'xs',
            description: '<576px 响应式栅格，可为栅格数或一个包含其他属性的对象',
            type: 'number|object',
            default: '-',
            version: '',
          },
          {
            id: '3',
            params: 'sm',
            description: '≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象',
            type: 'number|object',
            default: '-',
            version: '',
          },
          {
            id: '4',
            params: 'md',
            description: '≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象',
            type: 'number|object',
            default: '-',
            version: '',
          },
          {
            id: '5',
            params: 'lg',
            description: '≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象',
            type: 'number|object',
            default: '-',
            version: '',
          },
          {
            id: '6',
            params: 'xl',
            description: '≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象',
            type: 'number|object',
            default: '-',
            version: '',
          },
          {
            id: '7',
            params: 'xxl',
            description: '≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象',
            type: 'number|object',
            default: '-',
            version: '',
          },
          {
            id: '8',
            params: 'gutter',
            description: '间隙row的子元素中间的间隔',
            type: 'number',
            default: '-',
            version: '',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  div {
    box-sizing: border-box;
  }

  .grid {
    .g-col:nth-child(even) > div {
      background: #f38181;
    }

    .g-col:nth-child(odd) > div {
      background: #fce38a;
    }
  }
</style>

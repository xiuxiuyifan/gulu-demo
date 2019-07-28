<template>
  <div class="tabsDocs">
    <h2>切换的选项卡</h2>
    <p>用在一些页面上用户通过选项卡，看见选项卡下面对应的这一类内容</p>
    <h3>切换按钮在上方</h3>
    <p>用户点击上方tab查看不同的内容</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-tabs :beforChange="beforChange" :selected.sync="selected" position="top">
          <g-tabs-header>
            <g-tabs-header-item label="1">墨家</g-tabs-header-item>
            <g-tabs-header-item label="2">农家</g-tabs-header-item>
            <g-tabs-header-item label="3">阴阳家</g-tabs-header-item>
            <g-tabs-header-item label="4">纵横</g-tabs-header-item>
          </g-tabs-header>
          <g-tabs-content>
            <g-tabs-content-item label="1">
              <img align="right" alt="" hspace="5" src="../public/tabs1.png" vspace="5" width="120">
              墨家，中国3D武侠动画《秦时明月》系列中的门派。
              “天下皆白，唯我独黑。非攻墨门，兼爱平生”，墨家始创于墨子，历代掌门都称为“墨家巨子”。历代巨子携弟子于绝岭雄峰间，历时三百余年筑起墨家机关城，成为最后的“人间乐土”。
              墨家与儒家并称当世两大显学，墨家弟子中精于武艺者称为“墨侠”，奉守“兼爱，非攻”的要旨，擅长机关构造之术。墨家弟子行侠仗义，常以墨门绝学非攻机关术助他国守城为世人称道，是侠义精神的代表。 [1]
            </g-tabs-content-item>
            <g-tabs-content-item label="2">
              <img align="right" alt="" hspace="5" src="../public/tabs2.jpg" vspace="5" width="120">
              农家，中国3D武侠动画《秦时明月》系列中的门派，历代首领均被称为农家侠魁。
              燕国豪侠田光曾作为农家侠魁，与楚国昌平君、燕国燕丹、项氏一族项燕共同策划过“青龙计划”。
              以田氏一族为主，后主要分裂为以烈山堂田氏一族和神农堂朱家为主的两派。 [1]
            </g-tabs-content-item>
            <g-tabs-content-item label="3">
              <img align="right" alt="" hspace="5" src="../public/tabs3.jpg" vspace="5" width="120">
              阴阳家，中国3D武侠动画《秦时明月》系列中的门派。
              “太极玄一，阴阳两气”。（距故事开始）五百年前，阴阳家脱离道家，剑走偏锋，自成一派，追求天人极限，创出了很多威力巨大的招术，世代也有俊杰辈出。但其高深莫测的阴阳咒印却又在上百年前失传了，而这时，正因为其失传了百年，所以能够诊断和解开阴阳咒术的人也已经几乎找不到了。
            </g-tabs-content-item>
            <g-tabs-content-item label="4">
              <img align="right" alt="" hspace="5" src="../public/tabs4.png" vspace="5" width="120">
              纵横家（鬼谷派），中国3D武侠动画《秦时明月》系列中的门派。
            </g-tabs-content-item>
          </g-tabs-content>
        </g-tabs>
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


    <h3>切换区域可以在不同的方位</h3>
    <p>支持四种不同的tabs状态</p>
    <div style="margin: 10px;">
      <g-buttton @click="position='top'">上方</g-buttton>
      <g-buttton @click="position='right'">右方</g-buttton>
      <g-buttton @click="position='left'">左方</g-buttton>
      <g-buttton @click="position='bottom'">下方</g-buttton>
    </div>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-tabs :beforChange="beforChange" :position="position" :selected.sync="selected1">
          <g-tabs-header>
            <g-tabs-header-item label="1">墨家</g-tabs-header-item>
            <g-tabs-header-item label="2">农家</g-tabs-header-item>
            <g-tabs-header-item label="3">阴阳家</g-tabs-header-item>
            <g-tabs-header-item label="4">纵横</g-tabs-header-item>
          </g-tabs-header>
          <g-tabs-content>
            <g-tabs-content-item label="1">
              <img align="right" alt="" hspace="5" src="../public/tabs1.png" vspace="5" width="120">
              墨家，中国3D武侠动画《秦时明月》系列中的门派。
              “天下皆白，唯我独黑。非攻墨门，兼爱平生”，墨家始创于墨子，历代掌门都称为“墨家巨子”。历代巨子携弟子于绝岭雄峰间，历时三百余年筑起墨家机关城，成为最后的“人间乐土”。
              墨家与儒家并称当世两大显学，墨家弟子中精于武艺者称为“墨侠”，奉守“兼爱，非攻”的要旨，擅长机关构造之术。墨家弟子行侠仗义，常以墨门绝学非攻机关术助他国守城为世人称道，是侠义精神的代表。 [1]
            </g-tabs-content-item>
            <g-tabs-content-item label="2">
              <img align="right" alt="" hspace="5" src="../public/tabs2.jpg" vspace="5" width="120">
              农家，中国3D武侠动画《秦时明月》系列中的门派，历代首领均被称为农家侠魁。
              燕国豪侠田光曾作为农家侠魁，与楚国昌平君、燕国燕丹、项氏一族项燕共同策划过“青龙计划”。
              以田氏一族为主，后主要分裂为以烈山堂田氏一族和神农堂朱家为主的两派。 [1]
            </g-tabs-content-item>
            <g-tabs-content-item label="3">
              <img align="right" alt="" hspace="5" src="../public/tabs3.jpg" vspace="5" width="120">
              阴阳家，中国3D武侠动画《秦时明月》系列中的门派。
              “太极玄一，阴阳两气”。（距故事开始）五百年前，阴阳家脱离道家，剑走偏锋，自成一派，追求天人极限，创出了很多威力巨大的招术，世代也有俊杰辈出。但其高深莫测的阴阳咒印却又在上百年前失传了，而这时，正因为其失传了百年，所以能够诊断和解开阴阳咒术的人也已经几乎找不到了。
            </g-tabs-content-item>
            <g-tabs-content-item label="4">
              <img align="right" alt="" hspace="5" src="../public/tabs4.png" vspace="5" width="120">
              纵横家（鬼谷派），中国3D武侠动画《秦时明月》系列中的门派。
            </g-tabs-content-item>
          </g-tabs-content>
        </g-tabs>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            组件描述说明
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
  import GTabs from '../../../src/components/tabs/g-tab'
  import GTabsHeader from '../../../src/components/tabs/g-tab-header'
  import GTabsHeaderItem from '../../../src/components/tabs/tab-header-item'
  import GTabsContent from '../../../src/components/tabs/g-tab-content'
  import GTabsContentItem from '../../../src/components/tabs/tab-content-item'
  import GTable from '../../../src/components/table/g-table'
  import GButtton from '../../../src/components/button/g-button'

  export default {
    name: 'tabsDocs',
    mixins: [mixin],
    components: {
      GIcon,
      GTabs,
      GTabsHeader,
      GTabsHeaderItem,
      GTabsContent,
      GTabsContentItem,
      GTable,
      GButtton,
    },
    data () {
      return {
        selected: '1',
        selected1: '1',
        position: 'top',
        str: `
<g-tabs :beforChange="beforChange" :selected.sync="selected" position="top">
  <g-tabs-header>
    <g-tabs-header-item label="1">墨家</g-tabs-header-item>
    <g-tabs-header-item label="2">农家</g-tabs-header-item>
    <g-tabs-header-item label="3">阴阳家</g-tabs-header-item>
    <g-tabs-header-item label="4">纵横</g-tabs-header-item>
  </g-tabs-header>
  <g-tabs-content>
    <g-tabs-content-item label="1">
      <img align="right" alt="" hspace="5" src="../public/tabs1.png" vspace="5" width="120">
      墨家，中国3D武侠动画《秦时明月》系列中的门派。
      “天下皆白，唯我独黑。非攻墨门，兼爱平生”，墨家始创于墨子，历代掌门都称为“墨家巨子”。历代巨子携弟子于绝岭雄峰间，历时三百余年筑起墨家机关城，成为最后的“人间乐土”。
      墨家与儒家并称当世两大显学，墨家弟子中精于武艺者称为“墨侠”，奉守“兼爱，非攻”的要旨，擅长机关构造之术。墨家弟子行侠仗义，常以墨门绝学非攻机关术助他国守城为世人称道，是侠义精神的代表。 [1]
    </g-tabs-content-item>
    <g-tabs-content-item label="2">
      <img align="right" alt="" hspace="5" src="../public/tabs2.jpg" vspace="5" width="120">
      农家，中国3D武侠动画《秦时明月》系列中的门派，历代首领均被称为农家侠魁。
      燕国豪侠田光曾作为农家侠魁，与楚国昌平君、燕国燕丹、项氏一族项燕共同策划过“青龙计划”。
      以田氏一族为主，后主要分裂为以烈山堂田氏一族和神农堂朱家为主的两派。 [1]
    </g-tabs-content-item>
    <g-tabs-content-item label="3">
      <img align="right" alt="" hspace="5" src="../public/tabs3.jpg" vspace="5" width="120">
      阴阳家，中国3D武侠动画《秦时明月》系列中的门派。
      “太极玄一，阴阳两气”。（距故事开始）五百年前，阴阳家脱离道家，剑走偏锋，自成一派，追求天人极限，创出了很多威力巨大的招术，世代也有俊杰辈出。但其高深莫测的阴阳咒印却又在上百年前失传了，而这时，正因为其失传了百年，所以能够诊断和解开阴阳咒术的人也已经几乎找不到了。
    </g-tabs-content-item>
    <g-tabs-content-item label="4">
      <img align="right" alt="" hspace="5" src="../public/tabs4.png" vspace="5" width="120">
      纵横家（鬼谷派），中国3D武侠动画《秦时明月》系列中的门派。
    </g-tabs-content-item>
  </g-tabs-content>
</g-tabs>`.trim(),
        str1: `
<div style="margin: 10px;">
  <g-buttton @click="position='top'">上方</g-buttton>
  <g-buttton @click="position='right'">右方</g-buttton>
  <g-buttton @click="position='left'">左方</g-buttton>
  <g-buttton @click="position='bottom'">下方</g-buttton>
</div>
<g-tabs :beforChange="beforChange" :selected.sync="selected" position="top">
  <g-tabs-header>
    <g-tabs-header-item label="1">墨家</g-tabs-header-item>
    <g-tabs-header-item label="2">农家</g-tabs-header-item>
    <g-tabs-header-item label="3">阴阳家</g-tabs-header-item>
    <g-tabs-header-item label="4">纵横</g-tabs-header-item>
  </g-tabs-header>
  <g-tabs-content>
    <g-tabs-content-item label="1">
      <img align="right" alt="" hspace="5" src="../public/tabs1.png" vspace="5" width="120">
      墨家，中国3D武侠动画《秦时明月》系列中的门派。
      “天下皆白，唯我独黑。非攻墨门，兼爱平生”，墨家始创于墨子，历代掌门都称为“墨家巨子”。历代巨子携弟子于绝岭雄峰间，历时三百余年筑起墨家机关城，成为最后的“人间乐土”。
      墨家与儒家并称当世两大显学，墨家弟子中精于武艺者称为“墨侠”，奉守“兼爱，非攻”的要旨，擅长机关构造之术。墨家弟子行侠仗义，常以墨门绝学非攻机关术助他国守城为世人称道，是侠义精神的代表。 [1]
    </g-tabs-content-item>
    <g-tabs-content-item label="2">
      <img align="right" alt="" hspace="5" src="../public/tabs2.jpg" vspace="5" width="120">
      农家，中国3D武侠动画《秦时明月》系列中的门派，历代首领均被称为农家侠魁。
      燕国豪侠田光曾作为农家侠魁，与楚国昌平君、燕国燕丹、项氏一族项燕共同策划过“青龙计划”。
      以田氏一族为主，后主要分裂为以烈山堂田氏一族和神农堂朱家为主的两派。 [1]
    </g-tabs-content-item>
    <g-tabs-content-item label="3">
      <img align="right" alt="" hspace="5" src="../public/tabs3.jpg" vspace="5" width="120">
      阴阳家，中国3D武侠动画《秦时明月》系列中的门派。
      “太极玄一，阴阳两气”。（距故事开始）五百年前，阴阳家脱离道家，剑走偏锋，自成一派，追求天人极限，创出了很多威力巨大的招术，世代也有俊杰辈出。但其高深莫测的阴阳咒印却又在上百年前失传了，而这时，正因为其失传了百年，所以能够诊断和解开阴阳咒术的人也已经几乎找不到了。
    </g-tabs-content-item>
    <g-tabs-content-item label="4">
      <img align="right" alt="" hspace="5" src="../public/tabs4.png" vspace="5" width="120">
      纵横家（鬼谷派），中国3D武侠动画《秦时明月》系列中的门派。
    </g-tabs-content-item>
  </g-tabs-content>
</g-tabs>
        `,
        dataTable: [
          {
            id: '1',
            params: 'position',
            description: '不同形态选项卡的几种',
            type: 'string| top bottom left right',
            default: 'top',
            version: '',
          },
          {
            id: '2',
            params: 'selected',
            description: '当前选中的那一个选项卡',
            type: '在tabs-header里面定义的name 中',
            default: '-',
            version: '',
          },
          {
            id: '3',
            params: 'beforChange',
            description: '在选项卡切换之前',
            type: 'function',
            default: '()=>({})',
            version: '',
          },
        ],
      }
    },
    methods: {
      beforChange () {
        console.log('hi')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .tabsDocs {
    * {
      box-sizing: border-box;
    }
  }
</style>

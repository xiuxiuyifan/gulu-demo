<template>
  <div class="carousel">
    <h2>轮播图组件</h2>
    <p>用于显示网站上面的banner图片</p>
    <h3>轮播图</h3>
    <p>无缝轮播图</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-carousel :selected.sync="selected" style="width: 590px;height: 330px;">
          <g-carousel-item :key="index" v-for="(item,index) in imgArr">
            <img :src="item" alt class="carousel-img"/>
            <!--          {{index}}-->
          </g-carousel-item>
        </g-carousel>
      </div>
      <div class="code-content" style="height: 0;" v-highlight>
        <div class="code-content-height">
          <div class="code-user-desc">
            在组件内部添加你想要展示的内容,内部是用slot接收的
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
    <g-table :columns="columns" :data-table="dataTable"></g-table>
  </div>
</template>

<script>
  import GIcon from '../../../src/components/icon/icon'
  import mixin from '../mixin'
  import GCarousel from '../../../src/components/carousel/g-carousel'
  import GCarouselItem from '../../../src/components/carousel/g-carousel-item'
  import GTable from '../../../src/components/table/g-table'
  export default {
    name: 'carousel',
    mixins: [mixin],
    components: {
      GIcon,
      GCarousel,
      GCarouselItem,
      GTable
    },
    data () {
      return {
        selected: 0,
        imgArr: [
          require('../public/banner.jpeg'),
          require('../public/banner1.jpg'),
          require('../public/banner2.jpeg'),
          require('../public/banner3.jpg'),
          require('../public/banner4.jpg'),
        ],
        str: `
<template>
  <g-carousel :selected.sync="selected" style="width: 590px;height: 330px;">
    <g-carousel-item :key="index" v-for="(item,index) in imgArr">
      <img :src="item" alt class="carousel-img"/>
      <!--          {{index}}-->
    </g-carousel-item>
  </g-carousel>
</template>

data() {
  return {
    selected: 0,
    imgArr: [
      require('../public/banner.jpeg'),
      require('../public/banner1.jpg'),
      require('../public/banner2.jpeg'),
      require('../public/banner3.jpg'),
      require('../public/banner4.jpg'),
    ],
  }
}`.trim(),
        dataTable: [
          {
            id: '1',
            params: 'selected',
            description: '当前选中的第几张',
            type: 'Number',
            default: '0',
            version: '',
          },
          {
            id: '2',
            params: 'autoPlay',
            description: '是否自动播放',
            type: 'Boolean',
            default: '0',
            version: '',
          },
        ],
      }
    },
    }
</script>
<style type="text/css">
  .carousel img {
    width: 100%;
    height: 100%;
  }
</style>
<style lang="scss" scoped>

</style>

<template>
  <div class="homeDocs">
    <div class="box-wrapper">
      <h3>定制文档主题色</h3>
      <p>点击下方旋转的人物卡片</p>
      <div class="content">

      </div>
      <div style="text-align: center">
        <div class="box" :class="{'click-after':isClick}" @click="clickBox">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div style="text-align: center">
        <div class="box" :class="{'click-after':isClick}" @click="clickBox">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div style="text-align: center">
        <div class="box" :class="{'click-after':isClick}" @click="clickBox">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div style="text-align: center">
        <div class="box" :class="{'click-after':isClick}" @click="clickBox">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <p>待开发，换肤功能...</p>
      <p>--version 0.1.4(开发测试版)</p>
      <div class="result">

      </div>
      <!--      <div class="school-wrappper">-->
      <!--        <div class="school">-->
      <!--          <div class="bottom"></div>-->
      <!--          <div class="bottom"></div>-->
      <!--          <div class="silde"></div>-->
      <!--          <div class="silde"></div>-->
      <!--          <div class="silde"></div>-->
      <!--          <div class="silde"></div>-->
      <!--          <div class="silde"></div>-->
      <!--          <div class="silde"></div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homeDocs',
    data () {
      return {
        isClick: false,
      }
    },
    methods: {
      clickBox () {
        this.isClick = !this.isClick
      },
    },
    mounted () {
      // window.onmousewheel = document.onmousewheel = (e) => {
      //   console.log(e)
      //   var bodyHeight = document.body.getBoundingClientRect().height
      //   var appHeight = document.getElementById('app').getBoundingClientRect().height
      //
      //   if (appHeight > bodyHeight) {
      //     console.log('大于')
      //     if (!document.getElementById('scroll-bar')) {
      //       var div = document.createElement('div')
      //       div.setAttribute('id', 'scroll-bar')
      //       div.style.width = '10px'
      //       div.style.height = '200px'
      //       div.style.background = 'red'
      //       div.style.position = 'absolute'
      //       div.style.right = 0
      //       div.style.top = 0
      //       div.style.zIndex = 1000
      //       document.body.appendChild(div)
      //     }
      //   } else {
      //     console.log('小于')
      //   }
      // }//W3C

    },
  }
</script>
<style lang="scss">
  html, body {
    /*width: 100%;*/
    /*height: 100%;*/
    /*overflow: hidden;*/
  }
</style>
<style lang="scss" scoped>
  .homeDocs {
    position: relative;
    @keyframes move {
      0% {
        transform: rotateX(0deg) rotateY(0deg);
      }
      100% {
        transform: rotateX(360deg) rotateY(360deg);
      }
    }
    @keyframes move-school {
      0% {
        transform: rotateX(-12deg) rotateY(0deg);
      }
      100% {
        transform: rotateX(-12deg) rotateY(360deg);
      }
    }
    .box-wrapper {
      .box {
        margin-top: 50px;
        position: relative;
        transform-style: preserve-3d;
        transform: rotateX(45deg) rotateY(45deg);
        animation: move 6s infinite linear;
        width: 150px;
        height: 150px;
        display: inline-block;

        > div {
          transition: all 1s;
          width: 150px;
          height: 150px;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
          cursor: pointer;
          background-size: 100% 100% !important;
        }

        > div:nth-child(1) {
          transform: translateZ(75px);
          background: url("../public/1.jpg");
        }

        > div:nth-child(2) {
          transform: translateZ(-75px);
          background: url("../public/2.jpg");
        }

        > div:nth-child(3) {
          transform: rotateX(90deg) translateZ(75px);
          background: url("../public/3.jpg");
        }

        > div:nth-child(4) {
          transform: rotateX(90deg) translateZ(-75px);
          background: url("../public/4.jpg");
        }

        > div:nth-child(5) {
          transform: rotateY(90deg) translateZ(75px);
          background: url("../public/5.jpg");
        }

        > div:nth-child(6) {
          transform: rotateY(90deg) translateZ(-75px);
          background: url("../public/6.jpg");
        }
      }

      .click-after {
        > div {
          &:nth-child(1) {
            transform: translateZ(150px);
            background: url("../public/1.jpg");
          }

          &:nth-child(2) {
            transform: translateZ(-150px);
            background: url("../public/2.jpg");
          }

          &:nth-child(3) {
            transform: rotateX(90deg) translateZ(150px);
            background: url("../public/3.jpg");
          }

          &:nth-child(4) {
            transform: rotateX(90deg) translateZ(-150px);
            background: url("../public/4.jpg");
          }

          &:nth-child(5) {
            transform: rotateY(90deg) translateZ(150px);
            background: url("../public/5.jpg");
          }

          &:nth-child(6) {
            transform: rotateY(90deg) translateZ(-150px);
            background: url("../public/6.jpg");
          }
        }
      }

      .school-wrappper {
        position: absolute;
        right: 0;
        top: 0;

        .school {
          position: relative;
          transform-style: preserve-3d;
          width: 0;
          height: 0;
          animation: move-school 6s infinite linear;

          > div {
            position: absolute;
            opacity: 0.5;
          }

          > div:nth-child(1) {
            transform: rotateX(90deg);
          }

          > div:nth-child(2) {
            transform: translateY(300px) rotateX(90deg);
          }

          > div:nth-child(3) {
            transform: translateZ(102.435px) translateY(104px);
            background: red;
          }

          > div:nth-child(4) {
            transform: translateZ(-102.435px) translateY(104px);
            background: orange;
          }

          > div:nth-child(5) {
            transform: translateX(120px) translateZ(102.435px) translateY(104px) rotateY(60deg);
            background: blue;
            transform-origin: left;
          }

          > div:nth-child(6) {
            transform: translateX(120px) translateZ(-102.435px) translateY(104px) rotateY(-60deg);
            background: green;
            transform-origin: left;
          }

          > div:nth-child(7) {
            transform: translateX(-120px) translateZ(102.435px) translateY(104px) rotateY(-60deg);
            background: purple;
            transform-origin: right;
          }

          > div:nth-child(8) {
            transform: translateX(-120px) translateZ(-102.435px) translateY(104px) rotateY(60deg);
            background: pink;
            transform-origin: right;
          }

          .bottom {
            width: 120px;
            height: 207.84px;
            background: red;
            margin: 0 auto;

            &:before, &:after {
              display: block;
              content: "";
              position: absolute;
              width: 0;
              height: 0;
              border-width: 103.92px 60px;
              border-style: solid;
            }

            &:before {
              right: 120px;
              border-color: transparent red transparent transparent;
            }

            &:after {
              left: 120px;
              border-color: transparent transparent transparent red;
            }
          }

          .silde {
            width: 120px;
            height: 300px;
          }
        }
      }
    }

    .result {
      width: 200px;
      height: 400px;
      position: absolute;
      top: 100px;
      right: 0;
      border: 1px solid rebeccapurple;
    }
  }
</style>

<template>
  <div class="homeDocs">
    <div class="box-wrapper">
      <div class="box" :class="{'click-after':isClick}" @click="clickBox">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
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
    @keyframes move {
      0% {
        transform: rotateX(0deg) rotateY(0deg);
      }
      100% {
        transform: rotateX(360deg) rotateY(360deg);
      }
    }

    .box-wrapper {
      text-align: center;
      padding-top: 100px;

      .box {
        position: relative;
        transform-style: preserve-3d;
        animation: move 6s infinite linear;
        width: 200px;
        height: 200px;
        display: inline-block;

        > div {
          transition: all 1s;
          width: 200px;
          height: 200px;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
          cursor: pointer;
          background-size: 100% 100% !important;
        }

        > div:nth-child(1) {
          transform: translateZ(100px);
          background: url("../public/1.jpg");
        }

        > div:nth-child(2) {
          transform: translateZ(-100px);
          background: url("../public/2.jpg");
        }

        > div:nth-child(3) {
          transform: rotateX(90deg) translateZ(100px);
          background: url("../public/3.jpg");
        }

        > div:nth-child(4) {
          transform: rotateX(90deg) translateZ(-100px);
          background: url("../public/4.jpg");
        }

        > div:nth-child(5) {
          transform: rotateY(90deg) translateZ(100px);
          background: url("../public/5.jpg");
        }

        > div:nth-child(6) {
          transform: rotateY(90deg) translateZ(-100px);
          background: url("../public/6.jpg");
        }
      }

      > .click-after {
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
    }
  }
</style>

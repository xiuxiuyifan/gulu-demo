<template>
  <div>home下面的东西</div>
</template>

<script>
  export default {
    name: 'homeDocs',
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

</style>

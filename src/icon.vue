<template>
    <svg aria-hidden="true" class="g-icon" :class="{rotate:false}">
        <use :xlink:href=`#i-${icon}`></use>
    </svg>
</template>

<script>
export default {
  name: "icon",
  props: {
    icon: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
  display: inline-block;
  vertical-align: middle;
}
.rotate{
    animation: lodding 1s linear infinite;
}
@keyframes lodding {
    0%{
        transform: rotate(0);
    }
    100%{
        transform:rotate(360deg);
    }
}
</style>

<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "g-button-group"
};
</script>

<style lang="scss" scoped>
  @import "../../styles/var";

.g-button-group {
  font-size: 0;
  display: inline-block;
  vertical-align: middle;

  > .g-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>

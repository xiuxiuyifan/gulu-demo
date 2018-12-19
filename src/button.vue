<template>
    <button class="g-button" :class="`i-${position} `" v-if="icon" @click="clickAfter">
        <g-icon :icon="icon"></g-icon>
        <span class="g-word"><slot></slot></span>
    </button>
</template>
<script>
import Icon from "./icon";
export default {
  name: "g-button",
  props: {
    icon: {
      type: String
    },
    position: {
      type: String,
      default: "left", //校验只能是left或者right
      validator: function(value) {
        if (value === "left" || value === "right") {
          return true;
        } else {
          console.error("position属性只接受left或者right");
          return false;
        }
      }
    }
  },
  component: {
    "g-icon": Icon
  },
  methods: {
    clickAfter() {
        this.emit()
      console.log("我被点击了");
    }
  }
};
</script>
<style lang="scss" scoped>
.i-right {
  order: 1;
}
.g-button {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  line-height: var(--button-height);
  background-color: var(--button-bg);
  font-size: var(--font-size);
  border-radius: var(--border-radius);
  padding: 0 1em;
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  & .g-word {
    font-size: 14px;
  }
  &:hover {
    background-color: var(--button-active-bg);
    border: 1px solid #409eff;
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border: 1px solid #409eff;
  }
}
</style>

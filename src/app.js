import Vue from "vue";
import Button from "./button";
import Icon from "./icon";

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
new Vue({
    el: "#app",
    data() {
        return {
            lodding1: false
        }
    },
    methods: {
        aaa() {
            this.$emit('bbb', {a: 100});
        }
    }
});

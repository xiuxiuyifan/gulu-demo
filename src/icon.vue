<template>
    <svg aria-hidden="true" class="g-icon">
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
</style>

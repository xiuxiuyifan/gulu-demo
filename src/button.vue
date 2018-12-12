<template>
    <button class="g-button">
        <svg class="i" aria-hidden="true">
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props:{
            icon:String
        }
    }
</script>
<style lang="scss" scoped>
    .g-button {
        height: var(--button-height);
        background-color: var(--button-bg);
        font-size: var(--font-size);
        border-radius: var(--border-radius);
        margin: 200px;
        padding: 0 1em;
        border: 1px solid var(--border-color);
        &:hover {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }
</style>

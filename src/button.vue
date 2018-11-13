<template>
    <button class="g-button">hi</button>
</template>
<script>
    export default{}
</script>
<style lang="scss" scoped>
.g-button{
    height: var(--button-height);
    background-color: var(--button-bg);
    font-size: var(--font-size);
    border-radius: var(--border-radius);
    border-color: var(--border-color);
    margin: 200px;
    padding: 0 1em;
    &:hover{
        background-color: var(--button-active-bg);
    }
    &:focus{
        outline: none;
    }
}
</style>

<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'g-button-group'
}
</script>

<style lang="scss" scoped>
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
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }

            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }

            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>

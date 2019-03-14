<template>
    <div class="g-tab-header">
        <div class="tab-header-button">
            <slot name="button"></slot>
        </div>
        <slot class="xxx"></slot>
    </div>
</template>

<script>
	export default {
		name: 'g-tab-header',
	};
</script>

<style lang="scss" scoped>
    .g-tab-header {
        font-size: 16px;
        position: relative;

        .tab-header-button {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: #e4e7ed;
            z-index: 1;
        }
    }
</style>

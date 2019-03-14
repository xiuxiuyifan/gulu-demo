<template>
    <div class="g-tab-content">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		name: 'g-tab-content',
	};
</script>

<style lang="scss" scoped>
    .g-tab-content {
        font-size: 16px;
        padding: 20px 0;
    }
</style>

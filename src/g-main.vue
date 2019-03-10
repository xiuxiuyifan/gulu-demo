<template>
    <div class="g-main">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		name: 'g-main',
	};
</script>

<style lang="scss" scoped>
    .g-main {
        background-color: #e9eef3;
        flex: 1;
    }
</style>

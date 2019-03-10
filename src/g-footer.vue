<template>
    <div class="g-footer">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		name: 'g-footer',
	};
</script>

<style lang="scss" scoped>
    .g-footer {
        height: 100px;
        background-color: #b3c0d1;
    }
</style>

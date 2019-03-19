<template>
    <div class="g-tab-content">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		name: 'g-tab-content',
		mounted() {
			console.log(this.$parent.position);
			if (this.$parent.position === 'bottom') {
				this.$emit('ccc');
			}
			console.log('g-tab-content挂载完成了');
		},
	};
</script>

<style lang="scss" scoped>
    .g-tab-content {
        font-size: 16px;
        padding: 20px 0;
    }
</style>

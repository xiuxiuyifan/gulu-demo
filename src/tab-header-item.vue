<template>
    <div class="tab-header-item" @click="xxx()">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		name: 'tab-header-item',
		props: {
			name: {
				type: [String, Number],
			},
		},
		methods: {
			xxx() {
				console.log(999);
				this.$emit('update:title', this.name);
			},
		},
	};
</script>

<style lang="scss" scoped>
    .tab-header-item {
        padding: 1em;
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
    }
</style>

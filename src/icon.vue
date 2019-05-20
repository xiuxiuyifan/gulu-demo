<template>
    <svg aria-hidden="true" class="g-icon" v-if="icon" @click="$emit('click')">
        <use :xlink:href=`#i-${icon}`></use>
    </svg>
</template>

<script>
	import './svg';

	export default {
		name: 'g-icon',
		props: {
			icon: {
				type: String,
			},
		},
		methods: {
			ccc() {
				this.$emit('click');
			},
		},
	};
</script>

<style lang="scss" scoped>
    .g-icon {
        width: 1em;
        height: 1em;
        display: inline-block;
        vertical-align: middle;
    }
</style>

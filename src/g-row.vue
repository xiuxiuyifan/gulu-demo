<template>
    <div :style="rowstyle" class="g-row">
        <slot></slot>
    </div>
</template>

<script>
	import Gcol from './g-col';

	export default {
		name: 'g-row',
		props: {
			gutter: {
				type: [Number, String],
			},
		},
		created() {
			console.log('父组件创建了');
		},
		computed: {
			rowstyle: function() {
				let {gutter} = this;
				return {
					marginLeft: -gutter / 2 + 'px',
					marginRight: -gutter / 2 + 'px',
				};
			},
		},
		mounted() {
			this.$children.forEach((vm) => {
				vm.gutter = this.gutter;
			});
		},
	};
</script>

<style lang="scss" scoped>
    .g-row {
        &::before, &::after {
            content: '';
            display: table;
        }

        &::after {
            clear: both;
        }
    }
</style>

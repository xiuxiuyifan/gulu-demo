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
			align: {
				type: String,
				validator: function(value) {
					console.log(value);
					let whiteList = ['start', 'center', 'flex-end', 'space-between', 'space-around'];
					if (whiteList.indexOf(value) >= 0) {
						return value;
					} else {
						console.error('你的algin 参数有问题请查看文档');
					}
				},
			},
		},
		data() {
			return {
				alignStyle: {},
			};
		},
		created() {
		},
		computed: {
			rowstyle: function() {
				let {gutter} = this;
				let obj = {
					marginLeft: -gutter / 2 + 'px',
					marginRight: -gutter / 2 + 'px',
				};
				if (this.align) {
					obj.display = 'flex';
					obj.justifyContent = this.align;
					obj.flexWrap = 'wrap';
				}
				return obj;
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

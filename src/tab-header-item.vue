<template>
    <div :class="classes" @click="changeTab($event)" class="tab-header-item">
        <slot></slot>
    </div>
</template>

<script>
	export default {

		data() {
			return {
				active: false,
			};

		},
		inject: ['tabEventBus'],
		name: 'tab-header-item',
		props: {
			label: {
				type: [String],
			},
		},
		computed: {
			classes() {
				return {'active': this.active};
			},
		},
		created() {
			this.tabEventBus.$on('update:label', (value) => {
				this.active = this.label === value.selected;
			});
		},
		methods: {
			changeTab(event) {
				if (this.$parent.$parent.beforChange()) {
					this.tabEventBus.$emit('update:label', {selected:this.label});
				}
				// this.$emit('update:title', this.name);
			},
		},
	};
</script>

<style lang="scss" scoped>
    .tab-header-item {
        padding: 1em 2em;
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        cursor: pointer;

        &.active {
            color: #409eff;
        }
    }
</style>

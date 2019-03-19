<template>
    <div class="g-tab">
        <slot></slot>
    </div>
</template>

<script>
	import Vue from 'Vue';

	export default {
		name: 'g-tab',
		data() {
			return {
				eventBus: new Vue(),
			};
		},
		props: {
			selected: {
				type: String,
			},
			beforChange: {
				type: Function,
			},
			position: {
				type: String,
				default: 'top',
				validator(value) {
					if (['top', 'right', 'bottom', 'left'].indexOf(value) >= 0) {
						return value;
					} else {
						console.log('position的值只能是\'top\',\'right\',\'bottom\',\'left\'请检查');
					}

				},
			},
		},
		mounted() {
			console.log(this.$children);
			//触发一个EventBus事件    向自己的子孙广播一个事件
			this.eventBus.$emit('update:label', this.selected);
			// this.$emit('update:name','我是this $emit出去的数据')
		},
		provide: function() {
			return {
				tabEventBus: this.eventBus,
			};
		},
	};
</script>

<style lang="scss" scoped>
    .g-tab {
        &:after {
            content: '';
            display: table;
            clear: both;
        }
    }
</style>

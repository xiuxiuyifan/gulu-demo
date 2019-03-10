<template>
    <div :style="flexdir" class="g-container">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		name: 'g-container',
		props: {
			position: {
				type: String,
				validator: function(value) {
					let arr = ['level', 'verticale'];
					if (arr.includes(value)) {
						return value;
					} else {
						console.error('你输入的必须是 level or verticale');
					}
				},
			},
		},
		computed: {
			flexdir: function() {
				let obj = null;
				if (this.position === 'level') {
					obj = {
						flexDirection: 'row',
					};
				} else if (this.position === 'verticale') {
					obj = {
						flexDirection: 'column',
					};
				}
				return obj;
			},
		},

	};
</script>

<style lang="scss" scoped>
    .g-container {
        display: flex;
        text-align: center;
        flex: 1;
    }
</style>

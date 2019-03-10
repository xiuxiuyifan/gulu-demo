<template>
    <div class="g-toast">
        <div>
            <g-icon icon="good" style="font-size: 18px;fill:#67C23A;"></g-icon>
        </div>
        <div class="message">{{message}}</div>
        <div class="solid" ref="solid"></div>
        <div class="btnmsg">{{btnmsg}}</div>
    </div>
</template>

<script>
	export default {
		name: 'g-toast',
		props: {
			message: {
				type: String,
				validator: function(value) {
					if (value) {
						return value;
					} else {
						console.log('message 不能是一个空值');
					}
				},
			},
			btnmsg: {
				type: String,
				default: '关闭',
			},
			autoClose: {
				type: [Boolean],
				default: true,
			},
			closeTimer: {
				type: Number,
				default: 3,
			},
		},
		mounted() {
			this.changeStyles();
			console.log('您好');
			if (this.autoClose) {
				setTimeout(() => {
					console.log('我进来了');
					this.$el.remove();
					this.$destroy();
				}, this.closeTimer * 1000);
			}
		},
		methods: {
			changeStyles() {
				this.$nextTick(() => {
					console.log(getComputedStyle(this.$el).height);
					this.$refs.solid.style.height = getComputedStyle(this.$el).height;
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
    .g-toast {
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translateX(-50%) translateY(0);
        background-color: #f0f9eb;
        border-color: #e1f3d8;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        color: #67C23A;
        font-size: 14px;
        display: flex;
        align-items: center;
        padding: 0 1em;
        z-index: 10000;
        transition: opacity .3s, transform .4s, -webkit-transform .4s;

        .message {
            margin-left: 1em;
            padding: 1em 0;
            line-height: 1.8;
            /*flex-shrink: 0;*/
        }

        .solid {
            width: 1px;
            height: 100%;
            background: #6bc83c;
            margin: 0 1em;
            flex-shrink: 0;
        }

        .btnmsg {
            flex-shrink: 0;
        }
    }
</style>

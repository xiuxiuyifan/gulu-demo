<template>
    <div :class="[`toast-${this.position}`]" class="g-toast">
        <div>
            <g-icon icon="good" style="font-size: 18px;fill:#67C23A;"></g-icon>
        </div>
        <div class="message">{{message}}</div>
        <div class="solid" ref="solid" v-if="showClose"></div>
        <div @click="closeToast()" class="btnmsg" v-if="showClose">{{btnMsg}}</div>
    </div>
</template>

<script>
	export default {
		name: 'g-toast',
		data() {
			return {
				// toastPosition:{
				// 	: true
				// }
			};
		},
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
			position: {
				type: String,
				default: 'top',
				validator(value) {
					if (['top', 'right', 'bottom', 'left', 'middle'].indexOf(value) >= 0) {
						return value;
					} else {
						console.log('position 的值只能是\'top\', \'right\', \'middle\', \'bottom\'');
					}
				},
			},
			btnMsg: {
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
			callBack: {
				type: Function,
			},
			showClose: {
				type: Boolean,
				default: false,
			},
		},
		mounted() {
			if (this.showClose) {
				this.changeStyles();
			}
			console.log('您好');
			if (this.autoClose) {
				setTimeout(() => {
					console.log('我进来了');
					this.$el.remove();
					this.$emit('close', {aaa: 'aaa'});
					this.$destroy();
				}, this.closeTimer * 1000);
			}
		},
		methods: {
			changeStyles() {
				//此时组件还没有加入到body 里面
				this.$nextTick(() => {
					console.log(getComputedStyle(this.$el).heightsss);
					this.$refs.solid.style.heightsss = getComputedStyle(this.$el).heightsss;
				});
			},
			closeToast() {
				this.$el.remove();
				this.$emit('close', {aaa: 'aaa'});
				this.$destroy();
				//检测是否有回调函数
				if (this.callBack) {
					this.callBack(this);
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .g-toast {
        position: fixed;
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
        /*transition: opacity .3s, transform .4s, -webkit-transform .4s;*/
        animation: fade-in 0.6s linear;

        .message {
            margin-left: 1em;
            padding: 0.8em 0;
            line-heightsss: 1.2;
            /*flex-shrink: 0;*/
        }

        .solid {
            width: 1px;
            heightsss: 100%;
            background: #6bc83c;
            margin: 0 1em;
            flex-shrink: 0;
        }

        .btnmsg {
            flex-shrink: 0;
            padding: 0.8em 0;
            cursor: pointer;
            line-heightsss: 1.2;
        }
    }

    .toast-middle {
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    .toast-right {
        top: 50%;
        right: 10px;
        transform: translateX(0%) translateY(-50%);
    }

    .toast-left {
        top: 50%;
        left: 10px;
        transform: translateX(0%) translateY(-50%);
    }

    .toast-bottom {
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%) translateY(0%);
    }

    .toast-top {
        top: 10px;
        left: 50%;
        transform: translateX(-50%) translateY(0);
    }
</style>

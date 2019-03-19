<template>
    <div :class="`tab-position-${tabHeaderPosition}`" class="g-tab-header">
        <div class="acitve-bar" ref="activebar"></div>
        <div class="tab-header-button">
            <slot name="button"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
	import {arrIndexSum} from './common';

	export default {
		name: 'g-tab-header',
		inject: ['tabEventBus'],
		data() {
			return {
				activeCourrent: null,
				labelArr: [],
				widthArr: [],
				heightArr: [],
			};
		},
		computed: {
			tabHeaderPosition() {
				return this.$parent.position;
			},
		},
		created() {
			this.tabEventBus.$on('update:label', (value) => {
				console.log(this.tabHeaderPosition);
				let index;
				this.activeCourrent = value;
				//接受到label变了  就执行active-bar运动的动画
				index = this.labelArr.indexOf(value);
				if (this.tabHeaderPosition === 'top' || this.tabHeaderPosition === 'bottom') {
					this.$refs.activebar.style.transform = `translateX(${arrIndexSum(this.widthArr, index - 1) +
					'px'})`;
					this.$refs.activebar.style.width = this.widthArr[index] + 'px';
				} else {
					this.$refs.activebar.style.transform = `translateY(${arrIndexSum(this.heightArr, index - 1) +
					'px'})`;
					this.$refs.activebar.style.height = this.heightArr[index] + 'px';
				}
			});
		},
		mounted() {
			/*bar的移动*/
			this.$children.forEach((item, index) => {
				if (item.$options.name === 'tab-header-item') {
					this.widthArr.push(parseInt(getComputedStyle(item.$el).width));
					this.heightArr.push(parseInt(getComputedStyle(item.$el).height));
					this.labelArr.push(item.label);
				}
			});
			// /*position*/
			// //检测父组件是否有position
			// if(this.$parent.position){
			//
			// }
		},
	};
</script>

<style lang="scss" scoped>
    .g-tab-header {
        position: relative;
        font-size: 0;

        .tab-header-button {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        &:after {
            content: "";
            position: absolute;
            background-color: #e4e7ed;
            z-index: 1;
        }

        .acitve-bar {
            position: absolute;
            background: #409eff;
            transition: transform .3s cubic-bezier(.645, .045, .355, 1);
            z-index: 10;
        }

        &.tab-position-top {
            &:after {
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background-color: #e4e7ed;
                z-index: 1;
            }

            > .acitve-bar {
                height: 2px;
                left: 0;
                bottom: 0;
            }
        }

        &.tab-position-left {
            float: left;
            margin-right: 10px;
            text-align: right;

            &:after {
                height: 100%;
                right: 0;
                top: 0;
                width: 2px;
            }

            > .tab-header-item {
                display: block;
            }

            > .acitve-bar {
                top: 0;
                right: 0;
                width: 2px;
                height: 20px;
            }
        }

        &.tab-position-right {
            float: right;
            margin-left: 10px;
            text-align: left;

            > .tab-header-item {
                display: block;
            }

            > .acitve-bar {
                top: 0;
                left: 0;
                width: 2px;
                height: 20px;
            }

            &:after {
                height: 100%;
                width: 2px;
                left: 0;
                top: 0;
            }
        }

        &.tab-position-bottom {
            > .acitve-bar {
                bottom: 0;
                left: 0;
                height: 2px;
            }

            &:after {
                width: 100%;
                height: 2px;
                left: 0;
                bottom: 0;
            }
        }
    }
</style>

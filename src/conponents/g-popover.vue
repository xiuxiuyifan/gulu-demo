<template>
    <div class="g-popover ib">
        <div class="ib button-wrapper" ref="buttonWrapper">
            <slot name="button"></slot>
        </div>
        <div class="ib content-wrapper" :class="{[`content-position-${position}`]:true}" ref="contentWrapper" v-show="isShow">
            <slot name="content" :close="close"></slot>
        </div>
    </div>
</template>

<script>

    //  支支持 4个方位
    //  支持 click or hover
    //  支持 点击document 关闭
	export default {
		name: 'g-popover',
        props:{
			trigger:{
				type:String,
                default: 'click',
                validate(value) {
					if(['click','hover'].indexOf(value) > 0 ){
						return value;
                    }else{
						console.log("trigger的方式不合格规范")
                    }
				}
			},
			position:{
				type:String,
                default: 'top',
                validate(value){
                	if(['top','bottom','left','right'].indexOf(value) > 0){
                        return value;
                    }else {
                		console.warn("position的props不符合规则")
                    }
                }
            }
        },
		data() {
			return {
				isShow: false,
			};
		},
		mounted() {
			//将content 里面的东西移动到body 下面
			document.body.appendChild(this.$refs.contentWrapper);
			//判断当前的trigger
            if(this.trigger==='click'){
            	this.$el.addEventListener('click', this.click)
            }else {
				this.$el.addEventListener('mouseover', this.open)
				this.$el.addEventListener('mouseout', this.close)
			}
		},
		methods: {
			click(event) {
				//判断当前点击的是  button 还是  conetnt
                if(this.$refs.buttonWrapper.contains(event.target)){
					if (this.isShow !== true) {
						this.open();
					} else {
						this.close();
					}
				}else {
                	return;
                }
			},
			checkPosition() {
				//内容 属性
				const {height:cenHeight, width: cenWidth} = this.$refs.contentWrapper.getBoundingClientRect();
				//按钮的属性
				const {width, left, top,height} = this.$refs.buttonWrapper.getBoundingClientRect();
				//考虑到有滚动条   横向竖向
				//将内容要放在按钮正上方的正中央
				let diffWidth,diffHeight;
				diffWidth = width >= cenWidth ? (width - cenWidth) / 2 : (width - cenWidth) / 2;
				diffHeight = height < cenHeight ? (height - cenHeight) / 2 : (height - cenHeight) / 2;
				this.$refs.contentWrapper.style.position = 'absolute';
				let positions = {
					top:{
						top: top - cenHeight - 12 + window.scrollY ,
				        left: left + diffWidth + window.scrollX,
				    },
				    right:{
						top: top + diffHeight  + window.scrollY,
				        left: left + width + 12 + window.scrollX,
				    },
				    bottom:{
						top: top + 12 + height + window.scrollY,
						left: left + diffWidth + window.scrollX ,
				    },
				    left:{
						top: top + diffHeight  + window.scrollY,
						left: left - cenWidth - 12 + window.scrollX,
				    }
				}
				this.$refs.contentWrapper.style.top = positions[this.position].top+ 'px';
				this.$refs.contentWrapper.style.left = positions[this.position].left+ 'px';
			},
            //控制弹出层 就给document 添加监听
            open(){
                this.isShow = true;
                console.log('我是button的事件');
                //只在 contentWrapper 出来之后给document 添加绑定事件    隐藏的时候不做处理
                this.$nextTick(() => {
                    //将content 放在正确的位置
                    this.checkPosition();
                    document.addEventListener('click', this.lintenDocument);
                });
            },
            //关闭就移除 document 的事件
            close(){
				this.isShow = false;
				document.removeEventListener('click', this.lintenDocument);
			},
            lintenDocument(event){
				//点的是popover 就不管
				if(this.$refs.contentWrapper.contains(event.target)||this.$refs.buttonWrapper.contains(event.target)){
					return;
                }
				else {
					this.close()
                }
				console.log('我是doc的事件');
			}
			// 点击其他地方   wrapperContent

			// 点击wrapperCOntent 自身不消失

		},
        destroyed() {
			document.removeEventListener('click',this.open)
            document.removeEventListener('mouseover',this.open)
            document.removeEventListener('mouseout',this.close)
        }
	};
</script>

<style lang="scss" scoped>
    .g-popover {
        position: relative;
        .content-wrapper{
        }
        .button-wrapper {
        }
    }
    .content-wrapper{
        filter: drop-shadow(0 2px 12px rgba(0,0,0,.1));
        word-break: break-all;
        border: 1px solid #999;
        max-width: 20em;
        background: #ffffff;
        border-radius: 4px;
        z-index: 1000;
        &::after,&::before{
            content: "";
            width: 0;
            height: 0;
            position: absolute;
        }
        &::after{
            border: 12px solid transparent;
        }
        &:before{
            border: 12px solid transparent;
        }
    }
    .content-position-top{
        &:before{
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            border-bottom-style: none;
            border-top-color: #999;
        }
        &::after{
            bottom: -11px;
            left: 50%;
            transform: translateX(-50%);
            border-bottom-style: none;
            border-top-color: #ffffff;
        }
    }

    .content-position-right{
        &:before{
            left: -12px;
            top: 50%;
            transform: translateY(-50%);
            border-left-style: none;
            border-right-color: #999999;
        }
        &::after{
            left: -11px;
            top: 50%;
            transform: translateY(-50%);
            border-left-style: none;
            border-right-color: #fff;
        }
    }
    .content-position-bottom{
        &:before{
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            border-top-style: none;
            border-bottom-color: #999;
        }
        &::after{
            top: -11px;
            left: 50%;
            transform: translateX(-50%);
            border-top-style: none;
            border-bottom-color: #ffffff;
        }
    }
    .content-position-left{
        &:before{
            right: -12px;
            top: 50%;
            transform: translateY(-50%);
            border-right-style: none;
            border-left-color: #999999;
        }
        &::after{
            right: -11px;
            top: 50%;
            transform: translateY(-50%);
            border-right-style: none;
            border-left-color: #fff;
        }
    }
</style>

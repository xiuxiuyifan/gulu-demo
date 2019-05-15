<template>
    <div class="g-popover ib">
        <div class="ib buttonWrapper" ref="buttonWrapper" @click="clickBtn($event)">
            <slot name="button"></slot>
        </div>
        <div class="ib contentWrapper" ref="contentWrapper" v-show="isShow">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'g-popover',
        data(){
			return {
				isShow:false
            }
        },
        mounted(){
			//将content 里面的东西移动到body 下面
            document.body.appendChild(this.$refs.contentWrapper);
        },
        methods:{
			clickBtn(event){
				this.isShow = !this.isShow;
				console.log('我是button的事件');
				//只在 contentWrapper 出来之后给document 添加绑定事件    隐藏的时候不做处理
                if(this.isShow===true){
					this.$nextTick(()=>{
						//将content 放在正确的位置
                        this.checkPosition(event);
						const hanlder = (e)=>{
							console.log('document的事件');
							this.isShow = false;
							document.removeEventListener('click',hanlder)
						}
						document.addEventListener('click',hanlder)
					})
                }
            },
            checkPosition(event){
				console.log(event);
				// console.log(window.getComputedStyle(this.$refs.buttonWrapper));
                const {height} = this.$refs.contentWrapper.getBoundingClientRect();
                const {width,left,top} = this.$refs.buttonWrapper.getBoundingClientRect();
                //考虑到有滚动条   横向竖向
                //将内容要放在按钮正上方的正中央

                this.$refs.contentWrapper.style.left = left-(width/2)+window.scrollX+'px';
                this.$refs.contentWrapper.style.top = top-height+window.scrollY+'px';
                this.$refs.contentWrapper.style.position = 'absolute';
			}
			// 点击其他地方   wrapperContent

            // 点击wrapperCOntent 自身不消失

        }
	};
</script>

<style lang="scss" scoped>
    .g-popover{
        position: relative;
        .buttonWrapper{

        }
        .contentWrapper{
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            padding: 1em;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            word-break: break-all;
            border: 1px solid #ebeef5;
            background: #ffffff;
            min-width: 150px;
            margin-bottom: 12px;
        }
    }
</style>

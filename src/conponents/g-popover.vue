<template>
    <div class="g-popover ib">
        <div class="ib buttonWrapper" @click="clickBtn">
            <slot name="button"></slot>
        </div>
        <div class="ib contentWrapper" @click="" v-if="isShow">
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
        },
        methods:{
			clickBtn(){
				this.isShow = !this.isShow;
				console.log('我是button的事件');
				//只在 contentWrapper 出来之后给document 添加绑定事件    隐藏的时候不做处理
                if(this.isShow===true){
					this.$nextTick(()=>{
						const hanlder = (e)=>{
							console.log('document的事件');
							this.isShow = false;
							document.removeEventListener('click',hanlder)
						}
						document.addEventListener('click',hanlder)
					})
                }
            },
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

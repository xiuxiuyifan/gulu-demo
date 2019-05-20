<template>
    <div class="collapse-item">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'collapseItem',
        inject:['eventBus'],
        props:{
			title:{
				type:String,
				validator(value){
					if (value) {
						return value;
					} else {
						console.log('title不能为空');
					}
				}
            },
            name:{
				type: String,
                validator(value) {
					if (!value){
						console.log("name 不能为空")
                    }else {
						return value
                    }
				}
			}
        },
        data(){
			return {
                open: false
            }
        },
        mounted() {
			this.eventBus.$on('update:select',(value)=>{
				console.log("子組件")
                console.log(value)
                if(value.indexOf(this.name) >= 0){
                	this.open = true;
                }
            })
        },
        methods:{
			toggle(){
                if(this.open === true){
                	this.open = false;
					this.eventBus.$emit('update:change',{type:"del",value:this.name})
				}else {
                	this.open = true;
					this.eventBus.$emit('update:change',{type:"add",value:this.name})
				}
            }
        }
	};
</script>

<style lang="scss" scoped>
    .collapse-item{
        &:last-child{
            margin-bottom: -1px;
        }
        >.title{
            height: 48px;
            line-height: 48px;
            background-color: #fff;
            color: #303133;
            cursor: pointer;
            border-bottom: 1px solid #ebeef5;
            font-size: 13px;
            font-weight: 500;
            transition: border-bottom-color .3s;
            outline: none;
        }
        >.content{
            border-bottom: 1px solid #ebeef5;
            padding-bottom: 25px;
            line-height: 1.769230769230769;
        }
    }
</style>

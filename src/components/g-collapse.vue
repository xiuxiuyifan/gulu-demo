<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from "vue"
	export default {
		name: 'collapse',
        props:{
			selected:{
				type:Array,
            }
        },
        provide() {
			return {eventBus:this.eventBus}
		},
        data(){
			return {
				eventBus: new Vue()
            }
        },
        mounted() {
            this.eventBus.$emit('update:select',this.selected);
            this.eventBus.$on('update:change',(value)=>{
				let arr = JSON.parse(JSON.stringify(this.selected));
				console.log(arr)
				if(value.type === 'add'){
					console.log(arr)
                    arr.push(value.value)
					this.eventBus.$emit('update:selected',arr);
                }else {
					arr.splice(arr.indexOf(value.value),1);
					this.eventBus.$emit('update:selected',arr);
					console.log(arr)
                }
            })
		}
	};
</script>

<style lang="scss" scoped>
    .collapse{
        border-top: 1px solid #ebeef5;
        border-bottom: 1px solid #ebeef5;
    }
</style>

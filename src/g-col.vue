<template>
    <div :class="colclass" class="g-col" :style="colstyle">
        <!--<div class="col-content">-->
        <slot></slot>
        <!--</div>-->
    </div>
</template>

<script>
	export default {
		name: 'g-col',
		data() {
			return {
				gutter: 0,
			};
		},
		created() {

		},
		computed: {
			colclass: function() {
				let {span, offset} = this;
				return [span && `col_span${span}`, offset && `col_offset${offset}`];
			},
			colstyle: function() {
				let {gutter} = this;
				return {
					paddingLeft: gutter / 2 + 'px',
					paddingRight: gutter / 2 + 'px',
				};
			},
		},
		props: {
			span: {
				type: [Number, String],
			},
			offset: {
				type: [Number, String],
			},
		},
		created() {
			console.log('子组件创建了');
		},
		mounted() {
			console.log('子组件加入');
			console.log(this.gutter);
		},
	};
</script>

<style lang="scss" scoped>
    .g-col {
        float: left;
        height: 100px;
        text-align: center;
        /*padding-left: 10px;*/
        /*padding-right: 10px;*/
        border: 1px solid green;
    }

    $class_span: col_span;
    $class_offset: col_offset;
    // loops through 100 times
    @for $n from 1 through 24 {

        // for each $col_#{i}
        .#{$class_span}#{$n} {
            width: ($n/24) * 100%;
        }
        .#{$class_offset}#{$n} {
            margin-left: ($n/24)*100%;
        }
    }
</style>

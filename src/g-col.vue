<template>
    <div class="g-col" :class="span && `col_span${span}`"></div>
</template>

<script>
	export default {
		name: 'g-col',
		props: {
			span: {
				type: [Number, String],
			},
		},
	};
</script>

<style lang="scss" scoped>
    .g-col {
        border: 1px solid green;
        float: left;
        height: 100px;
    }

    $class: col_span;

    // loops through 100 times
    @for $n from 1 through 24 {

        // for each $col_#{i}
        .#{$class}#{$n} {
            width: ($n/24) * 100%;
        }
    }
</style>

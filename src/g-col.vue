<template>
    <div :class="colclass" :style="colstyle" class="g-col">
        <!--<div class="col-content">-->
        <slot></slot>
        <!--</div>-->
    </div>
</template>

<script>
	let createClasses = (value, col_class) => {
		if (value) {
			return `col_${col_class}${value}`;
		}
	};
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
				let {span, offset, xs, sm, md, lg, xl, xxl} = this;
				console.log(this);
				return [
					// span && `col_span${span}`,
					// offset && `col_offset${offset}`,
					// xs && `col_xs${xs}`,
					// sm && `col_sm${sm}`,
					// md && `col_md${md}`,
					// lg && `col_lg${lg}`,
					// xl && `col_xl${xl}`,
					// xxl && `col_xxl${xxl}`,
					createClasses(span, 'span'),
					createClasses(offset, 'offset'),
					createClasses(xs, 'xs'),
					createClasses(sm, 'sm'),
					createClasses(md, 'md'),
					createClasses(lg, 'lg'),
					createClasses(xl, 'xl'),
					createClasses(xxl, 'xxl'),
				];
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
			xs: {
				type: [Number, String],
			},
			sm: {
				type: [Number, String],
			},
			md: {
				type: [Number, String],
			},
			lg: {
				type: [Number, String],
			},
			xl: {
				type: [Number, String],
			},
			xxl: {
				type: [Number, String],
			},
		},
		created() {
		},
		mounted() {
			console.log(this.gutter);
		},
	};
</script>

<style lang="scss" scoped>
    .g-col {
        float: left;
        height: 100px;
        text-align: center;
    }

    $class_span: col_span;
    $class_offset: col_offset;
    $class_xs: col_xs;
    $class_sm: col_sm;
    $class_md: col_md;
    $class_lg: col_lg;
    $class_xl: col_xl;
    $class_xxl: col_xxl;
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

    @for $n from 1 through 24 {

        // for each $col_#{i}
        .#{$class_span}#{$n} {
            width: ($n/24) * 100%;
        }
        .#{$class_offset}#{$n} {
            margin-left: ($n/24)*100%;
        }
    }

    @for $n from 1 through 24 {
        @media(min-width: 0px) {
            .#{$class_xs}#{$n} {
                width: ($n/24) * 100%;
            }
        }
    }

    @for $n from 1 through 24 {

        @media(min-width: 576px) {
            .#{$class_sm}#{$n} {
                width: ($n/24) * 100%;
            }
        }
    }

    @for $n from 1 through 24 {

        // for each $col_#{i}
        @media(min-width: 768px) {
            .#{$class_md}#{$n} {
                width: ($n/24) * 100%;
            }
        }
    }

    @for $n from 1 through 24 {

        // for each $col_#{i}
        @media(min-width: 992px) {
            .#{$class_lg}#{$n} {
                width: ($n/24) * 100%;
            }
        }
    }

    @for $n from 1 through 24 {
        @media(min-width: 1200px) {
            .#{$class_xl}#{$n} {
                width: ($n/24) * 100%;
            }
        }

    }

    @for $n from 1 through 24 {
        @media(min-width: 1600px) {
            .#{$class_xxl}#{$n} {
                width: ($n/24) * 100%;
            }
        }
    }

</style>

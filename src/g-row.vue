<template>
    <div class="g-row">
        <slot></slot>
    </div>
</template>

<script>
	import Gcol from './g-col';

	export default {
		name: 'g-row',
	};
</script>

<style lang="scss" scoped>
    .g-row {
        &::before, &::after {
            content: '';
            display: table;
        }

        &::after {
            clear: both;
        }
    }
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	export let imgProps: ImageProps;
	let loaded = false;
	let currImg: HTMLImageElement;
	onMount(() => {
		currImg.onload = () => {
			loaded = true;
		};
	});
</script>

<img {...imgProps} alt={imgProps.alt} bind:this={currImg} class:loaded decoding="async" />

<style>
	img {
		height: inherit;
		opacity: 0;
		transition: opacity 1200ms ease-out;
	}
	img.loaded {
		opacity: 1;
	}
</style>

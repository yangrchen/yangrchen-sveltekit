<script lang="ts">
	// import drawings from '$lib/data/drawings.json';
	import IntersectionObserverArtImage from '$lib/components/IntersectionObserverArtImage.svelte';
	import LazyImage from '$lib/components/LazyImage.svelte';
	import { onMount } from 'svelte';

	// Artwork images imports - currently manual since dynamic imports is finicky for images
	import drawings from '$lib/data/drawings';
</script>

{#each drawings as drawingProps}
	{@const imgProps = {
		'data-src': drawingProps.dataSrc,
		'data-srcset': drawingProps.dataSrcset,
		alt: drawingProps.alt
	}}
	{@const artInfo = {
		displayName: drawingProps.displayName
	}}
	<IntersectionObserverArtImage {artInfo}>
		<LazyImage {imgProps} />
	</IntersectionObserverArtImage>
{/each}

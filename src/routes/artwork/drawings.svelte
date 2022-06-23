<script lang="ts">
	// import drawings from '$lib/data/drawings.json';
	import IntersectionObserverArtImage from '$lib/components/IntersectionObserverArtImage.svelte';
	import LazyImage from '$lib/components/LazyImage.svelte';
	import { onMount } from 'svelte';

	// Artwork images imports - currently manual since dynamic imports is finicky for images
	import drawings from '$lib/data/drawings';
	console.log(drawings);
</script>

{#each drawings as imgProps}
	<IntersectionObserverArtImage>
		<LazyImage {imgProps} />
	</IntersectionObserverArtImage>
{/each}

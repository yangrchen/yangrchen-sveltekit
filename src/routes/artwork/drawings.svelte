<script lang="ts">
	import drawings from '$lib/data/drawings.json';
	import IntersectionObserverArtImage from '$lib/components/IntersectionObserverArtImage.svelte';
	import LazyImage from '$lib/components/LazyImage.svelte';
</script>

{#each drawings as imgProps}
	<IntersectionObserverArtImage>
		<LazyImage {imgProps} />
	</IntersectionObserverArtImage>
{/each}

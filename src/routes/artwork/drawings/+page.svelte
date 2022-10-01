<script lang="ts">
	import IntersectionObserverArtImage from '$lib/components/IntersectionObserverArtImage.svelte';
	import LazyImage from '$lib/components/LazyImage.svelte';

	// Artwork images imports - currently manual since dynamic imports is finicky for images
	import drawings from '$lib/data/drawings';
</script>

{#each drawings as imgProps}
	<IntersectionObserverArtImage let:intersecting>
		{#if intersecting}
			<LazyImage {imgProps} />
			<div
				class="absolute top-0 left-0 right-0 z-100 w-100 h-full text-4xl overlay bg-gray-800  opacity-0 hover:opacity-80  transition-opacity ease-in-out duration-500"
			>
				<p class="mt-12 text-white">{imgProps.displayName}</p>
			</div>
		{/if}
	</IntersectionObserverArtImage>
{/each}

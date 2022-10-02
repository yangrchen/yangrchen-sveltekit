<script lang="ts">
	import IntersectionObserverArtImage from '$lib/components/IntersectionObserverArtImage.svelte';
	import LazyImage from '$lib/components/LazyImage.svelte';

	// Artwork images imports - currently manual since dynamic imports is finicky for images
	import drawings from '$lib/data/drawings';
</script>

{#each drawings as drawingProps}
	<IntersectionObserverArtImage bottom={-100} let:intersecting>
		{#if intersecting}
			{@const imgProps = { srcset: drawingProps.srcset, alt: drawingProps.alt }}
			<LazyImage {imgProps} />
			<div
				class="absolute top-0 left-0 right-0 z-100 h-full pl-4 md:px-10 text-lg md:text-5xl lg:text-4xl overlay bg-gray-800  opacity-0 hover:opacity-80 transition-opacity ease-in-out duration-500 text-white"
			>
				<p class="mt-10 md:mt-24">{drawingProps.displayName}</p>
				<p class="mt-10 md:mt-24">{drawingProps.medium}</p>
			</div>
		{/if}
	</IntersectionObserverArtImage>
{/each}

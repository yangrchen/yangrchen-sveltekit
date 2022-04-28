<script>
	import drawings from '$lib/data/drawings.json';
	import IntersectionObserverArtImage from '$lib/components/IntersectionObserverArtImage.svelte';
	import Image from '$lib/components/Image.svelte';
</script>

{#each drawings as imgProps}
	<IntersectionObserverArtImage>
		<Image {imgProps} />
	</IntersectionObserverArtImage>
{/each}

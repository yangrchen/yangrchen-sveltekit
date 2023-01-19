<script lang="ts">
	import { lazyLoad } from '$lib/actions/lazyLoad';
	import type { PageData } from './$types';

	// Artwork images imports - currently manual since dynamic imports is finicky for images
	// import drawings from '$lib/data/drawings';
	export let data: PageData;
</script>

<!-- {#each data.keys as key}
	<div class="relative h-[25em] md:h-[56em] lg:h-[38em] 2xl:h-[40em]">
		<img
			src=""
			class="transition-opacity duration-1000 opacity-0 ease-out h-[inherit]"
			use:lazyLoad={{
				src: `https://ik.imagekit.io/njmlmvvtw/${key}?`,
				srcset: `https://ik.imagekit.io/njmlmvvtw/${key}?tr=w-388 388w, https://ik.imagekit.io/njmlmvvtw/${key}?tr=w-768 768w, https://ik.imagekit.io/njmlmvvtw/${key}?tr=w-1366 1366w`
			}}
			sizes="(max-width: 388px) 388px, (min-width: 768px) 30vw, 768px"
			alt=""
		/>
	</div>
{/each} -->
<!-- {#each data.urls as url}
	<div class="relative h-[25em] md:h-[56em] lg:h-[38em] 2xl:h-[40em]">
		<img
			src={url}
			alt=""
			use:lazyLoad={url}
			class="transition-opacity duration-1000 opacity-0 ease-out h-[inherit]"
		/>
	</div>
{/each} -->

<!-- {#each drawings as drawingProps}
	{@const imgProps = { srcset: drawingProps.srcset, alt: drawingProps.alt }}
	<div class="relative h-[25em] md:h-[56em] lg:h-[38em] 2xl:h-[40em]">
		<img
			alt={imgProps.alt}
			use:lazyLoad={{ src: '', srcset: drawingProps.srcset }}
			class="transition-opacity duration-1000 opacity-0 ease-out h-[inherit]"
		/>
		<div
			class="absolute top-0 left-0 right-0 z-100 h-full pl-4 md:px-10 text-lg md:text-5xl lg:text-4xl overlay bg-gray-800  opacity-0 hover:opacity-80 transition-opacity ease-in-out duration-500 text-white"
		>
			<p class="mt-10 md:mt-24">{drawingProps.displayName}</p>
			<p class="mt-10 md:mt-24">{drawingProps.medium}</p>
		</div>
	</div>
{/each} -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { ObjectSchema } from 'yup';
	export let top = 0;
	export let bottom = 0;
	export let left = 0;
	export let right = 0;
	export let artInfo: any = {};

	let intersecting = false;
	let container: Element;

	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;
			const observer = new IntersectionObserver(
				(entries) => {
					intersecting = entries[0].isIntersecting;
					if (intersecting) {
						console.log('is intersecting');
						observer.unobserve(container);
						let img = entries[0].target.firstChild as HTMLImageElement;
						if (img.dataset.srcset) {
							img.srcset = img.dataset.srcset as string;
						} else {
							img.src = img.dataset.src as string;
						}
					}
				},
				{
					rootMargin,
					threshold: 0.3
				}
			);

			observer.observe(container);
			return () => observer.unobserve(container);
		}
	});
</script>

<div
	class="relative h-[25em] md:h-[64em] lg:h-[35em] 2xl:h-[40em] overlay-container"
	bind:this={container}
>
	<slot />
	{#if Object.keys(artInfo).length !== 0 && intersecting}
		<div
			class="absolute top-0 left-0 right-0 z-100 w-100 h-full text-4xl overlay bg-gray-800 opacity-0 hover:opacity-80 transition-opacity ease-in-out delay-200"
		>
			<p class="mt-12 text-white">{artInfo.displayName}</p>
		</div>
	{/if}
</div>

<style>
	/* .overlay {
		transition: opacity 1200ms ease-in;
	}

	.overlay-container:hover .overlay {
		opacity: 0.8;
	} */
</style>

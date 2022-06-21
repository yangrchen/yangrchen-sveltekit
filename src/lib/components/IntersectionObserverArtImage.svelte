<script lang="ts">
	import { onMount } from 'svelte';
	export let top = 0;
	export let bottom = 0;
	export let left = 0;
	export let right = 0;

	let intersecting = false;
	let container: Element;

	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;
			const observer = new IntersectionObserver(
				(entries) => {
					intersecting = entries[0].isIntersecting;
					if (intersecting) {
						observer.unobserve(container);
						let img = entries[0].target.firstChild as HTMLImageElement;
						img.src = img.dataset.src as string;
						img.srcset = img.dataset.srcset as string;
					}
				},
				{
					rootMargin,
					threshold: 0.2
				}
			);

			observer.observe(container);
			return () => observer.unobserve(container);
		}
	});
</script>

<div class="h-[25em] md:h-[45em] lg:h-[35em] 2xl:h-[40em]" bind:this={container}>
	<slot />
</div>

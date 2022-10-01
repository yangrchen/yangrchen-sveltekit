<script lang="ts">
	import { onMount } from 'svelte';
	export let top = 0;
	export let bottom = -100;
	export let left = 0;
	export let right = 0;

	let intersecting = false;
	let container: Element;

	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const rootMargin = `${top}px ${right}px ${bottom}px ${left}px`;
			const observer = new IntersectionObserver(
				(entries) => {
					intersecting = entries[0].isIntersecting;
					if (intersecting) {
						observer.unobserve(container);
					}
				},
				{
					rootMargin,
					threshold: 1.0
				}
			);

			observer.observe(container);
			return () => observer.unobserve(container);
		}
	});
</script>

<div class="relative h-[25em] md:h-[64em] lg:h-[35em] 2xl:h-[40em]" bind:this={container}>
	<slot {intersecting} />
</div>

<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		let observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						let img = entry.target as HTMLImageElement;
						img.src = img.dataset.src as string;
						observer.unobserve(img);
					}
				});
			},
			{ rootMargin: '0px 0px 0px 0px' }
		);
		document.querySelectorAll('.intersect').forEach((div) => {
			observer.observe(div.firstChild as Element);
		});
	});
</script>

<div class="intersect h-[25em] md:h-[45em] lg:h-[35em] 2xl:h-[40em]">
	<slot />
</div>

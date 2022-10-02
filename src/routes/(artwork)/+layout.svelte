<script>
	import { page } from '$app/stores';

	let routes = [
		['./drawings', 'drawings'],
		['./digital', 'digital'],
		['./graphic', 'graphic']
	];
</script>

<nav class="pt-2 self-center">
	<ul class="flex space-x-6">
		{#each routes as [path, name]}
			<li>
				<a
					href={path}
					class="border-b-2 hover:border-pink-500 pink-highlight"
					class:border-gray-300={!$page.url.pathname.includes(path.slice(1))}
					class:border-pink-500={$page.url.pathname.includes(path.slice(1))}>{name}</a
				>
			</li>
		{/each}
	</ul>
</nav>
<div
	class="mt-6 flex flex-col space-y-16 justify-center place-items-center md:space-y-16 md:mx-6 lg:grid lg:gap-y-24 lg:gap-x-5 lg:grid-cols-2 lg:space-y-0 xl:gap-y-10 2xl:grid-cols-3"
>
	<slot />
</div>

<style>
	a.pink-highlight {
		background: linear-gradient(
			to bottom,
			rgba(236, 72, 153, 0.3) 0%,
			rgba(236, 72, 153, 0.3) 100%
		);
		background-repeat: no-repeat;
		background-size: 100% 0;
		background-position: 0 100%;
		transition: all 0.5s;
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	a:hover {
		background-size: 100% 110%;
	}
</style>

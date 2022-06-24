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
					class="underline hover:decoration-pink-300"
					class:decoration-gray-400={!$page.url.pathname.includes(path.slice(1))}
					class:decoration-pink-300={$page.url.pathname.includes(path.slice(1))}>{name}</a
				>
			</li>
		{/each}
	</ul>
</nav>
<div
	class="mt-6 flex flex-col space-y-16 justify-center place-items-center md:space-y-16 md:mx-8 lg:grid lg:gap-y-24 lg:gap-x-5 lg:grid-cols-2 lg:space-y-0 xl:gap-y-10 2xl:grid-cols-3 "
>
	<slot />
</div>

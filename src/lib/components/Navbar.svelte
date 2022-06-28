<script lang="ts">
	import { page } from '$app/stores';
	let routes: Array<string[]> = [
		['/', 'about'],
		['/artwork', 'artwork'],
		['/resume', 'resume'],
		['/contact', 'contact']
	];
</script>

<nav class="flex flex-col items-center sticky top-0 p-2 z-50">
	<a href="/" class="text-3xl md:text-5xl">YANG CHEN</a>
	<ul class="flex space-x-4 md:text-2xl">
		{#each routes as [path, name]}
			<li>
				{#if path == '/artwork'}
					<a
						class="pink-highlight border-gray-300 border-b-2 hover:border-pink-500"
						class:border-pink-500={$page.url.pathname.includes(path)}
						class:border-gray-300={!$page.url.pathname.includes(path)}
						href={path + '/drawings'}>{name}</a
					>
				{:else if path === '/'}
					<a
						href={path}
						class="pink-highlight border-b-2 hover:border-pink-500"
						class:border-pink-500={$page.url.pathname === '/'}
						class:border-gray-300={$page.url.pathname !== '/'}>{name}</a
					>
				{:else}
					<a
						class="pink-highlight border-gray-300 border-b-2 hover:border-pink-500"
						class:border-pink-500={$page.url.pathname.includes(path)}
						class:border-gray-300={!$page.url.pathname.includes(path)}
						href={path}>{name}</a
					>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Martel+Sans:wght@200&display=swap');
	nav {
		background-color: #f2f2f2;
	}
	nav > a {
		font-family: 'Martel Sans', sans-serif;
	}
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

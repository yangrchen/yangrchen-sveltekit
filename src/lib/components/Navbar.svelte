<script lang="ts">
	import { page } from '$app/stores';
	let routes: Array<string[]> = [
		['/', 'about'],
		['/artwork', 'artwork'],
		['/resume', 'resume'],
		['/contact', 'contact']
	];
</script>

<nav class="flex flex-col items-center sticky top-0 p-2">
	<a href="/" class="text-3xl md:text-5xl">YANG CHEN</a>
	<ul class="flex space-x-4 md:text-2xl">
		{#each routes as [path, name]}
			<li>
				{#if path == '/artwork'}
					<a
						class="decoration-pink-300 hover:underline"
						class:underline={$page.url.pathname.includes(path)}
						href={path + '/drawings'}>{name}</a
					>
				{:else if path === '/'}
					<a
						href={path}
						class="decoration-pink-300 hover:underline"
						class:underline={$page.url.pathname === '/'}>{name}</a
					>
				{:else}
					<a
						class="decoration-pink-300 hover:underline"
						class:underline={$page.url.pathname.includes(path)}
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
</style>

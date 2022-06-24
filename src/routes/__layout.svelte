<script>
	import '../app.css';
	// @ts-ignore
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="flex flex-col mt-10 xl:mx-48">
	<Navbar />
	<slot />
	<footer class="px-5 text-center text-sm md:text-base mt-14 mb-4">
		Built with love by Yang Chen using <span class="underline">Svelte</span>
		and <span class="underline">Tailwind CSS</span>.
	</footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');

	:global(body) {
		background-color: #f2f2f2;
		font-family: 'Josefin Sans', sans-serif;
	}
</style>

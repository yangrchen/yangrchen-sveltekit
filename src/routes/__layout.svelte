<script>
	import '../app.css';
	// @ts-ignore
	import Navbar from '$lib/components/Navbar.svelte';
	import InstagramLogo from '/static/assets/social/instagram.svg';
	import LinkedinLogo from '/static/assets/social/linkedin.svg';
</script>

<div class="flex flex-col mx-10 mt-10 xl:mx-48">
	<Navbar />
	<slot />
	<footer class="px-5 text-center text-sm md:text-base mt-14 mb-4">
		<div class="flex justify-center space-x-4 mb-2">
			<a href="https://www.instagram.com/imagining.yang/" target="_blank" rel="noopener noreferrer">
				<img src="/assets/social/instagram.svg" width="30" height="30" alt="Instagram logo" />
			</a>
			<a href="https://www.linkedin.com/in/yangrchen/" target="_blank" rel="noopener noreferrer">
				<img src="/assets/social/linkedin.svg" width="30" height="30" alt="LinkedIn logo" />
			</a>
		</div>
		<div>Built with love by Yang Chen using Svelte and Tailwind CSS</div>
	</footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');

	:global(body) {
		background-color: #f2f2f2;
		font-family: 'Josefin Sans', sans-serif;
	}
</style>

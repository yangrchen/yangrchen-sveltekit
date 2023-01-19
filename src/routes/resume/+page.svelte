<script>
	import WorkTile from '$lib/components/WorkTile.svelte';
	import jobs from '$lib/data/jobs.json';
	import Resume from '$lib/assets/yangrchen_resume.pdf';
</script>

<div class="mt-6 md:mt-10">
	<h1 class="text-center text-4xl font-bold">Work</h1>
	<div>
		<a
			href={Resume}
			target="_blank"
			rel="noopener noreferrer"
			class="underline decoration-gray-300 hover:decoration-pink-300">Resume Link</a
		>
	</div>
	<div class="mt-8 space-y-8">
		{#each jobs as job}
			<WorkTile {...job} />
		{/each}
	</div>
</div>

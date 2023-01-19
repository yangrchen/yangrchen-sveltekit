<script lang="ts">
	import type { PageData } from './$types';
	import Dropzone from '$lib/components/Dropzone.svelte';

	export let data: PageData;

	const handleSubmit = async (e: CustomEvent) => {
		const formData = new FormData();
		let files = Object.values(e.detail.files as FileDict<FileObj>).map((f: FileObj) => f.file);
		files.forEach((file) => formData.append('files', file));
		let res = await fetch('/api/images', {
			method: 'POST',
			body: formData
		});
	};
</script>

<Dropzone on:submitFiles={handleSubmit} />

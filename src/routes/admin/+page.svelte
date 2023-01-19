<script lang="ts">
	import Dropzone from '$lib/components/Dropzone.svelte';
	import Alert from '$lib/components/Alert.svelte';
	import { displayAlert, AlertTypes } from '$lib/stores/alerts';

	const handleSubmit = async (e: CustomEvent) => {
		const formData = new FormData();
		let files = Object.values(e.detail.files as FileDict<FileObj>).map((f: FileObj) => f.file);
		files.forEach((file) => formData.append('files', file));
		let res = await fetch('/api/images', {
			method: 'POST',
			body: formData
		});
		displayAlert(
			`${Object.keys(files).length} images have been uploaded to your repository.`,
			AlertTypes.Success,
			5000,
			'Success!'
		);
	};
</script>

<main class="flex flex-col items-center space-y-4 mt-8">
	<Alert />
	<Dropzone on:submitFiles={handleSubmit} showTotalSize={true} maxSize={25000000} />
</main>

<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import Fa from 'svelte-fa';
	import { faTimesSquare } from '@fortawesome/free-solid-svg-icons';

	const dispatch = createEventDispatcher();

	export let showTotalSize = false;
	export let maxSize = 0;

	let files: FileDict<FileObj> = {};
	$: totalSize = Object.values(files).reduce(
		(acc: number, currVal: FileObj) => acc + currVal.file.size,
		0
	);
	let state = {
		isFocused: false,
		count: 0
	};

	onMount(() => {
		window.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		window.addEventListener('drop', function (e) {
			e.preventDefault();
		});
	});

	const handleDrop = async (e: DragEvent) => {
		state.isFocused = false;
		// Check for files and if they are images
		// Only admin will be using this so left out full mimetype validation
		if (e.dataTransfer?.files) {
			const allowedTypes = /(\/jpg|\/jpeg|\/png|\/webp)$/i;
			[...e.dataTransfer.files].forEach((file: File) => {
				if (allowedTypes.exec(file.type)) {
					let reader = new FileReader();
					let newFile: FileObj = { file: file, src: '' };
					reader.onload = (e) => {
						newFile.src = e.target?.result as string;
						files[state.count] = newFile;
						state.count++;
					};
					reader.readAsDataURL(file);
				}
			});
		}
	};
	const handleDragOver = (e: DragEvent) => {
		state.isFocused = true;
	};
	const handleDragEnter = (e: DragEvent) => {
		state.isFocused = true;
	};
	const handleDragLeave = (e: DragEvent) => {
		state.isFocused = false;
	};
	const handleClick = (e: MouseEvent) => {
		document.getElementById('file-loader')?.click();
	};
	const handleKeyDown = (e: KeyboardEvent) => {
		return;
	};
	const handleFileClick = async (e: Event) => {
		let fileInput: HTMLInputElement = e.target as HTMLInputElement;
		if (fileInput.files) {
			[...fileInput.files].forEach((file: File) => {
				let reader = new FileReader();
				let newFile: FileObj = { file: file, src: '' };
				reader.onload = (e) => {
					newFile.src = e.target?.result as string;
					files[state.count] = newFile;
					state.count++;
				};
				reader.readAsDataURL(file);
			});
		}
	};
	const removeFile = (idx: number) => {
		delete files[idx];
		files = files;
	};

	const removeAll = (e: MouseEvent) => {
		if (confirm('Are you sure you want to clear all uploaded images?')) {
			files = {};
			files = files;
		}
	};
	const formatBytes = (bytes: number, decimals = 2) => {
		if (!+bytes) return '0 Bytes';

		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

		const i = Math.floor(Math.log(bytes) / Math.log(k));

		return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
	};
</script>

<div class="w-3/4 flex flex-col items-center justify-center">
	<input
		id="file-loader"
		type="file"
		class="hidden"
		on:change={handleFileClick}
		multiple
		accept="image/png, image/jpeg, image/jpg, image/webp"
	/>
	<!--File preview section -->
	<div
		class="w-full py-10 px-4 relative grid items-center justify-center border-2 border-gray-300 border-dashed gap-y-10"
		class:bg-gray-200={!state.isFocused}
		class:bg-red-100={state.isFocused}
		class:grid-cols-3={Object.keys(files).length}
		on:dragenter|preventDefault={handleDragEnter}
		on:dragleave|preventDefault={handleDragLeave}
		on:dragover|preventDefault={handleDragOver}
		on:drop|preventDefault={handleDrop}
		on:click={handleClick}
		on:keydown={handleKeyDown}
	>
		{#if showTotalSize}
			<p class="absolute top-2 right-2" class:text-red-500={totalSize > maxSize}>
				Total Size: {formatBytes(totalSize)}
				{#if maxSize > 0}
					/ {formatBytes(maxSize)}
				{/if}
			</p>
		{/if}
		<!-- Generate all the files with their thumbnails -->
		{#each Object.entries(files) as [key, value]}
			<div
				class="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-110"
			>
				<div class="relative">
					<div class="w-24 h-24">
						<img src={value.src} alt="" class="w-full h-full object-scale-down" />
					</div>
					<button
						class="absolute right-0 bottom-0"
						on:click|stopPropagation={() => removeFile(+key)}
					>
						<Fa icon={faTimesSquare} size="lg" />
					</button>
				</div>
				<span>{value.file.name} </span>
				<span>{formatBytes(value.file.size)}</span>
			</div>
		{:else}
			<p class="pointer-events-none">
				<span>Upload files here</span>
				<span>Drag and drop, or click to select</span>
			</p>
		{/each}
	</div>
	<div class="flex justify-evenly w-full mt-2">
		<button on:click={removeAll} class="text-red-500">Clear All</button>
		<button
			on:click={handleClick}
			class="text-white rounded px-2 py-1 bg-purple-400 transition-colors hover:bg-indigo-500 "
			>Upload Files</button
		>
		<button
			on:click|preventDefault={() => {
				dispatch('submitFiles', {
					files: files
				});
				files = {};
				state.count = 0;
			}}
			class="bg-blue-500 px-2 py-1 text-white rounded transition-colors"
			class:bg-gray-300={!Object.keys(files).length || (maxSize > 0 && totalSize > maxSize)}
			class:hover:bg-indigo-500={Object.keys(files).length}
			disabled={!Object.keys(files).length || (maxSize > 0 && totalSize > maxSize)}>Submit</button
		>
	</div>
</div>

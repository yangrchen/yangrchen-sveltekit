<script lang="ts">
	import IntersectionObserverArtImage from '$lib/components/IntersectionObserverArtImage.svelte';
	import LazyImage from '$lib/components/LazyImage.svelte';
	import ProfileImage from '/static/assets/profile/yang-profile-2.png?width=1366;768;366&format=webp&aspect=2:3&srcset&imagetools';
	let imgProps: ImageProps = {
		'data-srcset': ProfileImage,
		alt: 'Portrait of author with boxing gloves on',
		'data-src': ''
	};
</script>

<div
	class="flex flex-col space-y-10 lg:space-x-8 md:space-y-0 lg:flex-row mt-12 justify-center items-center"
>
	<IntersectionObserverArtImage>
		<LazyImage {imgProps} />
	</IntersectionObserverArtImage>
	<div
		class="w-5/6 lg:w-2/4 text-l break-words leading-loose md:leading-loose md:text-xl lg:leading-loose lg:text-2xl xl:leading-loose xl:text-xl lg:pt-0 xl:pt-0 space-y-2"
	>
		<p
			class="text-l break-words leading-loose md:leading-loose md:text-xl lg:leading-loose lg:text-2xl xl:leading-loose xl:text-xl md:pt-16 lg:pt-0 xl:pt-0"
		>
			Hiya! I'm Yang, a software consultant and artist based in Chapel Hill. I love to design
			awesome projects for end users at <a
				href="https://www.macedontechnologies.com/"
				target="_blank"
				rel="noopener"
				class="underline decoration-emerald-500">Macedon Technologies</a
			>. Outside of work, I'm an avid
			<a href={'/artwork/drawings'} class="underline decoration-cyan-500">representational artist</a
			>
			and a curious student of the online program at
			<a
				href="https://www.wattsatelier.com/"
				target="_blank"
				rel="noopener"
				class="underline decoration-pink-500">Watts Atelier</a
			>
			Check out my work in the
			<a href={'/artwork/drawings'} class="underline decoration-cyan-500">gallery</a>!
		</p>
		<p>Feel free to ping me by email or social media!</p>
	</div>
</div>

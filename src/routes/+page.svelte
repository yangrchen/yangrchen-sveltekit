<script lang="ts">
	import { lazyLoad } from '$lib/actions/lazyLoad';
	import ProfileImage from '/src/assets/profile/yang-profile-2.png?width=1366;768;366&format=webp&aspect=2:3&srcset&imagetools';
	let imgProps: ImageProps = {
		srcset: ProfileImage,
		alt: 'Portrait of author with boxing gloves on'
	};
</script>

<div
	class="flex flex-col space-y-10 lg:space-x-8 md:space-y-0 lg:flex-row mt-12 justify-center items-center"
>
	<div class="relative h-[25em] md:h-[56em] lg:h-[38em] 2xl:h-[40em]">
		<img use:lazyLoad={imgProps.srcset} alt={imgProps.alt} />
	</div>
	<div
		class="w-5/6 lg:w-2/4 text-l break-words leading-loose md:leading-loose md:text-xl lg:leading-loose lg:text-2xl xl:leading-loose xl:text-xl lg:pt-0 xl:pt-0 space-y-2"
	>
		<p
			class="text-l break-words leading-loose md:leading-loose md:text-xl lg:leading-loose lg:text-2xl xl:leading-loose xl:text-xl md:pt-16 lg:pt-0 xl:pt-0"
		>
			Hiya! I'm Yang, a software consultant and artist based in Chapel Hill. I love to design
			awesome projects for end users at
			<a
				href="https://www.macedontechnologies.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="border-b-2 border-emerald-300 hover:border-emerald-500 green-highlight"
			>
				Macedon Technologies</a
			>. Outside of work, I'm an avid
			<a href={'/drawings'} class="border-b-2 border-cyan-300 hover:border-cyan-500 blue-highlight">
				representational artist</a
			>
			and a curious student of the online program at
			<a
				href="https://www.wattsatelier.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="border-b-2 border-pink-300 hover:border-pink-500 pink-highlight">Watts Atelier</a
			>
			and
			<a
				href="https://foundationartschool.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="border-b-2 border-pink-300 hover:border-pink-500 pink-highlight"
				>Foundation Art School</a
			>. Check out my work in the
			<a href={'/drawings'} class="border-b-2 border-cyan-300 hover:border-cyan-500 blue-highlight"
				>gallery</a
			>!
		</p>
		<p>Feel free to ping me by email or social media!</p>
	</div>
</div>

<style>
	img {
		height: inherit;
		opacity: 0;
		transition: opacity 1200ms ease-out;
	}
	a.blue-highlight {
		background: linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%);
		background-repeat: no-repeat;
		background-size: 100% 0;
		background-position: 0 111%;
		transition: all 0.5s;
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
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
	a.green-highlight {
		background: linear-gradient(
			to bottom,
			rgba(16, 185, 129, 0.3) 0%,
			rgba(16, 185, 129, 0.3) 100%
		);
		background-repeat: no-repeat;
		background-size: 100% 0;
		background-position: 0 111%;
		transition: all 0.5s;
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	a:hover {
		background-size: 100% 110%;
	}
</style>

<script>
    import { onMount } from "svelte";
    export let imgProps;

    let loaded = false;
    let currImg;
    onMount(() => {
        currImg.onload = () => {
            loaded = true;
        };
    });
</script>

<img {...imgProps} bind:this={currImg} class:loaded decoding="async" />

<style>
    img {
        width: 100%;
        height: inherit;
        opacity: 0;
        transition: opacity 1200ms ease-out;
    }
    img.loaded {
        opacity: 1;
    }
</style>

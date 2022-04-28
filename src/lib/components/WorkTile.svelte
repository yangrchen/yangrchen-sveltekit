<script>
    export let company;
    export let dateString;
    export let title;
    export let description;
    export let skills = [];
    export let href = "";
    let actualDesc = description.join(" / ");
</script>

<div class="grid gap-4 grid-cols-2">
    <div>
        <h1 class="font-bold text-xl md:text-3xl">
            {#if href !== ""}
                <a
                    {href}
                    class="underline decoration-gray-300 hover:decoration-pink-300"
                    rel="noopener"
                    target="_blank">{company}</a
                >
            {:else}
                <p>{company}</p>
            {/if}
        </h1>
        <h2 class="text-sm md:text-xl">{title}</h2>
        <h3 class="text-sm md:text-xl">{dateString}</h3>
    </div>
    <p class="md:text-xl">
        {actualDesc}
    </p>
    <div />
    <ul class="flex flex-wrap leading-none space-x-2">
        {#each skills as skill}
            <li class="py-1 px-2 mt-1 rounded-full bg-red-100 text-sm">
                {skill}
            </li>
        {/each}
    </ul>
</div>

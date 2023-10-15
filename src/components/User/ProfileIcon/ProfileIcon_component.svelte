<script>
    export let image_url;
    

</script>
{#if image_url == null}
    <img src="/temp_profile.svg" alt="Temp Profile Icon"/>
{:else}
    <img src={image_url} alt="Temp Profile Icon"/>
{/if}

<style>

    img {
        width: var(--width);
    }
</style>
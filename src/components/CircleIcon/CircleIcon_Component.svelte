<script>
    export let icon1 = "default text";
    export let icon2 = "default text";
    export let name = "default text";
    export let alt = "default text";
    let selected = false;

    /* 
        Swaps the icons around when the user clicks. 
        The first block assigns icon1 (the default) to a variable temp, before assigning icon2 in its place.
        Then, it assigns temp to icon2. The second block is the same, in the opposite direction.
    */
    function swapIcon() {
        if (!selected) {
            let temp = icon1
            icon1 = icon2;
            icon2 = temp;
            selected = false;
        } else {
            let temp = icon2;
            icon2 = icon1;
            icon1 = temp;
            selected = true;
        }
    }
</script>

<div>
    <!-- Gets rid of some annoying IDE Warnings (Code is fine)-->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img src={icon1} alt={alt} on:click={swapIcon} />
    <h3>{name}</h3>
</div>
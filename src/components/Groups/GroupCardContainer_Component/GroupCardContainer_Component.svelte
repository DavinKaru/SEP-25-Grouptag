<script>
    import GroupCardComponent from "./GroupCard_Component/GroupCard_Component.svelte";

    let screenSize = window.innerWidth;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div id="group-card-container">

    <!--If device is not a mobile-->
    {#if screenSize >= 400}
    <div class="row">
        <GroupCardComponent />
        <GroupCardComponent />
        <GroupCardComponent />
        <GroupCardComponent />
        <GroupCardComponent />
    </div>
    <div class="row">
        <GroupCardComponent />
        <GroupCardComponent />
        <GroupCardComponent />
        <GroupCardComponent />
        <GroupCardComponent />
    </div>
    {:else}
    <div class="row">
        <GroupCardComponent />
        <GroupCardComponent />
    </div>
    {/if}

</div>

<style>
    
#group-card-container {
    display: flex;
    flex-direction: column;

}

.row {
    display: flex;
}

</style>

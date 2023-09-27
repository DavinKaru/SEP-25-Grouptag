<script>
	import GroupCardComponent from './GroupCard_Component/GroupCard_Component.svelte';
	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<!--A very inadequate container for Group Cards. Currently loads in a preset amount of cards depending
    on the device's screen size. TO-DO: Improve responsiveness and load data dynamically from backend-->

<!--If the device is a very large Tablet or PC-->
{#if innerWidth >= 1100}
	<div class="group-card-container">
		<div class="row">
			<GroupCardComponent />
			<GroupCardComponent />
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
            <GroupCardComponent />
			<GroupCardComponent />
		</div>
		<div id="load" style="margin-bottom:12vh;">
			<p>Load more...</p>
		</div>
	</div>
    

<!--If the device is a Tablet or PC-->
{:else if innerWidth >= 700 && innerWidth <= 1100}
	<div class="group-card-container">
		<div class="row">
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
		</div>
		<div id="load" style="margin-bottom:10vh;">
			<p>Load more...</p>
		</div>
	</div>
    
<!--If the device is a Smartphone-->
{:else}
	<div class="group-card-container">
		<div class="row">
			<GroupCardComponent />
			<GroupCardComponent />
		</div>
		<div class="row">
			<GroupCardComponent />
			<GroupCardComponent />
		</div>
		<div class="row">
			<GroupCardComponent />
			<GroupCardComponent />
		</div>
		<div id="load" style="margin-bottom:10vh;">
			<p>Load more...</p>
		</div>
	</div>
{/if}

<style>
	.group-card-container {
		display: flex; 
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

	.row {
		display: flex;
	}

	#load {
		text-align: center;
		margin-top: 15px;
	}
</style>

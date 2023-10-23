<script>
	import GroupCardComponent from './GroupCard/GroupCard_Component.svelte';

	let innerWidth = 0;
	let cardsPerRow = 0;
	export let groups = [];
	//console.log('Groups in GroupCardComponent:', groups);
	$: {
		if (innerWidth >= 1100) {
			cardsPerRow = 5;
		} else if (innerWidth >= 700 && innerWidth <= 1100) {
			cardsPerRow = 4;
		} else {
			cardsPerRow = 2;
		}
	}


	$: limitedGroups = groups; 

</script>

<svelte:window bind:innerWidth />

<!--A very inadequate container for Group Cards. Currently loads in a preset amount of cards depending
    on the device's screen size. TO-DO: Improve responsiveness and load data dynamically from backend-->

<!--If the device is a very large Tablet or PC-->
{#if innerWidth >= 1100}
	<div class="group-card-container">
		{#each limitedGroups as _, i}
			{#if i % cardsPerRow === 0}
				<div class="row">
					{#each limitedGroups.slice(i, i + cardsPerRow) as group}
						<GroupCardComponent {group} />
					{/each}
				</div>
			{/if}
		{/each}
		<div id="load" style="margin-bottom:12vh;">
			<p>Load more...</p>
		</div>
	</div>

	<!--If the device is a Tablet or PC-->
{:else if innerWidth >= 700 && innerWidth <= 1100}
	<div class="group-card-container">
		{#each limitedGroups as _, i}
			{#if i % cardsPerRow === 0}
				<div class="row">
					{#each limitedGroups.slice(i, i + cardsPerRow) as group}
						<GroupCardComponent {group} />
					{/each}
				</div>
			{/if}
		{/each}
		<div id="load" style="margin-bottom:10vh;">
			<p>Load more...</p>
		</div>
	</div>

	<!--If the device is a Smartphone-->
{:else}
	<div class="group-card-container">
		{#each limitedGroups as _, i}
			{#if i % cardsPerRow === 0}
				<div class="row">
					{#each limitedGroups.slice(i, i + cardsPerRow) as group}
						<GroupCardComponent {group} />
					{/each}
				</div>
			{/if}
		{/each}
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

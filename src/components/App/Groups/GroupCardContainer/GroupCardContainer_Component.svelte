<script>
// @ts-nocheck

	import GroupCardComponent from './GroupCard/GroupCard_Component.svelte';

	let innerWidth = 0;
	let cardsPerRow = 0;

	export let groups = [];
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
</div>

<style>
	.group-card-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		margin-bottom: 10vh;
	}

	.row {
		display: flex;
	}
</style>

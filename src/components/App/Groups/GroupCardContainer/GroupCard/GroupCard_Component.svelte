<script>
	import TagIconComponent from '../../../TagIcons/TagIcon_Component.svelte';
	import { goto } from '$app/navigation';
	export let group;

	function goToGroup() {
		let groupId = group.group_id;
		goto('/app/group?id=' + groupId);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="group-card" on:click={goToGroup}>
	<!--Two rows..-->

	<div id="row1">
		<img id="logo" src={group.logo_url} alt="Group Logo" />
	</div>

	<div id="row2">
		<h1>{group.name}</h1>
		<p>{group.description}</p>

		<div id="tag-icons">
			{#each group.tags as tag}
				<TagIconComponent text={tag.name} />
			{/each}
		</div>
	</div>
</div>

<style>
	#group-card {
		/* Colors */
		background-color: rgba(255, 255, 255, 0.127);

		/* Dimensions */
		margin-top: 10px;
		width: 10rem; /* Do not change plz! */
		height: auto;
		border-radius: 10px; /* Rounded corners on top left and right */
		margin-left: 10px;
		margin-right: 10px;

		/* Flexbox layout */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}

	#row2 {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: -10px;
		margin-right: 5px;
		gap: 2px;
		padding: 10px;
	}

	#tag-icons {
		margin-top: 3px;
		display: flex;
		flex-direction: row;
		width: auto;
		flex-wrap: wrap;
		gap: 3px;
	}

	#logo {
		width: 100%;
		min-width: 160px;
		max-width: 160px;
		height: 100%;
		min-height: 160px;
		max-height: 160px;
		border-radius: 10px;
	}

	h1 {
		font-size: 12px;
		color: white;
	}

	p {
		font-size: 9px;
	}

	img {
		width: 100%; /* Automatically uses 100% of the pre-allocated group-card width (see line 30) */
		height: 100%;
	}
</style>

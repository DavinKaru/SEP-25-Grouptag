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
	<!--Two columns. Column 2 is split into 3 rows.-->

	<div id="column1">
		<img src={group.logo_url} alt="Company Logo" />
	</div>

	<div id="column2">
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
		height: 6rem;
		min-height: 6rem; /* Force card to render at a minimun of 150 pixels */
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */

		margin-left: auto;
		margin-right: auto;

		/* Flexbox layout */
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 20px;

	}

	#column2 {
		display: flex;
		flex-direction: column;
		margin-top: 10px;
		margin-right: 5px;
		gap: 2px;
	}

	#tag-icons {
		margin-top: 3px;
		display: flex;
		gap: 3px;
	}

	h1 {
		font-size: 15px;
		color: white;
	}

	p {
		font-size: 9px;
	}

	img {
		width: 6rem;
	}
</style>

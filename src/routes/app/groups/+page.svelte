<!--//src/routes/app/groups/+page.svelte-->

<script>
	import HeaderComponent from '../../../components/App/AppHeader/AppHeader_Component.svelte';
	import FeaturedGroupComponent from '../../../components/App/Groups/FeaturedGroup/FeaturedGroup_Component.svelte';
	import GroupsSelectorComponent from '../../../components/App/Groups/GroupSelector/GroupSelector_Component.svelte';
	import GroupCardContainerComponent from '../../../components/App/Groups/GroupCardContainer/GroupCardContainer_Component.svelte';
	import { onMount } from 'svelte';
	let loading = true;
	export let data;
	let allGroups = true;
	let displayGroups = data.Groups;
	$: if (allGroups) {
		displayGroups = data.Groups;
	} else {
		displayGroups = data.MyGroups;
	}
	onMount(() => {
		loading = false;
	});

</script>

<HeaderComponent title="Groups" />
{#if !loading}
	<div id="content">
		<FeaturedGroupComponent {data} />
		<GroupsSelectorComponent bind:allGroups />
		<GroupCardContainerComponent groups={displayGroups} />
	</div>
{/if}

<style>
	#content {
		width: 90%;
		margin-left: auto;
		margin-right: auto;
		z-index: 1;
	}

	/* Tablet + PC Layout */
	@media only screen and (min-width: 750px) {
		#content {
			width: 55%;
		}
	}
</style>

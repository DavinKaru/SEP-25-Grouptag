<script>
	// @ts-nocheck

	import MyExperienceComponent from './MyExperience/MyExperience_component.svelte';
	import MyPostsComponent from './MyPosts/MyPosts_component.svelte';
	import MyGroupsComponent from './MyGroups/MyGroups_component.svelte';
	import MyMutualsComponent from './MyMutuals/MyMutuals_Component.svelte';

	export let content = 'Groups';

	export let posts = [];
	export let groups = [];
	export let users = [];
	export let experiences = [];
</script>

<div id="ContentList">
	<!-- In future this will be used to dynamically generate components and populate the list with them as required. However, as we are not 
			connecting to the database yet, this is not required currently. -->
	{#if content == 'Experience'}
		{#if experiences && experiences.length > 0}
			{#each experiences as experience}
				<MyExperienceComponent {experience} />
			{/each}
		{:else}
			<p class="empty-msg" style="text-align: center; margin-top: 5%;">No Experience to display</p>
		{/if}
	{:else if content == 'Posts'}
		<!--{#each filteredPosts as post}-->
		{#if posts && posts.length > 0}
			{#each posts as post}
				<MyPostsComponent {post} />
			{/each}
		{:else}
			<p class="empty-msg" style="text-align: center; margin-top: 5%;">No Posts to display</p>
		{/if}
	{:else if content == 'Groups'}
		{#if groups && groups.length > 0}
			{#each groups as group}
				<MyGroupsComponent {group} />
			{/each}
		{:else}
			<p class="empty-msg" style="text-align: center; margin-top: 5%;">No Groups to display</p>
		{/if}
	{:else if content == 'Mutuals'}
		{#if users && users.length > 0}
			{#each users as user}
				<MyMutualsComponent {user} />
			{/each}
		{:else}
			<p class="empty-msg" style="text-align: center; margin-top: 5%;">No Mutual Connections to display</p>
		{/if}
	{/if}
</div>

<style>
	#ContentList {
		margin-bottom: 65px;
	}

	.empty-msg {
		color: #c9c9c9;
	}
</style>

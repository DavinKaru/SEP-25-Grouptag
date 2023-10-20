<script>
// @ts-nocheck

	import MyExperienceComponent from "./MyExperience/MyExperience_component.svelte";
	import MyPostsComponent from "./MyPosts/MyPosts_component.svelte";
	import MyGroupsComponent from "./MyGroups/MyGroups_component.svelte";
	import MyMutualsComponent from "./MyMutuals/MyMutuals_Component.svelte";

	export let content = 'Groups';

	export let posts = [];
	export let groups = [];
	export let user_id;
	export let users = [];
	
	let filteredPosts = posts.filter((post) => post.user_id === user_id);
</script>

<div id="ContentList">
	<!-- In future this will be used to dynamically generate components and populate the list with them as required. However, as we are not 
        connecting to the database yet, this is not required currently. -->
	{#if content == 'Experience'}
		<p class="year">2023</p>
		<MyExperienceComponent />
		<MyExperienceComponent />
		<p class="year" id="notFirstYear">2022</p>
		<MyExperienceComponent />
		<p class="year" id="notFirstYear">2021</p>
		<MyExperienceComponent />
		<MyExperienceComponent />
	{:else if content == 'Posts'}
		{#each filteredPosts as post}
			<MyPostsComponent {post} {users} {groups} />
		{/each}
	{:else if content == 'Groups'}
		<MyGroupsComponent />
		<MyGroupsComponent />
		<MyGroupsComponent />
		<MyGroupsComponent />
		<MyGroupsComponent />
	{:else if content == 'Mutuals'}
		<MyMutualsComponent />
		<MyMutualsComponent />
		<MyMutualsComponent />
		<MyMutualsComponent />
		<MyMutualsComponent />
	{/if}
</div>

<style>

	#ContentList {
		margin-bottom: 65px;
	}

	.year {
		font-size: 12px;
		color: rgb(215, 215, 213);
		margin-top: 10px;
		margin-bottom: -6px;
		text-align: center;
	}
</style>
<script>
// @ts-nocheck

	import MyPostsComponent from '../../../components/User/MyContentList/MyPosts/MyPosts_component.svelte';
	import MyExperienceComponent from '../../../components/User/MyContentList/MyExperience/MyExperience_component.svelte';
	import MyGroupsComponent from '../../../components/User/MyContentList/MyGroups/MyGroups_component.svelte';
	import MyMutualsComponent from '../../../components/User/MyContentList/MyMutuals/MyMutuals_Component.svelte';

	export let content = 'Experience';

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

	#page-selectors {
		margin-top: 5px;
		font-size: 12px;
		color: rgb(215, 215, 213);
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		margin-left: 10%;
		margin-right: 10%;

        /* A piece of dodgy code that creates a large bottom so that the navbar does not obscure the content at the bottom of the screen.
            This will be rectified within the actual navbar component in a scalable manner at a later date */
		margin-bottom: 60px;
	}
</style>
<script>
	// @ts-nocheck

	import AppHeaderComponent from '../AppHeader/AppHeader_Component.svelte';
	import PostDetailsComponent from './PostDetails/PostDetails_Component.svelte';
	import PostMediaComponent from './PostMedia/PostMedia_Component.svelte';
	import PostContentComponent from './PostContent/PostContent_Component.svelte';
	import PostCommentsContainerComponent from './PostCommentsContainer/PostCommentsContainer_Component.svelte';
    //import { page } from '$app/stores';  

	export let data;

	//console.log(data);

	const url = $page.url;
	const post_id = url.searchParams.get('id');

	export let post;
	export let user;
	export let group;

	let post = data.Posts.find((p) => p.post_id === post_id);

	// Grab necessary data from post

	// Post Title
	let postTitle = post.title;

        let postAuthorName = post.first_name + " " + post.last_name;
        let postAuthorPicture = post.image_url;
        

        let postGroupName = post.name;
        let postGroupLogo = post.logo_url;

        // Post Tags
        let postTags = post.tags;

	// Same as above for the group...
	let postGroupID = post.group_id;
	// Post Time
	let postTime = post.created_at;

	// Post Tags
	//console.log(postTags);

	// Post Media
	let postMedia = post.media_url;

	// Post Content
	let postContent = post.content;

	//console.log(post);
</script>

<AppHeaderComponent title="View Post" />
<div id="post-component">
	<PostDetailsComponent
		{postTitle}
		{postTime}
		{postAuthorName}
		{postAuthorPicture}
		{postGroupName}
		{postGroupLogo}
		{postTags}
	/>

	{#if postMedia != null}
		<PostMediaComponent {postMedia} />
	{/if}

	<PostContentComponent {postContent} />
	<PostCommentsContainerComponent />
</div>

<style>
	#post-component {
		width: 90%;
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		margin-left: auto;
		margin-right: auto;
		margin-top: 10px;
		margin-bottom: 65px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		background-color: rgba(255, 255, 255, 0.127);
		padding: 10px;
	}

	/* Tablet + PC Sizing */
	@media (min-width: 768px) {
		#post-component {
			width: 55%;
		}
	}
</style>

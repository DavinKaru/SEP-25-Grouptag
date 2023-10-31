<!--//src/routes/app/post/+page.svelte-->

<script>
	// @ts-nocheck

	import AppHeaderComponent from '../../../components/App/AppHeader/AppHeader_Component.svelte';
	import PostDetailsComponent from '../../../components/App/Post/PostDetails/PostDetails_Component.svelte';
	import PostContentComponent from '../../../components/App/Post/PostContent/PostContent_Component.svelte';
	import PostCommentsContainerComponent from '../../../components/App/Post/PostCommentsContainer/PostCommentsContainer_Component.svelte';

	/* Data variables for Database Information*/
	export let data;
	const { Post_id, Posts, Comments } = data;
</script>

<AppHeaderComponent title="Post" />
<div id="content">
	<div id="post">
		<PostDetailsComponent
			postTitle={Posts.title}
			postTime={Posts.created_at}
			postAuthorName={Posts.first_name + ' ' + Posts.last_name}
			postAuthorPicture={Posts.image_url}
			postGroupName={Posts.name}
			postGroupLogo={Posts.logo_url}
			postTags={Posts.tags}
		/>
		<PostContentComponent postContent={Posts.content} />
		<PostCommentsContainerComponent comments={data.Comments} post_id={data.Post_id} />
	</div>
</div>

<style>
	#content {
		width: 90%;
		margin-left: auto;
		margin-right: auto;
	}

	#post {
		margin-top: 10px;
		margin-bottom: 65px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		background-color: rgba(255, 255, 255, 0.127);
		padding: 10px;
	}

	/* Tablet + PC Layout */
	@media only screen and (min-width: 750px) {
		#content {
			width: 55%;
		}
	}
</style>

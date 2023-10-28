<!--//src/routes/app/post/+page.svelte-->

<script>
	// @ts-nocheck

	import AppHeaderComponent from '../../../components/App/AppHeader/AppHeader_Component.svelte';
	import PostDetailsComponent from '../../../components/App/Post/PostDetails/PostDetails_Component.svelte';
	import PostContentComponent from '../../../components/App/Post/PostContent/PostContent_Component.svelte';
	import PostCommentsContainerComponent from '../../../components/App/Post/PostCommentsContainer/PostCommentsContainer_Component.svelte';


	/* Data variables for Database Information*/
	export let data;
	const {Post_id, Posts, Comments} = data;
</script>

<body>
	<div class="frame">
		<AppHeaderComponent title="Post" />

			<div id="content">
				<PostDetailsComponent 
					postTitle={Posts.title} 
					postTime={Posts.created_at}
					postAuthorName={Posts.first_name + " " + Posts.last_name}
					postAuthorPicture={Posts.image_url}
					postGroupName={Posts.name}
					postGroupLogo={Posts.logo_url}
					postTags = {Posts.tags}
				/>
				<PostContentComponent postContent={Posts.content} />
				<PostCommentsContainerComponent comments={Comments} post_id={Post_id}/>
			</div>
	</div>
</body>

<style>
	.frame {
		height: 100vh;
		width: 100vw;
		background-color: #243347;
		background-image: url('/bg10.png');
		background-size: cover;
		background-position: center;

		/* I know flexboxes are dodgy but trust me ;) */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		overflow: auto;
	}

	#content {
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
</style>

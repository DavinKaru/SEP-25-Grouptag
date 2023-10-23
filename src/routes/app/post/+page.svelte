<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import AppHeaderComponent from '../../../components/App/AppHeader/AppHeader_Component.svelte';
	import PostDetailsComponent from '../../../components/App/Post/PostDetails/PostDetails_Component.svelte';
	import PostContentComponent from '../../../components/App/Post/PostContent/PostContent_Component.svelte';
	import PostCommentsContainerComponent from '../../../components/App/Post/PostCommentsContainer/PostCommentsContainer_Component.svelte';

	let promise = Promise.resolve([]);

	/* Data variables for Database Information*/
	let data = {};
	let post = {};
	let user = {};
	let group = {};

	async function sendPostId() {

		/* Gets the post id from the url */
		const urlParams = new URLSearchParams(window.location.search);
		const post_id = urlParams.get('id');

		/* Sends the post id to the server */
		const res = await fetch(`post?id=${post_id}`, {
			method: 'GET'
		});

		/* Awaits and returns reponse */
		let result = await res.json();
		return result;
	}

	/* OnMount function initiates the fetch request upon page creation */
	onMount(async () => {

		/* Assigns the result of sendPostId() to promise */
		promise = sendPostId();
		
		/* Resolves promise and assigns results to data variables */
		data = Promise.resolve(promise);
		data.then((value) => {
			console.log(value);
			post = value.result.Post[0];
			user = value.result.User[0];
			group = value.result.Group[0];
		});
	});
</script>

<body>
	<div class="frame">
		<AppHeaderComponent title="Post" />
		{#await promise}
			<p>Waiting...</p>
		{:then}
			<div id="content">
				<PostDetailsComponent 
					postTitle={post.title} 
					postTime={post.created_at}
					postAuthorName={user.first_name + " " + user.last_name}
					postAuthorPicture={user.image_url}
					postGroupName={group.name}
					postGroupLogo={group.logo_url}
					postTags = {post.tags}
				/>
				<PostContentComponent postContent={post.content} />
				<PostCommentsContainerComponent/>
			</div>
		{/await}
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

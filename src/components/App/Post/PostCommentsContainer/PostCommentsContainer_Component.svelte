<script>
	// @ts-nocheck

	import AddCommentComponent from './AddComment/AddComment_Component.svelte';
	import CommentComponent from './Comment/Comment_Component.svelte';
	export let post_id = "Default ID";
	export let myUserID = "Default ID";
	export let comments = [];
	export let myUserImage = "Default Image URL";
</script>

<h1 id="comments-header">Comments</h1>
<AddCommentComponent {post_id} {myUserID} {myUserImage}/>
{#each comments as comment}
	<CommentComponent {comment} {myUserID}/>
{/each}

<style>
	#comments-header {
		font-size: 20px;
	}
</style>

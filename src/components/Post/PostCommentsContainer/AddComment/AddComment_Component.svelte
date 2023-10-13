<script>
	import ProfileIconComponent from '../../../User/ProfileIcon/ProfileIcon_component.svelte';
</script>

<div id="add-comment-card">
	<ProfileIconComponent />
	<!-- Put the user's own profile picture here! -->
	<h1 id="comment-prompt">Add Comment...</h1>
</div>

<style>
	#add-comment-card {
		background-color: rgba(188, 188, 188, 0.221);
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		padding: 5px;
		display: flex;
        align-items: center;
		flex-direction: row;
		gap: 10px;
	}

	#comment-prompt {
		margin-top: 5px;
		font-size: 10px;
	}
</style>

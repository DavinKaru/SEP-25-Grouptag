<script>
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import ProfileIconComponent from '../../../User/ProfileIcon/ProfileIcon_component.svelte';
	let showPopup = false; // Reactive variable to track popup visibility
	import { page } from '$app/stores';
    const post_id = $page.url.searchParams.get('id');

	function togglePopup() {
		showPopup = !showPopup; // Toggle the popup
	}
</script>

<div id="add-comment-card" on:click={togglePopup}>
	<ProfileIconComponent />
	<!-- Put the user's own profile picture here! -->
	<h1 id="comment-prompt">Add Comment...</h1>
</div>

{#if showPopup}
	<div id="comment-popup">
		<form method="post" action="?/comment" use:enhance>
			<h2>Add a Comment</h2>
			<input type="hidden" name="post_id" value={post_id}>
			<textarea name="comment" placeholder="Write your comment" required/>
			<div class="button-container">
				<button type="button" id="mediaButton">Add Media</button>
				<button type="submit" id="submitButton">Submit</button>
			</div>
		</form>
	</div>
{/if}

<style>
	#comment-popup {
		font-size: 10px;
		border-radius: 10px;
		border: 1px solid #ffffffd6;
		padding: 3%;
		width: 100%;
		gap: 10px;
		text-align: center;
	}

	#comment-popup textarea {
		margin-bottom: 10px;
		padding: 2.5%;
		padding-left: 3%;
		color: aliceblue;
		outline: none; /* Remove outline */
		border: none;
		border-radius: 5px;
		max-height: 20vh;
		max-width: 100%;
		min-width: 100%;
		margin: 5px auto;
	}

	#comment-popup ::placeholder {
		color: rgba(0, 0, 0, 0.583);
	}
	.button-container {
		display: flex;
		justify-content: center;
		gap: 1%;
	}

	#submitButton {
		display: block; /* Takes full width of its parent */

		/* Dimensions */
		height: min-content;
		width: 50%;
		border-radius: 5px;

		/* Colors */
		color: white;
		background-color: #44c7f7;

		/* Interaction */
		cursor: pointer;

		padding: 2%;
		border: none;

		/* Text styling */
		font-size: 1rem;
		font-weight: bold;
		text-decoration: none;
		text-align: center;
	}

	#mediaButton {
		display: block; /* Takes full width of its parent */

		/* Dimensions */
		height: min-content;
		width: 50%;
		border-radius: 5px;

		/* Colors */
		color: rgb(62, 62, 62);
		background-color: #44f79b;

		/* Interaction */
		cursor: pointer;
		padding: 2%;
		border: none;

		/* Text styling */
		font-size: 1rem;
		font-weight: bold;
		text-decoration: none;
		text-align: center;
	}

	#add-comment-card {
		background-color: rgba(188, 188, 188, 0.221);
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		padding: 5px;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 2px;
	}

	#comment-prompt {
		margin-top: 5px;
		font-size: 10px;
	}
</style>

<script>
	import autosize from 'svelte-autosize';
	import ProfileIconComponent from '../../../User/ProfileIcon/ProfileIcon_component.svelte';
	let showPopup = false; // Reactive variable to track popup visibility

	function togglePopup() {
		showPopup = !showPopup; // Toggle the popup
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

{#if !showPopup}
<div id="add-comment-card" on:click={togglePopup}>
	<ProfileIconComponent --width="2rem"/>
	<!-- Put the user's own profile picture here! -->
	<h1 id="comment-prompt">Add Comment...</h1>
</div>


{:else}
	<div id="comment-popup">
		<textarea use:autosize id="add-comment-content" placeholder="Write your comment" />
		<div class="button-container">
			<button type="submit" id="cancel-button">
				<p class="comment-button">Cancel</p>
			</button>
			<button type="submit" id="submit-button">
				<p class="comment-button">Submit</p>
			</button>
		</div>
	</div>
{/if}

<style>
	#comment-popup {
		font-size: 10px;
		border-radius: 10px;
		padding: 3%;
		width: 100%;
		gap: 10px;
		text-align: center;
	}

	#comment-popup textarea {
		margin-bottom: 10px;
		padding: 2.5%;
		padding-left: 3%;
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

	textarea {
        font-family: "Poppins";
        font-size: 15px;
        border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
        padding: 10px;
        height: 55px;
        width: 100%;
        border: none;
        outline: none;
        resize: none;
    }

	#add-comment-card {
		background-color: rgba(188, 188, 188, 0.221);
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		padding: 5px;
		display: flex;
		align-items: center;
		gap: 7px;
	}

	#comment-prompt {
		margin-top: 5px;
		font-size: 10px;
	}

	button {
        background: none;
        border: none;
    }

	.comment-button {
        display: inline-block;
		padding: 0.3em 1.2em;
		margin: 0.3em 0.3em 0.3em 0;
		border-radius: 2em;
		box-sizing: border-box;
		text-decoration: none;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		color: #ffffff;
		background-color: #3aa4d1;
		text-align: center;
		transition: all 0.2s;
        margin-left: auto;
        width: auto;
        font-size: 16px;
        font-family: "Poppins";
    }

    .comment-button:hover {
        background-color: #4095c6;
    }
</style>

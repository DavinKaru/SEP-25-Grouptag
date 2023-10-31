<!-- ProfileEditor_Component.svelte -->
<script>
	import { getContext } from 'svelte';
	import EditProfileComponent from './EditProfile/EditProfile_Component.svelte';
	const { open } = getContext('simple-modal');
	const showSurprise = () => open(EditProfileComponent, { message: "It's a modal!" });
</script>

<div id="userEditGrid">
	<button>
		<img class="editIcon" src="/profile/Connect.svg" alt="Connect with me" />
	</button>
	<button>
		<a href="myprofile/addExperience">
			<img class="editIcon" src="/profile/addExperience.svg" alt="Add Experience" />
		</a>
	</button>
	<button on:click={showSurprise}>
		<img class="editIcon" src="/profile/Share.svg" alt="Share my Profile" />
	</button>

	<p class="editOption">Add Post</p>
	<p class="editOption">Add Experience</p>
	<p class="editOption">Edit Profile</p>
</div>

<style>
	/* This one was a pain. Took some manual fiddling with the margin attributes.
       Chose a grid since I needed something more precise then flexbox .*/

	#userEditGrid {
		/* Box container */
		background-color: rgba(255, 255, 255, 0.127);
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		margin-top: 10px;

		/* Grid settings */
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}

	/* Img settings */
	.editIcon {
		margin-top: 15px;
		margin-bottom: -5px;
		width: 30px;
		margin-left: auto;
		margin-right: auto;
	}

	/* Text settings */
	.editOption {
		font-size: 14px;
		color: white;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: auto;
		margin-right: auto;
	}

	/* Remove that anooying button styling. */
	button {
		background: none;
		border: none;
	}
</style>

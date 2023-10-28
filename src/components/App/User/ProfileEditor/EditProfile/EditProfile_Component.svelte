<script>
	import FormButtonComponent from '../../../FormButton/FormButton_Component.svelte';
	import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';
	import { supabase } from '../../../../../supabaseClient';
	let loading = false;
	export let location,bio,image_url;
	
	let files = {
		accepted: [],
		rejected: []
	};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}

	function handleRemoveFile(e, index) {
		files.accepted.splice(index, 1);
		files.accepted = [...files.accepted];
	}

	const handleEdit = async () => {
		try {
      loading = true	  
		const myUserId = (await supabase.auth.getSession()).data.session?.user.id;
		///  Need to update various other things too
	  	const {error} = await supabase.from('users').update({ bio: bio }).eq('user_id', myUserId)
		if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }
	}
</script>

<div id="editWindow">
	<h1>Edit Profile</h1>
	<form on:submit|preventDefault={handleEdit}>
		<div class="field">
			<label for="location">Location</label>
			<textarea id="location" name="location" placeholder="Where am I?"/>
		</div>
		<div class="field">
			<label for="bio">User Bio</label>
			<textarea id="bio" name="bio" placeholder="Write something cool here :)" bind:value={bio}/>
		</div>
		<div class="field">
			<label for="bio">User Profile Picture</label>
			<div class="dropZone">
				<Dropzone on:drop={handleFilesSelect} accept="image/*">
					<p>Click here to upload</p>
				</Dropzone>
			</div>

			<div class="dropFiles">
				{#each files.accepted as item, index}
					<div>
						<span>{item.name}</span>
						<button on:click={(e) => handleRemoveFile(e, index)} id="removeButton">Remove</button>
					</div>
				{/each}
			</div>
		</div>
		<div id="submitButton">
			<FormButtonComponent text="Save Changes" />
		</div>
	</form>
</div>

<style>
	#editWindow {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	#submitButton {
		margin-left: auto;
		margin-right: auto;
	}

	#removeButton {
		padding: 0.2em 1.2em;
		margin: 2% 0;
		border-radius: 2em;
		box-sizing: border-box;
		text-decoration: none;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		color: #ffffff;
		background-color: #3aa4d1;
		text-align: center;
		transition: all 0.2s;
	}

	h1,
	label {
		color: white;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 5px;
		background-color: rgba(255, 255, 255, 0.127);
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		padding: 10px;
		width: 100%;
	}

	.dropFiles {
		display: flex;
		flex-direction: column;
		gap: 5px;
		background-color: rgba(255, 255, 255, 0.127);
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		padding: 0 20px;
		width: 100%;
		color: rgb(255, 255, 255);
	}

	.dropFiles > div > span {
		font-size: small;
	}

	textarea {
		background-color: rgb(255, 255, 255);
		font-family: 'Poppins';
		font-size: 15px;
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		padding: 10px;
		height: 55px;
		width: 100%;
		border: none;
		outline: none;
		resize: none;
	}
	.dropZone {
		background-color: rgb(255, 255, 255);
		font-family: 'Poppins';
		font-size: 15px;
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		padding: 5px;
		height: fit-content;
		width: 100%;
		border: none;
		outline: none;
		resize: none;
	}
</style>

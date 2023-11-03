<!-- src/routes/app/create/group/+page.svelte -->
<script>
	// @ts-nocheck
	import autosize from 'svelte-autosize';
	import AppHeaderComponent from '../../../../components/App/AppHeader/AppHeader_Component.svelte';
	import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import { supabase } from '../../../../supabaseClient';
	export let data;

	//Insert data from the form into the database
	let name;
	let logo_url;
	let banner_url;
	let description;
	let short_description;
	let tags;

	async function handleSubmit(event) {
		event.preventDefault(); // Prevent the default form submission

		// Convert tags string to array of objects
		const tagArray = tags?.trim() ? tags.split(',').map((tag) => ({ name: tag.trim() })) : [];
		const newGroup = {
			name,
			logo_url,
			banner_url,
			description,
			short_description,
			tags: tagArray
		};

		const result = await addNewGroupToDatabase(newGroup);
		if (result.success) {
			toast.success('New Group added!');
		} else {
			console.error('Failed to add group:', result.error);
			toast.error('Failed to add group');
		}
	}

	async function addNewGroupToDatabase(newGroup) {
		const { newdata, error } = await supabase.from('groups').insert([
			{
				name: newGroup.name,
				logo_url: newGroup.logo_url,
				banner_url: newGroup.banner_url,
				description: newGroup.description,
				short_description: newGroup.short_description,
				tags: newGroup.tags,
				public: true
			}
		]);

		if (error) {
			return { success: false, error };
		}
		return { success: true };
	}

	//Dropfile
	let logoFiles = {
		accepted: [],
		rejected: []
	};
	let bannerFiles = {
		accepted: [],
		rejected: []
	};

	async function handleFilesSelect(e, type) {
		const { acceptedFiles, fileRejections } = e.detail;
		if (type === 'logo') {
			logoFiles.accepted = [...logoFiles.accepted, ...acceptedFiles];
			logoFiles.rejected = [...logoFiles.rejected, ...fileRejections];
			if (acceptedFiles.length > 0) {
				const uploadUrl = await onImageUpload(acceptedFiles[0]);
				if (uploadUrl) {
					logo_url = uploadUrl;
				}
			}
		} else if (type === 'banner') {
			bannerFiles.accepted = [...bannerFiles.accepted, ...acceptedFiles];
			bannerFiles.rejected = [...bannerFiles.rejected, ...fileRejections];
			if (acceptedFiles.length > 0) {
				const uploadUrl = await onImageUpload(acceptedFiles[0]);
				if (uploadUrl) {
					banner_url = uploadUrl;
				}
			}
		}
	}

	function handleRemoveFile(e, index, type) {
		if (type === 'logo') {
			logoFiles.accepted.splice(index, 1);
			logoFiles.accepted = [...logoFiles.accepted];
		} else if (type === 'banner') {
			bannerFiles.accepted.splice(index, 1);
			bannerFiles.accepted = [...bannerFiles.accepted];
		}
	}

	const onImageUpload = async (file) => {
		const myUserId = (await supabase.auth.getSession()).data.session?.user.id;
		const objectName = `${myUserId}_${file.name}`;

		const { data: imageData, error } = await supabase.storage
			.from('groups-media')
			.upload(objectName, file);

		if (error) {
			console.error('Error Uploading Image', error.message);
		} else {
			const imageUrl = supabase.storage.from('groups-media').getPublicUrl(objectName);

			const publicUrl = imageUrl.data.publicUrl;

			return publicUrl;
		}
	};
</script>

<AppHeaderComponent title="Create Group" />
<form on:submit={handleSubmit}>
	<div id="content">
		<Toaster />
		<h2>Let's make a place!</h2>
		<div class="field">
			<label for="groupName">Name</label>
			<textarea
				use:autosize
				bind:value={name}
				id="groupName"
				name="groupName"
				placeholder="Be original!"
				required
			/>
		</div>

		<div class="field">
			<label for="groupLogo">Upload the Group Logo here!</label>
			<div class="dropZone">
				<Dropzone on:drop={(e) => handleFilesSelect(e, 'logo')} accept="image/*">
					<p>Click here to upload</p>
				</Dropzone>
			</div>
			<div class="dropFiles">
				{#each logoFiles.accepted as item, index}
					<div>
						<span>{item.name}</span>
						<button on:click={(e) => handleRemoveFile(e, index, 'logo')} id="removeButton"
							>Remove</button
						>
					</div>
				{/each}
			</div>
		</div>

		<div class="field">
			<label for="groupBanner">Upload the Group Banner here!</label>
			<div class="dropZone">
				<Dropzone on:drop={(e) => handleFilesSelect(e, 'banner')} accept="image/*">
					<p>Click here to upload</p>
				</Dropzone>
			</div>

			<div class="dropFiles">
				{#each bannerFiles.accepted as item, index}
					<div>
						<span>{item.name}</span>
						<button on:click={(e) => handleRemoveFile(e, index, 'banner')} id="removeButton"
							>Remove</button
						>
					</div>
				{/each}
			</div>
		</div>

		<div class="field">
			<label for="groupDescription">Description</label>
			<textarea
				use:autosize
				bind:value={description}
				id="groupDescription"
				name="groupDescription"
				placeholder="Who is this group for?"
				required
			/>
		</div>
		<div class="field">
			<label for="groupShortDescription">Short Description</label>
			<textarea
				use:autosize
				bind:value={short_description}
				id="groupShortDescription"
				name="groupShortDescription"
				placeholder="Short Description of your group"
				required
			/>
		</div>
		<div class="field">
			<label for="groupTags">Tags</label>
			<textarea
				use:autosize
				bind:value={tags}
				id="groupTags"
				name="groupTags"
				placeholder="Separate with a comma :) (EX: Tag1, Tag2, Tag3)"
				required
			/>
		</div>

		<button id="submit">
			<p class="create-button">Create Group</p>
		</button>
	</div>
</form>

<style>
	#content {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		gap: 15px;
		width: 100%;
		margin: auto;
		margin-top: 10px;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 5px;
		background-color: rgba(255, 255, 255, 0.127);
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		padding: 10px;
		width: 100%;
		margin-bottom: 3%;
	}

	textarea {
		background-color: white;
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

	textarea::placeholder {
		color: darkslategrey;
	}

	#groupDescription {
		height: 100px;
	}

	#submit {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		margin-bottom: 10vh;
	}
	button {
		background: none;
		border: none;
	}

	.create-button {
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
		font-family: 'Poppins';
		margin-bottom: 10vh;
	}

	.create-button:hover {
		background-color: #4095c6;
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

	/* Tablet + PC Layout */
	@media only screen and (min-width: 750px) {
		#content {
			width: 55%;
		}
	}

	/* Phone layout */
	@media only screen and (max-width: 750px) {
		#content {
			width: 90%;
		}
	}
</style>

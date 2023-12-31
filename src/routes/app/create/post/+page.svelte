<script>
	// @ts-nocheck

	import Select from 'svelte-select';
	import autosize from 'svelte-autosize';
	import AppHeaderComponent from '../../../../components/App/AppHeader/AppHeader_Component.svelte';
	import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import { supabase } from '../../../../supabaseClient';
	export let data;
	let thisGroupId, title, content, media_url, tags, selectedGroup;

	let groupData = [[], []];

	/* Would have liked to create a supabase function that specifically recieved this but ran out of time */
	for (let i = 0; i < data.Groups.length; i++) {
		groupData[0].push(data.Groups[i].group_id);
		groupData[1].push(data.Groups[i].name);
	}

	let files = {
		accepted: [],
		rejected: []
	};

	async function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
		if (acceptedFiles.length > 0) {
			const uploadUrl = await onImageUpload(acceptedFiles[0]); // Await the upload and get the URL
			if (uploadUrl) {
				media_url = uploadUrl; // Set the media_url with the public URL from the upload
			}
		}
	}

	function handleRemoveFile(e, index) {
		files.accepted.splice(index, 1);
		files.accepted = [...files.accepted];
	}

	async function handleSubmit(event) {
		event.preventDefault(); // Prevent the default form submission

		// Convert tags string to array of objects
		const tagArray = tags?.trim() ? tags.split(',').map((tag) => ({ name: tag.trim() })) : [];
		thisGroupId = groupData[0][selectedGroup.index];
		const myUserId = data.myUserId;
		const newPost = {
			thisGroupId,
			myUserId,
			title,
			content,
			media_url,
			tags: tagArray
		};
		const result = await addNewPostoDatabase(newPost);
		if (result.success) {
			toast.success('New Post added!');
		} else {
			console.error('Failed to add post:', result.error);
			toast.error('Failed to add post');
		}
	}
	async function addNewPostoDatabase(newPost) {
		const { newdata, error } = await supabase.from('posts').insert({
			user_id: newPost.myUserId,
			group_id: newPost.thisGroupId,
			title: newPost.title,
			content: newPost.content,
			media_url: newPost.media_url,
			tags: newPost.tags
		});

		if (error) {
			console.log(error);
			return { success: false, error };
		}
		return { success: true };
	}

	const onImageUpload = async (file) => {
		const myUserId = (await supabase.auth.getSession()).data.session?.user.id;
		const objectName = `${myUserId}_${file.name}`;

		const { data: imageData, error } = await supabase.storage
			.from('posts-media')
			.upload(objectName, file);

		if (error) {
			console.error('Error Uploading Image', error.message);
		} else {
			const imageUrl = supabase.storage.from('posts-media').getPublicUrl(objectName);

			const publicUrl = imageUrl.data.publicUrl;

			return publicUrl;
		}
	};
</script>

<!-- 
    TODO:
    1.) Implement Validation
    2.) Post Data to Backend
    3.) Strech goal - implement Add Media functionality
-->

<AppHeaderComponent title="Create Post" />
<form on:submit={handleSubmit}>
	<div id="content">
		<Toaster />
		<h2>What do you want to say?</h2>
		<div class="field">
			<label for="postGroup">Group</label>
			<Select
				items={groupData[1]}
				placeholder="Where should we go?"
				--border-radius="10px 10px 10px 10px"
				--padding="10px"
				--height="55px"
				--font-family="Poppins"
				--font-size="15px"
				--placeholder-color="darkslategrey"
				--placeholder-font-family="Poppins"
				--item-color="black"
				--selected-item-color="black"
				--item-hover-bg="white"
				--item-hover-color="black"
				--placeholder-font="Poppins"
				bind:value={selectedGroup}
			/>
		</div>
		<div class="field">
			<label for="postTitle">Title</label>
			<textarea
				use:autosize
				id="postTitle"
				name="postTitle"
				placeholder="Make it eye-catching!"
				bind:value={title}
				required
			/>
		</div>
		<div class="field">
			<label for="postContent">Content</label>
			<textarea
				use:autosize
				id="postContent"
				name="postContent"
				placeholder="Write something cool here!"
				bind:value={content}
				required
			/>
		</div>
		<div class="field">
			<label for="postMedia">Upload the Post Media here!</label>
			<div class="dropZone">
				<Dropzone on:drop={handleFilesSelect} accept="image/*" bind:value={media_url}>
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
		<div class="field">
			<label for="postTags">Tags</label>
			<textarea
				use:autosize
				id="postTags"
				name="postTags"
				placeholder="Seperate with a comma :)"
				bind:value={tags}
			/>
		</div>
		<button id="submit">
			<p class="create-button">Create Post</p>
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
		margin-top: 10px;
		margin-bottom: 65px;
		gap: 15px;
		width: 90%;
		margin-left: auto;
		margin-right: auto;
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

	#postContent {
		height: 100px;
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
		width: 140px;
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

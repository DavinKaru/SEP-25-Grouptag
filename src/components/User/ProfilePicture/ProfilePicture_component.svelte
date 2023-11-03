<script>
	import { supabase } from "$lib/supabaseClient";
	export let user = [];

	let avatar, fileInput;

	const onImageUpload = async (e) => {
		const image = e.target.files[0];
		const objectName = `${user.user_id}_${image.name}`;
		
		const {data, error} = await supabase.storage
			.from('users-avatar')
			.upload(objectName, image);

		if (error) {
			console.error('Error Uploading Image', error.message);
		}
		else {
			const imageUrl = data.Location;

			const {data: updatedUser, updateError} = await supabase
				.from('users')
				.update({image_url: imageUrl})
				.eq('user_id', user.user_id);
			
			if (updateError) {
				console.error('Database update error: ', updateError.message);
			}
			else {
				user ={...user, image_url: imageUrl}
			}
		}
	}
</script>


<!-- svelte-ignore a11y-img-redundant-alt -->
<div id="image-container" on:click={() => { fileInput.click(); }}>
	{#if avatar}
		<img src="{avatar}" alt="Profile Picture" id="picture" />
	{:else}
        <img src="{user.image_url}" alt="Profile Picture" id="picture" />
	{/if}	
	<p id="name">{user.first_name} {user.last_name}</p>

	<input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e) => onImageUpload(e)} bind:this={fileInput}>
</div>

<style>
	#image-container {
		display: flex;
		height: 200px;
	}

	#picture {
		z-index: 1;
		width: 100%;
		object-fit: cover;
		margin-right: auto;
	}
	
	#name {
		position: absolute;
		z-index: 2;
		margin-top: 170px;
		margin-left: 15px;
		text-wrap: nowrap;
	}

</style>

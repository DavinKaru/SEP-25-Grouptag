<!-- svelte-ignore a11y-img-redundant-alt -->
<div id="image-container">
	<img src="/profile-picture.svg" alt="Profile Picture" id="picture" />
	<p id="name">User Name</p>
</div>

<style>
	#image-container {
		display: flex;
		height: 200px;
	}

	#picture {
		width: 100%;
		object-fit: cover;
		margin-right: auto;
	}
	
	#name {
		position: absolute;
		margin-top: 170px;
		margin-left: 15px;
		text-wrap: nowrap;
	}

</style>

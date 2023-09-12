<!-- svelte-ignore a11y-img-redundant-alt -->
<div id="image-container">
	<img src="/profile-picture.svg" alt="Profile Picture" id="picture" />
    <p id="name">User Name</p>
</div>

<style>
	#image-container {
		display: flex;
		width: 100%;
		max-height: 200px;
        justify-content: center;
	}

	#picture {
		object-fit: cover;
	}
    #name {
        position: absolute;
        margin-top: 45%;
        text-wrap: nowrap;
    }
</style>

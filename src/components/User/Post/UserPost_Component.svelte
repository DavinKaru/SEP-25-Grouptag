<script>
	import UserProfilePictureComponent from '../Profile Picture/UserProfilePicture_Component.svelte';
</script>

<div class="card">
	<!-- Left hand side contains post media or group logo , right side contains details-->
	<div class="post-media">
		<p>Temp</p>
	</div>

    <div class="post-content">
        <div class="row-1">
            <div class="column-1">
                <UserProfilePictureComponent --width="50px"/>
            </div>

            <div class="column-2">
                    <h1>Post Title</h1>
                    <h2>Post Author</h2>
            </div>
        </div>

        <div class="row-2">
            <p>Some Lorem Ipsum text.</p>
            <p>Tags</p>
            <p>3 hours ago</p>
        </div>
    </div>

</div>

<style>
	.card {
		/*Box shadows */

		/* Colors */
		background-color: rgba(255, 255, 255, 0.247);

		/* Dimensions */
		margin-top: 100px;
		width: 85%;
		height: 20%;
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */

		margin-left: auto;
		margin-right: auto;

		/* Flexbox layout */
		align-items: center;

		display: flex;
	}

	.post-media {
		width: 50%;
	}

	.post-content {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
	}

	.row-1 {
        display: flex;
        flex-direction: row;
    }

	h1 {
		font-size: 1rem;
		color: white;
	}

	h2 {
		font-size: 0.75rem;
	}

	p {
		font-size: 0.5rem;
	}
</style>

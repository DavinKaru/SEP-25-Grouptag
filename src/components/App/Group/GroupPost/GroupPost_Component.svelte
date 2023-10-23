<script>
	// @ts-nocheck

	import ProfileIconComponent from '../../User/ProfileIcon/ProfileIcon_component.svelte';
	import TagIconComponent from '../../TagIcons/TagIcon_Component.svelte';
	import { goto } from '$app/navigation';

	export let post;


	//Calculation for timestamp
	let createdAt = new Date(post.created_at);

	// Get the current date
	let now = new Date();

	// Calculate the difference
	let difference = now - createdAt;

	//Conversion
	let minutes = Math.floor(difference / 1000 / 60);
	let hours = Math.floor(minutes / 60);

	let timeSince;

	if (hours > 0) {
		if (hours > 24) {
			let days = Math.floor(hours / 24);
			if (days > 31) {
				let months = Math.floor(days / 31);
				if (months > 12) {
					let years = Math.floor(months / 12);
					timeSince = `${years} YEARS AGO`;
				} else {
					timeSince = `${months} MONTHS AGO`;
				}
			} else {
				timeSince = `${days} DAYS AGO`;
			}
		} else {
			timeSince = `${hours} HOURS AGO`;
		}
	} else {
		timeSince = `${minutes} MINUTES AGO`;
	}

	function goToPost() {
		let postId = post.post_id;
		goto('/app/post?id=' + postId);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="post-card" on:click={goToPost}>
	<!-- Left hand side contains post media or group logo , right side contains details-->

	<!--If Post Media is not null -->
	{#if post.media_url != null}
		<!-- Left hand side contains post media or group logo , right side contains details-->
		<div id="post-media">
			<img src={post.media_url} alt="Temp Post Media" />
		</div>
	{/if}

	<!--Right Hand Side-->
	<div id="post-content">
		<!--Row 1-->
		<div id="row-1">
			<!--Column 1 of Row 1-->
			<div id="row-1a">
				<h1>{post.title}</h1>
			</div>

			<!--Column 2 of Row 1-->
			<div id="row-1b">
				<div id="profile-icon">
					<ProfileIconComponent --width="1.5rem" postAuthorPicture={post.image_url}/>
				</div>
				<h2>{post.first_name} {post.last_name}</h2>
			</div>
		</div>

		<!--Row 2-->
		<div id="row-2">
			<p id="post-text">
				{post.content}
			</p>
			<div id="tag-icons">
				{#each post.tags as tag}
					<TagIconComponent text={tag.name} />
				{/each}
			</div>
			<p id="post-timestamp">{timeSince}</p>
		</div>
	</div>
</div>

<style>
	#post-card {
		/* Colors */
		background-color: rgba(255, 255, 255, 0.127);

		/* Dimensions */
		height: fit-content;
		width: 100%;

		/* If device screen is too narrow, force a certain height for component */

		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */

		margin-left: auto;
		margin-right: auto;

		/* Flexbox layout */
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	/* Use 50% of the provided by the flexbox*/
	#post-media {
		display: flex;
		justify-content: center;
		border-radius: 10px 0px 00px 10px;
		width: 50%;
		overflow: hidden;
	}

	#post-media > img {
		object-fit: cover;
		width: 100%;
	}

	/* Another flexbox! This one for the first row of the right panel (Profile Picture + Title + Author) */
	#row-1 {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: flex-end;
		gap: 10px;
	}

	#row-1a {
		margin-top: auto;
		margin-bottom: auto;
        margin-right: auto;
	}

	/* Center Post Title + Post Author */
	#row-1b {
		display: flex;
		gap: 5px;
		margin-right: auto;
	}

	#row-2 {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	/* Again, use 50% of the space provided by the flexbox + split right panel into columns */
	#post-content {
		margin-top: 10px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		height: 100%;
	}

	/* Some minor positioning */
	#profile-icon {
		margin-top: -3px;
	}

	/* Some container styling for tag icon components */
	#tag-icons {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 3px;
	}

	#post-timestamp {
		color: #e0e5e8;
	}

	h1 {
		font-size: 1rem;
		color: white;
	}

	h2 {
		font-size: 0.75rem;
	}

	p {
		font-size: 0.65rem;
	}

	/* Tablet + PC Layout */
	@media only screen and (min-width: 600px) {
		#post-card {
			height: 175px;
		}
	}
</style>

<script>
	// @ts-nocheck

	import TagIconComponent from '../../../TagIcons/TagIcon_Component.svelte';
	import GroupIconComponent from '../../../GroupIcon/GroupIcon_Component.svelte';
	import { goto } from '$app/navigation';


	export let post;
	let user = post.users;
	let group = post.groups;
	//export let users;
	//export let groups;

	//let user = users.find((u) => u.user_id === post.user_id);

	//let group = groups.find((g) => g.group_id === post.group_id);
	let groupName = post ? post.name : 'Unknown Group';
	
	// Get Group Logo/Icon
	let postGroupLogo = post ? post.logo_url : null;

	//Calculation for timestamp
	let createdAt = new Date(post.created_at);

	// Get the current date
	let now = new Date();

	// Calculate the difference
	let difference = now - createdAt;

	//Conversion
	let minutes = Math.floor(difference / 1000 / 60);
	let hours = Math.floor(minutes / 60);

	/**
	 * @type {string}
	 */
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
			<h1>{post.title}</h1>
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
			<div id="post-group-details">
				<GroupIconComponent {postGroupLogo} />
				<p id="post-group">{groupName}</p>
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
		margin-top: 10px;
		height: fit-content;

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

	#post-group-details {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5px;
	}

	#post-media > img {
		object-fit: cover;
		width: 100%;
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

	p {
		font-size: 0.65rem;
	}

	/* Tablet + PC Layout */
	@media only screen and (min-width: 600px) {
		#post-card, img {
			max-height: 175px;
		}
	}
</style>
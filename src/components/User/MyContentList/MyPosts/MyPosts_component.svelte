<script>
	import ProfileIcon from '../../ProfileIcon/ProfileIcon_component.svelte';
	import TagIconComponent from '../../../TagIcons/TagIcon_Component.svelte';

	export let post;
	export let users;
	let user = users.find((u) => u.user_id === post.user_id);

	export let groups;
	let group = groups.find((g) => g.group_id === post.group_id);
	let groupName = group ? group.name : 'Unknown Group';

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
		timeSince = `${hours} HOURS AGO`;
	} else {
		timeSince = `${minutes} MINUTES AGO`;
	}

	// Debug logs
	console.log('MyPosts:', post.tags);
</script>

<div id="post-card">
	<!-- Left hand side contains post media or group logo , right side contains details-->
	<div id="post-media">
		<img src="/temp_post_media.svg" alt="Temp Post Media" />
	</div>

	<!--Right Hand Side-->
	<div id="post-content">
		<!--Row 1-->
		<div id="row-1">
			<!--Column 1 of Row 1-->
			<div id="column-1">
				<ProfileIcon --width="3rem" />
			</div>

			<!--Column 2 of Row 1-->
			<div id="column-2">
				<h1>{post.title}</h1>
				<h2>{user ? `${user.first_name} ${user.last_name}` : 'Unknown Author'}</h2>
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
			<p id="post-group">{groupName}</p>
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
		height: 23vh; /* Force card to render at a minimun of 150 pixels */
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */

		margin-left: auto;
		margin-right: auto;

		/* Flexbox layout */
		display: flex;
		align-items: center;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	/* Use 50% of the provided by the flexbox*/
	#post-media {
		display: flex;
		justify-content: center;
		border-radius: 10px 0px 00px 10px;
		width: 50%;
		height: 100%;
		overflow: hidden;
	}

	#post-media > img {
		object-fit: cover;
		width: 100%;
	}

	/* Again, use 50% of the space provided by the flexbox + split right panel into columns */
	#post-content {
		margin-top: 25px;
		margin-bottom: 10px;
		margin-left: 10px;
		margin-right: 10px;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		width: 50%;
		height: 100%;
	}

	/* Another flexbox! This one for the first row of the right panel (Profile Picture + Title + Author) */
	#row-1 {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: flex-end;
		gap: 10px;
	}

	/* Center Post Title + Post Author */
	#column-2 {
		margin-top: auto;
		margin-bottom: auto;
	}

	#row-2 {
		margin-top: 10px;

		display: flex;
		flex-direction: column;
		gap: 5px;
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

<!-- Groups Header Component-->
<script>
	import TagIcon from '../../TagIcons/TagIcon_Component.svelte'; // Import the TagIcon component
	export let data; // Receive data as a prop from the parent component
	const { Groups, GroupUsers, Users } = data;
	// Debug logs
	console.log('Data received:', data);
	// Fetch users using groupid
	function getUsers(groupId) {
		const groupUserIds = GroupUsers.filter((gu) => gu.group_id === groupId).map((gu) => gu.user_id);
		const users = Users.filter((user) => groupUserIds.includes(user.user_id));
		// Debug logs
		console.log('Group User IDs:', groupUserIds);
		console.log('Users:', users);
		return users;
	}
</script>

<div class="container">
	{#each Groups as group}
		<img src={group.logo_url} alt="Featued Group Logo" id="group-img" />
		<div class="groups-content">
			<div class="text">
				<h1 id="group-name">{group.name}</h1>
				<p id="group-description">{group.description}</p>
			</div>
			<div id="tags">
				{#each group.tags as tag}
					<TagIcon text={tag.name} />
				{/each}
			</div>
			<div id="members">
				<h2 id="members-header">Members</h2>
				<div id="members-icons">
					{#each getUsers(group.group_id) as user, i}
						<!-- Only show the first 6 users -->
						{#if i < 6}
							<span class="icon" style="background-image: url({user.image_url});" />
						{/if}
					{/each}
				</div>
			</div>
			<a href="default" id="join-button">Join Group</a>
		</div>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;

		/* Colors */
		background-color: rgba(255, 255, 255, 0.127);

		/* Dimensions */
		margin-top: 10px;
		height: fit-content;
		border-radius: 10px; /* Rounded corners on top left and right */
		margin-left: 10px;
		margin-right: 10px;

		/* Flexbox layout */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}

	#group-img {
		width: 100%;
		border-radius: 10px;
	}

	#group-name {
		font-size: 20px;
		color: white;
	}

	#group-description {
		font-size: 12px;
	}

	#tags {
		margin-top: 6px;
		display: flex;
		gap: 5px;
	}

	#members-header {
		margin-top: 6px;
		font-size: 14px;
		color: white;
	}

	#join-button {
		display: inline-block;
		padding: 0.3em 1.2em;
		margin: 0 0.3em 0.3em 0;
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

	#join-button:hover { 
		background-color:#4095c6;
	}

	.groups-content {
		padding: 10px;
	}

	.icon {
		margin-top: 6px;
		margin-bottom: 6px;
		width: 6vh;
		height: 6vh;
		border-radius: 50%;
		background-position: center; /* Center the background */
		background-size: cover; /* Cover the entire area */
		background-color: #ffffff;
		border: 1px solid #f5f5f5;
		display: inline-block;
		margin-right: 3%; /* Gap between icons */
	}
</style>
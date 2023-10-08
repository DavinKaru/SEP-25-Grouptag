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

<div id="container">
	{#each Groups as group}
		<div id="details">
			<img src={group.logo_url} alt="Featued Group Logo" id="group-img" />
			<div id="content">
				<h1 id="group-name">{group.name}</h1>
				<p id="group-description">{group.description}</p>

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
		</div>
	{/each}
</div>

<style>
	#container {
		/* Colors */
		background-color: rgba(255, 255, 255, 0.127);

		/* Dimensions */
		margin-top: 10px;
		width: 10rem; /* Do not change plz! */
		height: fit-content;
		border-radius: 10px; /* Rounded corners on top left and right */
	}

	/* Phone Layout */
	@media only screen and (min-width: 650px) {

		#container {
			/* Colors */
			background-color: rgba(255, 255, 255, 0.127);

			/* Dimensions */
			margin-top: 10px;
			width: 10rem; /* Do not change plz! */
			height: fit-content;
			border-radius: 10px; /* Rounded corners on top left and right */

			display: flex;
			flex-direction: column;
			width: 55%;
		}

		#group-img {
			border-radius: 10px; /* Rounded corners on top left and right */
		}

		#tags {
			display: flex;
			height: fit-content;
			gap: 5px;
		}

		#content {
			margin-left: 10px;
			margin-right: 10px;
			margin-top: 4px;

			display: flex;
			flex-direction: column;
			gap: 5px;
		}

		#join-button {
			display: inline-block;
			padding: 0.3em 1.2em;
			margin-right: auto;
			margin-bottom: 10px;
			width: fit-content;
			border-radius: 2em;
			box-sizing: fit-content;
			text-decoration: none;
			font-family: 'Roboto', sans-serif;
			font-weight: 300;
			color: #ffffff;
			background-color: #3aa4d1;
			text-align: center;
			transition: all 0.2s;
		}

		#join-button:hover {
			background-color: #4095c6;
		}

		.icon {
			margin-top: 6px;
			margin-bottom: 6px;
			width: 3vw;
			height: 3vw;
			border-radius: 50%;
			background-position: center; /* Center the background */
			background-size: cover; /* Cover the entire area */
			background-color: #ffffff;
			border: 1px solid #f5f5f5;
			display: inline-block;
			margin-right: 1%; /* Gap between icons */
		}

		@media only screen and (max-width: 650px) {
			#group-img {
				width: 100%;
			}

			#group-name {
				font-size: 18px;
			}

			#group-description {
				font-size: 10px;
			}

			#members-header {
				font-size: 15px;
			}
		}
	}

	@media only screen and (min-width: 650px) {
		#container {
			width: 100%;
			margin-left: auto;
			margin-right: auto;
		}

		#details {
			display: flex;
		}

		#group-img {
			width: 50%;
			margin-left: auto;
			margin-right: auto;
		}

		#content {
			display: flex;
		}

		#group-name {
			font-size: 20px;
		}

		#group-description {
			font-size: 12px;
		}

		#members-header {
			font-size: 15px;
		}
	}
</style>

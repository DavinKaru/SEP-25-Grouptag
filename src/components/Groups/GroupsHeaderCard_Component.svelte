<!-- Groups Header Component-->
<script>
	import TagIcon from '../TagIcons/TagIcon_Component.svelte'; // Import the TagIcon component
	export let data; // Receive data as a prop from the parent component
	const { Groups, GroupUsers, Users } = data;

	// Debug logs
	console.log('Data received:', data);

	// Fetch members using groupid
	function getMembers(groupId) {
		const groupUserIds = GroupUsers.filter((gu) => gu.group_id === groupId).map((gu) => gu.user_id);
		const members = Users.filter((user) => groupUserIds.includes(user.user_id));

		// Debug logs
		console.log('Group User IDs:', groupUserIds);
		console.log('Members:', members);
		return members;
	}
</script>

<div class="container">
	{#each Groups as group}
		<div class="groups-left">
			<img src={group.logo} alt="" class="groups-img" />

			<div class="members">
				<div><p>Members</p></div>
				<div class="members-icons">
					{#each getMembers(group.group_id) as member, i}
						<!-- Only show the first 6 members -->
						{#if i < 6}
							<span class="icon" style="background-image: url({member.media});" />
						{/if}
					{/each}
				</div>
			</div>
		</div>

		<div class="groups-right">
			<div class="text">
				<h2>{group.name}</h2>
				<p>
					{group.description}
				</p>
			</div>

			<div class="tags">
				{#each group.tags as tag}
					<TagIcon
						text={tag.name}
						customeClass="tag"
						customStyle={`color: rgb(${tag.color}); background-color: rgba(${tag.color}, 0.21);`}
					/>
				{/each}
			</div>
			<button class="join-button">JOIN</button>
		</div>
	{/each}
</div>

<style>
	.container {
		display: flex;
		height: 14.5%;
		width: 88.8%;
		border-radius: 15px;
		padding-bottom: 1%;
		background-color: #324456;
		margin-top: 50%; /* Added margin to push it down */
	}

	.groups-img {
		margin-top: -10%;
		margin-left: -5%;
		min-height: 79.7%;
		max-height: 79.7%;
		width: 100%;
		border-radius: 15px;
		background-color: #000000;
	}

	.groups-left {
		flex: 1;
		margin-left: 6.5%;
		color: #c4c4c4;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.members {
		margin-top: 7%;
		flex-grow: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.icon {
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background-position: center; /* Center the background */
		background-size: cover; /* Cover the entire area */
		background-color: #ffffff;
		border: 1px solid #f5f5f5;
		display: inline-block;
		margin-right: 1%; /* Gap between icons */
	}

	.groups-right {
		flex: 1;
		margin-right: 2%;
		gap: 7%;
		display: flex;
		flex-direction: column;
	}

	.text {
		width: 100%;
		flex-grow: 0;
		flex-basis: 55%;
		position: relative;
	}

	h2 {
		font-size: 1.3vh;
		position: absolute; /* Added position: absolute; */
		top: -20px;
	}

	p {
		font-size: 0.86vh;
	}

	.tags {
		display: flex;
		justify-content: right;
		gap: 1.5%; /* Gap between tags */
	}

	.join-button {
		align-self: end; /* Aligning the button to end of the container */
		flex-basis: 18%; /* 20.1% of groups-right's height */
		font-size: 1.3vh;

		width: 45%;
		border: none;
		border-radius: 25px;
		background-color: #3f6d9b;
		color: #ffffff;
	}

	@media (max-width: 912px) {
		.groups-img {
			margin-top: -19%; /* overflow the groups image at the top */
		}

		.members {
			margin-top: 5%;
			flex-grow: 1;
			width: 100%;
			display: flex;
			flex-direction: column;
		}

		.icon {
			height: 4vh;
			width: 4vh;
			margin-right: 1%; /* Gap between icons */
		}

		h2 {
			top: -40%;
		}

		p {
			margin-top: 1%;
		}

		.groups-left,
		.groups-right {
			width: 40%;
		}

		.join-button {
			margin-top: 5%;
		}
	}

	@media (max-width: 560px) {
		.members {
			margin-top: 5%;
			flex-grow: 1;
			width: 100%;
			display: flex;
			flex-direction: column;
		}

		.members-icons {
			width: 180px;
		}

		.icon {
			width: 3vh;
			height: 3vh;
			margin-right: 1%; /* Gap between icons */
		}

		h2 {
			top: -40%;
		}

		p {
			margin-top: 1%;
		}
	}
</style>

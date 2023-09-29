<!-- Groups Header Component-->
<script>
	import TagIcon from '../TagIcons/TagIcon_Component.svelte'; // Import the TagIcon component
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
		<div class="groups-left">
			<img src={group.logo_url} alt="" class="groups-img" />

			<div class="members">
				<div><p>Members</p></div>
				<div class="members-icons">
					{#each getUsers(group.group_id) as user, i}
						<!-- Only show the first 6 users -->
						{#if i < 6}
							<span class="icon" style="background-image: url({user.image_url});" />
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
		height: fit-content;
		width: 88.8vw;
		border-radius: 1.5vh;
		padding-bottom: 1vh;
		background-color: #324456;
		margin-top: 15vh;
		flex-wrap: wrap;
	}
	.groups-img {
		margin-top: -10vh;
		margin-left: -3vw;
		max-height: 15vh;
		width: 100%;
		border-radius: 1.5vh;
		background-color: #000000;
	}
	.groups-left {
		flex: 1;
		margin-left: 5.5%;
		color: #c4c4c4;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.members {
		margin: 4% 0% 0% -5%;
		flex-grow: 1;
		width: 23vh;
		display: flex;
		flex-direction: column;
	}
	.icon {
		width: 3vh;
		height: 3vh;
		border-radius: 50%;
		background-position: center; /* Center the background */
		background-size: cover; /* Cover the entire area */
		background-color: #ffffff;
		border: 1px solid #f5f5f5;
		display: inline-block;
		margin-right: 3%; /* Gap between icons */
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
		font-size: 1vh;
	}
	.tags {
		display: flex;
		justify-content: right;
		gap: 1.5%; /* Gap between tags */
	}
	.join-button {
		align-self: end; /* Aligning the button to end of the container */
		flex-basis: auto;
		font-size: 1.3vh;
		min-width: 80px;
		border: none;
		border-radius: 25px;
		background-color: #3f6d9b;
		color: #ffffff;
		margin-bottom: 10%;
		font-size: 3vw;
	}
	@media (max-width: 1280px) {
		.container {
			padding-bottom: 1vh;
		}
		.groups-img {
			margin-top: -10vh;
			margin-left: -3vw;
			max-height: 30vh;
			max-width: auto;
			border-radius: 1.5vh;
			background-color: #000000;
		}
		.members-icons {
			width: 43vw;
		}
		.icon {
			width: 4.5vw;
			height: 4.5vw;
			margin-right: 1vw;
		}
		h2 {
			top: -3.5vw;
			font-size: 4vh;
		}
		p {
			margin-top: 1%;
			font-size: 2.5vh;
		}
		.join-button {
			margin-top: 10%;
			width: 20vw;
			font-size: 2vw;
		}
	}
	@media (max-width: 1024px) {
		.container {
			padding-bottom: 1vh;
		}
		.groups-img {
			margin-top: -10vh;
			margin-left: -3vw;
			max-height: 30vh;
			max-width: auto;
			border-radius: 1.5vh;
			background-color: #000000;
		}
		.members-icons {
			width: 43vw;
		}
		.icon {
			width: 4.5vw;
			height: 4.5vw;
			margin-right: 1vw;
		}
		h2 {
			top: -3.5vw;
			font-size: 4vh;
		}
		p {
			margin-top: 1%;
			font-size: 2.5vh;
		}
		.join-button {
			margin-top: 10%;
			width: 20vw;
			font-size: 2vw;
		}
	}
	@media (max-width: 991px) {
		.container {
			padding-bottom: 2vh;
		}
		.groups-img {
			margin-top: -7vh;
		}
		.members-icons {
			width: 43vw;
		}
		.icon {
			width: 6vw;
			height: 6vw;
			margin-right: 1vw;
		}
		h2 {
			top: -5vw;
			font-size: 2vh;
		}
		p {
			margin-top: 1%;
			font-size: 1.2vh;
		}
		.join-button {
			margin-top: 7%;
			margin-bottom: 2%;
		}
	}
	@media (max-width: 425px) {
		.container {
			padding-bottom: 2vh;
		}
		.groups-img {
			margin-top: -5vh;
		}
		.members-icons {
			width: 43vw;
		}
		.icon {
			width: 6vw;
			height: 6vw;
			margin-right: 1vw;
		}
		h2 {
			top: -4.5vw;
			font-size: 1.2vh;
		}
		p {
			margin-top: 1%;
			font-size: 0.8vh;
		}
		.join-button {
			margin-top: 5%;
		}
	}
	@media (max-width: 375px) {
		.groups-img {
			margin-top: -5vh;
		}
		.members-icons {
			width: 43vw;
		}
		.icon {
			width: 6vw;
			height: 6vw;
			margin-right: 1vw;
		}
		h2 {
			top: -2vh;
			font-size: 1.3vh;
		}
		h2 {
			margin-top: 5%;
			margin: 5% 0% -4% 0%;
			position: relative;
			font-size: 1.3vh;
		}
		p {
			margin-top: 0%;
			font-size: 1vh;
		}
		.text {
			margin-top: -2vh;
		}
		.join-button {
			margin-top: 0%;
			margin-bottom: 2%;
		}
	}
	/* Galaxy Fold 280w x 653h */
	@media screen and (max-width: 280px) and (max-height: 653px) {
		.container {
			padding: 1vh;
			padding-bottom: 1.5vh;
		}
		.groups-img {
			margin-top: -10vh;
		}
		.members {
			margin-bottom: 10%;
		}
		.members-icons {
			width: 43vw;
		}
		.icon {
			width: 6vw;
			height: 6vw;
			margin-right: 1vw;
		}
		h2 {
			margin-top: 5%;
			margin: 5% 0% -4% 0%;
			position: relative;
			font-size: 2vh;
		}
		p {
			margin-top: 0%;
			font-size: 1.3vh;
		}
		.text {
			margin-bottom: 5%;
		}
		.join-button {
			margin-top: 0%;
			margin-bottom: 5%;
		}
	}
</style>

<!-- Groups Header -->
<script>
	let tagColors = [
		{ name: 'Cycling', color: '255, 87, 51' },
		{ name: 'Gaming', color: '51, 255, 87' },
		{ name: 'Tech', color: '51, 87, 255' }
	];

	let members = [
		{
			name: 'John Doe',
			icon: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
		},
		{
			name: 'John Doe',
			icon: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
		},
		{
			name: 'John Doe',
			icon: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
		},
		{
			name: 'John Doe',
			icon: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
		},
		{
			name: 'John Doe',
			icon: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
		},
		{
			name: 'John Doe',
			icon: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
		}
	];
</script>

<div class="container">
	<div class="groups-left">
		<div class="groups-img" />
		<div class="members">
			<div><p>Members</p></div>
			<div class="members-icons">
				{#each members as member, i}
					<!-- Only show the first 6 members -->
					{#if i < 6}
						<span class="icon" style="background-image: url({member.icon});" />
					{/if}
				{/each}
			</div>
		</div>
	</div>

	<div class="groups-right">
		<div class="text">
			<h2>Group Name</h2>
			<p>
				Swinburne Cyber Security Club unites students passionate about cybersecurity. Engage in
				hands-on learning, networking, and collaboration to become a cybersecurity expert. Join us!
			</p>
		</div>

		<div class="tags">
			{#each tagColors as tag}
				<span
					class="tag"
					style="color: rgb({tag.color}); background-color: rgba({tag.color}, 0.21);"
				>
					{tag.name}
				</span>
			{/each}
		</div>
		<button class="join-button">JOIN</button>
	</div>
</div>

<style>
	.container {
		display: flex;
		position: absolute;
		top: 22.1%;
		height: 14.5%;
		width: 88.8%;
		border-radius: 15px;
		padding-bottom: 1%;
		background-color: #324456;
	}

	.groups-img {
		position: absolute;
		top: -31.6%; /* overflow the groups image at the top*/
		left: 5.8%;
		height: 79.7%;
		width: 43.5%;
		border-radius: 15px;
		background-color: #000000;
	}

	.groups-left {
		flex: 1;
		margin-left: 6.5%;
		color: #c4c4c4;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		height: 100%;
		width: 47%;
	}

	.members {
		position: absolute;
		top: 55%; /* Place it below .groups-img */
		height: 100%;
		display: flex;
		flex-wrap: wrap; /* Allows the icons to wrap onto the next line */
	}

	.members-icons {
		position: absolute;
		top: 10%; /* Place it below .groups-img */
		width: 180px;
	}

	.icon {
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background-position: center; /* Center the background */
		background-size: cover; /* Cover the entire area */
		display: inline-block;
		background-color: #ffffff;
		border: 1px solid #f5f5f5;
		display: inline-block;
		margin-right: 1%; /* Gap between icons */
	}

	.groups-right {
		flex: 1.05;
		margin-right: 2%;
		gap: 7%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;

		height: 100%;
		width: 47%;
	}
	.text {
		margin: 1% 0;
		width: 100%;
		flex-grow: 0; /* Prevents the text from growing */
		flex-basis: 40%; /* 55% of groups-right's height */
	}

	h2 {
		font-size: 1.3vh;
		position: absolute;
		top: -15%; /* overflow the groups name at the top*/
		text-align: left;
	}

	p {
		font-size: 0.86vh;
	}

	.tags {
		display: flex;
		justify-content: right;
		width: 100%;
		flex-grow: 0; /* Prevents the tags from growing */
		flex-basis: 11%; /* 11% of groups-right's height */
		gap: 1.5%; /* Gap between tags */
	}

	.tag {
		align-self: center;
		border-radius: 25px;
		width: fit-content;
		padding: 0.5% 4%;
		font-size: 0.86vh;
		text-align: center;
		text-shadow: #0000008a 0px 0px 5px;
	}

	.join-button {
		align-self: end; /* Aligning the button to end of the container */
		flex-grow: 0; /* Prevents the button from growing */
		flex-basis: 20%; /* 20.1% of groups-right's height */
		font-size: 1.3vh;

		width: 45%;
		border: none;
		border-radius: 25px;
		background-color: #3f6d9b;
		color: #ffffff;
	}

	@media (max-width: 380px) {
		.container {
			flex-direction: row;
		}

		.groups-left,
		.groups-right {
			width: 40%;
		}
	}
</style>

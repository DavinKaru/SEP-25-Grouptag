<!-- Featured Group Component-->
<script>
	// @ts-nocheck

	import TagIcon from '../../TagIcons/TagIcon_Component.svelte';
	export let data;
	const { FeaturedGroups, FeaturedGroupsImages } = data;

	// Fetch users using groupid
	function getFeaturedImages(i, groupid) {
		const users = FeaturedGroupsImages[i]
			.filter((u) => u.group_id === groupid)
			.map((u) => u.image_url);
		return users;
	}
</script>

<div class="carousel-container">
	{#each FeaturedGroups as featuredGroup, n}
		<div class="carousel-item">
			<div class="container">
				<div class="left-content">
					<img src={featuredGroup.banner_url} alt="Featued Group Logo" id="group-img" />
					<div id="members">
						<h2 id="members-header">Members</h2>
						<div id="members-icons">
							{#each getFeaturedImages(n, featuredGroup.group_id) as image_url, i}
								{#if i < 6}
									<span class="icon" style="background-image: url({image_url});" />
								{/if}
							{/each}
						</div>
					</div>
				</div>
				<div class="right-content">
					<div class="text">
						<h1 id="group-name">{featuredGroup.name}</h1>
						<p id="group-description">{featuredGroup.description}</p>
					</div>
					<div id="tags">
						{#each featuredGroup.tags as tag}
							<TagIcon text={tag.name} />
						{/each}
					</div>
					<a href="default" id="join-button">Join Group</a>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.carousel-container {
		display: flex;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		webkit-overflow-scrolling: touch; /* smooth scrolling on iOS */
		margin-top: 2%;
	}

	.carousel-item {
		flex: 0 0 auto;
		width: 100%;
		margin-right: 2%;
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
	.container {
		/* Colors */
		background-color: rgba(255, 255, 255, 0.127);

		/* Dimensions */
		height: fit-content;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		margin: auto;

		/* Flexbox layout */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;

		flex-direction: row;
		justify-content: center;
	}

	.left-content {
		flex-basis: 50vw;
		padding: 5px;
	}

	.right-content {
		flex-basis: 50vw;
		padding: 10px;
		padding-bottom: 50px;
		position: relative;
	}

	#group-img {
		width: 100%;
		min-height: 15vh;
		border-radius: 10px;
	}

	#group-name {
		font-size: 1.25rem;
		color: white;
	}

	#group-description {
		font-size: 0.5rem;
	}

	#tags {
		margin-top: 6px;
		display: flex;
		gap: 5px;
	}

	#join-button {
		display: inline-block;
		padding: 0.3em 1.2em;
		margin: 0.3em 0.3em 0.3em 0;
		border-radius: 2em;
		box-sizing: border-box;
		text-decoration: none;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		color: #ffffff;
		background-color: #3aa4d1;
		text-align: center;
		transition: all 0.2s;
		position: absolute;
		bottom: 10px;
		right: 10px;
	}

	#join-button:hover {
		background-color: #4095c6;
	}

	#members {
		margin-left: 5px;
		margin-top: 10px;
	}

	#members-header {
		font-size: 0.8em;
		color: white;
	}

	#members-icons {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	.icon {
		margin-top: 6px;
		margin-bottom: 6px;
		width: 6vw;
		height: 6vw;
		max-width: 30px;
		max-height: 30px;
		border-radius: 50%;
		background-position: center; /* Center the background */
		background-size: cover; /* Cover the entire area */
		background-color: #ffffff;
		border: 1px solid #f5f5f5;
		display: inline-block;
		margin-right: 1%; /* Gap between icons */
	}
</style>

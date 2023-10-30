<!--
    Group Details Component
    Simply a refactored version of FeaturedGroups
-->

<script>
	import TagIcon from '../../TagIcons/TagIcon_Component.svelte'; // Import the TagIcon component
	import { supabase } from '../../../../supabaseClient';
	export let data; // Receive data
	let group = data.Group[0];
	let GroupFeaturedImages = data.GroupFeaturedImages;

	const handleJoinGroup = async () => {
		try {
			const myUserId = (await supabase.auth.getSession()).data.session?.user.id;
			const { error } = await supabase
				.from('group_users')
				.insert({ group_id: group.group_id, user_id: myUserId });
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
		}
	};
</script>

<div id="group-container">
	<div id="left-content">
		<img src={group.banner_url} alt="Group Banner Logo" id="group-img" />
		<div id="members">
			<h2 id="members-header">Members</h2>
			<div id="members-icons">
				{#each GroupFeaturedImages as user, i}
					<!-- Only show the first 6 users -->
					{#if i < 6}
						<span class="icon" style="background-image: url({user.image_url});" />
					{/if}
				{/each}
			</div>
		</div>
	</div>
	<div id="right-content">
		<div id="text">
			<h1 id="group-name">{group.name}</h1>
			<p id="group-description">{group.description}</p>
		</div>
		<div id="tags">
			{#each group.tags as tag}
				<TagIcon text={tag.name} />
			{/each}
		</div>

		<button type="button" id="join-button" on:click={handleJoinGroup}>
			<p class="comment-button">Join Group</p>
		</button>
	</div>
</div>

<style>
	#group-container {
		display: flex;
		overflow-x: scroll;
		margin-top: 2%;

		/* Colors */
		background-color: rgba(255, 255, 255, 0.127);

		/* Dimensions */
		height: fit-content;
		width: 100%;
		border-radius: 10px;
		margin: auto;
		margin-top: 10px;

		/* Flexbox layout */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;

		flex-direction: row;
		justify-content: center;
	}

	#left-content {
		flex-basis: 50vw;
		padding: 5px;
	}

	#right-content {
		flex-basis: 50vw;
		padding: 10px;
		padding-bottom: 50px;
		position: relative;
	}

	#group-img {
		width: 100%;
		min-height: 93px;
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
		border: none;
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
		border-radius: 50%;
		background-position: center; /* Center the background */
		background-size: cover; /* Cover the entire area */
		background-color: #ffffff;
		border: 1px solid #f5f5f5;
		display: inline-block;
		margin-right: 1%; /* Gap between icons */
	}

	/* Responsive font sizes */
	@media screen and (max-width: 1920px) {
		#group-name {
			font-size: 1.8rem;
		}
		#members-header {
			font-size: 1.3rem;
		}
		#group-description {
			font-size: 1.1rem;
		}
	}

	@media screen and (max-width: 1280px) {
		#group-name {
			font-size: 1.8rem;
		}
		#members-header {
			font-size: 1.3rem;
		}
		#group-description {
			font-size: 1.1rem;
		}
	}

	@media screen and (max-width: 992px) {
		#group-name {
			font-size: 1.6rem;
		}
		#members-header {
			font-size: 1.2rem;
		}
		#group-description {
			font-size: 1rem;
		}
	}

	@media screen and (max-width: 768px) {
		#group-name {
			font-size: 1.4rem;
		}
		#members-header {
			font-size: 1.1rem;
		}
		#group-description {
			font-size: 0.9rem;
		}
	}

	@media screen and (max-width: 576px) {
		#group-name {
			font-size: 1rem;
		}
		#members-header {
			font-size: 0.8rem;
		}
		#group-description {
			font-size: 0.5rem;
		}

		#members-icons {
			flex-wrap: wrap;
			column-gap: 2px;
		}
		.icon {
			width: 6vw;
			height: 6vw;
			margin-top: 0px;
		}
	}
</style>

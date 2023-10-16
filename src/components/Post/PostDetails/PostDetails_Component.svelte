<script>
	// @ts-nocheck

	import ProfileIconComponent from '../../User/ProfileIcon/ProfileIcon_component.svelte';
	import GroupIconComponent from '../../Icons/GroupIcon/GroupIcon_Component.svelte';
	import TagIconComponent from '../../TagIcons/TagIcon_Component.svelte';

	export let postTitle;
	export let postTime;
	export let postAuthorName;
	export let postAuthorPicture;
	export let postGroupName;
	export let postGroupLogo;
	export let postTags;

	// Calculation for timestamp
	let createdAt = new Date(postTime);

	// Get the current date
	let now = new Date();

	// Calculate the difference
	let difference = now - createdAt;

	// Conversion
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
</script>

<div id="post-details">
	<h1 id="post-title">{postTitle}</h1>
	<p id="post-time">{timeSince}</p>
	<div id="post-author">
		<ProfileIconComponent --width="25px" {postAuthorPicture} />
		<h2 id="author-name">{postAuthorName}</h2>
	</div>
	<div id="post-group">
		<GroupIconComponent {postGroupLogo} />
		<h2 id="group-name">{postGroupName}</h2>
	</div>
	<div id="post-tags">
		{#each postTags as tag}
			<TagIconComponent text={tag.name} />
		{/each}
	</div>
</div>

<style>
	#post-details {
		display: flex;
		flex-direction: column;
		gap: 5px;
		width: 100%;
	}

    #post-time {
        font-size: 12px;
        color: #dddddd;
    }

	#post-author, #post-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}

	#post-tags {
		margin-top: 3px;
		display: flex;
		gap: 5px;
	}

	#post-title {
		font-size: 28px;
	}

	#post-author {
		font-size: 8px;
	}

	#group-name {
		font-size: 12px;
	}
</style>

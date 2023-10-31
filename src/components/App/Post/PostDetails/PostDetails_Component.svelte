<script>
	// @ts-nocheck

	import ProfileIconComponent from '../../User/ProfileIcon/ProfileIcon_component.svelte';
	import GroupIconComponent from '../../GroupIcon/GroupIcon_Component.svelte';
	import TagIconComponent from '../../TagIcons/TagIcon_Component.svelte';
	import { convertTime } from '$lib/timeConversion';
	
	export let postTitle = "Default Title";
	export let postTime = "null";
	export let postAuthorName = "Default Author";
	export let postAuthorPicture = "/default/user-icon-default.png";
	export let postGroupName = "Default Group";
	export let postGroupLogo = "/default/group-icon-default.png";
	export let postTags = ["Default Tags"];

	let timeSince = convertTime(postTime);
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

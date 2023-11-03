<script>
	// @ts-nocheck

	import ProfileIconComponent from '../../User/ProfileIcon/ProfileIcon_component.svelte';
	import GroupIconComponent from '../../GroupIcon/GroupIcon_Component.svelte';
	import TagIconComponent from '../../TagIcons/TagIcon_Component.svelte';
	import { convertTime } from '$lib/timeConversion';

	export let postTitle = 'Default Title';
	export let postTime = 'null';
	export let postAuthorName = 'Default Author';
	export let postAuthorID = 'Default ID';
	export let postAuthorPicture = '/default/user-icon-default.png';
	export let postGroupName = 'Default Group';
	export let postGroupID = 'Default ID';
	export let postGroupLogo = '/default/group-icon-default.png';
	export let postTags = ['Default Tags'];
	export let myUserID = 'Default ID';

	let profileLink = 'profile?id=' + postAuthorID;
	let groupLink = 'group?id=' + postGroupID;

	let timeSince = convertTime(postTime);
</script>

<div id="post-details">
	<h1 id="post-title">{postTitle}</h1>
	<p id="post-time">{timeSince}</p>
	<div id="post-author">
		<ProfileIconComponent --width="25px" {postAuthorPicture} />
		<h2>
			{#if postAuthorID === myUserID}
				<a href="myprofile" id="author-name">{postAuthorName}</a>
			{:else}
				<a href={profileLink} id="author-name">{postAuthorName}</a>
			{/if}
		</h2>
	</div>
	<div id="post-group">
		<GroupIconComponent {postGroupLogo} />
		<h2>
			<a href={groupLink} id="group-name">{postGroupName}</a>
		</h2>
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

	#post-author,
	#post-group {
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

	a {
		color: white;
		text-decoration: none;
	}

	h2 {
		display: flex;
	}
</style>

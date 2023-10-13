<script>
// @ts-nocheck

	import AppHeaderComponent from '../AppHeader/AppHeader_Component.svelte';
	import PostDetailsComponent from './PostDetails/PostDetails_Component.svelte';
	import PostMedia from './PostMedia/PostMedia_Component.svelte';
	import PostContent from './PostContent/PostContent.svelte';
	import PostCommentsContainerComponent from './PostCommentsContainer/PostCommentsContainer_Component.svelte';
    import { page } from '$app/stores';  

    export let data;

    const url = $page.url;
    const post_id = url.searchParams.get('post_id');

    console.log(data.Posts);

    let post = data.Posts.find((p) => p.post_id === "0258ffdf-2deb-4b84-8e05-75bd1a63c7da");

    // Grab necessary data from post
    
        // Post Title
        let postTitle = post.title;

        // Traverse tables and grab author name...
        let postAuthorID = post.user_id;
        let postAuthor = data.Users.find((u) => u.user_id === postAuthorID);
        let postAuthorName = postAuthor.first_name + " " + postAuthor.last_name;

        // Same as above for the group...
        let postGroupID = post.group_id;
        let postGroup = data.Groups.find((g) => g.group_id === postGroupID);
        let postGroupName = postGroup.name;
        let postGroupLogo = postGroup.logo_url;

        // Post Tags
        let postTags = post.tags;
        console.log(postTags);

        // Post Media
        let postMedia = post.media_url;

        // Post Content
        let postContent = post.content;

    console.log(post);

</script>

<AppHeaderComponent title="View Post" />
<div id="post-component">
	<PostDetailsComponent {postTitle} {postAuthorName} {postGroupName} {postGroupLogo} {postTags}/>
	<PostMedia {postMedia}/>
    <PostContent {postContent}/>
    <PostCommentsContainerComponent />
</div>

<style>

    #post-component {
        width: 90%;
        border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        margin-bottom: 65px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: rgba(255, 255, 255, 0.127);
        padding: 10px;
    }

    /* Tablet + PC Sizing */
    @media (min-width: 768px) {

        #post-component {
            width: 55%;
        }
    }

</style>

<script>
// @ts-nocheck

	import AppHeaderComponent from '../AppHeader/AppHeader_Component.svelte';
	import PostDetailsComponent from './PostDetails/PostDetails_Component.svelte';
	import PostMedia from './PostMedia/PostMedia_Component.svelte';
	import PostContent from './PostContent/PostContent.svelte';
	import PostCommentsContainerComponent from './PostCommentsContainer/PostCommentsContainer_Component.svelte';
    //import { page } from '$app/stores';  

    export let data;

    //const url = $page.url;
    //const post_id = url.searchParams.get('id');

    let post = data.Posts[0];
    //console.log(post)

    // Grab necessary data from post
    
        // Post Title
        let postTitle = post.title;

        // Post Time
        let postTime = post.created_at;

        // Traverse tables and grab author name...
       // let postAuthorID = post.user_id;
        let postAuthor = data.Users[0];
        let postAuthorName = postAuthor.first_name + " " + postAuthor.last_name;
        let postAuthorPicture = postAuthor.image_url;
        
        console.log(postAuthorPicture);

        // Same as above for the group...
        //let postGroupID = post.group_id;
        let postGroup = data.Groups[0];
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
	<PostDetailsComponent {postTitle} {postTime} {postAuthorName} {postAuthorPicture} {postGroupName} {postGroupLogo} {postTags}/>

    {#if postMedia != null}
        <PostMedia {postMedia}/>
    {/if}

    <PostContent {postContent}/>
    <PostCommentsContainerComponent comments={data.Comments}/>
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

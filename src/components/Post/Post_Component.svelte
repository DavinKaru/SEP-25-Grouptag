<script>
	import AppHeaderComponent from '../AppHeader/AppHeader_Component.svelte';
	import PostDetailsComponent from './PostDetails/PostDetails_Component.svelte';
	import PostMedia from './PostMedia/PostMedia_Component.svelte';
	import PostContent from './PostContent/PostContent.svelte';
	import PostCommentsContainerComponent from './PostCommentsContainer/PostCommentsContainer_Component.svelte';
</script>

<AppHeaderComponent title="View Post" />
<div id="post-component">
	<PostDetailsComponent />
	<PostMedia />
    <PostContent />
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

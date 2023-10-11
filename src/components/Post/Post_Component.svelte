<script>
	import AppHeaderComponent from '../AppHeader/AppHeader_Component.svelte';
	import PostDetailsComponent from './PostDetails/PostDetails_Component.svelte';
	import PostMedia from './PostMedia/PostMedia_Component.svelte';
	import PostContent from './PostContent/PostContent.svelte';
	import PostCommentsComponent from './PostComments/PostComments_Component.svelte';
</script>

<AppHeaderComponent title="View Post" />
<div id="post-component">
	<PostDetailsComponent />
	<PostMedia />
	<PostContent />
	<PostCommentsComponent />
</div>

<style>

    #post-component {
        width: 100%;
        margin-left: auto;
        margin-right: auto;

        display: flex;
        flex-direction: column;
        gap: 10px;

        background-color: rgba(255, 255, 255, 0.127);
        padding: 10px;
    }

</style>

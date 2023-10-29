<script>
    import AddCommentComponent from "./AddComment/AddComment_Component.svelte";
    import CommentComponent from "./Comment/Comment_Component.svelte";
    export let post_id;
    export let comments = [];
</script>

<h1 id="comments-header">Comments</h1>
<AddCommentComponent post_id={post_id}/>
{#each comments as comment}
    <CommentComponent comment={comment}/>
{/each} 


<style>
    #comments-header {
        font-size: 20px;
    }
</style>
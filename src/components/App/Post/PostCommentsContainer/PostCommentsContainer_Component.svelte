<script>
    import AddCommentComponent from "./AddComment/AddComment_Component.svelte";
    import CommentComponent from "./Comment/Comment_Component.svelte";
</script>

<h1 id="comments-header">Comments</h1>
<AddCommentComponent /> 
<CommentComponent />
<CommentComponent />
<CommentComponent />
<CommentComponent />

<style>
    #comments-header {
        font-size: 20px;
    }
</style>
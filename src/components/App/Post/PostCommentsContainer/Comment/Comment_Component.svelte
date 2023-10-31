<script>
// @ts-nocheck

    import ProfileIconComponent from "../../../User/ProfileIcon/ProfileIcon_component.svelte";
    import { convertTime } from "$lib/timeConversion";

    export let comment;

    let timeSince = convertTime(comment.created_at);

</script>

<!--Main Div Container, consists of two rows. The first row is split into two columns.-->
<div id="comment-card">
    <div id="comment-details">
        <ProfileIconComponent --width="2rem" postAuthorPicture={comment.image_url}/>
        <div id="comment-details-text">
            <h2 id="comment-author">{comment.first_name} {comment.last_name}</h2>
            <p id="comment-time">{timeSince}</p>
        </div>
    </div>
    <div id="comment-content">
        <p>{comment.content}</p>
    </div>
</div>

<style>

    #comment-card {
        background-color: rgba(188, 188, 188, 0.221);
        border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
        padding: 5px;
    }
    
    #comment-details {
        display: flex;
        flex-direction: row;   
        gap: 10px;

    }

    #comment-details-text {
        font-size: 12px;
        display: flex;
        flex-direction: column;

    }

    #comment-author {
        margin-top: 5px;
        font-size: 10px;

    }

    #comment-time {
		color: #dddddd;
        font-size: 8px;
    }

    #comment-content {
        margin-left: 42px;
        font-size: 10px;
    }
</style>
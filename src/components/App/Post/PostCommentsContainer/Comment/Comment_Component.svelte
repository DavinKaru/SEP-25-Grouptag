<script>
    import ProfileIconComponent from "../../../User/ProfileIcon/ProfileIcon_component.svelte";
</script>

<!--Main Div Container, consists of two rows. The first row is split into two columns.-->
<div id="comment-card">
    <div id="comment-details">
        <ProfileIconComponent --width="2rem"/>
        <div id="comment-details-text">
            <h2 id="comment-author">Comment Author</h2>
            <p id="comment-time">Time</p>
        </div>
    </div>
    <div id="comment-content">
        <p>Lorem Ipsum is a simple dummy text.</p>
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
        margin-left: 40px;
        font-size: 10px;
    }
</style>
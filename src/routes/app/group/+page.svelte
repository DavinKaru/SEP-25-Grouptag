<script>
// @ts-nocheck

    import AppHeaderComponent from "../../../components/App/AppHeader/AppHeader_Component.svelte";
    import GroupDetailsComponent from "../../../components/App/Group/GroupDetails/GroupDetails_Component.svelte";
    import GroupPostComponent from "../../../components/App/Group/GroupPost/GroupPost_Component.svelte";    
    
    export let data;

</script>

<div id="frame">
    <AppHeaderComponent title="{data.Group.Name}" />
    <div id="content">
        <GroupDetailsComponent {data} />
        <div id="post-header">  
            <p id="recent-posts">RECENT POSTS</p>
            <a href="default" id="post-button">Make Post</a>
        </div>
        {#each data.GroupPosts as post}
            <GroupPostComponent {post}/>
        {/each}
    </div>
</div>

<style>
	#frame {
		height: 100vh + 65px; 
		width: 100vw;
		background-color: #243347;
		background-image: url('/bg10.png');
		background-size: cover;
		background-position: center;

		/* I know flexboxes are dodgy but trust me ;) */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
	}

    #content {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }

    #post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: inherit;
    }

    #recent-posts {
        margin-right: auto;
        margin-top: 3px;
        font-size: 18px;
		color: #dddddd;
    }

    #post-button {
		display: inline-block;
		padding: 0.3em 1.2em;
		margin: 0.3em 0.3em 0.3em 0;
		border-radius: 2em;
		box-sizing: border-box;
		text-decoration: none;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		color: #ffffff;
		background-color: #3aa4d1;
		text-align: center;
		transition: all 0.2s;
	}

	#post-button:hover {
		background-color: #4095c6;
	}

</style>
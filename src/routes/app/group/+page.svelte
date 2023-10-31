<script>
// @ts-nocheck

    import AppHeaderComponent from "../../../components/App/AppHeader/AppHeader_Component.svelte";
    import GroupDetailsComponent from "../../../components/App/Group/GroupDetails/GroupDetails_Component.svelte";
    import GroupPostComponent from "../../../components/App/Group/GroupPost/GroupPost_Component.svelte";
    import { onMount } from "svelte";   
    let loading = true;
    export let data;
     onMount(()=>{
         loading = false;
     })

</script>

    {#if !loading} 
    <AppHeaderComponent title="Group View" /> 
        <div id="content">
            <GroupDetailsComponent {data} />
            <div id="post-header">  
                <p id="recent-posts">RECENT POSTS</p>
                <a href="/app/create/post" id="post-button">Make Post</a>
            </div>
            <div id="posts-container">
            {#each data.GroupPosts as post}
                <GroupPostComponent {post}/>
            {/each}
            </div>
        </div>
    {/if}

<style>
	
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
        width: 100%;
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
        margin-top: 10px;
	}

    #posts-container {
       display: flex;
       flex-direction: column;
       gap: 10px;
       margin-bottom: 10vh;
       width: 100%;
    }

	#post-button:hover {
		background-color: #4095c6;
	}
    
	/* Tablet + PC Layout */
	@media only screen and (min-width: 750px) {
        #content {
            width: 55%;
        }
    }
</style>
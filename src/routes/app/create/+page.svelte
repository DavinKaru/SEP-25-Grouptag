<script>
    import Select from 'svelte-select';
	import AppHeaderComponent from '../../../components/AppHeader/AppHeader_Component.svelte';
    
    const groupOptions = ['Razorbacks', 'Cybersecurity'];
</script>

<div id="frame">
	<div id="body">
        <div class="field">
			<label for="postGroup">Group</label>
			<Select items={groupOptions} />
		</div>
		<div class="field">
			<label for="postTitle">Title</label>
			<input type="text" id="postTitle" name="postTitle" />
		</div>
        <div class="field">
            <label for="postContent">Content</label>
		    <input type="text" id="postContent" name="postContent" />
        </div>
		<div class="field">
            <label for="postTags">Tags</label>
		    <input type="text" id="postTags" name="postTags" />
        </div>
	</div>
</div>

<style>
	#frame {
		height: 100vh; 
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

    #body {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10px;
        gap: 15px;
        width: 90%;
        margin-left: auto;
        margin-right: auto;

    }

    .field {
        display: flex;
        flex-direction: column;
        gap: 5px; 
        
        background-color: rgba(255, 255, 255, 0.127);
        border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
        padding: 10px;
        width: 100%;
    }

    input {
        background-color: rgba(255, 255, 255, 0.127);
        border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
        padding: 10px;
        width: 100%;
        border: none;
        outline: none;
    }

    #postContent {
        height: 100px;
        color: white;
    }
</style>

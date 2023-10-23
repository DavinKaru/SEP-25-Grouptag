<script>
    import Select from 'svelte-select';
    import autosize from 'svelte-autosize';
	import AppHeaderComponent from '../../../components/App/AppHeader/AppHeader_Component.svelte';
    
    const groupOptions = ['Swinburne Razorbacks', 'Cybersecurity Club'];
</script>

<!-- 
    TODO:
    1.) Implement Validation
    2.) Post Data to Backend
    3.) Strech goal - implement Add Media functionality
-->

<div id="frame">
    <AppHeaderComponent title="Create Post"/>
	<div id="content">
        <h2>What do you want to say?</h2>
        <div class="field">
			<label for="postGroup">Group</label>
			<Select items={groupOptions} 
                placeholder="Where should we go?"
                --border-radius="10px 10px 10px 10px"
                --padding="10px"
                --height="55px"
                --font-family="Poppins"
                --font-size="15px"
                --placeholder-color="darkslategrey"
                --placeholder-font-family="Poppins"
                --item-color="black"
                --selected-item-color="black"
                --item-hover-bg="white"
                --item-hover-color="black"
                --placeholder-font="Poppins"
            />
		</div>
		<div class="field">
			<label for="postTitle">Title</label>
			<textarea use:autosize id="postTitle" name="postTitle" placeholder="Make it eye-catching!"/>
		</div>
        <div class="field">
            <label for="postContent">Content</label>
		    <textarea use:autosize id="postContent" name="postContent" placeholder="Write something cool here!"/>
        </div>
        <button id="media">
            <p class="create-button">Add Media</p>
        </button>
		<div class="field">
            <label for="postTags">Tags</label>
		    <textarea use:autosize id="postTags" name="postTags" placeholder="Seperate with a comma :)"/>
        </div>
        <button id="submit">
            <p class="create-button">Create Post</p>
        </button>
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
        margin-top: 10px;
        margin-bottom: 65px;
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

    textarea {
        background-color: white;
        font-family: "Poppins";
        font-size: 15px;
        border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
        padding: 10px;
        height: 55px;
        width: 100%;
        border: none;
        outline: none;
        resize: none;
    }

    textarea::placeholder {
        color: darkslategrey;
    }

    #postContent {
        height: 100px;
    }

    button {
        background: none;
        border: none;
    }

    .create-button {
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
        margin-left: auto;
        width: 140px;
        font-size: 16px;
        font-family: "Poppins";
    }

    .create-button:hover {
        background-color: #4095c6;
    }


    /* Tablet + PC Layout */
    @media only screen and (min-width: 750px) {
        #content {
            width: 55%;
        }
    }

    /* Phone layout */
    @media only screen and (max-width: 750px) {

        #content {
            width: 90%;
        }
    }
</style>

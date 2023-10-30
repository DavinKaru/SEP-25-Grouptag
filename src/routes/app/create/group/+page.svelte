<script>
	// @ts-nocheck
	import autosize from 'svelte-autosize';
	import AppHeaderComponent from '../../../../components/App/AppHeader/AppHeader_Component.svelte';
</script>

<AppHeaderComponent title="Create Group" />
<div id="content">
	<h2>Let's make a place!</h2>
	<div class="field">
		<label for="groupName">Name</label>
		<textarea use:autosize id="groupName" name="groupName" placeholder="Be original!" />
	</div>
	<p>Upload the Group Logo here!</p>
	<p>Upload the Group Banner here!</p>
	<div class="field">
		<label for="groupDescription">Description</label>
		<textarea
			use:autosize
			id="groupDescription"
			name="groupDescription"
			placeholder="Who is this group for?"
		/>
	</div>
	<div class="field">
		<label for="groupTags">Tags</label>
		<textarea use:autosize id="groupTags" name="groupTags" placeholder="Seperate with a comma :)" />
	</div>
	<button id="submit">
		<p class="create-button">Create Group</p>
	</button>
</div>

<style>
	#content {
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

	textarea {
		background-color: white;
		font-family: 'Poppins';
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

	#groupDescription {
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
		width: auto;
		font-size: 16px;
		font-family: 'Poppins';
        margin-bottom: 10vh;
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

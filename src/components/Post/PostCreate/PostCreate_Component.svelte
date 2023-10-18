<!-- PostCreate Component -->
<script>
</script>

<div class="create-post">
	<h1 id="title">Create New Post</h1>
	<form on:submit|preventDefault>
		<input type="text" id="inputTitle" placeholder="Title" required />
		<textarea placeholder="Content" required />
		<input type="text" placeholder="Tags" required />
		<div class="button-container">
			<button type="submit" id="mediaButton">Add Media</button>

			<select id="groupButton">
				<option value="" disabled selected>Select Group</option>
				<option value="group1">Group 1</option>
				<option value="group2">Group 2</option>
			</select>
		</div>

		<button type="submit" id="createButton">Create Post</button>
	</form>
</div>

<style>
	.create-post {
		position: absolute;
		bottom: 150%; /* Position it at the bottom of the navbar */
		left: 50%; /* Center horizontally */
		transform: translateX(-50%); /* centering */
		width: 175%;
		background-color: #fff;
		border-radius: 8px;
		border: 1px solid #ffffff;

		background-color: rgb(80, 95, 119);
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
	}

	#title {
		font-size: 1.2rem;
		padding: 1.5%;
		margin-top: 5px;
		text-align: center;
		width: 100%;
		border-bottom: #ffffff 1px solid;
	}

	.create-post form {
		display: flex;
		flex-direction: column;
		padding: 2%;
	}

	.create-post ::placeholder {
		color: #ffffff;
		font-size: 1rem;
	}

	.create-post input,
	.create-post textarea {
		margin-bottom: 10px;
		padding: 2.5%;
		padding-left: 3%;
		color: aliceblue;
		outline: none; /* Remove outline */
		border: none;
		border-radius: 5px;
		background-color: #7e97bf7c;
		max-height: 20vh;
		max-width: 95%;
		min-width: 95%;
		margin: 5px auto;
	}

	#inputTitle {
		border: none;
		border-radius: 5px 5px 0 0;
		border-bottom: #ffffff 1px solid;
		background-color: #7e97bf7c;
	}
	.button-container {
		display: flex;
		justify-content: center;
		gap: 1%; /* Optional: To add some space between the buttons */
	}
	#createButton {
		display: block; /* Takes full width of its parent */

		/* Dimensions */
		height: 40px;
		width: 95%;
		border-radius: 5px;

		/* Colors */
		color: white;
		background-color: #44c7f7;

		/* Interaction */
		cursor: pointer;
		margin: 15px auto;
		border: none;

		/* Text styling */
		font-size: 1rem;
		font-weight: bold;
		text-decoration: none;
		text-align: center;
	}

	#mediaButton,
	#groupButton {
		display: flex;
		justify-content: center;
		align-items: center;

		/* Dimensions */
		height: min-content;
		width: 50%;
		max-width: 47%;
		min-width: 47%;
		border-radius: 5px;
		margin-top: 0;
		padding: 1%;

		/* Colors */
		color: rgb(62, 62, 62);
		background-color: #44f79b;

		/* Interaction */
		cursor: pointer;
		margin: 5px 0;
		border: none;

		/* Text styling */
		font-weight: bold;
		font-size: 1rem;
		text-decoration: none;
		text-align: center;
	}

</style>
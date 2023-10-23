<script>
	import Select from 'svelte-select';
	import autosize from 'svelte-autosize';
	import AppHeaderComponent from '../../../../components/AppHeader/AppHeader_Component.svelte';

	const employmentType = ['Full-time', 'Part-time', 'Casual', 'Volunteer', 'Internship'];
</script>

<div id="frame">
	<AppHeaderComponent title="Add Experience" />
	<div id="body">
		<h2>What do you want to add?</h2>

		<div class="field">
			<label for="jobTitle">Job Title</label>
			<textarea use:autosize id="jobTitle" name="jobTitle" placeholder="Your Job Title!" />
		</div>

		<div class="field">
			<label for="companyName">Company</label>
			<textarea use:autosize id="companyName" name="companyName" placeholder="Your Company Name!" />
		</div>

		<div class="field">
			<label for="location">Location</label>
			<textarea use:autosize id="location" name="location" placeholder="Your Company Location!" />
		</div>

		<div class="field" id="dateType">
			<label for="startDate">Start:</label>
			<input type="date" id="startDate" name="startDate" />
			<label for="endDate">End:</label>
			<input type="date" id="endDate" name="endDate" />
		</div>

		<div class="field">
			<label for="employmentType">Employment</label>
			<Select
				items={employmentType}
				placeholder="What should we add?"
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
			<label for="jobDesc">Description</label>
			<textarea use:autosize id="jobDesc" name="jobDesc" placeholder="Write what you did!" />
		</div>

		<button id="submit">
			<p class="submit-button">Add Experience</p>
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

	#body {
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

	#dateType {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 20px; /* Adjust the gap as needed */
	}

	#jobDesc {
		height: 100px;
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

	.submit-button {
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
		width: 100%;
		font-size: 16px;
		font-family: 'Poppins';
	}

	.submit-button:hover {
		background-color: #4095c6;
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

	button {
		background: none;
		border: none;
	}
</style>

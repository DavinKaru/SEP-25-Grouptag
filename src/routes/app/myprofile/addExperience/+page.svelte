<!-- src\routes\app\profile\addExperience\+page.svelte -->
<script>
// @ts-nocheck

	import Select from 'svelte-select';
	import autosize from 'svelte-autosize';
	import AppHeaderComponent from '../../../../components/App/AppHeader/AppHeader_Component.svelte';
	import { supabase } from '$lib/supabaseClient';
	import toast, { Toaster } from 'svelte-french-toast';
	import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';

	const employmentType = ['Full-time', 'Part-time', 'Casual', 'Volunteer', 'Internship'];

	export let data;

	let jobTitle = '';
	let companyName = '';
	let companyLogo = '';
	let location = '';
	let startYear = '';
	let startMonth = '';
	let endYear = '';
	let endMonth = '';
	let selectedEmploymentType = '';

	async function handleSubmit(event) {
		event.preventDefault(); // Prevent the default form submission
		const experience = {
			jobTitle,
			companyName,
			companyLogo,
			location,
			startYear,
			startMonth,
			endYear,
			endMonth,
			employmentType: selectedEmploymentType
		};

		const result = await addExperienceToDatabase(experience);
		if (result.success) {
			toast.success('Experience added!');
		} else {
			console.error('Failed to add experience:', result.error);
		}
	}

	async function addExperienceToDatabase(experience) {
		const id = data.user.users.user_id;

		// Fetch existing data
		const { data: existingData, error: fetchError } = await supabase
			.from('users')
			.select('*')
			.eq('user_id', id)
			.single();

		if (fetchError) {
			return { success: false, error: fetchError };
		}

		// Append new experience to existing experiences
		const updatedExperience = [...existingData['experience '], experience];
		console.log('updatedExperience:', updatedExperience);
		// Update the database
		const { data: updateData, error: updateError } = await supabase
			.from('users')
			.update({
				['experience ']: updatedExperience
			})
			.eq('user_id', id);

		if (updateError) {
			return { success: false, error: updateError };
		} else {
			return {
				success: true,
				data: updateData || 'No data returned, but update successful.'
			};
		}
	}

	let files = {
		accepted: [],
		rejected: []
	};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}

	function handleRemoveFile(e, index) {
		files.accepted.splice(index, 1);
		files.accepted = [...files.accepted];
	}
</script>

<AppHeaderComponent title="Add Experience" />
<div id="body">
	<Toaster />
	<h2>What do you want to add?</h2>
	<form on:submit={handleSubmit}>
		<div class="field">
			<label for="jobTitle">Job Title</label>
			<textarea
				bind:value={jobTitle}
				use:autosize
				id="jobTitle"
				name="jobTitle"
				placeholder="Your Job Title!"
				required
			/>
		</div>

		<div class="field">
			<label for="companyName">Company</label>
			<textarea
				bind:value={companyName}
				use:autosize
				id="companyName"
				name="companyName"
				placeholder="Your Company's Name!"
				required
			/>
		</div>

		<!-- Previous done using url link -->
		<!--
				<label for="companyLogo">Company Logo</label> 
				<textarea
				bind:value={companyLogo}
				use:autosize
				id="companyLogo"
				name="companyLogo"
				placeholder="Your Company's Logo!"
			/> -->

		<div class="field">
			<label for="companyLogo">Company Logo</label>
			<div class="dropZone">
				<Dropzone on:drop={handleFilesSelect} accept="image/*">
					<p>Click here to upload</p>
				</Dropzone>
			</div>
			<div class="dropFiles">
				{#each files.accepted as item, index}
					<div>
						<span>{item.name}</span>
						<button on:click={(e) => handleRemoveFile(e, index)} id="removeButton">Remove</button>
					</div>
				{/each}
			</div>
		</div>

		<div class="field">
			<label for="location">Location</label>
			<textarea
				bind:value={location}
				use:autosize
				id="location"
				name="location"
				placeholder="Your Company Location!"
				required
			/>
		</div>

		<div class="field" id="dateType">
			<label for="startYear">Start Year:</label>
			<input
				bind:value={startYear}
				type="number"
				id="startYear"
				name="startYear"
				min="1000"
				max="3000"
				required
			/>
			<label for="startMonth">Start Month:</label>
			<select bind:value={startMonth} id="startMonth" name="startMonth" required>
				<option value="JAN">JAN</option>
				<option value="FEB">FEB</option>
				<option value="MAR">MAR</option>
				<option value="APR">APR</option>
				<option value="MAY">MAY</option>
				<option value="JUN">JUN</option>
				<option value="JUL">JUL</option>
				<option value="AUG">AUG</option>
				<option value="SEP">SEP</option>
				<option value="OCT">OCT</option>
				<option value="NOV">NOV</option>
				<option value="DEC">DEC</option>
			</select>
		</div>

		<div class="field" id="dateType">
			<label for="endYear">End Year:</label>
			<input
				bind:value={endYear}
				type="number"
				id="endYear"
				name="endYear"
				min="1000"
				max="3000"
				required
			/>
			<label for="endMonth">End Month:</label>
			<select bind:value={endMonth} id="endMonth" name="endMonth" required>
				<option value="JAN">JAN</option>
				<option value="FEB">FEB</option>
				<option value="MAR">MAR</option>
				<option value="APR">APR</option>
				<option value="MAY">MAY</option>
				<option value="JUN">JUN</option>
				<option value="JUL">JUL</option>
				<option value="AUG">AUG</option>
				<option value="SEP">SEP</option>
				<option value="OCT">OCT</option>
				<option value="NOV">NOV</option>
				<option value="DEC">DEC</option>
			</select>
		</div>

		<div class="field">
			<label for="employmentType">Employment</label>
			<Select
				bind:value={selectedEmploymentType}
				items={employmentType}
				placeholder="Your Employment Type!"
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

		<button id="submit">
			<p class="submit-button">Add Experience</p>
		</button>
	</form>
</div>

<style>
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

	.field {
		display: flex;
		flex-direction: column;
		gap: 5px;
		background-color: rgba(255, 255, 255, 0.127);
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		padding: 10px;
		width: 100%;
		margin-bottom: 2%;
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

	#submit {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		margin-bottom: 10vh;
	}

	.dropFiles {
		display: flex;
		flex-direction: column;
		gap: 5px;
		background-color: rgba(255, 255, 255, 0.127);
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		padding: 0 20px;
		width: 100%;
		color: rgb(255, 255, 255);
	}

	.dropFiles > div > span {
		font-size: small;
	}

	.dropZone {
		background-color: rgb(255, 255, 255);
		font-family: 'Poppins';
		font-size: 15px;
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		padding: 5px;
		height: fit-content;
		width: 100%;
		border: none;
		outline: none;
		resize: none;
	}
</style>

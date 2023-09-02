<script>
	import ButtonsComponent from '../../Buttons/Buttons_Component.svelte';
</script>

<form>
	<div>
		<div>
			<label for="university">University Name</label>
			<input
				type="text"
				id="university"
				name="university"
				class="input-field"
				placeholder="Enter your university's name here"
				style="margin-bottom: 31px;"
			/>
		</div>
		<div>
			<label for="course">Course Name</label>
			<input
				type="text"
				id="course"
				name="course"
				class="input-field"
				placeholder="Enter your course name here"
			/>
		</div>
	</div>

	<ButtonsComponent text="Next" buttonClass="signup-button" href="/signup/details" />
</form>

<style>
	/* Reset browser default */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.input-field {
		height: 60px;
		width: 100%;
		border-radius: 10px;
		padding: 0 20px;
		font-size: 15px;
		background-color: #f4fcff;
		border: none;
		margin: 8px auto;
		text-align: left;
		box-sizing: border-box;
	}

	form > div > div {
		margin: auto;
		width: 80%;
		text-align: left;
	}

	label {
		color: #f4fcff;
		font-size: 15px;
		font-weight: bold;
	}

	/* If screen's height is smaller than that of the required value to display 
		the form's input fields, adjust their height so they can fit on the screen. */
	@media screen and (max-height: 750px) {
		.input-field {
			height: 6.5vh;
		}
	}
</style>

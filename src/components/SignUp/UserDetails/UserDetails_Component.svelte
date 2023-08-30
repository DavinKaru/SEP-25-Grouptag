<form>
	<div>
		<div>
			<label for="fName">First Name</label>
			<input
				type="text"
				id="fName"
				name="fName"
				class="input-field"
				placeholder="Enter your first name here"
				style="margin-bottom: 31px;"
			/>
		</div>

		<div>
			<label for="lName">Surname</label>
			<input
				type="text"
				id="lName"
				name="lName"
				class="input-field"
				placeholder="Enter your surname here"
				style="margin-bottom: 31px;"
			/>
		</div>

		<div>
			<label for="dob">DOB</label>
			<input
				type="date"
				id="dob"
				name="dob"
				class="input-field"
				placeholder="Enter your DOB here"
				style="margin-bottom: 31px;"
			/>
		</div>

		<div>
			<label for="bio">User Bio</label>
			<input
				type="text"
				id="bio"
				name="bio"
				class="input-field"
				placeholder="Enter your User Bio here"
			/>
		</div>
	</div>
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

	/*  */
	@media screen and (min-height: 750px) {
		.input-field {
			margin: auto;
		}
		
	}

	/* If screen's height is smaller than that of the required value to display 
		the form's input fields, adjust their height so they can fit on the screen. */
	@media screen and (max-height: 750px) {
		.input-field {
			height: 6.5vh;
		}
	}
</style>

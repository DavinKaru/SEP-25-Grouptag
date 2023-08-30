<form>
	<div>
		<div>
			<label for="email">University Email:</label>
			<input
				type="email"
				id="email"
				name="email"
				class="input-field"
				placeholder="Enter your university email here"
				style="margin-bottom: 31px;"
			/>
		</div>

		<div>
			<label for="password">Password:</label>
			<input
				type="password"
				id="password"
				name="password"
				class="input-field"
				placeholder="Enter your password here"
			/>
		</div>

		<div>
			<label for="confirm-password">Confirm Password:</label>
			<input
				type="password"
				id="password"
				name="password"
				class="input-field"
				placeholder="Enter your password here"
			/>
		</div>
	</div>

	<input type="button" value="Sign Up" class="signup-button" />
</form>

<style>
	.input-field {
		height: 60px;
		width: 100%;
		border-radius: 10px;
		padding: 0 20px; /* 0px on top and bottom, 20px on left and right */
		font-size: 15px;
		background-color: #f4fcff;
		border: none; /* remove the border */
		margin: 8px auto; /* 8px on top and bottom, auto on left and right (Horizontally Centered)*/
		text-align: left;
		box-sizing: border-box; /* make sure the padding is included in the width */
	}

	form > div > div {
		/* Select the divs inside the divs inside the form, which contains label and input element */
		margin: auto; /* Horizontally Centered */
		width: 80%; /* 80% of the parent element */
		text-align: left;
	}

	.signup-button {
		height: 60px;
		width: 257px;
		border-radius: 10px;
		font-size: 20px;
		font-weight: bold;
		background-color: #caa2f2;
		color: white;
		border: none; /* remove the border */
		cursor: pointer; /* add a pointer cursor on mouse-over */
		margin-top: 30px;
		margin-bottom: 8px;
	}

	label {
		color: #f4fcff;
		font-size: 15px;
		font-weight: bold;
	}

	@media screen and (max-height: 667px) {
		/* style for screen heigh 667px and below */
		.input-field {
			margin: auto;
		}
	}
</style>

<form>
	<div>
		<div>
			<label for="email">University Email</label>
			<input
				type="email"
				id="email"
				name="email"
				class="input-field"
				placeholder="Enter your University Email here"
				style="margin-bottom: 31px;"
			/>
		</div>

		<div>
			<label for="password">Password</label>
			<input
				type="password"
				id="password"
				name="email"
				class="input-field"
				placeholder="Enter your password here"
				style="margin-bottom: 31px;"
			/>
		</div>

		<div>
			<label for="cPassword">Confirm Password</label>
			<input
				type="password"
				id="cPassword"
				name="cPassword"
				class="input-field"
				placeholder="Re-enter your password here"
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

	/* If screen's height is smaller than that of the required value to display 
		the form's input fields, adjust their height so they can fit on the screen. */
	@media screen and (max-height: 750px) {
		.input-field {
			height: 6.5vh;
		}
	}
</style>

<form>
	<div style="margin-top: 42px;">
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
	</div>

	<input type="button" value="Login to your account" class="login-button" />

	<a href="/" class="forgot-password">I forgot my password</a>
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

	.login-button {
		height: 60px;
		width: 257px;
		border-radius: 10px;
		font-size: 20px;
		font-weight: bold;
		background-color: #44c7f7;
		color: white;
		border: none; /* remove the border */
		cursor: pointer; /* add a pointer cursor on mouse-over */
		margin-top: 30px;
		margin-bottom: 8px;
	}

	.forgot-password {
		display: block; /* display the link as a block element */
		font-size: 10px;
		font-weight: bold;
		text-align: center;
		text-decoration: none; /* remove the underline */
		color: #e87e7e;
		margin-bottom: 30px;
	}

	label {
		color: #f4fcff;
		font-size: 15px;
		font-weight: bold;
	}

	@media screen and (max-height: 667px) {
		/* style for screen heigh 667px and below */
		.forgot-password {
			padding: 0px auto; /* 0 padding top and bottom, auto padding left and right*/
			margin-bottom: 0px;
		}

		.input-field {
			margin: auto; /* Horizontally Centered */
		}
	}
</style>

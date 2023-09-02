<script> 
	import ButtonsComponent from "../../Buttons/Buttons_Component.svelte";
</script>
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
	<ButtonsComponent text="Next" buttonClass="signup-button" href="/signup/credentials" />
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

	label
	 {
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

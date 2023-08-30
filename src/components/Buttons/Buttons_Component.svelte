<script>
	export let text = 'default text';
	export let buttonClass = '';
	export let href = '';
</script>

<a {href} class={`button ${buttonClass}`}>{text}</a>

<style>
	/* Default button styling */
	.button {
		display: block; /* Takes full width of its parent */

		/* Dimensions */
		height: 60px;
		width: 257px;
		border-radius: 10px;

		/* Colors */
		background-color: #000000;
		color: white; /* Text color */

		/* Interaction */
		cursor: pointer; /* Changes cursor to pointer*/
		margin: 30px auto 0px; /* Centers the button horizontally 30px top, 0px bottom*/
		border: #f4fcff 2px dashed; /* Dashed border to differentiate default button styling */

		/* Text styling */
		font-size: 20px;
		font-weight: bold;
		text-decoration: none; /* Removes any underlines */
		text-align: center;
		line-height: 60px; /* Vertically centers the text within the button */
	}

	.button:hover {
		text-decoration: none; /* Ensures that there's no underline on hover */
	}

	/* Styling for the login button */
	.login-button {
		background-color: #44c7f7;
		border: none; /* Removes the border */
	}

	/* Styling for the signup button */
	.signup-button {
		background-color: #caa2f2;
		border: none;
	}

	/* Media query for screens with a max height of 667px */
	@media screen and (max-height: 667px) {
		.box {
			height: calc(100vh - 250px); /* Adjusts the height of the box based on the viewport height */
		}
	}
</style>

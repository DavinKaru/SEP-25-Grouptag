<script>
	export let text = 'default text';
	export let buttonClass = '';
	export let href = '';
	export let isAnchor = true; //Default to true
	export let buttonType = 'button';

	if (!['button', 'submit', 'reset'].includes(buttonType)) {
		console.error('Invalid buttonType');
		buttonType = 'button'; // default to "button"
	}
</script>

{#if isAnchor}
	<a {href} class={`button ${buttonClass}`}>{text}</a>
{:else}
	<button type={buttonType} class={`button ${buttonClass}`}>{text}</button>
{/if}

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
		border: none;

		@media screen and (max-height: 700px) {
			height: 7vh;
			line-height: 7vh;
		}

		margin-bottom: 10px;
	}

	/* Styling for the signup button */
	.signup-button {
		background-color: #caa2f2;
		border: none;

		/* If screen's height is smaller than that of the required value to display 
		the form's input fields, adjust their height so they can fit on the screen. */
		@media screen and (max-height: 700px) {
			height: 7vh;
			line-height: 7vh;
		}
	}
</style>

<script>
	export let boxClass = '';
	export let boxId = '';
</script>

<div class={`box ${boxClass} boxId ${boxId}`}>
	<slot />
</div>

<style>
	/* Base styling for the box component */
	.box {
		/*Box shadows */
		box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.3);
		-webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.3);
		-moz-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.3);

		/* Colors */
		background-color: #11172d;

		/* Dimensions */
		width: 100%;
		height: 419px;
		min-height: 300px;
		border-radius: 10px 10px 0 0; /* Rounded corners on top left and right */

		/* Text Styles */
		text-align: center;
		font-family: 'Poppins';

		/* Flexbox layout */
		display: flex;
		flex-direction: column; /* Stack children vertically */
		justify-content: center; /* Center children vertically */
		align-items: center; /* Center children horizontally */
	}

	/* Styling for the login box */
	.login-box {
		/* Box Shadows */
		box-shadow: 0px 0px 15px 0px rgba(68, 199, 247, 0.3);
		-webkit-box-shadow: 0px 0px 15px 0px rgba(68, 199, 247, 0.3);
		-moz-box-shadow: 0px 0px 15px 0px rgba(68, 199, 247, 0.3);

		/* Dimensions */
		width: 100%;
		height: 100%;
		border-radius: 10px 10px 0 0; /* Rounded corners on top left and right */
	}

	/* Styling for the signup box */
	.signup-box {
		/* Box Shadows */
		box-shadow: 0px 0px 15px 0px rgba(202, 162, 242, 0.35);
		-webkit-box-shadow: 0px 0px 15px 0px rgba(202, 162, 242, 0.35);
		-moz-box-shadow: 0px 0px 15px 0px rgba(202, 162, 242, 0.35);

		/* Dimensions */
		width: 100%;
		height: 100%;
		border-radius: 10px 10px 0 0;
	}
</style>

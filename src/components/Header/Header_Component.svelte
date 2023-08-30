<script>
	export let text = 'default text';
</script>

<div class="header">
	<img src="/grouptag-logo.png" alt="Grouptag Logo" id="logo" />
	<h1 class="header-text">{text}</h1>
</div>

<style>
	.header {
		display: flex;
		flex-direction: column;
		height: 175px;

		/* Prevent items from fitting onto one line */
		flex-wrap: nowrap;

		/* You'll see a lot of these - I built them to alter the CSS for smaller devices */
		@media screen and (max-height: 700px) {
			height: 150px;
		}
	}

	#logo {
		position: relative;
		width: 250px;
		height: auto;
		margin-left: auto;
		margin-right: auto;
		top: 25%;

		@media screen and (max-height: 700px) {
			width: 150px;
		}
	}

	.header-text {
		position: relative;
		color: #ffffff;
		font-size: 20px;
		font-weight: bold;
		font-family: 'Poppins';
		text-align: center;
		top: 30%;

		@media screen and (max-height: 700px) {
			font-size: 20px;
		}
	}
</style>

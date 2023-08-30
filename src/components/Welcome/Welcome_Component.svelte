<div class="welcome">
	<h1 class="header-text">Welcome to</h1>
	<img src="/grouptag-logo.png" alt="Grouptag Logo" id="logo"/>
</div>

<style>
	.welcome {
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

	.header-text {
		position: relative;
		color: #ffffff;
		font-size: 20px;
		font-weight: bold;
		font-family: 'Poppins';
		text-align: center;
		top: 25%;
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

</style>

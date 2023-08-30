<div class="welcome">
	<h1 class="header-text">Welcome to</h1>
	<img src="/grouptag-logo.png" alt="Grouptag Logo" id="logo"/>
</div>

<style>
	.welcome {
<<<<<<< HEAD
		flex-grow: 1; /* make sure the welcome div takes up the remaining space */
		color: #ffffff;
		text-align: center;
		font-size: 29px;
		font-weight: bold;
		font-family: 'Lincoln Road', Arial, Helvetica, sans-serif;
		display: flex; /* make sure the welcome div is a flexbox */
		justify-content: center; /* center the content horizontally */
		align-items: center; /* center the content vertically */
		flex-direction: column; /* make sure the content is stacked vertically */
||||||| 4c17e8a
		flex-grow: 1;
		color: #ffffff;
		text-align: center;
		font-size: 29px;
		font-weight: bold;
		font-family: 'Lincoln Road', Arial, Helvetica, sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
=======
		display: flex;
		flex-direction: column;
		height: 175px;

		/* Prevent items from fitting onto one line */
		flex-wrap: nowrap;

		/* You'll see a lot of these - I built them to alter the CSS for smaller devices */
		@media screen and (max-height: 700px) {
			height: 150px;
		}
>>>>>>> 4b6afb014aae5fdade8eb159a6ffa0c6c1bfbb95
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

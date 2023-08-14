<script>
	import ButtonsComponent from '../components/Buttons/Buttons_Component.svelte';
	import WelcomeComponent from '../components/Welcome/Welcome_Component.svelte';
	import BoxComponent from '../components/Box/Box_Component.svelte';
</script>

<body>
	<div class="frame">
		<WelcomeComponent />

		<BoxComponent boxClass="welcome-box">
			<h1>Get Started</h1>

			<ButtonsComponent text="Login" href="/login" buttonClass="login-button" />
			<ButtonsComponent text="Sign Up" href="/signup" buttonClass="signup-button" />
		</BoxComponent>
	</div>
</body>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		color: #ffffff;
		display: flex;
		justify-content: center;
		height: 100vh;
		width: 100vw;
		margin: 0;
		font-family: 'Poppins';
		overflow: hidden;
	}

	.frame {
		height: 100vh;
		width: 100vw;
		background-color: #243347;
		display: grid;
		grid-template-rows: 1fr 400px;
		background-image: url('/bg10.png');
		background-size: cover;
		background-position: center;
	}
</style>

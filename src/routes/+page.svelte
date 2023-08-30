<script>
	import ButtonsComponent from '../components/Buttons/Buttons_Component.svelte';
	import WelcomeComponent from '../components/Welcome/Welcome_Component.svelte';
	import BoxComponent from '../components/Box/Box_Component.svelte';
</script>

<body>
	<div class="frame">
		<WelcomeComponent />

		<BoxComponent>
			<h1>Get Started</h1>

			<ButtonsComponent text="Login" href="/login" buttonClass="login-button" />
			<ButtonsComponent text="Sign Up" href="/signup" buttonClass="signup-button" />
		</BoxComponent>
	</div>
</body>

<style>
	.frame {
		height: 100vh;
		width: 100vw;
		background-color: #243347;
		display: grid;
		grid-template-rows: 1fr min-content; /* Change 300px to min-content */
		background-image: url('/bg10.png');
		background-size: cover;
		background-position: center;
	}
</style>

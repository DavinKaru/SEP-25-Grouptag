<!-- Welcome page -->
<script>
	import ButtonsComponent from '../components/Buttons/Buttons_Component.svelte';
	import BoxComponent from '../components/Box/Box_Component.svelte';
	import HeaderComponent from '../components/WelcomeHeader/WelcomeHeader_Component.svelte';
</script>

<body>
	<div class="frame">
		<HeaderComponent text="Welcome!" />

		<BoxComponent boxClass="signup-box">
			<h2>Get Started</h2>
			<ButtonsComponent text="Login" href="/welcome/login" buttonClass="login-button" />
			<ButtonsComponent text="Sign Up" href="/welcome/signup/enrolment" buttonClass="signup-button" />
		</BoxComponent>
	</div>
</body>

<style>
	.frame {
		height: 100vh;
		width: 100vw;
		background-color: #243347;
		background-image: url('/bg10.png');
		background-size: cover;
		background-position: center;

		/* I know flexboxes are dodgy but trust me ;) */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}
</style>

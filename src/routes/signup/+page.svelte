<script>
	import SignUpComponent from '../../components/SignUp/SignUp_Component.svelte';
	import WelcomeComponent from '../../components/Welcome/Welcome_Component.svelte';
	import BoxComponent from '../../components/Box/Box_Component.svelte';
</script>

<body>
	<div class="frame">
		<WelcomeComponent />

		<BoxComponent boxClass="signup-box">
			<SignUpComponent />
		</BoxComponent>
	</div>
</body>

<style>
	.frame {
		height: 100vh; /* 100% of the viewport height */
		width: 100vw; /* 100% of the viewport width */
		background-color: #243347;
		display: grid; /* make sure the frame is a grid */
		grid-template-rows: 1fr min-content; /* 1fr for the welcome component, min-content for the sign up component */
		background-image: url('/bg10.png');
		background-size: cover; /* make sure the background image covers the entire frame */
		background-position: center;
	}
</style>

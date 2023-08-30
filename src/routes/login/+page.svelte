<script>
	import LoginComponent from '../../components/Login/Login_Component.svelte';
	import BoxComponent from '../../components/Box/Box_Component.svelte';
	import WelcomeComponent from '../../components/Welcome/Welcome_Component.svelte';
</script>

<body>
	<div class="frame">
		<WelcomeComponent />

		<BoxComponent boxClass="login-box">
			<LoginComponent />
		</BoxComponent>
	</div>
</body>

<style>
	.frame {
		height: 100vh;
		width: 100vw;
		background-color: #243347;
		display: grid;
		grid-template-rows: 1fr min-content;
		background-image: url('/bg10.png');
		background-size: cover;
		background-position: center;
	}
</style>

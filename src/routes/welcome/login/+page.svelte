<!-- Login page -->
<script>
	import LoginComponent from '../../../components/Login/Login_Component.svelte';
	import BoxComponent from '../../../components/Box/Box_Component.svelte';
	import HeaderComponent from '../../../components/WelcomeHeader/WelcomeHeader_Component.svelte';
</script>

<body>
	<div class="frame">
		<HeaderComponent text="Great to Have You Back!"/>

		<BoxComponent boxClass="signup-box">
			<LoginComponent />
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
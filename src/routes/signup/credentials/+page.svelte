<script>
	import UserCredentialsComponent from '../../../components/SignUp/UserCredentials/UserCredentials_Component.svelte';
	import HeaderComponent from '../../../components/Header/Header_Component.svelte';
	import BoxComponent from '../../../components/Box/Box_Component.svelte';
	import ButtonsComponent from '../../../components/Buttons/Buttons_Component.svelte';
</script>

<body>
	<div class="frame">
		<HeaderComponent text="Almost there..." />
		<BoxComponent boxClass="signup-box">
			<UserCredentialsComponent />
            <ButtonsComponent text="Next" buttonClass="signup-button" href="/signup/credentials" />
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

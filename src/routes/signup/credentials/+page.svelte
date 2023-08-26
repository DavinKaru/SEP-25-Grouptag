<script>
    import './style.css';
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

<!--//src/routes/welcome/signup/credentials/+page.svelte-->

<script>
	import UserCredentialsComponent from '../../../../components/Welcome/SignUp/UserCredentials/UserCredentials_Component.svelte';
	import HeaderComponent from '../../../../components/Welcome/WelcomeHeader/WelcomeHeader_Component.svelte';
	import BoxComponent from '../../../../components/Box/Box_Component.svelte';
</script>

<HeaderComponent text="Almost there..." />
<BoxComponent boxClass="signup-box">
	<UserCredentialsComponent />
</BoxComponent>
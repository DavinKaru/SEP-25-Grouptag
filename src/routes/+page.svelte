<!--// src/routes/+page.svelte-->
<script>
	import ButtonsComponent from '../components/Welcome/Buttons/Buttons_Component.svelte';
	import BoxComponent from '../components/Box/Box_Component.svelte';
	import HeaderComponent from '../components/Welcome/WelcomeHeader/WelcomeHeader_Component.svelte';
	// import { supabase } from '../supabaseClient';
	// import { goto } from '$app/navigation';

	// const handleIsLoggedIn = async () => {
	// try {
	// 	const myUserId = (await supabase.auth.getSession()).data.session?.user.id;
	// 	if(myUserId != null){
	// 		goto('/app/myprofile')
	// 	}
	// } catch (error) {
	//   if (error instanceof Error) {
	//     alert(error.message)
	//   }
	// } finally {
	// }
	// }
	// handleIsLoggedIn
</script>

<HeaderComponent text="Welcome!" />

<BoxComponent boxClass="signup-box">
	<h2>Get Started</h2>
	<ButtonsComponent text="Login" href="/welcome/login" buttonClass="login-button" />
	<ButtonsComponent text="Sign Up" href="/welcome/signup/enrolment" buttonClass="signup-button" />
</BoxComponent>
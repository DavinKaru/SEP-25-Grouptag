<!--//src/routes/welcome/login/+page.svelte-->
<script>
	import LoginComponent from '../../../components/Welcome/Login/Login_Component.svelte';
	import BoxComponent from '../../../components/Box/Box_Component.svelte';
	import HeaderComponent from '../../../components/Welcome/WelcomeHeader/WelcomeHeader_Component.svelte';

	export let form;
</script>

<HeaderComponent text="Great to Have You Back!" />

<BoxComponent boxClass="signup-box">
	<LoginComponent {form} />
</BoxComponent>
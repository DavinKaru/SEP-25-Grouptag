<!--//src/routes/welcome/signup/details/+page.svelte-->

<script>
	import HeaderComponent from '../../../../components/Welcome/WelcomeHeader/WelcomeHeader_Component.svelte';
	import UserDetailsComponent from '../../../../components/Welcome/SignUp/UserDetails/UserDetails_Component.svelte';
	import BoxComponent from '../../../../components/Box/Box_Component.svelte';
</script>

<HeaderComponent text="Just a few more things..." />
<BoxComponent boxClass="signup-box">
	<UserDetailsComponent />
</BoxComponent>

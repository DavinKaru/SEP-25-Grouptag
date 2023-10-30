<!--//src/routes/welcome/signup/industry/+page.svelte-->
<script>
	import HeaderComponent from '../../../../components/Welcome/WelcomeHeader/WelcomeHeader_Component.svelte';
	import BoxComponent from '../../../../components/Box/Box_Component.svelte';
	import UserIndustryComponent from '../../../../components/Welcome/SignUp/UserIndustry/UserIndustry_Component.svelte';
</script>

<HeaderComponent text="Last of all..." />
<BoxComponent boxClass="signup-box">
	<UserIndustryComponent />
</BoxComponent>

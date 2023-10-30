<!--//src/routes/welcome/signup/enrolment/+page.svelte-->
<script>
	import HeaderComponent from '../../../../components/Welcome/WelcomeHeader/WelcomeHeader_Component.svelte';
	import UserEnrolmentComponent from '../../../../components/Welcome/SignUp/UserEnrolment/UserEnrolment_Component.svelte';
	import BoxComponent from '../../../../components/Box/Box_Component.svelte';
</script>

<HeaderComponent text="Great to have you join us!" />
<BoxComponent boxClass="signup-box">
	<UserEnrolmentComponent />
</BoxComponent>
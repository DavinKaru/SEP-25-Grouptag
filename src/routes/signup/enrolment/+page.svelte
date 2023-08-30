<script>
    import './style.css';
    import HeaderComponent from '../../../components/Header/Header_Component.svelte';
	import UserEnrolmentComponent from '../../../components/SignUp/UserEnrolment/UserEnrolment_Component.svelte';
	import BoxComponent from '../../../components/Box/Box_Component.svelte';
	import ButtonsComponent from '../../../components/Buttons/Buttons_Component.svelte';
</script>

<body>
	<div class="frame">
		<HeaderComponent text="Great to have you join us!" />
		<BoxComponent boxClass="signup-box">
			<UserEnrolmentComponent />
            <ButtonsComponent text="Next" buttonClass="signup-button" href="/signup/details" />
		</BoxComponent>
	</div>
</body>

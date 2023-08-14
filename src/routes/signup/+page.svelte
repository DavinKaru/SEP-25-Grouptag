<script>
	import './style.css';
	import SignUpComponent from '../../components/SignUp/SignUp_Component.svelte';
	import WelcomeComponent from '../../components/Welcome/Welcome_Component.svelte';
	import BoxComponent from '../../components/Box/Box_Component.svelte';
</script>

<body>
	<div class="frame">
		<WelcomeComponent />

		<BoxComponent boxClass="signup-box">
			<SignUpComponent />
		</BoxComponent>
	</div>
</body>

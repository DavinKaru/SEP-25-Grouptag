<script>
	import './style.css';
	import LoginComponent from '../../components/Login/Login_Component.svelte';
	import BoxComponent from '../../components/Box/Box_Component.svelte';
	import WelcomeComponent from '../../components/Welcome/Welcome_Component.svelte';
</script>

<body>
	<div class="frame">
		<WelcomeComponent />

		<BoxComponent>
			<LoginComponent />
		</BoxComponent>
	</div>
</body>

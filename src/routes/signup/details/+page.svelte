<script>
    // import './style.css';
	import HeaderComponent from '../../../components/Header/Header_Component.svelte';
	import UserDetailsComponent from '../../../components/SignUp/UserDetails/UserDetails_Component.svelte';
	import BoxComponent from '../../../components/Box/Box_Component.svelte';
	import ButtonsComponent from '../../../components/Buttons/Buttons_Component.svelte';
</script>

<body>
	<div class="frame">
		<HeaderComponent text="Just a few more things..." />

		<BoxComponent boxClass="signup-box" boxId="signup-details-box">
			<UserDetailsComponent />
            <ButtonsComponent text="Next" buttonClass="signup-button" href="/signup/credentials" />
		</BoxComponent>
	</div>
</body>

<style>
	.frame {
		height: 100vh;
		width: 100vw;
		background-color: #243347;
		display: grid;
		grid-template-rows: 1fr 80%;
		background-image: url('/bg10.png');
		background-size: cover;
		background-position: center;
	}
</style>

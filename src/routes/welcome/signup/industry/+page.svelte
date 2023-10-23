<!--//src/routes/welcome/signup/industry/+page.svelte-->
<script>
	import HeaderComponent from '../../../../components/Welcome/WelcomeHeader/WelcomeHeader_Component.svelte';
	import BoxComponent from '../../../../components/Box/Box_Component.svelte';
    import UserIndustryComponent from '../../../../components/Welcome/SignUp/UserIndustry/UserIndustry_Component.svelte';
</script>

<body>
	<div class="frame">
		<HeaderComponent text="Last of all..." />
		<BoxComponent boxClass="signup-box">
            <UserIndustryComponent/>
		</BoxComponent>
	</div>
</body>

<style>
	.frame {
		height: 100vh;
		width: 100vw;
		background-color: #243347;
		background-image: url('/bg10.png');
		background-size: cover;
		background-position: center;

		/* I know flexboxes are dodgy but trust me ;) */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}
</style>
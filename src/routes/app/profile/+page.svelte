<script>
	import UserPostComponent from "../../../components/User/Post/UserPost_Component.svelte";
	import UserExperienceComponent from "../../../components/User/UserExperience/UserExperience_Component.svelte";
</script>

<body>
	<div class="frame">
		<UserPostComponent />
		<UserExperienceComponent />
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
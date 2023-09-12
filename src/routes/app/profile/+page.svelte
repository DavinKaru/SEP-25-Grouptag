<script>
	import MyPostsComponent from '../../../components/User/MyPosts/MyPosts_component.svelte';
	import MyExperienceComponent from '../../../components/User/MyExperience/MyExperience_component.svelte';
	import MyGroupsComponent from '../../../components/User/MyGroups/MyGroups_component.svelte';
</script>

<body>
	<div class="frame">
		<MyPostsComponent/>
		<MyExperienceComponent/>
		<MyGroupsComponent />
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

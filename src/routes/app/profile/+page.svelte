<script>
	import ProfileHeaderComponent from '../../../components/User/ProfileHeader/ProfileHeader_component.svelte';
	import ProfilePictureComponent from '../../../components/User/ProfilePicture/ProfilePicture_component.svelte';
	import MyDetailsComponent from '../../../components/User/MyDetails/MyDetails_Component.svelte';
	import ConnectWithMeComponent from '../../../components/User/ConnectWithMe/ConnectWithMe_Component.svelte';
	import MyPostsComponent from '../../../components/User/MyPosts/MyPosts_component.svelte';
	import MyExperienceComponent from '../../../components/User/MyExperience/MyExperience_component.svelte';
	import MyGroupsComponent from '../../../components/User/MyGroups/MyGroups_component.svelte';
</script>

<body>
	<div class="frame">
		<div id="header">
			<ProfileHeaderComponent />
		</div>
		<div id="content">
			<div id="profilePicture">
				<ProfilePictureComponent />
			</div>
			<div id="details">
				<MyDetailsComponent />
			</div>
		</div>
		<div id="userActivity">
			<ConnectWithMeComponent />
			<MyExperienceComponent />
			<MyGroupsComponent />
			<MyPostsComponent />
		</div>
	</div>
</body>

<style>
	.frame {
		height: 100vh;
		width: 100vh;
		background-color: #243347;
		background-image: url('/bg10.png');
		background-size: cover;
		background-position: center;

		/* I know flexboxes are dodgy but trust me ;) */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
	}

	#header {
		width: 90%;
		margin-left: auto;
		margin-right: auto;
	}

	/* Better to control layout here in then in each individual component (excluding Profile Picture)*/

	/* Tablet + PC Layout */
	@media only screen and (min-width: 600px) {
		#content {
			display: flex;
			flex-wrap: nowrap;
			width: 90%;
			margin-left: auto;
			margin-right: auto;
			gap: 10px;
		}

		#profilePicture {
			width: 50%;
		}

		#details {
			width: 50%;
		}
	}

	/* Phone layout */
	@media only screen and (max-width: 600px) {
		#content {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			justify-content: center;
			gap: 10px;
		}

		#profilePicture {
			width: 100%;
		}

		#details {
			width: 90%;
		}
	}

	#userActivity {
		width: 90%;
		margin-left: auto;
		margin-right: auto;
	}
</style>

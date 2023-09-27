<script>
	import ProfileHeaderComponent from '../../../components/User/ProfileHeader/ProfileHeader_component.svelte';
	import ProfilePictureComponent from '../../../components/User/ProfilePicture/ProfilePicture_component.svelte';
	import ContentSelectorComponent from '../../../components/User/ContentSelector/ContentSelector_Component.svelte';
	import MyDetailsComponent from '../../../components/User/MyDetails/MyDetails_Component.svelte';
	import ConnectWithMeComponent from '../../../components/User/ConnectWithMe/ConnectWithMe_Component.svelte';
	import MyContentListComponent from '../../../components/User/MyContentList/MyContentList_Component.svelte';

	let selected = 'Experience';
	const currentUserId = 'f8fe9f2f-2ddb-4c64-945a-6f686a0d614f'; //Will need to get this from login session in the future
	export let data;

	function handleSubmit() {
		console.log(selected);
	}
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
			<ContentSelectorComponent bind:selected on:submit={handleSubmit} />
			<MyContentListComponent
				content={selected}
				posts={data.Posts}
				user_id={currentUserId}
				users={data.Users}
				groups={data.Groups}
			/>
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

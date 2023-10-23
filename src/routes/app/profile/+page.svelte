<!--//src/routes/app/profile/+page.svelte-->
<script>
	import AppHeaderComponent from '../../../components/App/AppHeader/AppHeader_Component.svelte';
	import ProfilePictureComponent from '../../../components/App/User/ProfilePicture/ProfilePicture_component.svelte';
	import ContentSelectorComponent from '../../../components/App/User/ContentSelector/ContentSelector_Component.svelte';
	import MyDetailsComponent from '../../../components/App/User/MyDetails/MyDetails_Component.svelte';
	import ConnectWithMeComponent from '../../../components/App/User/ConnectWithMe/ConnectWithMe_Component.svelte';
	import MyContentListComponent from '../../../components/App/User/MyContentList/MyContentList_Component.svelte';

	let selected = 'Experience';

	export let data;
	let { user, Users,  Posts, Groups } = data
	$: ({ user, Users,  Posts, Groups } = data)
	function handleSubmit() {
		//console.log(selected);
	}
</script>

<body>
	<div class="frame">
		<AppHeaderComponent title="My Profile" />
		<div id="content">
			<div id="profilePicture">
				<ProfilePictureComponent  user={data.user.users}/>
			</div>
			<div id="details">
				<MyDetailsComponent user={data.user}/>
			</div>
		</div>
		<div id="userActivity">
			<ConnectWithMeComponent />
			<ContentSelectorComponent bind:selected on:submit={handleSubmit} />
			<MyContentListComponent
				content={selected}
				posts={data.Posts}
				users={data.Users}
				groups={data.Groups}
			/>
		</div>
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
		justify-content: flex-start;
	}

	/* Better to control layout here in then in each individual component (excluding Profile Picture)*/

	/* Tablet + PC Layout */
	@media only screen and (min-width: 750px) {
		#content {
			display: flex;
			flex-wrap: nowrap;
			width: 55%;
			margin-top: 10px;
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

		#userActivity {
			width: 55%;
			margin-left: auto;
			margin-right: auto;
		}
	}

	/* Phone layout */
	@media only screen and (max-width: 750px) {

		#content {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 10px;
		}

		#profilePicture {
			width: 100%;
		}

		#details {
			width: 90%;
		}

		#userActivity {
			width: 90%;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>

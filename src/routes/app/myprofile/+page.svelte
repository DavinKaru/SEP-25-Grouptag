<!--//src/routes/app/myprofile/+page.svelte-->
<script>
	// @ts-nocheck

	import Modal from 'svelte-simple-modal';
	import AppHeaderComponent from '../../../components/App/AppHeader/AppHeader_Component.svelte';
	import ProfilePictureComponent from '../../../components/App/User/ProfilePicture/ProfilePicture_component.svelte';
	import ContentSelectorComponent from '../../../components/App/User/ContentSelector/ContentSelector_Component.svelte';
	import MyDetailsComponent from '../../../components/App/User/MyDetails/MyDetails_Component.svelte';
	import ProfileEditorComponent from '../../../components/App/User/ProfileEditor/ProfileEditor_Component.svelte';
	import MyContentListComponent from '../../../components/App/User/MyContentList/MyContentList_Component.svelte';

	let selected = 'Experience';

	export let data;
	function handleSubmit() {
		//console.log(selected);
	}
</script>

<AppHeaderComponent title="My Profile" />
<div id="content">
	<div id="profilePicture">
		<ProfilePictureComponent user={data.user.users} />
	</div>
	<div id="details">
		<MyDetailsComponent user={data.user} />
	</div>
</div>
<div id="userActivity">
	<ProfileEditorComponent bio="{data.user.users.bio}," image_url={data.user.users.image_url} />
	<ContentSelectorComponent bind:selected on:submit={handleSubmit} />
	<MyContentListComponent
		content={selected}
		posts={data.Posts}
		users={data.Users}
		groups={data.Groups}
		experiences={data.user.users['experience ']}
	/>
</div>

<style>
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

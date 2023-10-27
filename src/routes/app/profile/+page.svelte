<!--//src/routes/app/profile/+page.svelte-->
<script>
	import AppHeaderComponent from '../../../components/App/AppHeader/AppHeader_Component.svelte';
	import ProfilePictureComponent from '../../../components/App/User/ProfilePicture/ProfilePicture_component.svelte';
	import ContentSelectorComponent from '../../../components/App/User/ContentSelector/ContentSelector_Component.svelte';
	import MyDetailsComponent from '../../../components/App/User/MyDetails/MyDetails_Component.svelte';
	import ConnectWithMeComponent from '../../../components/App/User/ConnectWithMe/ConnectWithMe_Component.svelte';
	import MyContentListComponent from '../../../components/App/User/MyContentList/MyContentList_Component.svelte';
	import { supabase } from '../../../supabaseClient';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { load } from '../myprofile/+page';
	let selected = 'Experience';
	let userid;

	let loading = true;

	export let data;
	function handleSubmit() {
		//console.log(selected);
	}
	onMount(()=>{
		loading = false
	})

	const getUser = async () => {
		console.log("getUser");
    try {
      loading = true
	  	const { data: user, error: err  } = await supabase.from('user_courses').select("users(*), university_courses (*), universities (*)").eq('user_id', userid).single();
		const { data: Users } = await supabase.rpc('get_mutuals', { search_user_id:  userid});
		const { data: Posts } = await supabase.rpc('get_user_posts', {get_user_post_id: userid, amount: 100, startingat: 0} );
		const { data: Groups } = await supabase.rpc('get_user_groups', {get_user_post_id: userid, amount: 100, startingat: 0});
      if (err) throw err
	  data.user = user
	  data.Users = Users
	  data.Posts = Posts
	  data.Groups = Groups

    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }}
</script>

<body>
	<div class="frame">
		<AppHeaderComponent title="My Profile" />
		{#if !loading}
		<div id="content">
			<div id="profilePicture">
				<ProfilePictureComponent  user={data.user.users}/>
			</div>
			<div id="details">
				<form on:submit|preventDefault={getUser}>
				<label for="USERID">USERID</label>
				<input
					bind:value={userid}
					type="text"
					id="userid"
					name="userid"
					class="input-field"
					placeholder="Enter your userid here"
				/>
				<MyDetailsComponent user={data.user}/>
				<button>Refresh</button>
			</form>
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
		{/if}
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

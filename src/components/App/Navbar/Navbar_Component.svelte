<!-- Navbar Component -->
<script>

	/* Create Menu Component has to live here to ensure context is acquired correctly. */
	import { getContext } from 'svelte';
	const { open} = getContext('simple-modal');
	import CreateMenuComponent from './CreateMenu/CreateMenu_Component.svelte';
	import SignoutComponent from './Signout/Signout_Component.svelte';
	const createMenu = () => open(CreateMenuComponent, { message: "It's a modal!" });
	const signoutMenu = () => open(SignoutComponent, { message: "It's a modal!" });

	let showCreatePost = false;
	function toggleCreatePost() {
		showCreatePost = !showCreatePost; //toggle PostCreate
	}
</script>

<nav class="navbar">
	<a href="/app/groups">
		<!-- Home/Group's page -->
		<img src="/Icons/Navbar Icons/Home.svg" alt="Home Icon" class="navIcon" />
	</a>

 	<a href="/app/requests">
		<img src="/Icons/Navbar Icons/Notification.svg" alt="Notification Icon" class="navIcon" />
	</a>
  
 	<button on:click={createMenu}>
		<img src="/Icons/Navbar Icons/Plus.svg" alt="Plus Icon" class="navIcon" />
	</button>
 
	<a href="/app/myprofile">
		<img src="/Icons/Navbar Icons/Profile.svg" alt="Profile Icon" class="navIcon" />
	</a>

	<!--Needs to be replaced with signout code-->
	<button on:click={signoutMenu}>
		<img src="/Icons/Navbar Icons/Logout.svg" alt="Logout Icon" class="navIcon" />
	</button>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;

		position: fixed;
		width: 70%;
		max-width: 850px;
		height: 4.72vh; /* 4.72% of viewport */

		left: 50%;
		bottom: 2.5%;
		transform: translate(-50%);

		border-radius: 50px;
		padding: 0 5%;

		backdrop-filter: blur(10px); /* bg blur */
		background-color: rgba(0, 0, 0, 0.2); /* Translucent white background */
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
		z-index: 1000;
	}

	.navbar a {
		cursor: pointer;
		border: none;
		background: none;
		padding: 0%;
	}

	.navIcon {
		height: 2.41vh;
		width: 2.41vh;
		vertical-align: middle; /* Aligning the icons with the plus button */
	}

	button {
		background: none;
		border: none;
	}

</style>
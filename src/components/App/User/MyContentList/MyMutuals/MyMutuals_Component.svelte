<script>
    import ProfileIconComponent from "../../ProfileIcon/ProfileIcon_component.svelte";
	import { goto } from "$app/navigation";
	export let user;

	function goToProfile() {
		let userId = user.connection_id ;
		goto('/app/profile?id=' + userId);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="mutual-card" on:click={goToProfile}>
	<!--Two columns. Column 2 is split into 3 rows.-->

	<div id="column1">
		<ProfileIconComponent --width="3rem" postAuthorPicture={user.image_url}/>
	</div> 
    <div id="column2">
        <h1>{user.first_name} {user.last_name}</h1>
        <div id="grid">
            <img src="/profile/course.svg" alt="Course" />
            <p class="courseInfo">{user.course_name}</p>
            <img src="/profile/university.svg" alt="Course" />
            <p class="courseInfo">{user.university_name}</p>
            <img src="/profile/location-flag.svg" alt="Course" />
            <p class="courseInfo">Melbourne, Australia</p>
        </div>
	</div> </div>

<style>
	#mutual-card {
		/* Colors */
		background-color: rgba(255, 255, 255, 0.127);

		/* Dimensions */
		margin-top: 10px;
		height: 7rem;
		min-height: 6rem; /* Force card to render at a minimun of 150 pixels */
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */

		margin-left: auto;
		margin-right: auto;
        padding: 10px;

		/* Flexbox layout */
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 20px;

	}

    #column1 {
        margin-left: 5px;
        margin-top: auto;
        margin-bottom: auto;
    }

	#column2 {
		display: flex;
		flex-direction: column;
		margin-top: auto;
        margin-bottom: auto;
		gap: 2px;
	}

    #grid {
		display: grid;
		grid-template-columns: 0.03fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 6px;
	}

	h1 {
		font-size: 15px;
		color: white;
	}

	.courseInfo {
		font-size: 10px;
	}

    img {
        width: 9px;
        margin-top: auto;
        margin-bottom: auto;
    }

</style>

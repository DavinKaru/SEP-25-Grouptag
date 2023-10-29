<script>
    import ProfileIconComponent from "../User/ProfileIcon/ProfileIcon_component.svelte";
    export let user;
    import { supabase } from "../../../supabaseClient";
    let exist = true;
    let loading = false;

    const handleAccept = async () => {
    try {
      loading = true	  
		const myUserId = (await supabase.auth.getSession()).data.session?.user.id;
	  	const {error} = await supabase.from('connection_process').insert({sender_id: user.sender_id, receiver_id: myUserId})
		if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false;
       exist = false;
    }
	}

    const handleReject = async () => {
    try {
      loading = true	  
	  	const {error} = await supabase.rpc( 'reject_mutual_requests', {get_sender_id: user.sender_id})
		if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
      exist = false;
    }
	}
</script>


<!--
    TODO:
    1.) Load Appropiate User Information from Database
    2.) Add Functionality to Accept and Reject Buttons
        2a.) Accepting a Request:
            - Add Connection to appropiate Database Table
            - Remove Connection Request from appropiate Database Table
            - Delete Component
        2b.) Rejecting a Request
            - Remove Connection Request from appropiate Database Table
            - Delete Component
    3.) Allow the User to access a Requester's Profile by tapping the Request (Excluding the accept/reject buttons obviously)
-->
{#if exist}
<div id="connection-request-card">
    <div id="column1">
        <ProfileIconComponent --width="4rem" postAuthorPicture={user.image_url}/>
    </div>
    <div id="column2">
        <div id="row1">
            <h1 id="sender-name">{user.first_name} {user.last_name}</h1>
            <div id="grid">
                <img src="/profile/course.svg" alt="Course" id="courseNameIcon"/>
                <p class="courseInfo">{user.course_name}</p>
                <img src="/profile/university.svg" alt="Course" />
                <p class="courseInfo">{user.university_name}</p>
                <img src="/profile/location-flag.svg" alt="Course" />
                <p class="courseInfo">Melbourne, Australia</p>
            </div>
        </div>
        <div id="row2">
            <button id="accept" on:click={handleAccept}>
                <p class="user-response">Accept</p>
            </button>
            <button id="reject" on:click={handleReject}>
                <p class="user-response">Reject</p>
            </button>
        </div>

    </div>

</div>
{/if}

<style>

    #connection-request-card {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        padding: 10px;

        background-color: rgba(255, 255, 255, 0.127);
        border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
    }

    #grid {
        margin-top: 10px;
        margin-bottom: 10px;
		display: grid;
		grid-template-columns: 0.05fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 10px;
	}

    #courseNameIcon {
        margin-top: 3px;
    }

    .courseInfo {
		font-size: 12px;
		color: white;
	}

    img {
        width: 15px;
    }

    #column1 {
        margin-right: 15px;
    }

    #sender-name {
        font-size: 15px;
    }

    button {
        background: none;
        border: none;
    }

    .user-response {
        display: inline-block;
		padding: 0.3em 1.2em;
		margin: 0.3em 0.3em 0.3em 0;
		border-radius: 2em;
		box-sizing: border-box;
		text-decoration: none;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		color: #ffffff;
		background-color: #3aa4d1;
		text-align: center;
		transition: all 0.2s;
		bottom: 10px;
		right: 10px;
    }

    .user-response:hover {
        background-color: #4095c6;
    }

</style>
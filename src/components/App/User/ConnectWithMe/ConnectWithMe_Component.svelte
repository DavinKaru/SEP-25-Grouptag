<script>
 	import toast, {Toaster} from 'svelte-french-toast';
	import { supabase } from '../../../../supabaseClient';

	/* TO-DO: Function should:
		1. Check whether the current user is already connected to the target user. If so, fail and send error message, i.e. (toast.error(Error Message))
		2. If not, check whether the current user has already sent a request to the target user. If so, send error message.
		3. Check whether the target user has already sent a request to the current user. If so, accept the request and send success message.
		4. Lastly, if none of the above are true, send a request to the target user and send success message.
	*/

	function showToastMutual() {

		toast.success('Request sent!');
	}

	/* 
		Compared to the above function, this one should be simple. Simply copy the current URL to the User's Device Clipboard. Implementing actual in-app links is
		out of scope (think opening a spotify link that launches the app), so we can leave that functionality aside.
	*/

	function copyLink() {
		toast.success('Link copied to clipboard');
	}

	function changeIcon() {

	}

	/* Some props that may prove useful... up to you if you use them. */
	export let targetID;
	const handleMutualRequest = async () => {
    try {
		const myUserId = (await supabase.auth.getSession()).data.session?.user.id;
	  	const {error} = await supabase.from('connection_requests').insert({sender_id: myUserId, receiver_id: targetID})
		if (error) throw error
		showToastMutual()
	  
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
	}
	}
</script>

<div id="userConnectGrid">
	<button on:click={handleMutualRequest}>
		<img class="connectIcon" src="/profile/Connect.svg" alt="Connect with me" />
	</button>
	<button on:click={copyLink}>
		<img class="connectIcon" src="/profile/Share.svg" alt="Share my Profile" />
	</button>
	<p class="connectOption">Connect</p>
	<p class="connectOption">Share</p>
</div>
<Toaster/>

<style>
	/* This one was a pain. Took some manual fiddling with the margin attributes.
        Chose a grid since I needed something more precise then flexbox .*/

	#userConnectGrid {
		/* Box container */
		background-color: rgba(255, 255, 255, 0.127);
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		margin-top: 10px;

		/* Grid settings */
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}

    /* Img settings */
	.connectIcon {
		margin-top: 15px;
		margin-bottom: -5px;
		width: 30px;
		margin-left: auto;
		margin-right: auto;
	}

    /* Text settings */
	.connectOption {
		font-size: 14px;
		color: white;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: auto;
		margin-right: auto;
	}

	/* Remove that anooying button styling. */
	button {
		background: none;
		border: none;
	}
</style>

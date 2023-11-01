<script>
	import { getContext } from 'svelte';
	import ButtonsComponent from '../../../Welcome/Buttons/Buttons_Component.svelte';
	import { supabase } from '../../../../supabaseClient';
	import { goto } from '$app/navigation';

	const { close } = getContext('simple-modal');

	function closeModal() {
		close();
	}

	function signOut() {
		supabase.auth.signOut();
		goto('/');
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="signOutWindow" on:click={closeModal}>
	<h1>Log Out</h1>
    <p>Are you sure you'd like to Log Out?</p>

	<button on:click={signOut}>
		Log Out
	</button>
	
    <ButtonsComponent
		buttonType="submit"
		text="Cancel"
		buttonClass="login-button"
	/>
</div>

<style>
	h1, p {
		color: white;
	}

	button {
		display: block; /* Takes full width of its parent */

		/* Dimensions */
		height: 60px;
		width: 257px;
		border-radius: 10px;

		/* Colors */
		background-color: #000000;
		color: white; /* Text color */

		/* Interaction */
		cursor: pointer; /* Changes cursor to pointer*/
		margin: 30px auto 0px; /* Centers the button horizontally 30px top, 0px bottom*/
		border: #f4fcff 2px dashed; /* Dashed border to differentiate default button styling */

		/* Text styling */
		font-size: 20px;
		font-weight: bold;
		text-decoration: none; /* Removes any underlines */
		text-align: center;
		line-height: 60px; /* Vertically centers the text within the button */

		background-color: #44c7f7;
		border: none;

		@media screen and (max-height: 700px) {
			height: 7vh;
			line-height: 7vh;
		}
	}
</style>

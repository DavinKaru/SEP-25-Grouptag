<script>
	import { getContext } from 'svelte';
	import ButtonsComponent from '../../../Welcome/Buttons/Buttons_Component.svelte';

	const { close } = getContext('simple-modal');

	function closeModal() {
		close();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="signOutWindow" on:click={closeModal}>
	<h1>Log Out</h1>
    <p>Are you sure you'd like to Log Out?</p>
	<ButtonsComponent
		on:click={closeModal}
		buttonType="submit"
		text="Log Out"
		buttonClass="login-button"
	/>
    <ButtonsComponent
		on:click={closeModal}
		buttonType="submit"
		text="Cancel"
		buttonClass="login-button"
	/>
</div>

<style>
	h1, p {
		color: white;
	}
</style>

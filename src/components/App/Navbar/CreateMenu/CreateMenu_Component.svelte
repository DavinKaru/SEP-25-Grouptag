<script>
	import { getContext } from 'svelte';
	import ButtonsComponent from '../../../Welcome/Buttons/Buttons_Component.svelte';

	const { close } = getContext('simple-modal');

	function closeModal() {
		close();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="editWindow" on:click={closeModal}>
	<h1>Create</h1>
	<ButtonsComponent
		on:click={closeModal}
		buttonType="submit"
		text="Create Post"
		buttonClass="login-button"
		href="/app/create/post"
		isAnchor={true}
	/>
	<ButtonsComponent
		on:click={closeModal}
		buttonType="submit"
		text="Create Group"
		buttonClass="login-button"
		href="/app/create/group"
		isAnchor={true}
	/>
</div>

<style>
	h1 {
		color: white;
	}
</style>

<script>
	import AppHeaderComponent from '../../../components/App/AppHeader/AppHeader_Component.svelte';
	import ConnectionRequestComponent from '../../../components/App/ConnectionRequest/ConnectionRequest_Component.svelte';
	import { onMount } from 'svelte';
	let loading = true;
	export let data;

	onMount(() => {
		loading = false;
	});
</script>

<AppHeaderComponent title="Requests" />
<div id="content">
	{#if !loading}
		{#each data.Users as user}
			<ConnectionRequestComponent {user} />
		{/each}
	{/if}
</div>

<style>
	#content {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 65px;
	}
</style>

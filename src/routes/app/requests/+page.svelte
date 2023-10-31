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
		{#if data.Users.length == 0}
			<p id="zero-req-msg">You currently have no connection requests. Why not make some?</p>
		{:else}
			{#each data.Users as user}
				<ConnectionRequestComponent {user} />
			{/each}
		{/if}
	{/if}
</div>
<div id="bottom"/>

<style>

	#content {
		margin-left: auto;
		margin-right: auto;
	}

	#zero-req-msg {
		text-align: center;
		margin-left: 20px;
		margin-right: 20px;
		font-size: 1rem;
		margin-top: 50%;
		transform: translateY(-50%);
		color: #c9c9c9;
	}

	#bottom {
		bottom: 65px;
	}
</style>

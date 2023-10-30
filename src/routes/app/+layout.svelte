<!--//src/routes/app/+layout.svelte-->

<script>
	// @ts-nocheck

	import { Modal } from 'svelte-simple-modal';
	import Navbar from '../../components/App/Navbar/Navbar_Component.svelte';
</script>

<Modal
	styleWindow={{ backdropFilter: 'blur(20px)', background: 'rgba(0, 0, 0, 0.2)' }}
	styleBg={{ background: 'rgba(0, 0, 0, 0)' }}
>
	<!-- This is where the content will be rendered -->
	<slot />
	<Navbar />
</Modal>

<!--No need to redefine frame as it is already declared in the master layout file.-->
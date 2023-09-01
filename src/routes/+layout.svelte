<!-- Svelte Layout -->

<script>
	import Navbar from '../components/Navbar/Navbar_Component.svelte';
</script>

<Navbar active="home" />

<main>
	<slot />
	<!-- This is where the content will be rendered -->
</main>

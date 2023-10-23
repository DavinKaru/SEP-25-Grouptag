<!-- Svelte Layout -->

<script>
	import Navbar from '../../components/App/Navbar/Navbar_Component.svelte';
</script>

<Navbar />

<main>
	<slot />
	<!-- This is where the content will be rendered -->
</main>
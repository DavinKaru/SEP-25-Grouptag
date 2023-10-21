<!--//src/routes/app/+layout.svelte-->

<script>
	import Navbar from '../../components/Navbar/Navbar_Component.svelte';
</script>

<Navbar />

<main>
	<slot />
	<!-- This is where the content will be rendered -->
</main>

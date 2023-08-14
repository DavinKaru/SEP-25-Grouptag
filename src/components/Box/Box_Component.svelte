<script>
	export let boxClass = '';
	import './style.css';
</script>

<div class={`box ${boxClass}`}>
	<slot />
</div>

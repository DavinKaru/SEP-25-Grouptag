<script>
	import './style.css';
	export let text = 'default text';
	export let buttonClass = '';
	export let href = '';
</script>

<a {href} class={`button ${buttonClass}`}>{text}</a>

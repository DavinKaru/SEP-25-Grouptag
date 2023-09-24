<script>
	export let text = 'default text';
	export let customeClass = 'bubble'; //default to bubble class
	export let customStyle = ''; //default to empty
</script>

<div class={customeClass} style={customStyle}>
	<p>{text}</p>
</div>

<style>
	.bubble {
		background-color: #6e777b;
		border-radius: 5px;
		padding-left: 5px;
		padding-right: 5px;
		width: fit-content;
	}

	.tag {
		align-self: center;
		border-radius: 5px;
		width: fit-content;
		padding: 0.5% 4%;
		font-size: 0.86vh;
		text-shadow: #0000008a 0px 0px 5px;
	}

	p {
		font-size: 10px;
	}
</style>

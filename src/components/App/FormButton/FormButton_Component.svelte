<script>
    export let text = "Default Text";
</script>

<a href="default" id="button">{text}</a>

<style>
    #button {
		padding: 0.3em 1.2em;
		margin: 0.3em 0.3em 0.3em 0;
		border-radius: 2em;
		box-sizing: border-box;
		text-decoration: none;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		color: #ffffff;
		background-color: #3aa4d1;
		text-align: center;
		transition: all 0.2s;
		bottom: 10px;
		right: 10px;
	}

	#button:hover {
		background-color: #4095c6;
	}
</style>

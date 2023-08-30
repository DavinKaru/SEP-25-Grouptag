<script>
	export let text = 'default text';
	export let buttonClass = '';
	export let href = '';
</script>

<a {href} class={`button ${buttonClass}`}>{text}</a>

<style>
	.button {
		display: block;
		margin: 15px auto;
		height: 60px;
		width: 257px;
		border-radius: 10px;
		font-size: 20px;
		font-weight: bold;
		background-color: #000000;
		color: white;
		border: none;
		cursor: pointer;
		margin-top: 30px;
		margin-bottom: 0px;
		border: #f4fcff 2px dashed;
		text-decoration: none;
		text-align: center;
		line-height: 60px;
	}

	.button:hover {
		text-decoration: none;
	}

	.login-button {
		background-color: #44c7f7;
		border: none;
	}

	.signup-button {
		background-color: #caa2f2;
		border: none;
	}

	@media screen and (max-height: 667px) {
		.box {
			height: calc(100vh - 250px);
		}
	}
</style>

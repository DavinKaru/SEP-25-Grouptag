<script>
	export let boxClass = '';
	export let boxId = '';
</script>

<div class={`box ${boxClass} boxId ${boxId}`}>
	<slot />
</div>

<style>
	.box {
		box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.3);
		-webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.3);
		-moz-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.3);

		border-radius: 10px 10px 0 0;
		width: 100%;
		height: 419px;
		background-color: #11172d;
		text-align: center;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-family: 'Poppins';
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 300px;

		position: static;
	}

	.login-box {
		box-shadow: 0px 0px 15px 0px rgba(68, 199, 247, 0.3);
		-webkit-box-shadow: 0px 0px 15px 0px rgba(68, 199, 247, 0.3);
		-moz-box-shadow: 0px 0px 15px 0px rgba(68, 199, 247, 0.3);
		width: 100%;
		border-radius: 10px 10px 0 0;
	}

	.signup-box {
		box-shadow: 0px 0px 15px 0px rgba(202, 162, 242, 0.35);
		-webkit-box-shadow: 0px 0px 15px 0px rgba(202, 162, 242, 0.35);
		-moz-box-shadow: 0px 0px 15px 0px rgba(202, 162, 242, 0.35);
		width: 100%;
		height: 100%;
		border-radius: 10px 10px 0 0;
	}

</style>

<script>
	import { navigate, useNavigate } from 'svelte-navigator';
	export let title = 'App';

</script>

<div id="header-background">
	<div id="header-content">
		<div id="header-left">
			<button id="back-button" on:click={() => navigate(-1)} aria-label="Go back">
				<img src="/Icons/Header/back-icon.svg" alt="Back Icon" id="backIcon" />
			</button>
			<h1 id="text">{title}</h1>
		</div>
		<div id="header-right">
			<img src="/grouptag-g-logo.svg" alt="GroupTag Logo" id="logo" />
		</div>
	</div>
</div>

<style>
	#header-background {
		background-color: rgb(23, 26, 59);
		box-shadow: 0 1px rgb(0 0 0 / 0.2);

		width: 100%;

		position: sticky;
		top: 0px;

		padding: 2px;

		/* Ensures header is always rendered above other components */
		z-index: 10;
	}

	#header-content {
		display: flex;
		gap: 20px;
		margin-left: 15px;
		margin-right: 15px;
	}

	#header-left {
		display: flex;
		gap: 20px;
	}

	#header-right {
		display: flex;
		margin-left: auto;
	}

	#back-button {
		/* Remove default button styling */
		background: none;
		border: none;
		margin-top: 6%;
		margin-bottom: auto;
		margin-right: 10px;
    }

	/* Tablet + PC Layout */
	@media only screen and (min-width: 600px) {
		#header-content {
			margin-left: auto;
			margin-right: auto;
			width: 55%;
		}
	}
</style>

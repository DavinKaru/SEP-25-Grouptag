<script>
	import TagIconComponent from '../../../TagIcons/TagIcon_Component.svelte';
</script>

<div id="group-card">
	<!--Two rows..-->

	<div id="row1">
		<img src="/razorbacks-logo.svg" alt="Company Logo" />
	</div>

	<div id="row2">
		<h1>Swinburne Razorbacks</h1>
		<p>Representing Swinburne on the field since 1983.</p>
		<div id="tag-icons">
			<TagIconComponent text="Swinburne" />
			<TagIconComponent text="Mascot" />
			<TagIconComponent text="Students" />
		</div>
	</div>
</div>

<style>
	#group-card {
		/* Colors */
		background-color: rgba(255, 255, 255, 0.127);

		/* Dimensions */
		margin-top: 10px;
		width: 8rem;
		width: 41.5vw;
		height: fit-content;
		border-radius: 10px; /* Rounded corners on top left and right */
		margin-left: 10px;
		margin-right: 10px;

		/* Flexbox layout */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}

	#row2 {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: -10px;
		margin-right: 5px;
		gap: 2px;
		padding: 10px;
	}

	#tag-icons {
		margin-top: 3px;
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	h1 {
		font-size: 12px;
		color: white;
	}

	p {
		font-size: 9px;
	}

	img {
		width: 100%;
		height: 100%;
	}
</style>

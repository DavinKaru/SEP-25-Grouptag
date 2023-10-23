<script>
	import TagIconComponent from "../../../TagIcons/TagIcon_Component.svelte";
</script>

<div id="group-card">
	<!--Two columns. Column 2 is split into 3 rows.-->

	<div id="column1">
		<img src="/razorbacks-logo.svg" alt="Company Logo" />
	</div>

	<div id="column2">
		<h1>Swinburne Razorbacks</h1>
		<p>The official group of the Swinburne Razorbacks! What do we do? Who knows!</p>
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
		height: 6rem;
		min-height: 6rem; /* Force card to render at a minimun of 150 pixels */
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */

		margin-left: auto;
		margin-right: auto;

		/* Flexbox layout */
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 20px;

	}

	#column2 {
		display: flex;
		flex-direction: column;
		margin-top: 10px;
		margin-right: 5px;
		gap: 2px;
	}

	#tag-icons {
		margin-top: 3px;
		display: flex;
		gap: 3px;
	}

	h1 {
		font-size: 15px;
		color: white;
	}

	p {
		font-size: 9px;
	}

	img {
		width: 6rem;
	}
</style>

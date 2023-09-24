<script>
	import GroupsHeaderCardComponent from "../../../components/Groups/GroupsHeaderCard_Component.svelte";
	import GroupCardContainerComponent from "../../../components/Groups/GroupCardContainer_Component/GroupCardContainer_Component.svelte";
	export let data;
</script>

<body>
	<div class="frame">
		<GroupCardContainerComponent />
	</div>
</body>

<style>
	.frame {
		height: 100vh;
		width: 100vh;
		background-color: #243347;
		background-image: url('/bg10.png');
		background-size: cover;
		background-position: center;

		/* I know flexboxes are dodgy but trust me ;) */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
	}
</style>
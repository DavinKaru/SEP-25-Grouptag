<script>
	import GroupHeaderComponent from '../../../components/Group/GroupHeader/GroupHeader_Component.svelte';
	import FeatuedGroupComponent from '../../../components/Group/FeaturedGroup/FeaturedGroup_Component.svelte';
	import GroupsSelectorComponent from '../../../components/Group/GroupSelector/GroupSelector_Component.svelte';
	import GroupCardContainerComponent from '../../../components/Group/GroupCardContainer/GroupCardContainer_Component.svelte';
	export let data;
</script>

<body>
	<div class="frame">
		<GroupHeaderComponent />
		<GroupsSelectorComponent />
		<GroupCardContainerComponent />
	</div>
</body>

<style>
	.frame {
		height: 100vh;
		width: 100vw;
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

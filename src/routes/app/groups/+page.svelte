<script>
	import HeaderComponent from '../../../components/AppHeader/AppHeader_Component.svelte';
	import FeaturedGroupComponent from '../../../components/Group/FeaturedGroup/FeaturedGroup_Component.svelte';
	import GroupsSelectorComponent from '../../../components/Group/GroupSelector/GroupSelector_Component.svelte';
	import GroupCardContainerComponent from '../../../components/Group/GroupCardContainer/GroupCardContainer_Component.svelte';
	export let data;
</script>

<body>
	<div class="frame">
		<HeaderComponent title="Groups" />
		<div id="content">
			<FeaturedGroupComponent {data} />
			<GroupsSelectorComponent />
			<GroupCardContainerComponent groups={data.Groups} />
		</div>
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

	#content {
		width: 90%;
		margin-left: auto;
		margin-right: auto;
	}
</style>

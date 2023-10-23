<!--//src/routes/app/groups/+page.svelte-->

<script>
	import HeaderComponent from '../../../components/App/AppHeader/AppHeader_Component.svelte';
	import FeaturedGroupComponent from '../../../components/App/Groups/FeaturedGroup/FeaturedGroup_Component.svelte';
	import GroupsSelectorComponent from '../../../components/App/Groups/GroupSelector/GroupSelector_Component.svelte';
	import GroupCardContainerComponent from '../../../components/App/Groups/GroupCardContainer/GroupCardContainer_Component.svelte';
	export let data;
	let allGroups = true;
	let displayGroups = data.Groups
	$: if(allGroups){displayGroups = data.Groups}else{displayGroups = data.MyGroups} ;

</script>

<body>
	<div class="frame">
		<HeaderComponent title="Groups" />
		<div id="content">
			<FeaturedGroupComponent {data} />
			<GroupsSelectorComponent bind:allGroups={allGroups}/>
			<GroupCardContainerComponent groups={displayGroups}/>
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
		z-index: 1;
	}
</style>

<!-- Groups page -->
<script>
	import GroupsHeaderCard from '../../../components/Groups/GroupsHeaderCard_Component.svelte';
	export let data; // Receive the data from your +page.server.js
</script>

<body>
	<GroupsHeaderCard {data} />
</body>

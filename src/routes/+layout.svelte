<!--//src/routes/+layout.svelte-->
<script>
import { invalidate } from '$app/navigation';
import { onMount } from 'svelte';
export let data;
let { supabase, session } = data;
$: ({ supabase, session } = data);	
// onMount(() => {
// 	const {
// 		data: { subscription }
// 	} = supabase.auth.onAuthStateChange((event, _session) => {
// 		if (_session?.expires_at !== session?.expires_at) {
// 			console.log("======= invalidate auth =======")
// 			invalidate('supabase:auth');
// 		}
// 	});
// 	return () => subscription.unsubscribe();
// });
</script>
<div id="frame">
    <slot />
</div>


<style>
    #frame {
        height: 100vh;
		width: 100vw;

		/* I know flexboxes are dodgy but trust me ;) */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
    }
</style>
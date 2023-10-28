//src/routes/app/profile/+page.js
import { supabase } from '../supabaseClient';
import { goto } from '$app/navigation';
export async function load() {
    const myUserId = (await supabase.auth.getSession()).data.session?.user.id;
    if(myUserId != null){
        goto('/app/myprofile')
    }
}




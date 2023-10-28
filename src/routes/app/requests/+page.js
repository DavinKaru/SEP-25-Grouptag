//src/routes/app/profile/+page.js
import { supabase } from '../../../supabaseClient.js';

export async function load() {
    const { data: Users } = await supabase.rpc('get_mutual_requests');
    
    return {
        Users: Users ?? [],
    };
}




// @ts-nocheck
//src/routes/app/myprofile/addExperience/+page.js

import { supabase } from '../../../../supabaseClient.js';

export async function load() {

    let user_id = 'f8fe9f2f-2ddb-4c64-945a-6f686a0d614f';
    const myUserId = (await supabase.auth.getSession()).data.session?.user.id
     if (myUserId != null){
         user_id = myUserId;
     }

    const { data: user } = await supabase.from('user_courses').select("users(*), university_courses (*), universities (*)").eq('user_id', user_id).single();
    const { data: Users } = await supabase.rpc('get_mutuals', { search_user_id: user_id });

    return {
        user: user ?? [],
        Users: Users ?? [],
    };
}
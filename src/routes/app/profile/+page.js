//src/routes/app/profile/+page.js
import { supabase } from '../../../supabaseClient.js';
import { page } from '$app/stores';
export async function load({url}) {
    //const { supabase, session } = await parent()
    let urlString = url.href;
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    let params = queryString.get('id')
    let user_id = 'f8fe9f2f-2ddb-4c64-945a-6f686a0d614f';
    if(params != ''){
        user_id = params;
    }    
    
    const {data: mySession} = await supabase.auth.getSession()
    console.log("My UserID is ", mySession.session?.user.id)



    const { data: user  } = await supabase.from('user_courses').select("users(*), university_courses (*), universities (*)").eq('user_id', user_id).single();

    const { data: Users } = await supabase.rpc('get_mutuals', { search_user_id:  user_id});
    const { data: Posts } = await supabase.rpc('get_user_posts', {get_user_post_id: user_id, amount: 100, startingat: 0} );
    const { data: Groups } = await supabase.rpc('get_user_groups', {get_user_post_id: user_id, amount: 100, startingat: 0});
    
    return {
        user: user ?? [],
        Users: Users ?? [],
        Posts: Posts ?? [],
        Groups: Groups ?? []
    };
}




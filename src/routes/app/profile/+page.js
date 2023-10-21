//import { supabase } from '$lib/supabaseClient';

export async function load({parent}) {
    const { supabase, session } = await parent()
    const user_id = 'f8fe9f2f-2ddb-4c64-945a-6f686a0d614f'
    //const my_user = await locals.getSession()
    //console.log(my_user);
    //let user_id= my_user?.user.id;
    
    //const target_user_id = url.searchParams.get('id')??'';    
    //if(target_user_id != ''){
    //    user_id = target_user_id
    //}
    //const { data: user  } = await supabase.from('users').select().eq('user_id', user_id).single()
    const { data: user  } = await supabase.from('user_courses').select("users(*), university_courses (*), universities (*)").eq('user_id', user_id).single();

    // short comings connections table requird twos rows for each connection (each user has to be on each side) 
    const { data: Users } = await supabase.rpc('get_mutuals', { search_user_id:  user_id});
    const { data: Posts } = await supabase.rpc('get_user_posts', {get_user_post_id: user_id, amount: 100, startingat: 0} );
    const { data: Groups } = await supabase.rpc('get_user_groups', {get_user_post_id: user_id, amount: 100, startingat: 0});
    //const { data: Posts } = await supabase.from('posts').select();
    //console.log(Posts);
    
    //console.log("My User from DB:", user);
    //console.log("Users from DB:", Users);
    //console.log("Posts from DB:", Posts);
    //console.log("Groups from DB:", Groups);


    return {
        user: user ?? [],
        Users: Users ?? [],
        Posts: Posts ?? [],
        Groups: Groups ?? []
    };
}


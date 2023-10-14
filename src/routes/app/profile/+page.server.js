import { supabase } from '$lib/supabaseClient';

export async function load() {
    const user_id = 'f8fe9f2f-2ddb-4c64-945a-6f686a0d614f'
    //const { data: user  } = await supabase.from('users').select().eq('user_id', user_id).single()
    const { data: user  } = await supabase.from('user_courses').select("users(*), university_courses (*), universities (*)").eq('user_id', user_id).single();

    // short comings connections table requird twos rows for each connection (each user has to be on each side) 
    const { data: Users } = await supabase.rpc('get_mutuals', { search_user_id:  user_id});
    const { data: Posts } = await supabase.from('posts').select('*, groups (name, logo_url), users (first_name, last_name, image_url)').eq('user_id', user_id);
    const { data: Groups } = await supabase.from('group_users').select('groups (*)').eq('user_id', user_id)
    //console.log("My User from DB:", user);
    //console.log("Users from DB:", Users);
    //console.log("Posts from DB:", Posts);
    //console.log("Groups from DB:", Groups);

    //console.log("UniCourses from DB:", UserCourse);
    return {
        user: user ?? [],
        Users: Users ?? [],
        Posts: Posts ?? [],
        Groups: Groups ?? []
    };
}


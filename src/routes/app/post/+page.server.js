import { supabase } from '$lib/supabaseClient';

export async function load() {
    const { data: Users } = await supabase.from('users').select();
    const { data: Posts } = await supabase.from('posts').select();
    const { data: Groups } = await supabase.from('groups').select();
    // console.log("Users from DB:", Users);
    // console.log("Posts from DB:", Posts);
    // console.log("Groups from DB:", Groups);

    return {

        Users: Users ?? [],
        Posts: Posts ?? [],
        Groups: Groups ?? []
    };
}


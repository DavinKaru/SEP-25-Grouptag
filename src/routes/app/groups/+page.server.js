import { supabase } from '$lib/supabaseClient';

export async function load() {
    const { data: Groups} = await supabase.from('groups').select();
    //const { data: GroupUsers} = await supabase.from('group_users').select();
    //const { data: Users } = await supabase.from('users').select();
    const { data: Users } = await supabase.rpc('get_groups_page').select()
    //console.log("Users from DB:", Users);
    //console.log("GroupUsers from DB:", GroupUsers);
    //console.log("Groups from DB:", Groups);

    return {

        Users: Users ?? [],
        //GroupUsers: GroupUsers ?? [],
        Groups: Groups ?? []
    };
}


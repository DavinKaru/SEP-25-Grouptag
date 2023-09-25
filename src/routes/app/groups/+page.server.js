import { supabase } from '$lib/supabaseClient';

export async function load() {
    const { data: Groups } = await supabase.from('groups').select();
    const { data: GroupUsers } = await supabase.from('group_users').select();
    const { data: Users } = await supabase.from('users').select();

    return {
        Groups: Groups ?? [],
        GroupUsers: GroupUsers ?? [],
        Users: Users ?? []

    };
}


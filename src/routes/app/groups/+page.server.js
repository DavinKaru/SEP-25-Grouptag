import { supabase } from '$lib/supabaseClient';

export async function load() {
    const { data: Groups } = await supabase.from('Groups').select();
    const { data: GroupUsers } = await supabase.from('GroupUsers').select();
    const { data: Users } = await supabase.from('Users').select();
    return {
        Groups: Groups ?? [],
        GroupUsers: GroupUsers ?? [],
        Users: Users ?? []
    };
}

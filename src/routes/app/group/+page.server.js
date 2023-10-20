import { supabase } from '$lib/supabaseClient';

export async function load() {
    const { data: Group } = await supabase
        .from('groups')
        .select()
        .filter('group_id', 'in', '("09618bde-94dc-4ace-8c27-7bcd9948473e")');


    /* Quick little query to perform a JOIN Operation on the Group_Users and Users Tables.
       Locates users who are registered to the current group and then retrieves their details
       from the main table. */
    const { data: GroupUsers } = await supabase
        .from('group_users')
        .select(`
            users(*)
        `)
        .filter('group_id', 'in', '("09618bde-94dc-4ace-8c27-7bcd9948473e")');

    /* Get Group Posts */
    const { data: GroupPosts } = await supabase
        .from('posts')
        .select()
        .filter('group_id', 'in', '("09618bde-94dc-4ace-8c27-7bcd9948473e")');

    return {
        Group: Group ?? [],
        GroupUsers: GroupUsers ?? [],
        GroupPosts : GroupPosts ?? []
    };
}


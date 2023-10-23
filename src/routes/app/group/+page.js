//src/routes/app/post/+page.js

export async function load({url, parent}) {
    const { supabase, session } = await parent()
    const group_id = url.searchParams.get('id')??'';
    const { data: Group } = await supabase.from('groups').select().eq('group_id', group_id);
    const { data: GroupFeaturedImages } = await supabase.rpc('get_featured_groups_images', {get_group_id: group_id})
    const { data: GroupUsers } = await supabase.from('group_users').select().eq('group_id', group_id);
    const { data: Post } = await supabase.rpc('get_group_posts', {get_group_id: group_id, amount: 100, startingat: 0});


    return {
        Group: Group[0] ?? [],
        GroupFeaturedImages: GroupFeaturedImages ?? [],
        GroupUsers: GroupUsers ?? [],
        GroupPosts : Post ?? []
    };
}


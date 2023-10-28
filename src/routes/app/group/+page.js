//src/routes/app/post/+page.js
import { supabase } from '../../../supabaseClient.js';
import { goto } from '$app/navigation';

export async function load({url}) {
    let urlString = url.href;
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    let params = queryString.get('id')
    let group_id = 'b326daaa-d94e-466c-b499-041d722257ed';
    if(params != null){
        group_id = params;
    }

    const { data: Group } = await supabase.from('groups').select().eq('group_id', group_id);
    const { data: GroupFeaturedImages } = await supabase.rpc('get_featured_groups_images', {get_group_id: group_id})
    const { data: GroupUsers } = await supabase.from('group_users').select().eq('group_id', group_id);
    const { data: Post } = await supabase.rpc('get_group_posts', {get_group_id: group_id, amount: 100, startingat: 0});
    
    return {
        Group: Group ?? [],
        GroupFeaturedImages: GroupFeaturedImages ?? [],
        GroupUsers: GroupUsers ?? [],
        GroupPosts : Post ?? []
    };
}

